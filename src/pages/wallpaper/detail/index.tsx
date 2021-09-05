import React, { useState, useEffect } from 'react';
import { ScrollView, Image } from '@tarojs/components';
import Taro, { getCurrentInstance } from '@tarojs/taro';
// import VirtualList from '@tarojs/components/virtual-list';
import { getAppsByCategory } from '../../../services';
import { ImageDetail } from '../../../types';

import './index.scss';

type DetailProps = {};

// const Row = React.memo(({ id, index, style, data }): any => {
//   return (
//     <View
//       id={id}
//       className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}
//       style={style}
//     >
//       Row {index} : {data[index]}
//     </View>
//   );
// });

const Detail: React.FC<DetailProps> = function () {
  const [details, setDetail] = useState<ImageDetail[]>([]);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [total, setTotal] = useState<number>(0);

  const getDetail = async (cid) => {
    return await getAppsByCategory({
      cid,
      start: 0,
    });
  };

  useEffect(() => {
    const { router } = getCurrentInstance();
    const { id, name } = router?.params || {};
    if (name) {
      Taro.setNavigationBarTitle({
        title: name,
      });
    }
    if (id) {
      getDetail(id).then((res) => {
        const { data } = res;
        setDetail(data);
        // setTotal(Number(totalCount));
      });
    }
  }, []);

  // const listReachBottom = () => {
  //   // Taro.showLoading();
  //   // setLoading(true);
  //   // setTimeout(() => {
  //   //   const { data } = this.state
  //   //   this.setState({
  //   //     data: data.concat(buildData(data.length))
  //   //   }, () => {
  //   //     this.loading = false;
  //   //     Taro.hideLoading()
  //   //   })
  //   // }, 1000)
  // };

  return (
    <ScrollView className="detail-wrapper">
      {/* <Text>{total}</Text> */}
      {details.map((item) => {
        return (
          <Image
            mode="widthFix"
            className="img"
            key={item.id}
            src={item.img_1600_900}
            showMenuByLongpress
          />
        );
      })}
    </ScrollView>

    // <VirtualList
    //   className="List"
    //   height={9999}
    //   itemData={details}
    //   itemCount={total}
    //   itemSize={233}
    //   width="100%"
    //   onScroll={({ scrollDirection, scrollOffset }) => {
    //     if (
    //       // 避免重复加载数据
    //       !loading &&
    //       // 只有往前滚动我们才触发
    //       scrollDirection === 'forward' &&
    //       // 5 = (列表高度 / 单项列表高度)
    //       // 100 = 滚动提前加载量，可根据样式情况调整
    //       scrollOffset > (total - 5) * +100
    //     ) {
    //       listReachBottom();
    //     }
    //   }}
    // >
    //   {Row}
    // </VirtualList>

    // <VirtualList
    //   height={500} /* 列表的高度 */
    //   width="100%" /* 列表的宽度 */
    //   itemData={details} /* 渲染列表的数据 */
    //   itemCount={total} /*  渲染列表的长度 */
    //   itemSize={100} /* 列表单项的高度  */
    // >
    //   {Row}
    // </VirtualList>
  );
};

export default Detail;
