import { useEffect, useState, createContext } from 'react';
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
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo } from '../../redux/actions/actions';

const cx = classNames.bind(styles);

function LoginScreen() {
  const [user, setUserInfo] = useState<Account>();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const validationSchema = Yup.object({
    username: Yup.string().required('Account is required!'),
    password: Yup.string().required('Password is required!').min(4, 'Mật khẩu dài hơn 4 kí tự'),
  });
  const [fetching, setFetching] = useState<boolean>();

  const renderError = (message: any) => <p className={cx('error-message')}>{message}</p>;

  async function handleSignIn(values: Account) {
    // const response = await api.signIn(values);
    setUserInfo(values);
    dispatch(getUserInfo(values));
    navigation('/');

    // if (response) {
    //   const { data } = response;
    //   if (data.user_id === '1') {
    //     console.log('DATA', data);
    //     save('user', data);
    //     navigation('/');
    //   }
    // } else {
    //   console.log('Login failed');
    // }
  }
  // const handleSignIn1 = () => {
  //   // console.log("user" , user)
  // };

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
                {/* <button type="submit" className={cx('btn-login')}>
                  Đăng nhập
                </button> */}
                <Button htmlType="submit" size="large" loading={fetching}>
                  Loading
                </Button>
                <button className={cx('btn-register')}>Đăng ký</button>
                {/* <div onClick={() => handleSignIn1()}>dang ki</div> */}
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default LoginScreen;
