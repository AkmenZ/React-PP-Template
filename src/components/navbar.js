import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { useTranslation } from "react-i18next";
import logo from "../assets/moboTestLogo.png";

function MoboNav() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("moboLang", lang);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="moboNav">
      <Container>
        <Navbar.Brand href="#home" id="moboBrand">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "30px", marginRight: "10px" }}
          />
          mobo
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {t("language")}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeLanguage("lv")}>
                Latviešu
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("lt")}>
                Lietuvių
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("en")}>
                English
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("ru")}>
                Русский
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MoboNav;
