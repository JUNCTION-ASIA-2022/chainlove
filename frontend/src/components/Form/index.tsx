import * as S from './style';

import Button from '@/components/Button';
import Input from '@/components/Input';

const Form = () => {
  return (
    <S.Form>
      <Input label="Phone" hasButton placeholder="Input number" />
      <Input label="My Keplr Address" placeholder="Input Keplr Account Address" />
      <Button text="GET EASY ADDRESS" />
    </S.Form>
  );
};

export default Form;
