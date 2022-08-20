import styled from 'styled-components';

import { flexBox } from '@/styles/mixins';

const Form = styled.form`
  ${flexBox({ direction: 'column' })}
  padding: 0 10px;

  & > * {
    margin-bottom: 40px;
  }
`;

export { Form };
