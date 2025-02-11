import React, { useEffect, useState } from "react";
import LogoSvg from "../../icons/logo";
import SearchSvg from "../../icons/search";
import LocationSvg from "../../icons/location";
import UserSvg from "../../icons/user";
import BagSvg from "../../icons/bag";
import styles from "./Navigation.module.scss";
import classNames from "classnames";

/**
 * A sticky navigation bar that appears on scroll and has a mobile menu
 * accessible via a hamburger button.
 */
const Navigation: React.FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={classNames(styles["nav__wpr"], {
        [styles["nav__wpr--scroll"]]: isSticky,
      })}
    >
      <div className="container">
        <nav className={`${styles["nav"]} row`}>
          <ul className={`${styles["nav__menu-mobile"]} col-xs-2 col-sm-1`}>
            <li className="nav__menu-mobile__btn-item">
              <button
                className={classNames(styles["nav__burger"], {
                  [styles.open]: isOpen,
                })}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </li>
            <li>
              <ul
                className={classNames(styles["nav__menu-mobile-list"], {
                  [styles.show]: isOpen,
                })}
              >
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
            </li>
          </ul>
          <ul
            className={`${styles["nav__menu"]} ${styles["nav__menu--left"]} col-lg-6 col-xl-5`}
          >
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
          <div className={`${styles["nav__logo"]} col-xs-3 col-xl-2`}>
            <a className={styles["nav__logo-link"]} href="#">
              <LogoSvg ariaLabel="Logo"></LogoSvg>
            </a>
          </div>
          <ul
            className={`${styles["nav__menu"]} ${styles["nav__menu--right"]} col-xs-7 col-lg-3 col-xl-5`}
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
            <li
              className={`${styles["nav__menu-item"]} ${styles["nav__menu-item--right"]}`}
            >
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
