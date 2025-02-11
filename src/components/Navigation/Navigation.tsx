import React, { useEffect, useState } from "react";
import LogoSvg from "../../icons/logo";
import SearchSvg from "../../icons/search";
import LocationSvg from "../../icons/location";
import UserSvg from "../../icons/user";
import BagSvg from "../../icons/bag";
import styles from "./Navigation.module.scss";
import classNames from "classnames";

const Navigation: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 88) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={classNames(styles["nav__wpr"], {
        [styles["nav__wpr--scroll"]]: isSticky,
      })}
    >
      <div className="container">
        <nav className={styles["nav"]}>
          <ul className={styles["nav__menu"]}>
            <li className={styles["nav__menu-item"]}>
              <a className={styles["nav__menu-link"]} href="#">
                Products
              </a>
            </li>
            <li className={styles["nav__menu-item"]}>
              <a className={styles["nav__menu-link"]} href="#">
                Experience Leica
              </a>
            </li>
            <li className={styles["nav__menu-item"]}>
              <a className={styles["nav__menu-link"]} href="#">
                Corporate
              </a>
            </li>
            <li className={styles["nav__menu-item"]}>
              <a className={styles["nav__menu-link"]} href="#">
                Service
              </a>
            </li>
          </ul>
          <div className={styles["nav__logo"]}>
            <a className={styles["nav__logo-link"]} href="#">
              <LogoSvg ariaLabel="Logo"></LogoSvg>
            </a>
          </div>
          <ul
            className={`${styles["nav__menu"]} ${styles["nav__menu--right"]}`}
          >
            <li
              className={`${styles["nav__menu-item"]} ${styles["nav__menu-item--right"]}`}
            >
              <button
                className={styles["nav__menu-btn"]}
                type="button"
                aria-label="Search Toggle"
              >
                <SearchSvg ariaLabel="Search icon"></SearchSvg>
              </button>
            </li>
            <li
              className={`${styles["nav__menu-item"]} ${styles["nav__menu-item--right"]}`}
            >
              <button
                className={styles["nav__menu-btn"]}
                type="button"
                aria-label="Locations Menu"
              >
                <LocationSvg ariaLabel="Location icon"></LocationSvg>
              </button>
            </li>
            <li
              className={`${styles["nav__menu-item"]} ${styles["nav__menu-item--right"]}`}
            >
              <button
                className={styles["nav__menu-btn"]}
                type="button"
                aria-label="User Menu "
              >
                <UserSvg ariaLabel="User menu icon"></UserSvg>
              </button>
            </li>
            <li className={styles["nav__menu-item"]}>
              <button
                className={styles["nav__menu-btn"]}
                type="button"
                aria-label="Shopping Bag Menu"
              >
                <BagSvg ariaLabel="Shopping bag icon"></BagSvg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
