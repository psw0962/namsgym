import centerInfo from '@/constant/center-info';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const CenterDetail = () => {
  const router = useRouter();
  const [centerDetailInfo, setCenterDetailInfo] = useState();

  useEffect(() => {
    const filtered = centerInfo.filter(
      x => x.id === Number(router.query.detail),
    );

    setCenterDetailInfo(filtered[0]);
  }, []);

  return <div>{centerDetailInfo?.centerName}</div>;
};

export default CenterDetail;
