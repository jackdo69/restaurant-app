import styled from 'styled-components';

const StyledLabel = styled.label`
  margin-top: 10px;
  font-size: 40px;
  color: white;
  cursor: pointer;
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;

export default StyledLabel;
