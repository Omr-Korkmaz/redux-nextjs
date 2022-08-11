// import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import React from "react";
import Button from "@mui/material/Button";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Navbar = () => {
  const SwitchButton = () => {
    const [success, setSuccess] = React.useState(false);

    const handleChange = (event) => {
      setSuccess(event.target.checked);
    };

    return (
      <React.Fragment>
        <FormControlLabel
          control={
            <Switch
              checked={success}
              onChange={handleChange}
              color="primary"
              value="dynamic-class-name"
            />
          }
          label={<DarkModeOutlinedIcon />}
        />
      </React.Fragment>
    );
  };

  return (
    <section className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__wrapper__items__item">
          <MenuOutlinedIcon style={{ fontSize: "2rem" }} />
        </div>

        <div className="navbar__wrapper__search">
          <SearchOutlinedIcon style={{ cursor: "pointer" }} />
          <input type="text" placeholder="Search..." />
          <Button variant="contained" href="#contained-buttons">
            Search
          </Button>
        </div>

        <div className="navbar__wrapper__items">
          <div className="navbar__wrapper__items__item">
            <LanguageOutlinedIcon className="item__icon" />
            Swedish
          </div>
          <div className="navbar__wrapper__items__item">
            <SwitchButton className="item__icon" />
          </div>

          <div className="navbar__wrapper__items__item">
            <NotificationsNoneOutlinedIcon className="item__icon" />
            <div className="item__icon__counter">1</div>
          </div>
          <div className="navbar__wrapper__items__item">
            <ChatBubbleOutlineOutlinedIcon className="item__icon" />
            <div className="item__icon__counter">2</div>
          </div>

          <div className="navbar__wrapper__items__item">
            <img
              src="https://images.pexels.com/photos/460635/pexels-photo-460635.jpeg"
              alt=""
              className="item__avatar"
            />
            <h4>Omer K.</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
