const CUSTOMER_SITES = {
	feimao: {
		api: 'http://肥猫.com',
		name: '🚀1-肥猫',
		detail: 'http://肥猫.com',
	},
    fantaiying:{
            api: 'http://www.饭太硬.com/tv/',
            name: '🚀2-饭太硬推荐',
    },
    	4k: {
		api: 'http://xhztv.top/4k.json',
		name: '🚀3-小盒子4K',
	},
	jiangkang: {
		api: 'https://gitlab.com/noimank/tvbox/-/raw/main/tvbox1.json',
		name: '🚀4-健康家用',
	},
	xiaoer: {
		api: 'http://tvbox.xn--4kq62z5rby2qupq9ub.top/',
		name: '🚀5-王二小',
	},
	FongMI: {
		api: 'https://gh-proxy.com/raw.githubusercontent.com//gaotianliuyun/gao/master/0827.json',
		name: '🚀6-FongMI线路',
	},
	xiangya: {
		api: 'https://gh-proxy.org/https:/raw.githubusercontent.com/xyq254245/xyqonlinerule/main/XYQTVBox.json',
		name: '🚀7-香雅情',
	},
	qiaoshe: {
		api: 'http://pandown.pro/tvbox/tvbox.json',
		name: '🚀8-巧计线路',
	},
	ouge: {
		api: 'http://tv.nxog.top/m/',
		name: '🚀9-欧歌4K',
	},
	gaoshan: {
		api: 'https://gh-proxy.com/raw.githubusercontent.com/gaotianliuyun/gao/master/js.json',
		name: '🚀10-高天流云js',
	},
	gaosgan2: {
		api: 'https://gh-proxy.com/raw.githubusercontent.com/gaotianliuyun/gao/master/XYQ.json',
		name: '🚀11-高天流云 XYQ',
	},
	yingtan: {
		api: 'http://www.lyyytv.cn/yt/yt.json',
		name: '🚀12-影探线路',
	},
	nanfeng: {
		api: 'https://gh-proxy.com/https://raw.githubusercontent.com/yoursmile66/TVBox/main/XC.json',
		name: '🚀13-南风',
	},
	wuyi: {
		api: 'https://www.wya6.cn/tv/yc.json',
		name: '🚀14-无意线路',
	},
    	ruyi: {
		api: 'https://cj.rycjapi.com/api.php/provide/vod',
		name: '🚀15-如意资源',
	},
    
    

};

// 调用全局方法合并
if (window.extendAPISites) {
	window.extendAPISites(CUSTOMER_SITES);
} else {
	console.error("错误：请先加载 config.js！");
}
