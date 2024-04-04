import styled from 'styled-components';

import { device } from '../../styles/theme/devices';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;
`

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  color: ${(props) => props.theme.palette.primary.main};
  list-style: none;

  @media ${device.mobileL} {
    font-size: 14px;
    gap: 20px;
  }

  @media ${device.mobileS} {
    gap: 15px;
  }
`
