import styled from 'styled-components';

export const Divider = styled.span`
    height: 1px;
    display: block;
    position: relative;
    width: 100%;

  &:before {
    content: '';
    background-color: ${(props) => props.theme.palette.primary.main};
    height: 1px;
    opacity: 0.2;
    position: absolute;
    width: 100%;
  }
`
