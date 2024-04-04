import React from "react";
import * as Styles from "./styles";

import { Container } from "../container";
import { Logo } from "../logo";
// import Profile from "../menu";

const Navbar = () => {
  return (
    <Container>
      <Styles.NavbarContainer>
        {/*<div style={{display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center'}}>*/}
        {/*    <li><a href="#section-get-game" style={{color: 'white'}}>Gallery</a></li>*/}
        {/*    <Logo className='min' />*/}
        {/*    <li><a href="#section-get-game" style={{color: 'white'}}>Gallery</a></li>*/}
        {/*</div>*/}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Styles.NavbarMenu>
            <li>
              <a href="#" style={{ color: "white" }}>
                Home
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "white" }}>
                News
              </a>
            </li>
            <Logo className="min" />
            <li>
              <a href="#" style={{ color: "white" }}>
                About
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "white" }}>
                {/* <Profile /> */}
                Profile
              </a>
            </li>
          </Styles.NavbarMenu>
        </div>
      </Styles.NavbarContainer>
    </Container>
  );
};

export default Navbar;
