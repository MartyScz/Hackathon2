const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  findByMail(email) {
    return this.connection.query(
      `select * from ${UserManager.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, email, role from ${UserManager.table}`
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (firstname, lastname, office, email, password, role) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.office,
        user.email,
        user.password,
        user.role,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set firstname = ?, lastname = ?, office = ?, email = ?, password = ?, role = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.office,
        user.email,
        user.password,
        user.role,
      ]
    );
  }
}

module.exports = UserManager;
