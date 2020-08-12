import React, { PureComponent } from 'react';
import { FormattedMessage, setLocale, getLocale } from 'umi';
// 从 4.0 开始，antd 不再内置 Icon 组件，请使用独立的包 @ant-design/icons
import { Menu, Dropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import styles from './index.less';

// JSX 最终会被编译为 React.createElement() 函数调用，返回称为 “React 元素” 的普通 JavaScript 对象
export default class SelectLang extends PureComponent {
  // es6新写法
  changeLang = ({ key }) => {
    setLocale(key);
  };
  render() {
    const { className } = this.props;
    const selectedLang = getLocale();
    const clsString = classNames(styles.dropDown, className);
    const langMenu = (
      <Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={this.changeLang}>
        <Menu.Item key="zh-CN">
          <FormattedMessage id="lang.simplified-chinese" />
        </Menu.Item>
        <Menu.Item key="zh-TW">
          <FormattedMessage id="lang.traditional-chinese" />
        </Menu.Item>
        <Menu.Item key="en-US">
          <FormattedMessage id="lang.english" />
        </Menu.Item>
        <Menu.Item key="pt-BR">
          <FormattedMessage id="lang.portuguese" />
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={langMenu}>
        <span className={clsString}>
          <FormattedMessage id="navBar.lang" />
          <CaretDownOutlined />
        </span>
      </Dropdown>
    );
  }
}
