import styled from 'styled-components';

import { FlexColumn } from '@/styles/common';

const ResultWrapper = styled(FlexColumn)``;

const ResultMessage = styled.p`
  font-size: ${({ theme: { font } }) => font.size.xSmall};
  font-weight: ${({ theme: { font } }) => font.weight.medium};
  padding: 5px 90px;
  text-align: center;
`;

const ResultNumber = styled.p`
  font-size: ${({ theme: { font } }) => font.size.xSmall};
  font-weight: ${({ theme: { font } }) => font.weight.regular};
  color: ${({ theme: { color } }) => color.gray3};
  padding: 5px 90px;
  text-align: center;
`;

export { ResultWrapper, ResultMessage, ResultNumber };
