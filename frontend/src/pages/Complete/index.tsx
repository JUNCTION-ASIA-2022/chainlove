import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { getAPI } from '@/apis/api';
import Description from '@/components/Description';
import Result from '@/components/Result';
import { idState } from '@/stores/id';

const Complete = () => {
  const id = useRecoilValue(idState);
  const [phoneNumber, setPhoneNumber] = useState(null);

  useEffect(() => {
    const getPhoneNumber = async () => {
      const response = await getAPI(id);
      setPhoneNumber(response.phoneNumber);
    };

    getPhoneNumber();
  }, []);

  return (
    <>
      <Description mainTitle="Complete!" subTitle="Use this simple address as your Keplr address" />
      <Result resultMessage="New changed Address" resultNumber={phoneNumber} />
    </>
  );
};

export default Complete;
