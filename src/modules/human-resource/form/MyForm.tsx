import { FieldArray, FormikFormProps, FormikValues } from 'formik';
import {
  Form,
  Input,
  SubmitButton,
  ResetButton,
  InputNumber,
  Checkbox,
} from 'formik-antd';
import React, { FunctionComponent } from 'react';

export const MyForm: FunctionComponent<FormikFormProps & FormikValues> = (
  props
) => {
  const { values } = props;
  return (
    <Form>
      {/* every formik-antd component must have the 'name' prop set: */}
      <Form.Item style={{ color: 'green' }} label="Name" name="firstName">
        <Input name="firstName" suffix />
      </Form.Item>
      {/* the rest of the api stays as is */}
      <InputNumber name="age" min={0} />
      <Checkbox name="newsletter">Newsletter</Checkbox>
      <FieldArray name="friends">
        {({ insert, remove, push }) => (
          <div>
            {values.friends.length > 0 &&
              values.friends.map((_friend: object, index: number) => (
                <div className="row" key={index}>
                  <Form.Item label="friend Name" name={`friends.${index}.name`}>
                    <Input name={`friends.${index}.name`} suffix />
                  </Form.Item>
                  <Form.Item
                    label="friend email"
                    name={`friends.${index}.email`}
                  >
                    <Input name={`friends.${index}.email`} suffix />
                  </Form.Item>
                  <button
                    type="button"
                    className="secondary"
                    onClick={() => remove(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            <button
              type="button"
              className="secondary"
              onClick={() => push({ name: '', email: '' })}
            >
              Add Friend
            </button>
          </div>
        )}
      </FieldArray>
      <SubmitButton>提交</SubmitButton>
      <ResetButton>重制</ResetButton>
    </Form>
  );
};
