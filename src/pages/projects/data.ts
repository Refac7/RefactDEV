import type { ProjectData } from '@/types'

export const projectData: ProjectData = [
  {
    title: '正在开发',
    projects: [],
  },
  {
    title: 'Minecraft 开发',
    projects: [
      {
        text: 'Bukkit 插件服（计划内的）',
        description: '纯插件驱动，原版客户端使用',
        icon: 'i-carbon-beta',
        href: '/',
      },
      {
        text: 'Neotec. 整合包',
        description: 'Neotec整合包平台是一个以开源、自由、社区驱动为核心的Minecraft模组整合服务。',
        icon: 'i-carbon-box',
        href: 'https://www.neotec.uk/modpacks.html',
      },
    ],
  },
  {
    title: '前端开发',
    projects: [
      {
        text: 'RefactX',
        description: '一个干净的静态博客，原始版本来自 Kieran Wang',
        icon: 'i-carbon-LogoXing',
        href: 'https://www.refact.cc/',
      },
      {
        text: ' MC服务器状态嵌入式组件',
        description: '基于 React 开发了独立的 Vercel 应用，通过 URL 嵌入状态页面，无需修改网站源码。',
        icon: 'i-carbon-Plug',
        href: 'https://github.com/msrefs/minecraft-status-widget',
      },
      {
        text: 'NotionNext主题 - Neo',
        description: '基于内置的 Heo 主题进行了大量修改，是现代化的博客设计方案（项目已归档）',
        icon: 'i-carbon-Terminal',
        href: 'https://github.com/msrefs/WebsiteKit/',
      },
    ],
  },
  {
    title: 'Neotec. 支持',
    projects: [
      {
        text: 'Neotec. 主站',
        description: '基于 Vitepress 构建，储存官方文档',
        icon: 'i-carbon-Terminal',
        href: 'https://www.neotec.uk/',
      },
      {
        text: 'Neotec. 博客',
        description: '基于 NotionNext 构建，数据储存在 Notion 数据库',
        icon: 'i-carbon-Terminal',
        href: 'https://blog.neotec.uk/',
      },
      {
        text: 'Neotec. 文件中心',
        description: '基于 Alist 构建，部署在 Neotec.信息交换服务器，用于数据对接',
        icon: 'i-carbon-FolderOpen',
        href: 'https://file.neotec.uk/',
      },
      {
        text: 'Neotec. 服务状态（目前不可用）',
        description: '基于 Uptimekuma 构建，部署在 Neotec.信息交换服务器，用于服务状态查询',
        icon: 'i-carbon-Checkmark',
        href: '/',
      },
    ],
  },
  {
    title: '终止开发',
    projects: [
      {
        text: 'Portfolio',
        description: '基于 Astro 的个人介绍主页，因文件树混乱被废弃',
        icon: 'i-carbon-Terminal',
        href: 'https://github.com/msrefs/Portfolio/',
      },
    ],
  },
]
