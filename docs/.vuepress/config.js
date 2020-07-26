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
        text: 'Thaycacac',
        link: 'https://thaycacac.github.io/fpt/',
      },
    ],
    repoLabel: 'Github',
    displayAllHeaders: true,
  },
}
