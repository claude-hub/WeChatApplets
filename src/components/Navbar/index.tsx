// import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

const Navbar = () => {
  const style = {
    // paddingTop: Taro.$navBarMarginTop + 'px',
  };
  // 将状态栏的区域空余出来
  return (
    <View className="navbarWrap" style={style}>
      <View className="navbar">自定义导航栏</View>
    </View>
  );
};
export default Navbar;
