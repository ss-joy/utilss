import React from "react";
import styles from "./Loading.module.css";
const Loading = (): JSX.Element => {
  return <div className={styles["lds-hourglass"]}></div>;
};

export default Loading;
