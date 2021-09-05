import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, Image, ScrollView } from '@tarojs/components';
import { getAllCategories } from '../../services';
import { IMAGE_MAP } from '../../utils/constants';
import { Category } from '../../types';

import './index.scss';

type WallpaperProps = {};

const Wallpaper: React.FC<WallpaperProps> = function() {
  const [list, setList] = useState<Category[]>([]);

  useEffect(() => {
    const func = async () => {
      const { data } = await getAllCategories();
      setList(Object.values(data));
    };
    func();
  }, []);

  const handleClick = (item: Category) => {
    // 跳转到目的页面，在当前页面打开
    Taro.navigateTo({
      url: `/pages/wallpaper/detail/index?id=${item.id}&name=${item.name}`
    });
  };

  return (
    <View>
      {/* <navbar /> */}
      <Text className="title">热门分类</Text>
      <ScrollView>
        <View className="at-row wrap">
          {list.map(item => {
            return (
              <View
                key={item.id}
                className="at-col at-col-6 img-item"
                onClick={() => handleClick(item)}
              >
                <Image
                  className="img"
                  mode="widthFix"
                  src={IMAGE_MAP[item.id]}
                  lazyLoad
                />
                <Text className="text">{item.name}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Wallpaper;
