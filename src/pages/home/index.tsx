import React from 'react'
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import { AtTag } from 'taro-ui'

import './index.scss'


type IndexProps = {}

function goToCSSPage() {
  // 跳转到目的页面，在当前页面打开
  Taro.navigateTo({
    url: '/pages/css/index'
  })
}

const Index: React.FC<IndexProps> = function() {
  return (
    <View className='at-article'>
      <View className='at-article__content'>
        <AtTag onClick={goToCSSPage}>CSS</AtTag>
      </View>
    </View>
  )
}

export default Index
