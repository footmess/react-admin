import React, { Fragment } from 'react';
import { Link, formatMessage } from 'umi';
import { icon } from 'antd';
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
    Copyright<Icon type='copyright' />2020 蚂蚁金服体验技术部出品
  </Fragment>
);

// 类组件
class UserLayout extends React.Component {
  render() {
    // 解构赋值
    const {children} = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
          </div> 
      </div> 
    )
  }
}

const UserLayout = (props) => {
	const {
		route = {
			routes: []
		}
	} = props;
	const { routes = [] } = route;
	const {
		children,
		location = {
			pathname: ''
		}
	} = props;
	const { formatMessage } = useIntl();
	const { breadcrumb } = getMenuData(routes);
	const title = getPageTitle({
		pathname: location.pathname,
		formatMessage,
		breadcrumb,
		...props
	});
	return (
		<HelmetProvider>
			<Helmet>
				<title>{title}</title>
				<meta name='description' content={title} />
			</Helmet>

			<div className={styles.container}>
				<div className={styles.lang}>
					<SelectLang />
				</div>
				<div className={styles.content}>
					<div className={styles.top}>
						<div className={styles.header}>
							<Link to='/'>
								<img alt='logo' className={styles.logo} src={logo} />
								<span className={styles.title}>Ant Design</span>
							</Link>
						</div>
						<div className={styles.desc}>Ant Design 是西湖区最具影响力的 Web 设计规范</div>
					</div>
					{children}
				</div>
				<DefaultFooter />
			</div>
		</HelmetProvider>
	);
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
