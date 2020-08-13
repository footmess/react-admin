import React from 'react';
// A simple JavaScript utility for conditionally joining classNames together.
// classNames('foo', 'bar'); // => 'foo bar'
import classNames from 'classnames';
import { Button, Form } from 'antd';
import styles from './index.less';

// 表单字段组件，用于数据双向绑定、校验、布局等
const FormItem = Form.Item;

const LoginSubmit = ({ className, ...rest }) => {
  const classsString = classNames(styles.submit, className);
  return (
    <FormItem>
      <Button size="big" className={classsString} type="primary" htmlType="submit" {...rest} />
    </FormItem>
  );
};
export default LoginSubmit;
