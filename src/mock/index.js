import Mock from 'mockjs'
const newsList = Mock.mock({
    "newsList|10": [{
        "title": "@cword(5,10)",
        "type": "全体广播",
        "state": "已发布 ",
        'time': '@date(MM-dd)'
    }]
})
Mock.mock('/news', 'post', () => {
    return {
        status: 200,
        message: '获取成功',
        list: newsList,
    }
})


Mock.mock('/renew', 'post', () => {
    return {
        status: 200,
        message: '获取成功',
        list: renewList,
    }
})
const { renewList } = Mock.mock({
    "renewList|10-12": [{
        "renew|50-999": 1
    }]
})
Mock.mock('/ranking', 'post', () => {
    return {
        status: 200,
        message: '获取成功',
        list: rankingList,
    }
})
const { rankingList } = Mock.mock({
    "rankingList|17": [{
        "province2": "@province()",
        "num|10000-99999": 1
    }]
})
Mock.mock('/memberinfo', 'post', () => {
    return {
        status: 800,
        message: '获取成功',
        list: infoList,
    }
})
const { infoList } = Mock.mock({
    "infoList|20-30": [{
        babyName: "@cname()",
        milkname: "@cword(2)",
        "old|10-30": 1,
        "tel|11000000000-19999999999": 1,
        recommend: "无",
        guidance: "LUCK",
        "source|1": ["网络", "线下", "推荐"],
        data: "@date(2022.MM.dd)",
        parentsName: "@cname()",
    }, ],
});
Mock.mock('/photo', 'get', () => {
    return {
        status: 200,
        message: '获取成功',
        photo: newphoto
    }
})
const { newphoto } = Mock.mock({
    "newphoto|4": [{
        "childrenphoto|1": ["http://n.sinaimg.cn/front/352/w640h512/20181227/Twrw-hqtwzec9443704.jpg",
            "https://img10.360buyimg.com/n1/jfs/t1/163333/22/11460/123604/60487847E967359ae/bfd4b75446e554cc.jpg",
            "https://img1.baidu.com/it/u=4243364110,3607712833&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=536",
            "https://p0.itc.cn/q_70/images03/20210916/ab34d6748c5e4e5eb9a553d936d54341.jpeg",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F07%2F20210807160519_1e5c8.thumb.1000_0.webp&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1675309635&t=0e3cab9c6d4e3a477152c37b9bb494b6",
            "https://img1.baidu.com/it/u=1190268859,4294909522&fm=253&fmt=auto&app=138&f=PNG?w=487&h=547",
            "https://img2.baidu.com/it/u=3606457269,2113045280&fm=253&fmt=auto&app=138&f=PNG?w=500&h=663",
            "https://inews.gtimg.com/newsapp_bt/0/13449119525/1000",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202104%2F23%2F20210423215406_29312.gif&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1675309850&t=348643364968409fe7bcde6cf55a31f6",
            // "https://tvax1.sinaimg.cn/large/006mowZngy1fy3w55hizog302701zjsm.gif",
            "https://tukuimg.bdstatic.com/scrop/2ee7f612c4216934eeab2d4a0a3ba432.gif",
            "https://inews.gtimg.com/newsapp_match/0/13562443664/0",
            "https://img1.baidu.com/it/u=1880918667,389145648&fm=253&fmt=auto&app=138&f=GIF?w=495&h=446",
            // "https://tvax1.sinaimg.cn/large/006mowZngy1fy3w582t80g303o028di3.gif",
            "https://img.mp.itc.cn/upload/20170425/75ebe65762c94286905a982fa8676f0a_th.jpg",
            "https://img.soogif.com/ZH8ArEAWWJxxspawSoVZaON0hSqDjFlN.gif",


        ],

        // "classphoto|1": ["https://file.moyublog.com/d/file/2021-01-30/8d1603db3f8ed83c4a623714abb632f8.jpg",
        //     "https://n.sinaimg.cn/sinakd10109/427/w750h477/20200505/ed1b-iteyfwv1957813.jpg",
        //     "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F19%2F20150919234106_ys4rR.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1675050610&t=7a134ff0bf342f6c833e22b2bef3330a",
        //     "https://img2.baidu.com/it/u=3264927405,390419989&fm=253&fmt=auto&app=138&f=JPEG?w=780&h=387",
        //     "https://pic.3gbizhi.com/2020/0914/thumb_1680_0_20200914111300760.jpeg"
        // ]
    }]
})
Mock.mock('/classphoto', 'get', () => {
    return {
        status: 200,
        message: '获取成功',
        photo: classphoto
    }
})
const { classphoto } = Mock.mock({
    "classphoto|2": [{
        "classphoto|1": ["https://file.moyublog.com/d/file/2021-01-30/8d1603db3f8ed83c4a623714abb632f8.jpg",
            "https://n.sinaimg.cn/sinakd10109/427/w750h477/20200505/ed1b-iteyfwv1957813.jpg",
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F19%2F20150919234106_ys4rR.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1675050610&t=7a134ff0bf342f6c833e22b2bef3330a",
            "https://img2.baidu.com/it/u=3264927405,390419989&fm=253&fmt=auto&app=138&f=JPEG?w=780&h=387",
            "https://pic.3gbizhi.com/2020/0914/thumb_1680_0_20200914111300760.jpeg",
            "https://img.soogif.com/j6DOTiNkznr1w7p2AwqLF1cwpYZSSc10.gif",
            "https://img.soogif.com/B5zQARLWXHOdPGTIIIUTfSSt8Z98xhFu.gif",
            "https://img.zcool.cn/community/018ef059b20f43a801211d25271a70.gif",



        ]
    }]
})
const { MessageCenter } = Mock.mock({
    "MessageCenter|300-500": [{
        "type|1": ["系统消息", "公众消息", "校长消息"],
        "theme|1": ["首课提醒", "首课再次提醒", "旷课提醒", "升班提示"],
        "address": "@cname()",
        'tasktime': '@date(2022.MM.dd hh.mm)',
        'completetime': '@date(2022.12.dd hh.mm)',
        "sponsor|1": ['杨', '祝', '方'],
        "executor|1": ['杨', '祝', '方'],
        "state|1": ["完成", "未完成"],
        "priority|1": ["优先", "落后"],
        "class|1": ["非洲歌曲", "亚洲歌曲", "流行歌曲", "欧美歌曲"],
        "babyname|1": "@cname()",
        "old|10-30": 1,
        "classstar": "@date(hh.00)",
        "classend": "@date(hh.00)",
        "lastexercise": "@date(MM 月 dd 日)",
        "type1|1": ["L1", "L2", "L3"],
        "index|+1": 1
    }]
})

//
var getQuery = (url, name) => {
    console.log(url, name);
    const index = url.indexOf("?");
    if (index !== -1) {
        const queryStrArr = url.substr(index + 1).split("&");
        for (var i = 0; i < queryStrArr.length; i++) {
            const itemArr = queryStrArr[i].split("=");
            // console.log(itemArr);
            if (itemArr[0] === name) {
                return itemArr[1];
            }
        }
    }
    return null;
};

Mock.mock(/\/api\/get\/MessageCenter/, "get", (options) => {
    // 获取传递参数pageindex，pagesize
    const pageindex = getQuery(options.url, "pageindex");
    const pagesize = getQuery(options.url, "pagesize");
    // console.log(pageindex);
    // console.log(pagesize);
    const start = (pageindex - 1) * pagesize;
    const end = pagesize * pageindex;
    const totalPage = Math.ceil(MessageCenter.length / pagesize);
    // console.log(totalPage);
    // console.log(pageindex);
    //  pageindex:1 pagesize:10 返回0-9条数据  2-10-（10-19） 3-10（20-29）
    // 数据的起始位置：（pageindex-1）*pagesize 结束位置：pageindex*pagesize
    const list = pageindex > totalPage ? [] : MessageCenter.slice(start, end);
    return {
        status: 300,
        message: "获取成功",
        list: list,
        total: totalPage,
        main: MessageCenter,
        pageindex: pageindex
    };
});


// for (let item of MessageCenter) {}

Mock.mock(/\/api\/get\/query1/, "get", (options) => {
    const theme = getQuery(options.url, "theme");
    const address = getQuery(options.url, "address");
    const state = getQuery(options.url, "state");
    const launch = getQuery(options.url, "launch");
    const implement = getQuery(options.url, "implement");
    const pageindex = getQuery(options.url, "pageindex");
    const pagesize = getQuery(options.url, "pagesize");
    let newlist = MessageCenter
    if (theme) {
        newlist = newlist.filter((item) => {
            let flag = revertUTF8(theme) == item.theme
            return flag;
        });
    }
    if (address) {
        newlist = newlist.filter((item) => {
            let flag2 = revertUTF8(address) == item.address
            return flag2;
        });
    }
    if (state) {
        newlist = newlist.filter((item) => {
            let flag2 = revertUTF8(state) == item.state
            return flag2;
        });
    }
    if (implement) {
        newlist = newlist.filter((item) => {
            let flag2 = revertUTF8(implement) == item.executor
            return flag2;
        });
    }
    if (launch) {
        newlist = newlist.filter((item) => {
            let flag2 = revertUTF8(launch) == item.sponsor
            return flag2;
        });
    }
    const start = (pageindex - 1) * pagesize;
    const end = pagesize * pageindex;
    const totalPage = Math.ceil(newlist.length / pagesize);
    const list = pageindex > totalPage ? [] : newlist.slice(start, end);
    return {
        status: 300,
        message: "获取成功",
        list: list,
        total: totalPage,
        main: MessageCenter,
        pageindex: pageindex
    };
})

Mock.mock(/\/api\/get\/query2/, "get", (options) => {
    const class1 = getQuery(options.url, "class");
    const address = getQuery(options.url, "address");
    const state = getQuery(options.url, "state");
    const launch = getQuery(options.url, "launch");
    const implement = getQuery(options.url, "implement");
    const pageindex = getQuery(options.url, "pageindex");
    const pagesize = getQuery(options.url, "pagesize");
    let newlist = MessageCenter
    if (class1) {
        newlist = newlist.filter((item) => {
            console.log(class1);
            let flag = revertUTF8(class1) == item.class
            return flag;
        });
    }
    if (address) {
        newlist = newlist.filter((item) => {
            let flag2 = revertUTF8(address) == item.address
            return flag2;
        });
    }
    if (state) {
        newlist = newlist.filter((item) => {
            let flag2 = revertUTF8(state) == item.state
            return flag2;
        });
    }
    if (implement) {
        newlist = newlist.filter((item) => {
            let flag2 = revertUTF8(implement) == item.executor
            return flag2;
        });
    }
    if (launch) {
        newlist = newlist.filter((item) => {
            let flag2 = revertUTF8(launch) == item.sponsor
            return flag2;
        });
    }
    const start = (pageindex - 1) * pagesize;
    const end = pagesize * pageindex;
    const totalPage = Math.ceil(newlist.length / pagesize);
    const list = pageindex > totalPage ? [] : newlist.slice(start, end);
    return {
        status: 300,
        message: "获取成功",
        list: list,
        total: totalPage,
        main: MessageCenter,
        pageindex: pageindex
    };
})


// utf-8转义字符串
function revertUTF8(szInput) {
    var x, wch, wch1, wch2, uch = "",
        szRet = "";
    for (x = 0; x < szInput.length; x++) {
        if (szInput.charAt(x) == "%") {
            wch = parseInt(szInput.charAt(++x) + szInput.charAt(++x), 16);
            if (!wch) { break; }
            if (!(wch & 0x80)) {
                wch = wch;
            } else if (!(wch & 0x20)) {
                x++;
                wch1 = parseInt(szInput.charAt(++x) + szInput.charAt(++x), 16);
                wch = (wch & 0x1F) << 6;
                wch1 = wch1 & 0x3F;
                wch = wch + wch1;
            } else {
                x++;
                wch1 = parseInt(szInput.charAt(++x) + szInput.charAt(++x), 16);
                x++;
                wch2 = parseInt(szInput.charAt(++x) + szInput.charAt(++x), 16);
                wch = (wch & 0x0F) << 12;
                wch1 = (wch1 & 0x3F) << 6;
                wch2 = (wch2 & 0x3F);
                wch = wch + wch1 + wch2;
            }
            szRet += String.fromCharCode(wch);
        } else {
            szRet += szInput.charAt(x);
        }
    }
    return (szRet);
}

// Mock.mock('/api/add/MessageCenter', 'post', (options) => {
//     const body = JSON.parse(options.body)
//     MessageCenter.push(Mock.mock({
//         "type": body.type,
//         "theme": body.theme,
//         "object": body.object,
//         'tasktime': body.tasktime,
//         'completetime': body.completetime,
//         "sponsor": body.sponsor,
//         "executor": body.executor,
//         "state": body.state,
//         "priority": body.priority,
//     }))
//     return
// })