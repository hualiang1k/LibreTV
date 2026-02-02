const CUSTOMER_SITES = {
      qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
             "api": "http://www.饭太硬.com/tv/",
            "name": "🚀2-饭太硬推荐",
    },
feimao: {
            "api": "http://肥猫.com",
            "name": "🚀1-肥猫",
        }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
