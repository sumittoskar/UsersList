import React from "react";
import styles from "../../../css/common.css";

const ErrorNotFound = props => {
  return <p className={styles.errorMessage}>It looks like nothing was not found at this location.<br/>
  Maybe try one of the links in the menu or press back to go to the previous page.</p>;
};
export default ErrorNotFound;
