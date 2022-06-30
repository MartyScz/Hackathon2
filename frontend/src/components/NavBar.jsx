import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { IoRocketSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import swal from "sweetalert";
import fusee from "../assets/fusee.png";
// import LoginContext from "../contexts/LoginContext";
import "./NavBar.css";

export default function NavBar() {
  const [menuCollapse, setMenuCollapse] = useState(true);
  const navigate = useNavigate();
  // const { setIsConnected } = useContext(LoginContext);
  /* ne pas oublier d'importer useContext */
  const width = menuCollapse ? "80px" : "230px";

  const handleSubmit = () => {
    // setIsConnected(false);
    swal("Good bye!", "Disconnected successfully", "success").then(() =>
      navigate("/")
    );
  };

  const menuIconClick = () =>
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);

  return (
    <div id="header" style={{ width, zIndex: "1000" }}>
      <ProSidebar>
        <SidebarHeader>
          <div className="logotext">
            {menuCollapse ? (
              <img className="Logo-collapse" src={fusee} alt="Logo" />
            ) : (
              <img className="Logo" src={fusee} alt="Logo" />
            )}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<FiSearch className="svg-icons" />}>
              <Link to="/home" />
              Find a project
            </MenuItem>

            <MenuItem icon={<IoRocketSharp className="svg-icons" />}>
              <Link to="/addproject" />
              Launch a project
            </MenuItem>
            <MenuItem icon={<CgProfile className="svg-icons" />}>
              <Link to="/profile" />
              Profile
            </MenuItem>
            <button type="button" className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <FaAngleRight className="arrow" />
              ) : (
                <FaAngleLeft className="arrow" />
              )}
            </button>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem
              onClick={handleSubmit}
              icon={<FiLogOut className="svg-icons" />}
            >
              <Link to="/logout" />
              Logout
            </MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}
