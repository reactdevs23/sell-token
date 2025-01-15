import React, { useState, useEffect } from "react";

import { IoMdClose } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

import { AiOutlineAlignRight } from "react-icons/ai";
import classes from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

import { Button, Heading, Text } from "components/common";
import { logo, userImg } from "assets/images";

import clsx from "clsx";
import { Dropdown } from "../common";
import { countries } from "../../assets/data";

import LoginModal from "../Modal/LoginModal/LoginModal";
import VerificationModal from "../Modal/VerificationModal/VerificationModal";
import EditProfileModal from "../Modal/EditProfileModal/EditProfileModal";

const Navbar = ({ primitive950 }) => {
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [selectedUserAction, setSelectedUserAction] = useState("");
  // longin info
  const user = { img: userImg, name: "@CucqJN", nickName: "(DevilCoin)" };
  const [login, setLogin] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { navItem: "How it works", to: "/how-it-works" },
    { navItem: "Support", to: "/support" },
  ];
  return (
    <>
      <div
        className={clsx(
          primitive950 && classes.primitive950,
          classes.wrapper,
          isScrolled && classes.wrapperBg
        )}
      >
        <header className={clsx(classes.header, "container")}>
          <Link to="/" onClick={() => setSidebar((prev) => !prev)}>
            <img src={logo} alt="#" className={classes.logo} />
          </Link>
          <div className={clsx(classes.navItems, sidebar && classes.sidebar)}>
            {navItems?.map((el, i) => (
              <NavLink
                key={i}
                to={el.to}
                onClick={() => setSidebar(false)}
                className={({ isActive }) =>
                  isActive
                    ? clsx(classes.navItem, classes.navActive)
                    : classes.navItem
                }
              >
                {el.navItem}
              </NavLink>
            ))}
          </div>{" "}
          <div className={classes.buttonContainer}>
            <Dropdown
              languageDropdown
              type2
              isActive={showLanguageDropdown}
              setIsActive={setShowLanguageDropdown}
              selectedValue={selectedLanguage}
              onSelect={(val) => setSelectedLanguage(val)}
              items={countries}
            >
              <Button
                className={classes.languageButton}
                onClick={() => setShowLanguageDropdown((prev) => !prev)}
              >
                <TbWorld className={classes.multilanguage} />
              </Button>
            </Dropdown>
            {login && (
              <Dropdown
                noSearch
                type2
                isActive={showUserDropdown}
                setIsActive={setShowUserDropdown}
                selectedValue={selectedUserAction}
                onSelect={(val) => setSelectedUserAction(val)}
                items={["Edit", "Delete"]}
              >
                <div
                  className={classes.userInfo}
                  onClick={() => setShowUserDropdown((prev) => !prev)}
                >
                  <img
                    src={user.img}
                    alt={user.name}
                    className={classes.userImg}
                  />
                  <div className={classes.details}>
                    <Text xs12 primitiveDefault className={classes.name}>
                      {user.name}
                    </Text>
                    <Heading sm medium primitiveDefault>
                      {user.nickName}
                    </Heading>
                  </div>
                </div>
              </Dropdown>
            )}
            {!login && (
              <Button
                primitiveTransparent8
                onClick={() => setShowLoginModal(true)}
              >
                Connect Wallet
              </Button>
            )}

            {sidebar ? (
              <IoMdClose
                className={classes.icon}
                onClick={() => setSidebar((prev) => !prev)}
              />
            ) : (
              <AiOutlineAlignRight
                className={clsx(classes.icon, classes.hamburger)}
                onClick={() => setSidebar((prev) => !prev)}
              />
            )}
          </div>
        </header>
      </div>
      <LoginModal
        isActive={showLoginModal}
        setShowVerificationModal={setShowVerificationModal}
        onClose={() => setShowLoginModal(false)}
      />
      <VerificationModal
        isActive={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
      />
      <EditProfileModal
        isActive={selectedUserAction === "Edit"}
        onClose={() => setSelectedUserAction(false)}
      />
    </>
  );
};

export default Navbar;
