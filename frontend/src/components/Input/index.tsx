import * as S from './style';

const InputContainer = ({ label, hasButton, placeholder }) => {
  return (
    <S.InputWrapper>
      <S.Label>
        {label}
        <S.Input placeholder={placeholder} />
      </S.Label>
      {hasButton && <S.Button>Verify</S.Button>}
    </S.InputWrapper>
  );
};

export default InputContainer;
