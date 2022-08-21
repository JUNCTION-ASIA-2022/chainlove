import styled from 'styled-components';

import { Flex, FlexColumn } from '@/styles/common';

const Input = styled.input`
  border: 1px solid ${({ theme: { color } }) => color.gray3};
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  margin-top: 10px;

  ::placeholder {
    color: ${({ theme: { color } }) => color.gray2};
  }
`;

const Label = styled.label`
  font-size: ${({ theme: { font } }) => font.size.small};
  color: ${({ theme: { color } }) => color.gray1};
  width: 100%;
`;

const Button = styled.button`
  font-size: ${({ theme: { font } }) => font.size.small};
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  border: 1px solid ${({ theme: { color } }) => color.gray1};
  border-radius: 5px;
  height: 100%;
  margin-left: 10px;
  padding: 10px 20px;
`;

const InputWrapper = styled(FlexColumn)`
  width: 90%;
`;

const InputLabelWrapper = styled(Flex)`
  width: 100%;
  align-items: flex-end;
`;

const Warning = styled.p`
  color: red;
  width: 100%;
  margin-top: 5px;
  font-size: ${({ theme: { font } }) => font.size.xSmall};
`;

export { Input, Label, Button, InputWrapper, InputLabelWrapper, Warning };
