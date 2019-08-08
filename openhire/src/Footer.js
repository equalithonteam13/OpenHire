import React from "react";
import { Menu } from "semantic-ui-react";

const Footer = () => {
  return (
    <Menu className="footer">
      <div className="dev">
        <a href="https://github.com/MistuhMok">Alexander Mok</a>
      </div>
      <div className="dev">
        <a href="https://github.com/xMNG">Michael Ng</a>
      </div>
      <div className="dev">
        {" "}
        <a href="https://github.com/TristanWatanabe"> Tristan Watanabe</a>
      </div>
      <div className="dev">
        <a href="https://github.com/sofibee">Sofia Benitez</a>
      </div>
      <div className="dev">
        <a href="https://github.com/tluo9713">Thomas Luo</a>
      </div>
    </Menu>
  );
};

export default Footer;
