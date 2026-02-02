const CUSTOMER_SITES = {
       feimao: {
            "url": "http://肥猫.com",
            "name": "🚀1-肥猫"
        },
        fantaiying:{
            "url": "http://www.饭太硬.com/tv/",
            "name": "🚀2-饭太硬推荐"
        },
          4k:{
            "url": "http://xhztv.top/4k.json",
            "name": "🚀3-小盒子4K"
        },
        jiangkang:{
            "url": "https://gitlab.com/noimank/tvbox/-/raw/main/tvbox1.json",
            "name": "🚀4-健康家用"
        },
        xiaoer:{
            "url": "http://tvbox.xn--4kq62z5rby2qupq9ub.top/",
            "name": "🚀5-王二小"
        },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
