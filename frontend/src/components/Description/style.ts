import styled from 'styled-components';

import { FlexColumn } from '@/styles/common';

const MainTitle = styled.p`
  font-size: ${({ theme: { font } }) => font.size.medium};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  padding: 5px 90px;
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: ${({ theme: { font } }) => font.size.xSmall};
  color: ${({ theme: { color } }) => color.gray3};
  text-align: center;
`;

const DescriptionWrapper = styled(FlexColumn)`
  padding: 50px 0;
`;

export { MainTitle, SubTitle, DescriptionWrapper };
