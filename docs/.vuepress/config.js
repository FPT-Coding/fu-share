module.exports = {
  title: 'FU Share',
  description: 'Sinh viên FPT - Học thật, Thi thật, Thành công thật',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo-fu-share.png',
      },
    ],
  ],
  themeConfig: {
    lastUpdated: true,
    sidebar: [
      ['../fpt/1-hoc-tap/', '1. Học tập'],
      ['../fpt/2-an-uong/', '2. Ăn uống'],
      ['../fpt/3-cho-o/', '3. Chỗ ở'],
      ['../fpt/4-vui-choi/', '4. Vui chơi'],
    ],
    nav: [
      {
        text: 'Giới thiệu',
        link: '/',
      },
      {
        text: 'Học tập',
        link: 'https://fushare.netlify.app/fpt/1-hoc-tap/',
      },
      {
        text: 'Ăn uống',
        link: 'https://fushare.netlify.app/fpt/2-an-uong/',
      },
      {
        text: 'Chỗ ở',
        link: 'https://fushare.netlify.app/fpt/3-cho-o/',
      },
      {
        text: 'Vui chơi',
        link: 'https://fushare.netlify.app/fpt/4-vui-choi/',
      },
    ],
    repoLabel: 'Github',
    displayAllHeaders: true,
  },
}
