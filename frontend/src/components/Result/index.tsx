import { HiOutlinePencilAlt } from 'react-icons/hi';

import * as S from './style';

const Result = ({ resultMessage, resultNumber }) => {
  return (
    <S.ResultWrapper>
      <S.ResultMessage>{resultMessage}</S.ResultMessage>
      <S.ResultNumberWrapper>
        <S.ResultNumber>{resultNumber}</S.ResultNumber>
        <HiOutlinePencilAlt size="12" color="#BBBBBB" />
      </S.ResultNumberWrapper>
    </S.ResultWrapper>
  );
};

export default Result;
