import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import * as S from './style';

import { postAPI } from '@/apis/api';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { idState } from '@/stores/id';

const Form = () => {
  const phoneRef = useRef<HTMLInputElement>(null);
  const walletRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const setId = useSetRecoilState(idState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = phoneRef.current?.value;
    const walletAddress = walletRef.current?.value;
    const data = { phoneNumber, walletAddress };
    const response = await postAPI(data);
    console.log(response);
    setId(response?.id);
    navigate('/complete');
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <Input label="Phone" hasButton placeholder="Input number" ref={phoneRef} />
      <Input label="My Keplr Address" placeholder="Input Keplr Account Address" ref={walletRef} />
      <Button text="GET EASY ADDRESS" />
    </S.Form>
  );
};

export default Form;
