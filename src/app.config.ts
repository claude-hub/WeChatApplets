export default {
  pages: [
    // "pages/home/index",
    // "pages/css/index",
    // "pages/css/power/index",
    // "pages/questions/index",
    'pages/wallpaper/index',
    'pages/wallpaper/detail/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '前端进阶手册',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#8a8a8a',
    selectedColor: '#648bff',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      // {
      //   pagePath: "pages/home/index",
      //   iconPath: "./assets/images/home.png",
      //   selectedIconPath: "./assets/images/home_select.png",
      //   text: "首页"
      // },
      // {
      //   pagePath: "pages/questions/index",
      //   iconPath: "./assets/images/fly.png",
      //   selectedIconPath: "./assets/images/fly_select.png",
      //   text: "社区"
      // },
      {
        pagePath: 'pages/wallpaper/index',
        iconPath: './assets/images/camera.png',
        selectedIconPath: './assets/images/camera_select.png',
        text: '壁纸'
      },
      {
        pagePath: 'pages/user/index',
        iconPath: './assets/images/user.png',
        selectedIconPath: './assets/images/user_select.png',
        text: '我的'
      }
    ]
  }
};
