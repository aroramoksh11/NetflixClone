import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`nav ${show ? "nav__black" : ""}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png"
          alt="Logo"
          onClick={() => navigate("/")}
        />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Avatar"
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
};

export default Nav;
