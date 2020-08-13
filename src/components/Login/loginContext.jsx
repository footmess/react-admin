// 使用了React.createContext()API 共享props
// 使用context.Consumer让一个组件订阅context的变更
// 该方法需要一个函数作为子元素，函数接收当前context值，并返回一个React节点
import { createContext } from 'react';

const LoginContext = createContext();
export default LoginContext;
