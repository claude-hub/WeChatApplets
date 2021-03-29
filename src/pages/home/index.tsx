import React from 'react'
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './index.scss'


type IndexProps = {}

function goToPage() {
  // 跳转到目的页面，在当前页面打开
  Taro.navigateTo({
    url: 'css/power/index'
  })
}

const Index: React.FC<IndexProps> = function() {
  return (
    <View>
      <Text>首页</Text>
      <AtButton onClick={goToPage}>CSS</AtButton>
    </View>
  )
}

export default Index
