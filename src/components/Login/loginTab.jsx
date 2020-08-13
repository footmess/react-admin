import React, { Component } from 'react';
import { Tabs } from 'antd';
import LoginContext from './loginContext';

const { TabPane } = Tabs;
const generateId = (() => {
  let i = 0;
  return (prefix = '') => {
    i += 1;
    return `${prefix}${i}`;
  };
})();

class LoginTab extends Component {
  constructor(props) {
    super(props);
    this.uniqueId = generateId('login-tab-');
  }

  componentDidMount() {
    const { tabUtil } = this.props;
    tabUtil.addTab(this.uniqueId);
  }

  render() {
    const { children } = this.props;
    return <TabPane {...this.props}>{children}</TabPane>;
  }
}

const wrapContext = (props) => {
  // 使用了React.createContext()API 共享props
  // 使用context.Consumer让一个组件订阅context的变更
  // 该方法需要一个函数作为子元素，函数接收当前context值，并返回一个React节点
  <LoginContext.Consumer>
    {(value) => <LoginTab tabUtil={value.tabUtil} {...props} />}
  </LoginContext.Consumer>;
};

// 标志位 判断是否为自定义组件
wrapContext.typeName = 'LoginTab';

export default wrapContext;
