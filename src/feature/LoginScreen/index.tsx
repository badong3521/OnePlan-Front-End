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

const cx = classNames.bind(styles);

function LoginScreen() {
  const [infoUser, setInfoUser] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  const validationSchema = Yup.object({
    email: Yup.string().required('Account is required!'),
    password: Yup.string().required('Password is required!').min(4, 'Mật khẩu dài hơn 4 kí tự'),
  });

  const renderError = (message: any) => <p className={cx('error-message')}>{message}</p>;

  async function handleSignIn() {
    const user = await api.signIn(infoUser);
    console.log('USER', user);
  }

  return (
    <>
      <div className={cx('wrapper-login')}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values: Account, { setSubmitting }: FormikHelpers<Account>) => {
            // alert(JSON.stringify(values, null, 2));
            setInfoUser(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <div className={cx('from', 'dfc')}>
              <div className={cx('logo')}>
                <img src={images.logoOnebox} width={60} />
                <img src={images.textOnebox} width={140} />
              </div>
              <span>
                <Field id="input" name="email" placeholder="Email" />
                <ErrorInput name="email" render={renderError} />
              </span>
              <span>
                <Field type="password" id="input" name="password" placeholder="Password" />
                <ErrorInput name="password" render={renderError} />
              </span>
              <div className={cx('btn')}>
                <button type="submit" onSubmit={handleSignIn} className={cx('btn-login')}>
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
