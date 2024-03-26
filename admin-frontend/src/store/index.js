import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isShowLoading: false, // 全局 loading
        // 左侧菜单栏数据
        menuItems: [
            {
                name: 'home', // 要跳转的路由名称 不是路径
                size: 18, // icon大小
                type: 'md-home', // icon类型
                text: '概况', // 文本内容
            },
            {
                size: 18, // icon大小
                type: 'md-arrow-forward', // icon类型
                text: '新闻中心',
                url: 'http://localhost:8080/#/home',
                isExternal: true, // 外链 跳到一个外部的 URL 页面
            },
            {
                text: '控制中心',
                type: 'ios-cube',
                children: [
                    {
                        type: 'ios-bug-outline',
                        name: 'Spider',
                        text: '爬虫系统',
                    },
                    {
                        type: 'ios-git-network',
                        name: 'Recommend',
                        text: '推荐系统',
                    },
                ],
            },
            {
                text: '数据中心',
                type: 'ios-paper',
                children: [
                    {
                        type: 'ios-grid',
                        name: 'news',
                        text: '新闻数据',
                    },
                    {
                        type: 'md-people',
                        name: 'user',
                        text: '用户数据',
                    },
                    {
                        type: 'ios-chatbubbles-outline',
                        name: 'comments',
                        text: '评论数据',
                    },
                ],
            },
            {
                text: '账户中心',
                type: 'ios-contact',
                children: [
                    {
                        type: 'md-lock',
                        name: 'password',
                        text: '修改密码',
                    },
                    // {
                    //     size: 18, // icon大小
                    //     type: 'md-arrow-forward', // icon类型
                    //     text: '外链',
                    //     url: 'https://www.baidu.com',
                    //     isExternal: true, // 外链 跳到一个外部的 URL 页面
                    // },
                ],
            },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
        setLoading(state, isShowLoading) {
            state.isShowLoading = isShowLoading
        },
    },
})

export default store
