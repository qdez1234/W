export default
	[
		{
			path: '/member',
			component: resolve => require(['@/views/home'], resolve),
			name: '会员',
			menuShow: true,
			meta: {
				keepAlive: true
			},
			leaf: true,
			iconCls: 'iconfont icon-books',
			children: [{
				path: '/member',
				component: resolve => require(['@/views/member/home'], resolve),
				name: '会员管理',
				menuShow: true,
				meta: {
					keepAlive: true
				},
				redirect: '/member/login',
				children: [
				{
						path: '/member/login',
						component: resolve => require(['@/views/member/login'], resolve),
						name: '登陆日志',
						meta: {
							keepAlive: true
						}
				},
				{
					path: '/member/index',
					component: resolve => require(['@/views/member/index'], resolve),
					name: '会员列表',
					menuShow: true,
					meta: {
						keepAlive: true
					}
				},
				{
					path: '/member/aduitlist',
					component: resolve => require(['@/views/member/auditlist'], resolve),
					name: '待审核',
					meta: {
						keepAlive: true
					}
				},
				{
					path: '/member/custormerpublish',
					component: resolve => require(['@/views/member/custormerpublish'], resolve),
					name: '用户发布',
					meta: {
						keepAlive: true
					}
				}
				]
			},

			{
				path: '/member/group',
				component: resolve => require(['@/views/member/group'], resolve),
				name: '会员分组',
				menuShow: true,
				meta: {
					keepAlive: true
				},
				redirect: '/member/groupmember',
				children: [
					{
						path: '/member/groupmember',
						component: resolve => require(['@/views/member/groupmember'], resolve),
						name: '会员分组明细',
						menuShow: true,
						meta: {
							keepAlive: true
						}
					},
					{
						name: "禁售商品",
						component: resolve => require(['@/views/member/jsgoodslist'], resolve),
						path: "/member/jsgoodslist",
						menuShow: true,
						meta: {
							keepAlive: true
						}
					}
				]
			}

			]
		}
	]
