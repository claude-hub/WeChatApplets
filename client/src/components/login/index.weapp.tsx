import { useState } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'


function Login() {
  const [str, setStr] = useState("");

  function getLogin() {
    Taro.cloud
      .callFunction({
        name: "login",
        data: {}
      })
      .then(res => {
        setStr(JSON.stringify(res.result))
      })
  }

  return (
    <View>
      <Button onClick={getLogin}>获取登录云函数</Button>
      <Text>{str}</Text>
    </View>
  )
}

export default Login;
