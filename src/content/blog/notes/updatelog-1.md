---
title: 更新日志 V1.1.0 | Changelog V1.1.0
description: RefactX 版本更新日志 | Version release notes for RefactX
date: 2025-7-20
lang: zh-CN,en-US
tag: 日志
---

## 功能优化 | Features

### 用户界面改进 | UI Enhancements

- **顶部导航栏毛玻璃效果**
  重构顶部导航栏视觉设计，采用高透明度磨砂玻璃材质（Acrylic Material），适配亮色/暗色主题，提升现代感与层级表现。
  *Optimized header with acrylic blur effect, supporting light/dark themes for
    improved visual hierarchy.*

- **PC端交互细节升级**
  页面切换按钮新增以下交互效果：
  *Enhanced PC interaction with the following updates:*
  - 鼠标悬停时显示动态下划线动画（CSS `transition: underline 0.3s ease-out`）
    *Hover-triggered underline animation with smooth transition*
  - 活动状态按钮增加微投影效果
    *Added subtle shadow for active-state indicators*

- **项目板块内容扩充**
  为"项目"分类新增：
  *Expanded "Projects" section with:*
  - 8 组标准化图标（SVG 格式，分辨率 24x24px）
    *8 standardized SVG icons (24x24px resolution)*
  - 补充 12 个示例项目描述及元数据
    *12 sample projects with metadata descriptions*

### 动画与交互优化 | Animation & Interaction

- **移动端抽屉组件**
  *Mobile drawer component updates:*
  - 修复 Safari 浏览器下收起动画的闪烁问题（原因为 `will-change` 属性冲突）
    *Fixed animation flickering in Safari
    (caused by `will-change` property conflict)*
  - 优化过渡曲线（`cubic-bezier(0.33, 1, 0.68, 1)`）
    *Refined transition timing function*
  - 增加 1px 描边分隔线提升可读性
    *Added 1px border for better visual separation*

## 问题修复 | Bug Fixes

- **布局问题**
  *Layout issues resolved:*
  - 修正 Header 背景在 `scrollY=0` 时未能完全隐藏的问题（涉及 `useEffect` 依赖项缺失）
    *Fixed header background visibility at page top
    (missing `useEffect` dependency)*
  - 调整移动端视口 meta 标签防止意外缩放
    *Adjusted viewport meta tag to prevent unwanted zooming*

- **本地化改进**
  *Localization improvements:*
  - 完成 89% 界面文本的汉化（剩余 11% 为技术术语保留英文）
    *Localized 89% UI texts (11% technical terms remain in English)*
  - 修正 RTL 语言布局下的排版错位
    *Fixed RTL text alignment issues*

- **其他关键修复**
  *Other critical fixes:*
  - 阻止了未认证用户的 GraphQL 缓存读取
    *Blocked unauthorized GraphQL cache access*
  - 修复 RSS 生成器中的日期格式化错误
    *Fixed date formatting in RSS generator*

## 已知问题 | Known Issues

- **#04 视觉层叠问题**
  *Visual stacking issue #04:*
  当同时满足以下条件时会出现组件透明化：
  *Component transparency occurs when:*
  1. Header 背景处于激活状态
     *Header background is active*
  2. 在移动抽屉内切换色彩主题
     *Switching color scheme within mobile drawer*
  **临时解决方案**：刷新页面或避免在抽屉内切换主题
  *Workaround: Refresh page or avoid theme switching in drawer*

---

### 版本元数据 | Version Metadata

```yaml
version: 1.1.0
release_date: 2025-7-20
compatibility:
  browsers: 'Chrome 112+, Firefox 108+, Safari 16.4+'
  node: '>=18.0.0'
deprecations:
  - Legacy color scheme API (迁移至 `useTheme()` Hook)
build_hash: a1b2c3d
