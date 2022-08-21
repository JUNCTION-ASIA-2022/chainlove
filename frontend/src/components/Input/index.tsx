import React, { useState } from 'react';

import * as S from './style';

import { useInput } from '@/hooks/useInput';

type InputProps = {
  label: string;
  hasButton?: boolean;
  placeholder: string;
};

type I = React.ComponentPropsWithRef<'input'> & InputProps;

const InputContainer: React.FC<I> = React.forwardRef((inputData, ref) => {
  const { label, hasButton, placeholder } = inputData;
  const { value, onChange } = useInput('');
  const [isNumberIncorrect, setIsNumberIncorrect] = useState(false);

  const verifyNumber = () => {
    const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (regPhone.test(value)) {
      setIsNumberIncorrect(false);
    } else {
      setIsNumberIncorrect(true);
    }
  };

  return (
    <S.InputWrapper>
      <S.InputLabelWrapper>
        <S.Label>
          {label}
          <S.Input placeholder={placeholder} ref={ref} value={value} onChange={onChange} />
        </S.Label>
        {hasButton && (
          <S.Button type="button" onClick={verifyNumber}>
            Verify
          </S.Button>
        )}
      </S.InputLabelWrapper>
      {isNumberIncorrect && <S.Warning>Your number is incorrect</S.Warning>}
    </S.InputWrapper>
  );
});

export default InputContainer;
