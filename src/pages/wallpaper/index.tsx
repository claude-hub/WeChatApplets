import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { getAllCategories } from "../../services";

import "./index.scss";

type WallpaperProps = {};

const Wallpaper: React.FC<WallpaperProps> = function() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const func = async () => {
      const { data } = await getAllCategories();
      console.log("==", data);
      setList(Object.values(data));
    };
    func();
  }, []);

  return (
    <View>
      <Text>
        {list?.map(item => item.name)}
      </Text>
    </View>
  );
};

export default Wallpaper;

// alias: ""
// create_time: "2011-10-29 17:49:12"
// id: "5"
// mobile_hidden: "0"
// name: "游戏壁纸"
// order_createtime_hidden: "0"
// order_num: "74"
// pid: "0"
// pjt: "zhuomianskin"
// tag: ""
