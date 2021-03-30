import React from 'react'
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components'
import { AtGrid } from 'taro-ui'
import './index.scss'

type IndexProps = {}

function handleClick(item) {
  const { url } = item;
  // 跳转到目的页面，在当前页面打开
  Taro.navigateTo({
    url
  })
}

const cssList = [
  {
    value: '华为充电',
    url: '/pages/css/power/index'
  }
]

const Index: React.FC<IndexProps> = function() {
  return (
    <View  className='at-article'>
      <View className='at-article__h2'>CSS布局</View>

      <View className='at-article__h2'>CSS动画</View>
      <AtGrid hasBorder={false} mode='rect' data={cssList} onClick={handleClick} />
      <View className='at-article__p'>
        来源：https://github.com/chokcoco/CSS-Inspiration
      </View>
    </View>
  )
}

export default Index
