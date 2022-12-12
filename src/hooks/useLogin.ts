import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { adminLogin, userLogin } from '@/redux/user';
import { useRouter } from 'next/router';
import * as React from 'react';

const useLogin = () => {
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const { user } = useAppSelector(({ user }) => user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  React.useEffect(() => {
    user?.token && setTimeout(() => router.push('/'), 1500);
  }, [user?.token]);

  const handleLogin = () =>
    new Promise<void>((resolve, reject) => {
      const username = usernameRef.current!.value;
      const password = passwordRef.current!.value;
      const admin = {
        username: 'admin@bukapedia.com',
        password: 'admin123',
      };

      if (username === admin.username && password === admin.password) {
        dispatch(adminLogin());
        router.push('/admin');
        return resolve();
      }

      dispatch(userLogin({ username, password }))
        .unwrap()
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    });

  return {
    usernameRef,
    passwordRef,
    handleLogin,
  };
};

export default useLogin;
