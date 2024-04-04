import React from "react";

import * as Styles from "./styles";

import { Button, ButtonReverse } from "../../../../components/button";

const BuySection = () => {
  return (
    <Styles.BuySection>
      <Styles.BuyContainer>
        <Styles.BuyInfo>
          <h3>JOIN THE</h3>
          <h2>BATTLE</h2>
          <Styles.BuyButtons>
            <Button className="large">Search For more Now</Button>
          </Styles.BuyButtons>
        </Styles.BuyInfo>
      </Styles.BuyContainer>
    </Styles.BuySection>
  );
};

export default BuySection;
