import * as Yup from 'yup';

export const validation = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('必须填写'),
  friends: Yup.array()
    .of(
      Yup.object({
        name: Yup.string()
          .max(10, 'Must be 10 characters or less')
          .required('必须填写'),
        email: Yup.string().email('email bu dui').required('必须填写'),
      })
    )
    .length(1, '至少一个'),
});
