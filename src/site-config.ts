export const siteConfig = {
  author: 'Refact',
  title: 'RefactX Project',
  subtitle: 'RefactX Project, supports Vue and UnoCSS.',
  description: 'A Minimal, SEO-friendly portfolio and blog theme for Astro.',
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  email: 'refs@aliyun.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/msrefs/RefactX',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: 'Bilibili',
      href: 'https://space.bilibili.com/441325177',
      icon: 'i-simple-icons-bilibili',
      header: 'i-simple-icons-bilibili',
    },
  ],
  header: {
    logo: {
      src: '/favicon.svg',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: '文章',
        href: '/blog',
      },
      {
        text: '笔记',
        href: '/blog/notes',
      },
      {
        text: '杂谈',
        href: '/blog/talks',
      },
      {
        text: '项目',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: '文章',
        href: '/blog',
      },
      {
        text: '笔记',
        href: '/blog/notes',
      },
      {
        text: '杂谈',
        href: '/blog/talks',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: 'Posts Props',
        href: '/posts-props',
      },
      {
        text: 'Markdown Style',
        href: '/md-style',
      },
      {
        text: 'GitHub Repository',
        href: 'https://github.com/msrefs/RefactX',
      },
    ],
  },
}

export default siteConfig
