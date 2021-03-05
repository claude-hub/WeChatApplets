import { useEffect } from 'react'
import Taro from '@tarojs/taro'

function App(props) {
  useEffect(() => {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }, [])
  return props.children
}

export default App
