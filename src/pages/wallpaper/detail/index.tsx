import React, { useState, useEffect } from 'react';
import { Image } from '@tarojs/components';
import Taro, { getCurrentInstance, getSystemInfoSync } from '@tarojs/taro';
import VirtualList from '@tarojs/components/virtual-list';
import { getAppsByCategory } from '../../../services';
import { ImageDetail } from '../../../types';

import './index.scss';

type DetailProps = {};

interface Pic {
  id: number;
  img_1024_768: string;
  img_1280_800: string;
  img_1280_1024: string;
  img_1366_768: string;
  img_1440_900: string;
  img_1600_900: string;
}

interface ItemData {
  data: Pic[];
  index: number;
}

const Detail: React.FC<DetailProps> = function () {
  // 详细数据列表
  const [details, setDetail] = useState<ImageDetail[]>([]);
  // 加载状态
  const [loading, setLoading] = useState<boolean>(false);
  // 总数据
  const [total, setTotal] = useState<number>(0);
  // 系统信息，用于获取屏幕宽高
  const [systemInfo, setSystemInfo] = useState<getSystemInfoSync.Result>();
  // 当前壁纸分类id
  const [typeId, setTypeId] = useState<string>('');

  const getDetail = async (cid, offset) => {
    return await getAppsByCategory({
      cid,
      start: offset,
    });
  };

  useEffect(() => {
    setSystemInfo(Taro.getSystemInfoSync())
    const { router } = getCurrentInstance();
    const { id, name } = router?.params || {};
    if (name) {
      Taro.setNavigationBarTitle({
        title: name,
      });
    }
    if (id) {
      setTypeId(id);
      getDetail(id, 0).then((res) => {
        const { data, total: totalCount } = res;
        setDetail(data);
        setTotal(Number(totalCount));
      });
    }
  }, []);

  const currentLen = details.length;

  // 滚动触底，加载数据
  const listReachBottom = () => {
    Taro.showLoading();
    setLoading(true);
    getDetail(typeId, currentLen)
      .then((res) => {
        const { data } = res;
        setDetail(details.concat(data));
      })
      .finally(() => {
        setLoading(false);
        Taro.hideLoading();
      });
  };

  const { windowHeight = 0, windowWidth = 0 } = systemInfo || {};
  // 图片的分辨率，在对应宽度下的宽度。
  const imgHeight = Math.ceil((900 / 1600) * windowWidth);

  return (
    <VirtualList
      className="detail-wrapper"
      height={windowHeight}
      itemData={details}
      itemCount={total}
      itemSize={imgHeight}
      width="100%"
      onScroll={({ scrollDirection, scrollOffset }) => {
        if (
          // 避免重复加载数据
          !loading &&
          // 只有往前滚动我们才触发
          scrollDirection === 'forward' &&
          // https://nervjs.github.io/taro-docs/docs/virtual-list
          scrollOffset > (currentLen - windowHeight / imgHeight) * imgHeight
        ) {
          listReachBottom();
        }
      }}
    >
      {
        (item: ItemData): any => {
          const { data, index } = item;
          const { id, img_1600_900 } = data[index] || {};
          return (
            <Image
              mode="widthFix"
              key={id}
              style={{
                width: windowWidth,
                height: imgHeight
              }}
              src={img_1600_900}
              // 开启长按图片显示识别小程序码菜单
              showMenuByLongpress
              // 图片懒加载。
              lazyLoad
            />
          );
        }
      }
    </VirtualList>
  );
};

export default Detail;
