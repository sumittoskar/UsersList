import React from "react";
import styles from "../../css/common.css";

const Home = props => {
    return (
      <div className={styles.welcomeContainer}>
        <p className={styles.welcomeMessage}>
          Hey there, thanks for signinup with us.<br/>
          We're super exited to have you on board!
        </p>
      </div>
    );
}

export default Home;
