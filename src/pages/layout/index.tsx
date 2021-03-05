import { View } from '@tarojs/components'
import { useState } from 'react'
import { AtTabBar } from 'taro-ui'
import './index.scss'

export default function(props) {
  console.log('-----', props)
  const [current, setCurrent] = useState(0);

  const handleClick = (index) => {
    setCurrent(index)
  }

  return (
    <View>
      <View>{props.children}</View>
      <AtTabBar
        fixed
        tabList={[
        { title: '待办事项', iconType: 'bullet-list', text: 'new' },
        { title: '拍照', iconType: 'camera' },
        { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
      ]}
        onClick={handleClick}
        current={current}
      />
    </View>
  )
}
