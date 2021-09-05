// import Taro from '@tarojs/taro';
import mainLayout from './components/Layout';
import './app.scss';

// Taro.getSystemInfo({}).then((res) => {
//   // 把导航栏的高度挂载到全局
//   Taro.$navBarMarginTop = res.statusBarHeight || 0;
// });

export default (props) => {
  return mainLayout(props);
};
