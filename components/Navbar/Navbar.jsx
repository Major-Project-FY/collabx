import React, { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import Image from "next/image";
import { Image as BImage } from "react-bootstrap";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import Button from "../../UI/Button/Button";

import styles from "./Navbar.module.css";

const DUMMYIMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg";

const Menu = () => {
  const user = useContext(UserContext);
  const loggedInMenu = (
    <>
      <p>
        <Link href="/home">Home</Link>
      </p>
      <p>
        <a href="#connections">Connections</a>
      </p>
      <p>
        <a href="#messaging">Messaging</a>
      </p>
    </>
  );

  const landingMenu = (
    <>
      <p>
        <a href="#whatcollabx">What is collabx?</a>
      </p>
      <p>
        <a href="#pricing">Pricing</a>
      </p>
      <p>
        <a href="#about">About</a>
      </p>
      <p>
        <a href="#contact">Contact</a>
      </p>
    </>
  );

  return <>{user?.isLoggedIn ? loggedInMenu : landingMenu}</>;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const user = useContext(UserContext);
  return (
    <div className={styles["collabx__navbar"]}>
      <div className={styles["collabx__navbar-links"]}>
        <div className={styles["collabx__navbar-links_logo"]}>
          {/* <Image src={``} alt="logo" /> */}
          <h1>
            <Link href="/"> CollabX</Link>
          </h1>
        </div>
        <div className={styles["collabx__navbar-links_container"]}>
          <Menu />
        </div>
      </div>
      <div className={styles["collabx__navbar-sign"]}>
        {user?.isLoggedIn === true && (
          // <Button>{user.userData?.firstName}</Button>
          <>
            <span>
              <FaBell size={20} color="#0C1011" />
            </span>
            <BImage
              roundedCircle
              src={DUMMYIMG}
              alt="dummy"
            />
          </>
        )}
        {!user?.isLoggedIn && (
          <>
            <Link href="/auth/login">
              <p>Sign in</p>
            </Link>
            <Button href="/auth/signup">Get Started!</Button>
          </>
        )}
      </div>
      <div className={styles["collabx__navbar-menu"]}>
        {toggleMenu ? (
          <RiCloseLine
            color="000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className={`${styles["collabx__navbar-menu_container"]} ${styles["slide-left"]}`}
          >
            <div className={styles["collabx__navbar-menu_container-links"]}>
              <Menu />
              <div
                className={styles["collabx__navbar-menu_container-links-sign"]}
              >
                {user?.isLoggedIn === true && (
                  // <Button>{user.userData?.firstName}</Button>
                  <Image
                    style={{ borderRadius: "50%" }}
                    width={100}
                    src={DUMMYIMG}
                    alt="dummy"
                  />
                )}
                {!user?.isLoggedIn && (
                  <>
                    <Link href="/auth/login">
                      <p>Sign in</p>
                    </Link>
                    <Button href="/auth/signup">Get Started!</Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
