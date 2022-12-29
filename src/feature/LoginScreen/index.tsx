import { useState } from 'react';
import 'firebase/compat/auth';
import { Formik, Field, Form } from 'formik';
import classNames from 'classnames/bind';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Button, message} from 'antd';
import { images } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ErrorInput from '../../components/ErrorMessageInput';
import styles from './Login.scss';
import { Account } from '../../utils/Account';
import { save } from '../../utils/storage';
import { api } from '../../service';
import { getUserInfo } from '../../redux/actions/actions';

const cx = classNames.bind(styles);

function LoginScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const validationSchema = Yup.object({
    username: Yup.string().required('Account is required!'),
    password: Yup.string().required('Password is required!').min(4, 'Mật khẩu dài hơn 4 kí tự'),
  });
  const [fetching, setFetching] = useState<boolean>();
  const [messageApi, contextHolder] = message.useMessage();

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Đăng nhập không thành công!',
    });
  };

  const renderError = (messageError: any) => <p className={cx('error-message')}>{messageError}</p>;

  async function handleSignIn(values: Account) {
    dispatch(getUserInfo(values));
    setFetching(true);
    const response = await api.signIn(values);

    setFetching(false);
    if (response.data.error_code === 401) {
      error();
    } else if (response.ok) {
      navigation('/');
    }
  }

  return (
    <>
      {contextHolder}
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
                <Button
                  htmlType="submit"
                  className={cx('btn-login')}
                  size="large"
                  loading={fetching}
                >
                  Đăng nhập
                </Button>
                <Button
                  // htmlType="submit"
                  className={cx('btn-login')}
                  size="large"
                  // loading={fetching}
                >
                  Đăng ký
                </Button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default LoginScreen;
