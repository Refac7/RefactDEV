<script lang="ts" setup>
import siteConfig from '@/site-config'
import { getLinkTarget } from '@/utils/link'
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const navLinks = siteConfig.header.navLinks || []
const isDrawerOpen = ref(false)

const socialLinks = computed(() => {
  return siteConfig.socialLinks.filter((link: Record<string, any>) => {
    if (link.header && typeof link.header === 'boolean') {
      return link
    }
    else if (link.header && typeof link.header === 'string') {
      link.icon = link.header.includes('i-') ? link.header : link.icon
      return link
    }
    else {
      return false
    }
  })
})

const { y: scroll } = useWindowScroll()

function toggleNavDrawer() {
  isDrawerOpen.value = !isDrawerOpen.value
  // 锁定/解锁页面滚动
  document.body.style.overflow = isDrawerOpen.value ? 'hidden' : ''
}
</script>

<template>
  <header
    id="header"
    :class="{
      'header-bg-blur': scroll > 20, // 明确设置基础色
    }"
    class="!fixed z-50 w-screen h-20 px-6 flex justify-between items-center relative transition-all duration-300 bg-white/80 dark:bg-dark-800/80"
  >
    <!-- 导航左侧 -->
    <div class="flex items-center h-full">
      <a href="/" mr-6 aria-label="Header Logo Image">
        <svg
          width="32"
          height="32"
          viewBox="0 0 945 945"
          class="logo-icon"
          aria-hidden="true"
        >
          <path d="M131 133.43 131 590.43 361 820.43 361 363.43 131 133.43z" />
          <path d="M818 363.43 361 363.43 131 133.43 588 133.43 818 363.43z" />
          <path d="M361 591.93 588.75 820.43 818 820.43 590.25 591.93 361 591.93z" />
          <path d="M818 363.43 590.25 591.93 361 591.93 588.75 363.43 818 363.43z" />
        </svg>
      </a>

      <!-- 桌面导航 -->
      <nav class="sm:flex hidden flex-wrap gap-x-6 position-initial flex-row">
        <a
          v-for="link in navLinks" :key="link.text"
          :aria-label="`${link.text}`"
          :target="getLinkTarget(link.href)"
          nav-link :href="link.href"
        >
          {{ link.text }}
        </a>
      </nav>

      <!-- 移动端菜单按钮 -->
      <button
        sm:hidden h-full flex items-center
        aria-label="Toggle navigation menu"
        class="focus:outline-none"
        @click="toggleNavDrawer"
      >
        <menu i-ri-menu-2-fill class="text-2xl" />
      </button>
    </div>

    <!-- 导航右侧 -->
    <div class="flex gap-x-6">
      <a
        v-for="link in socialLinks" :key="link.text"
        :aria-label="`${link.text}`"
        :class="link.icon"
        nav-link
        :target="getLinkTarget(link.href)"
        :href="link.href"
      />
      <a nav-link target="_blank" href="/rss.xml" i-ri-rss-line aria-label="RSS" />
      <ThemeToggle />
    </div>
  </header>

  <!-- 移动端菜单遮罩 -->
  <transition name="fade">
    <div
      v-if="isDrawerOpen"
      class="nav-drawer-mask fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      @click="toggleNavDrawer"
    />
  </transition>

  <!-- 移动端抽屉菜单 -->
  <transition name="slide">
    <aside
      v-if="isDrawerOpen"
      class="nav-drawer sm:hidden fixed h-[calc(100vh-env(safe-area-inset-bottom))] z-50 left-0 top-0 w-72 bg-main shadow-xl pb-[env(safe-area-inset-bottom)]"
    >
      <div class="p-6 flex flex-col h-full">
        <div class="flex justify-between items-center mb-8">
          <a href="/" aria-label="Header Logo Image">
            <svg
              width="32"
              height="32"
              viewBox="0 0 945 945"
              class="logo-icon"
              aria-hidden="true"
            >
              <path d="M131 133.43 131 590.43 361 820.43 361 363.43 131 133.43z" />
              <path d="M818 363.43 361 363.43 131 133.43 588 133.43 818 363.43z" />
              <path d="M361 591.93 588.75 820.43 818 820.43 590.25 591.93 361 591.93z" />
              <path d="M818 363.43 590.25 591.93 361 591.93 588.75 363.43 818 363.43z" />
            </svg>
          </a>
          <button
            aria-label="Close navigation menu"
            class="text-2xl focus:outline-none"
            @click="toggleNavDrawer"
          >
            <i i-ri-close-line />
          </button>
        </div>

        <nav class="flex-1 flex flex-col gap-6">
          <a
            v-for="link in navLinks" :key="link.text"
            :aria-label="`${link.text}`"
            :target="getLinkTarget(link.href)"
            class="text-xl font-medium px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            :href="link.href"
            @click="toggleNavDrawer"
          >
            {{ link.text }}
          </a>
        </nav>

        <div class="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700 pb-4">
          <div class="flex justify-center gap-6">
            <a
              v-for="link in socialLinks" :key="link.text"
              :aria-label="`${link.text}`"
              :class="link.icon"
              class="text-2xl hover:opacity-80 transition-opacity"
              :target="getLinkTarget(link.href)"
              :href="link.href"
            />
          </div>
        </div>
      </div>
    </aside>
  </transition>
</template>

<style scoped>
/* 优化后的样式 */
.header-hide {
  transform: translateY(-100%);
  transition: transform 0.4s ease;
}

/* 替换原有的.header-bg-blur */
.header-bg-blur {
  --at-apply: backdrop-blur-sm;
  /* 移除原有的背景色定义 */
}

/* 确保基础色设置 */
header {
  background-color: rgba(255, 255, 255, 0.8);
}

.dark header {
  background-color: rgba(30, 30, 32, 0.8); /* 调整为你需要的深色值 */
}

/* 遮罩动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 抽屉滑动动画 */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

/* 优化后的导航链接样式 */
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* 暗黑模式优化 */
.dark .nav-drawer {
  --at-apply: shadow-xl shadow-gray-900/30;
}

@media (prefers-color-scheme: dark) {
  .header-bg-blur {
    --at-apply: backdrop-blur-sm bg-dark-800/80;
  }
}

/* 优化logo样式 */
.logo-icon path {
  fill: currentColor;
  transition: fill 0.3s ease;
}
</style>
