import styled from 'styled-components';

const StyledNavigationItems = styled.ul`
  @media (max-width: 700px) {
    top: 66px;
    left: ${(props) => (props.show ? '0px' : '-100%')};
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgb(56, 55, 55);
    opacity: 0.8;
    text-align: center;
    transition: all 1s;
  }
`;

export default StyledNavigationItems;
