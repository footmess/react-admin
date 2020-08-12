import React, { Fragment } from 'react';
import { Link, formatMessage } from 'umi';
// 从 4.0 开始，antd 不再内置 Icon 组件，请使用独立的包 @ant-design/icons
import { CopyrightOutlined } from '@ant-design/icons';
import GlobalFooter from '@/components/GlobalFooter';
import SelectLang from '@/components/SelectLang';
import logo from '../assets/logo.svg';
import styles from './UserLayout.less';

const links = [
  {
    key:'help',
    title:formatMessage({id:'layout.user.link.help'}),
    href:''
  },
   {
    key:'privacy',
    title:formatMessage({id:'layout.user.link.privacy'}),
    href:''
  },
   {
    key:'terms',
    title:formatMessage({id:'layout.user.link.terms'}),
    href:''
  }
],

// JSX语法
const copyRight = (
  // 使用片段(fragments) 可以让你将子元素列表添加到一个分组中，并且不会在DOM 中增加额外节点
  <Fragment>
    Copyright<CopyrightOutlined />2020 蚂蚁金服体验技术部出品
  </Fragment>
);

// 类组件
class UserLayout extends React.Component {
  render() {
    // 解构赋值 
    // 每个组件都可以获取到prop.children 它包含组件的开始标签和结束标签之间的内容
    const {children} = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to='/'>
                <img src={logo} alt="logo" className={styles.logo} />
                <span className={styles.title}>Ant Design</span>
              </Link>
            </div>
            <div className={styles.desc}>Ant Design 是西湖区最具影响力的 Web 设计规范</div>
          </div>
          {children}
        </div>
        <GlobalFooter links={links} copyRight={copyRight}></GlobalFooter>  
      </div> 
    )
  }
}

export default UserLayout;
