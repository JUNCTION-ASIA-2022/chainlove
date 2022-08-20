import React from 'react';

import * as S from './style';

type InputProps = {
  label: string;
  hasButton?: boolean;
  placeholder: string;
};

type I = React.ComponentPropsWithRef<'input'> & InputProps;

const InputContainer: React.FC<I> = React.forwardRef((inputData, ref) => {
  const { label, hasButton, placeholder } = inputData;

  return (
    <S.InputWrapper>
      <S.Label>
        {label}
        <S.Input placeholder={placeholder} ref={ref} />
      </S.Label>
      {hasButton && <S.Button>Verify</S.Button>}
    </S.InputWrapper>
  );
});

export default InputContainer;
