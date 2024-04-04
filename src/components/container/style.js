import styled from 'styled-components';

import { device } from '../../styles/theme/devices';

export const ContainerFluid = styled.div`
  width: 100%;
  overflow: hidden;
`
export const Container = styled.div`
  margin: 0 auto;
  max-width: calc(70ch + 700px);

  @media ${device.laptopL} {
    max-width: calc(50ch + 700px);
  }

  @media ${device.laptopM} {
    max-width: calc(40ch + 700px);
  }

  @media ${device.laptopS} {
    max-width: calc(20ch + 700px);
  }

  @media ${device.laptop} {
    max-width: 700px;
    padding: 0 20px;
  }

  @media ${device.mobileL} {
    padding: 0 20px;
  }
`
