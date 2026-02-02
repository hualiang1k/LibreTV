const CUSTOMER_SITES = {
      qiqi: {
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
