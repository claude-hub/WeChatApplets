import React from 'react'
import { View } from '@tarojs/components'

import './index.scss'

type IndexProps = {}

function helloWorld() {
  const html = `
    <div class="g-container">
      <div class="g-number">98.7%</div>
      <div class="g-contrast">
          <div class="g-circle"></div>
          <ul class="g-bubbles">
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
              <li class="li"></li>
          </ul>
      </div>
    </div>
  `

  return <View dangerouslySetInnerHTML={{ __html: html }}></View>
}

const Index: React.FC<IndexProps> = function () {
  return (
    <View className='css-container'>
      {helloWorld()}
    </View>
  )
}

export default Index
