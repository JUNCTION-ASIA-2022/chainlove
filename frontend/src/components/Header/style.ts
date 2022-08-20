import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding: 21px;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${({ theme: { color } }) => color.gray4};
  font-size: ${({ theme: { font } }) => font.size.large};
`;

export { HeaderWrapper };
