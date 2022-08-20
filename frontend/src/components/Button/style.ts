import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme: { color } }) => color.gray1};
  color: ${({ theme: { color } }) => color.white};
  padding: 10px;
  width: 90%;
  border-radius: 5px;
`;

export { Button };
