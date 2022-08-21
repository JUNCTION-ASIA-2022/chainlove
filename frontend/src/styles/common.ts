import styled from 'styled-components';

import { flexBox } from './mixins';

const ContentsWrapper = styled.div`
  ${flexBox({ direction: 'column', justifyContent: 'flex-start' })}
  width: 375px;
  height: 100vh;
  margin: 0 auto;
  background: ${({ theme: { color } }) => color.white};
`;

const FlexColumn = styled.div`
  width: 100%;
  ${flexBox({ direction: 'column' })}
`;

const Flex = styled.div`
  width: 100%;
  ${flexBox({})}
`;

export { ContentsWrapper, FlexColumn, Flex };
