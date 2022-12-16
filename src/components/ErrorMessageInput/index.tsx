import { ErrorMessage } from 'formik';

type PropsErrorMessage = {
  name: string;
  render: any;
};

function ErrorInput(props: PropsErrorMessage) {
  return (
    <>
      <ErrorMessage name={props.name} render={props.render} />
    </>
  );
}

export default ErrorInput;
