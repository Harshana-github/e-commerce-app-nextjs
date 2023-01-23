import React from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={classes.header}>
        <h2>PROSHOP</h2>
        <ul className={classes.ul}>
          <div className={classes.iconcart}>
            <div className={classes.cartline1}></div>
            <div className={classes.cartline2}></div>
            <div className={classes.cartline3}></div>
            <div className={classes.cartwheel}></div>
          </div>
          <li>CART</li>
          <div className={classes.avatar}>
            <div className={classes.usericon}>
              <span></span>
            </div>
          </div>
          <li>SIGN IN</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
