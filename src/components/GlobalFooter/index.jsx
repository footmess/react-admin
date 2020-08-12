import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

// JSX 最终会被编译为 React.createElement() 函数调用，返回称为 “React 元素” 的普通 JavaScript 对象
const GlobalFooter = ({ className, links, copyright }) => {
  // 类似声明了一个命名空间
  const clsString = classNames(styles.globalFooter, className);
  return (
    <div className={clsString}>
      {/* react 条件渲染 */}
      {links && (
        <div className={styles.links}>
          {links.map((link) => {
            <a
              key={link.key}
              title={link.key}
              target={link.blankTarget ? '_blank' : '_self'}
              href={link.href}
            >
              {link.title}
            </a>;
          })}
        </div>
      )}
      {copyright && <div className={styles.copyright}>{copyright}</div>}
    </div>
  );
};

export default GlobalFooter;
