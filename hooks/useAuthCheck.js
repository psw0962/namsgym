import { useGetUserData } from '@/api/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toastStateAtom } from 'atoms';
import { useRecoilState } from 'recoil';

const useAuthCheck = () => {
  const router = useRouter();

  const [toastState, setToastState] = useRecoilState(toastStateAtom);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { data } = useGetUserData(setToastState, router, false);

  useEffect(() => {
    if (!data) {
      setIsLoggedIn(false);

      return;
    }

    if (data !== undefined) {
      setIsLoggedIn(true);

      return;
    }
  }, [data]);

  return isLoggedIn;
};

export default useAuthCheck;
