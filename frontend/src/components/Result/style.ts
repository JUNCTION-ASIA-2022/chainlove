import styled from 'styled-components';

import { FlexColumn, Flex } from '@/styles/common';

const ResultWrapper = styled(FlexColumn)``;

const ResultNumberWrapper = styled(Flex)``;

const ResultMessage = styled.p`
  font-size: ${({ theme: { font } }) => font.size.xSmall};
  font-weight: ${({ theme: { font } }) => font.weight.medium};
  padding: 5px 90px;
  text-align: center;
`;

const ResultNumber = styled.p`
  font-size: ${({ theme: { font } }) => font.size.large};
  font-weight: ${({ theme: { font } }) => font.weight.regular};
  color: ${({ theme: { color } }) => color.black};
  padding: 5px 10px;
  text-align: center;
`;

export { ResultWrapper, ResultNumberWrapper, ResultMessage, ResultNumber };
