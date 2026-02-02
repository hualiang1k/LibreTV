const CUSTOMER_SITES = {
	feimao: {
		api: 'http://肥猫.com',
		name: '🚀1-肥猫',
		detail: 'http://肥猫.com',
	},
	fantaiying: {
		api: 'http://www.饭太硬.com/tv/',
		name: '🚀2-饭太硬推荐',
	},
	4 k: {
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
		name: '🚀14-无意线路"',
	},
	dyttzy: {
		api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
		name: '电影天堂资源',
		detail: 'http://caiji.dyttzyapi.com',
	},
	ruyi: {
		api: 'https://cj.rycjapi.com/api.php/provide/vod',
		name: '如意资源',
	},
	bfzy: {
		api: 'https://bfzyapi.com/api.php/provide/vod',
		name: '暴风资源',
	},

	tyyszy: {

		api: 'https://tyyszy.com/api.php/provide/vod',

		name: '天涯资源',

	},

	xiaomaomi: {

		api: 'https://zy.xmm.hk/api.php/provide/vod',

		name: '小猫咪资源',

	},

	ffzy: {

		api: 'http://ffzy5.tv/api.php/provide/vod',

		name: '非凡影视',

		detail: 'http://ffzy5.tv',

	},

	heimuer: {

		api: 'https://json.heimuer.xyz/api.php/provide/vod',

		name: '黑木耳',

		detail: 'https://heimuer.tv',

	},

	zy360: {

		api: 'https://360zy.com/api.php/provide/vod',

		name: '360资源',

	},

	iqiyi: {

		api: 'https://www.iqiyizyapi.com/api.php/provide/vod',

		name: 'iqiyi资源',

	},

	wolong: {

		api: 'https://wolongzyw.com/api.php/provide/vod',

		name: '卧龙资源',

	},

	hwba: {

		api: 'https://cjhwba.com/api.php/provide/vod',

		name: '华为吧资源',

	},

	jisu: {

		api: 'https://jszyapi.com/api.php/provide/vod',

		name: '极速资源',

		detail: 'https://jszyapi.com',

	},

	dbzy: {

		api: 'https://dbzy.tv/api.php/provide/vod',

		name: '豆瓣资源',

	},

	mozhua: {

		api: 'https://mozhuazy.com/api.php/provide/vod',

		name: '魔爪资源',

	},

	mdzy: {

		api: 'https://www.mdzyapi.com/api.php/provide/vod',

		name: '魔都资源',

	},

	zuid: {

		api: 'https://api.zuidapi.com/api.php/provide/vod',

		name: '最大资源'

	},

	yinghua: {

		api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',

		name: '樱花资源'

	},

	baidu: {

		api: 'https://api.apibdzy.com/api.php/provide/vod',

		name: '百度云资源'

	},

	wujin: {

		api: 'https://api.wujinapi.me/api.php/provide/vod',

		name: '无尽资源'

	},

	wwzy: {

		api: 'https://wwzy.tv/api.php/provide/vod',

		name: '旺旺短剧'

	},

	ikun: {

		api: 'https://ikunzyapi.com/api.php/provide/vod',

		name: 'iKun资源'

	},

	lzi: {

		api: 'https://cj.lziapi.com/api.php/provide/vod/',

		name: '量子资源站'

	},
};

// 调用全局方法合并
if (window.extendAPISites) {
	window.extendAPISites(CUSTOMER_SITES);
} else {
	console.error("错误：请先加载 config.js！");
}
