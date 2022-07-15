import { withFormik } from 'formik';

import { MyForm } from './MyForm';
import { validation } from './validation';

export default withFormik({
  mapPropsToValues: () => ({
    firstName: '',
    age: 20,
    newsletter: false,
    friends: [{ name: '', email: '' }],
  }),
  validationSchema: validation,
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'MyForm',
})(MyForm);
