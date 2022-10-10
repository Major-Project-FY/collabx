import React from "react";

import styles from "./Wrapper.module.css";

const Wrapper = ({ children, colorScheme }) => {
  return <div className={`${styles.container} ${styles[colorScheme]}`}>{children}</div>;
};

export default Wrapper;
