import { useEffect, useState } from 'react';
import 'firebase/compat/auth';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import classNames from 'classnames/bind';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { images } from '../../assets';

import ErrorInput from '../../components/ErrorMessageInput';
import styles from './Login.scss';
import { Account } from '../../utils/Account';
import { save } from '../../utils/storage';
import { api } from '../../service';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

type UserInfo = {
  username: string;
  password: string;
};

function LoginScreen() {
  const navigation = useNavigate();
  const validationSchema = Yup.object({
    username: Yup.string().required('Account is required!'),
    password: Yup.string().required('Password is required!').min(4, 'Mật khẩu dài hơn 4 kí tự'),
  });

  const renderError = (message: any) => <p className={cx('error-message')}>{message}</p>;

  async function handleSignIn(values: UserInfo) {
    const response = await api.signIn(values);
    if (response) {
      const { data } = response;
      if (data.user_id === '1') {
        console.log('DATA', data);
        save('user', data);
        navigation('/');
      }
    } else {
      console.log('Login failed');
    }
  }

  return (
    <>
      <div className={cx('wrapper-login')}>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSignIn}
        >
          <Form>
            <div className={cx('from', 'dfc')}>
              <div className={cx('logo')}>
                <img src={images.logoOnebox} width={60} />
                <img src={images.textOnebox} width={140} />
              </div>
              <span>
                <Field id="input" name="username" placeholder="useName" />
                <ErrorInput name="username" render={renderError} />
              </span>
              <span>
                <Field type="password" id="input" name="password" placeholder="Password" />
                <ErrorInput name="password" render={renderError} />
              </span>
              <div className={cx('btn')}>
                <button type="submit" className={cx('btn-login')}>
                  Đăng nhập
                </button>
                <button className={cx('btn-register')}>Đăng ký</button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default LoginScreen;
