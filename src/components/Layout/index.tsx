import { AtMessage } from 'taro-ui';
import { View } from '@tarojs/components';

const mainLayout = props => {
  return (
    <View>
      <AtMessage />
      {props.children}
    </View>
  );
};

export default mainLayout;
