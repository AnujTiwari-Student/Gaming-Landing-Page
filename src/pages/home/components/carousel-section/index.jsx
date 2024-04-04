import React from "react";

import * as Styles from "./styles";

import img1 from "../../../../assets/images/carousel_1.jpeg";
import img2 from "../../../../assets/images/carousel_2.jpg";
import img3 from "../../../../assets/images/carousel_3.jpg";
import img4 from "../../../../assets/images/carousel_4.png";

import { ReactComponent as Pagination } from "../../../../assets/images/carousel_pagination.svg";

const CarouselSection = () => {
  return (
    <Styles.CarouselSection>
      {/*<Styles.CarouselCirclesContainer>*/}
      {/*    <Styles.CarouselFirstLeftCircle />*/}
      {/*    <Styles.CarouselSecondLeftCircle />*/}
      {/*    <Styles.CarouselThirdLeftCircle />*/}
      {/*</Styles.CarouselCirclesContainer>*/}

      <Styles.CarouselContainer id="section-gallery">
        <Styles.CarouselHeader>
          <Styles.CarouselContainerTitle>
            What will you choose?
            <p style={{ fontSize: 16, color: "gray" }}>
              From magical tacticians to fierce brutes and cunning rogues, Dota
              2's hero pool is massive and limitlessly diverse. Unleash
              incredible abilities and devastating ultimates on your way to
              victory.
            </p>
          </Styles.CarouselContainerTitle>
          <Pagination />
        </Styles.CarouselHeader>

        <Styles.CarouselContainerImages>
          <img
            src={img1}
            alt="Carrossel 1"
            style={{ width: 300, objectFit: "cover" }}
          />
          <img
            src={img2}
            alt="Carrossel 2"
            style={{ width: 300, objectFit: "cover" }}
          />
          <img
            src={img3}
            alt="Carrossel 3"
            style={{ width: 300, objectFit: "cover" }}
          />
          <img
            src={img4}
            alt="Carrossel 4"
            style={{ width: 300, objectFit: "cover" }}
          />
        </Styles.CarouselContainerImages>
      </Styles.CarouselContainer>

      {/*<Styles.CarouselCirclesContainer>*/}
      {/*    <Styles.CarouselFirstRightCircle />*/}
      {/*    <Styles.CarouselSecondRightCircle />*/}
      {/*    <Styles.CarouselThirdRightCircle />*/}
      {/*</Styles.CarouselCirclesContainer>*/}
    </Styles.CarouselSection>
  );
};

export default CarouselSection;
