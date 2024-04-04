import React from "react";

import * as Styles from "./styles";

import { Logo, LogoFooter, LogoValue } from "../logo";
import Divider from "../divider";
import Platforms from "../platforms";

import classification from "../../assets/images/classification.png";
import { ReactComponent as ArrowUp } from "../../assets/images/arrow_up.svg";

const Footer = () => {
  return (
    <Styles.FooterSection>
      <Styles.FooterContainer>
        <Styles.FooterNav>
          <div className="nav-menu">
            <ul>
              <li>
                <a href="#">Start</a>
              </li>
              <li>
                <a href="#">Current season</a>
              </li>
              <li>
                <a href="#">Previous seasons</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">More</a>
              </li>
            </ul>
          </div>
          <img src={classification} alt="Parental rating" />
        </Styles.FooterNav>
        <Divider />
        <div style={{ marginTop: 20 }}>
          <Styles.FooterHeader>
            <LogoFooter className="small" />
            <LogoValue className="small" />
          </Styles.FooterHeader>
          <Styles.FooterCopyright>
            Dota and the Dota logo are trademarks and/or registered trademarks
            of Valve Corporation. 2023 Valve Corporation, all rights reserved.
          </Styles.FooterCopyright>
          <Styles.FooterBottom>
            <div>
              <a href="#">Terms of services</a>
              <a href="#">Privacy Policy</a>
              <a href="#">License Agreement</a>
            </div>
            <Platforms />
          </Styles.FooterBottom>
        </div>
      </Styles.FooterContainer>
    </Styles.FooterSection>
  );
};

export default Footer;
