import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../css/navbar.css";
const Navigation = props => {
    return (
        <nav className={styles.navbar}>
            <NavLink activeClassName={styles.active} exact to="/">Home</NavLink>
            <NavLink activeClassName={styles.active} to="/listing">Users Listing</NavLink>
        </nav>
    );
  }

export default Navigation;
