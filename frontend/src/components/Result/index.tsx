import * as S from './style';

const Result = ({ resultMessage, resultNumber }) => {
  return (
    <S.ResultWrapper>
      <S.ResultMessage>{resultMessage}</S.ResultMessage>
      <S.ResultNumber>{resultNumber}</S.ResultNumber>
    </S.ResultWrapper>
  );
};

export default Result;
