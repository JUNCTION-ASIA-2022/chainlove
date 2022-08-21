import * as S from './style';

const Description = ({ mainTitle, subTitle }) => {
  return (
    <S.DescriptionWrapper>
      <S.MainTitle>{mainTitle}</S.MainTitle>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.DescriptionWrapper>
  );
};

export default Description;
