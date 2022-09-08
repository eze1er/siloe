import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

import "./Navbar.scss";

import logo from "../../assets/logo.png";

import { linkData } from "../../util/constants";
import UserDropDown from "../UserAuth/UserDropDown";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar bg-blue-gradient">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="app__navbar-links z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient">
        {linkData.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <UserDropDown />
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {linkData.map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              {/* <UserDropDown /> */}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
