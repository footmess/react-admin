import React from 'react';
import { Drawer } from 'antd';
import SiderMenu from './SiderMenu';

const getFlatMenuKeys = (menuData) => {
  let keys = [];
  menuData.forEach((item) => {
    if (item.children) {
      keys = keys.concat(getFlatMenuKeys(item.children));
    }
    keys.push(item.path);
  });
  return keys;
};

// 函数组件
const SiderMenuWrapper = (props) => {
  const { isMobile, menuData, collapsed, onCollapse } = props;
  return isMobile ? (
    <Drawer
      visible={!collapsed}
      placement="left"
      onClose={() => onCollapse(true)}
      style={{ padding: 0, height: '100vh' }}
    >
      <SiderMenu
        SiderMenu
        {...props}
        flatMenuKeys={getFlatMenuKeys(menuData)}
        collapsed={isMobile ? false : collapsed}
      />
    </Drawer>
  ) : (
    <SiderMenu {...props} flatMenuKeys={getFlatMenuKeys(menuData)} />
  );
};

export default SiderMenuWrapper;
