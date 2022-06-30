const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const models = require("../models");

class UserController {
  static register = async (req, res) => {
    const { firstname, lastname, office, email, password, role } = req.body;

    const [user] = await models.user.findByMail(email);

    if (user.length) {
      res.status(409).send({
        error: "Cet email existe déjà",
      });
    }

    const validationErrors = Joi.object({
      firstname: Joi.string().max(100).required(),
      lastname: Joi.string().max(100).required(),
      office: Joi.string().max(50).required(),
      email: Joi.string().email().max(150).required(),
      password: Joi.string().max(100).required(),
    }).validate({ firstname, lastname, office, email, password }).error;

    if (validationErrors) {
      res.status(422).send(validationErrors);
      return;
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      models.user
        .insert({ firstname, lastname, office, email, hash, role })
        .then(([result]) => {
          res.status(201).json({
            id: result.insertId,
            firstname,
            lastname,
            office,
            email,
            role,
          });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send({
            error: err.message,
          });
        });
    } catch (err) {
      res.status(500).send({
        error: `Erreur lors du chiffrement du mot de passe : ${err.message}`,
      });
    }
  };

  static login = (req, res) => {
    const { email, password } = req.body;

    const validationErrors = Joi.object({
      email: Joi.string().email().max(150).required(),
      password: Joi.string().max(255).required(),
    }).validate({ email, password }).error;

    if (validationErrors) {
      res.status(422).send(validationErrors);
      return;
    }

    models.user
      .findByMail(email)
      .then(async ([rows]) => {
        if (rows[0] == null) {
          res.status(403).send({ error: "incorrect email or password" });
        } else {
          const { id, password: hash } = rows[0];
          try {
            if (await bcrypt.compare(password, hash)) {
              const token = await jwt.sign(
                { id, email },
                process.env.JWT_AUTH_SECRET,
                { expiresIn: "1h" }
              );

              res
                .cookie("access_token", token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
                })
                .status(200)
                .send({ id, email });
            } else {
              res.status(403).send("Invalid email or password");
            }
          } catch (err) {
            res.status(500).send(`Erreur Interne avec bcrypt ${err}`);
          }
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          error: err.message,
        });
      });
  };

  static browse = (req, res) => {
    models.user
      .findAll()
      .then(([rows]) => {
        res.status(200).send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          error: err.message,
        });
      });
  };

  static logout = (req, res) => {
    res.clearCookie("access_token");
    res.sendStatus(204);
  };

  static edit = (req, res) => {
    const user = req.body;

    user.id = parseInt(req.params.id, 10);

    models.user
      .update(user)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.user
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}
module.exports = UserController;
