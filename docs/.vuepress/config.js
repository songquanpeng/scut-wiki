module.exports = {
  dest: "build",
  base: '/',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-141101198-7' // UA-00000000-0
      }
    ]
  ],
  title: '华南理工大学 Wiki',
  description: '非官方 WIKI',
  keywords: "华南理工大学，wiki，百科，SCUT，scut，South China University of Technology，华工",
  themeConfig: {
    sidebarDepth: 2,
    smoothScroll: true,
    repo: 'songquanpeng/scut-wiki',
    editLinks: true,
    editLinkText: '编辑本页面',
    docsDir: 'docs',
    lastUpdated: '上次更新',
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '生活',
        link: '/life/'
      },
      {
        text: '学习',
        link: '/study/'
      },
      {
        text: '其他',
        link: '/others/'
      },
      {
        text: '关于',
        link: '/about/'
      }
    ],
    sidebar: {
      "/study/": [
        {
          title: '本科生',
          path: '/study/本科生'
        },
        {
          title: '研究生',
          path: '/study/研究生'
        }
      ],
      "/research/": [
        {
          title: '计算机科学与工程学院',
          path: '/research/计算机科学与工程学院'
        }, {
          title: '软件学院',
          path: '/research/软件学院'
        }],
      "/life/": [
        {
          title: '通用',
          path: '/life/通用/',
          collapsable: true,
          children:[
            {
              title: '校园网',
              path:'/life/通用/校园网'
            }
          ]
        },
        {
          title: '五山校区',
          path: '/life/五山校区/',
          collapsable: true
        },
        {
          title: '大学城校区',
          path: '/life/大学城校区/',
          collapsable: true
        },
        {
          title: '国际校区',
          path: '/life/国际校区/',
          collapsable: true
        }
      ]
    }
  }
}