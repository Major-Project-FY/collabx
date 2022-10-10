import Link from "next/link";
import React, { memo } from "react";

import styles from "./Button.module.css";

const Button = ({ children, href, width, responsive }) => {
  return (
    <>
      {href ? (
        <Link href={href}>
          <button
            style={{
              width: width ? `${width}vw` : responsive ? "100%" : "auto",
            }}
            className={styles.button}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          style={{ width: width ? `${width}vw` : responsive ? "100%" : "auto" }}
          className={styles.button}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default memo(Button);
