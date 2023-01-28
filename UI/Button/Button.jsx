import Link from "next/link";
import React, { memo } from "react";
import styles from "./Button.module.css";

const Button = ({ children, href, width, responsive, lightBg, classNames, ...rest }) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <button
            {...rest}
            style={{
              width: width ? `${width}vw` : responsive ? "100%" : "auto",
           }}
            className={`${styles.button} ${lightBg ? styles.light : ""} ${classNames}`}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          {...rest}
          style={{ width: width ? `${width}vw` : responsive ? "100%" : "auto" }}
          className={`${styles.button} ${lightBg ? styles.light : ""} ${classNames}`}
          >
          {children}
        </button>
      )}
    </>
  );
};

export default memo(Button);

