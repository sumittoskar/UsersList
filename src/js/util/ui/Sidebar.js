import React from "react";
import styles from "../../../css/sidebar.css";

const Sidebar = props => {
  return (
    <div id="mySidenav" className={styles.sidenav}>
        <span className={styles.closebtn} onClick={() => props.closeSilder()}>&times;</span>
        <div className={styles.lableName}>Name :-
            <div className={styles.name}>{props.userDetails.name}</div>
        </div>
        <div className={styles.lableAddress}>Address :-
            <div className={styles.address}>
            Suite :- {props.userDetails.address.suite}<br/>
            Street :- {props.userDetails.address.street}<br/>
            City :- {props.userDetails.address.city}<br/>
            Zip Code :- {props.userDetails.address.zipcode}</div>
        </div>
  </div>
  );
};
export default Sidebar;
