module.exports = {
  dest: "build",
  base: '/',
  title: '华南理工大学 Wiki',
  description: '非官方 WIKI',
  keywords: "",
  themeConfig: {
    sidebarDepth: 2,
    smoothScroll: true,
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
        text: '研究',
        link: '/research/'
      },
      {
        text: '学习',
        link: '/study/'
      },
      {
        text: '关于',
        link: '/about/'
      },
      {
        text: 'Github',
        link: 'https://github.com/songquanpeng/scut-wiki'
      },
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
          collapsable: true
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