import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { AtAvatar, AtIcon, AtModal } from 'taro-ui';
import { View, Text, Image } from '@tarojs/components';
import defaultAvatar from '../../assets/images/default-avatar.png';
import me from '../../assets/about/me.jpeg';
import pay from '../../assets/about/pay.jpeg';
import publish from '../../assets/about/publish.jpg'

import './index.scss';

type IndexProps = {};

const Index: React.FC<IndexProps> = () => {
  const [url, setUrl] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useState(() => {
    return Taro.getStorageSync('userInfo');
  });

  const handleLogin = () => {
    if (userInfo) return;
    Taro.getUserProfile({
      desc: '我也不知道你登录来干啥', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: ({ userInfo: user }) => {
        setUserInfo(user);
        Taro.setStorage({
          key: 'userInfo',
          data: user,
        });
      },
    });
  };

  const handleLogout = () => {
    Taro.removeStorage({
      key: 'userInfo',
      success: function () {
        setUserInfo(undefined);
      },
    });
  };

  const handleClose = () => {
    setOpen(false);
    setUrl('');
  }

  const BUTTONS = [
    {
      icon: 'info',
      color: '#5c80df',
      text: '关于作者',
      onClick: () => {
        setUrl(me);
        setOpen(true);
      },
    },
    {
      icon: 'gzh',
      text: '公众号',
      color: '#8496c3',
      onClick: () => {
        setUrl(publish);
        setOpen(true);
      },
    },
    {
      icon: 'dashang',
      color: '#e54837',
      text: '打赏作者',
      onClick: () => {
        setUrl(pay);
        setOpen(true);
      },
    },
    {
      icon: 'logout',
      color: '#bf8038',
      text: '退出登录',
      onClick: handleLogout,
    },
  ];

  return (
    <View>
      <View className="user-msg">
        <View className="user-header"></View>
        <View className="user-info">
          <AtAvatar circle image={userInfo?.avatarUrl || defaultAvatar} />
          <Text className="login" onClick={handleLogin}>
            {userInfo?.nickName || '请登录'}
          </Text>
        </View>
      </View>
      <View className="user-list">
        <View className="box-ul">
          {BUTTONS.map((item) => {
            const { icon, onClick, ...reset } = item;
            return (
              <View key={item.icon} className="btn" onClick={onClick}>
                <View className="btn-wrapper">
                  <View className="flex-center">
                    <AtIcon
                      className="iconfont"
                      prefixClass="icon"
                      value={icon}
                      {...reset}
                    />
                    <Text className="margin-left-1x">{item.text}</Text>
                  </View>
                  <AtIcon
                    className="iconfont"
                    prefixClass="icon"
                    value="left"
                    size={20}
                    color="#dddddd"
                  />
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <AtModal isOpened={open} onClose={handleClose}>
        <Image mode="widthFix" className="img" src={url} showMenuByLongpress />
      </AtModal>
    </View>
  );
};

export default Index;
