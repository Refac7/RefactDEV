<script>
import siteConfig from '@/site-config'
import { getLinkTarget } from '@/utils/link'
import { useWindowScroll } from '@vueuse/core'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

export default {
  components: {
    ThemeToggle,
  },
  setup() {
    const navLinks = siteConfig.header.navLinks || []
    const isDrawerOpen = ref(false)
    const currentPath = ref('/')

    const socialLinks = computed(() => {
      return siteConfig.socialLinks
        .filter(link => link.header)
        .map(link => ({
          ...link,
          icon: typeof link.header === 'string'
            ? (link.header.includes('i-') ? link.header : link.icon)
            : link.icon,
        }))
    })

    const { y: scroll } = useWindowScroll()

    const openDrawer = () => {
      isDrawerOpen.value = true
      document.documentElement.classList.add('lock-scroll')
    }

    const closeDrawer = () => {
      isDrawerOpen.value = false
      document.documentElement.classList.remove('lock-scroll')
    }

    onMounted(() => {
      currentPath.value = window.location.pathname
    })

    onUnmounted(() => {
      document.documentElement.classList.remove('lock-scroll')
    })

    return {
      navLinks,
      socialLinks,
      isDrawerOpen,
      currentPath,
      scroll,
      openDrawer,
      closeDrawer,
      getLinkTarget,
    }
  },
}
</script>

<template>
  <header
    id="header"
    class="fixed top-0 z-50 w-full h-20 px-6 flex justify-between items-center transition-all duration-300"
    :class="{
      'bg-transparent': scroll <= 20,
      'backdrop-blur-md bg-white/80 dark:bg-gray-900/80': scroll > 20,
    }"
  >
    <!-- 左侧Logo和导航 -->
    <div class="flex items-center h-full">
      <a href="/" class="mr-6" aria-label="网站Logo">
        <svg width="32" height="32" viewBox="0 0 945 945" class="logo-icon">
          <path d="M131 133.43 131 590.43 361 820.43 361 363.43 131 133.43z" />
          <path d="M818 363.43 361 363.43 131 133.43 588 133.43 818 363.43z" />
          <path d="M361 591.93 588.75 820.43 818 820.43 590.25 591.93 361 591.93z" />
          <path d="M818 363.43 590.25 591.93 361 591.93 588.75 363.43 818 363.43z" />
        </svg>
      </a>

      <!-- 桌面导航 -->
      <nav class="hidden sm:flex gap-x-6">
        <a
          v-for="link in navLinks"
          :key="link.text"
          :href="link.href"
          class="nav-link"
        >
          {{ link.text }}
        </a>
      </nav>

      <!-- 移动端菜单按钮 -->
      <button
        class="sm:hidden text-2xl h-full flex items-center px-2"
        @click="openDrawer"
      >
        <i class="i-ri-menu-2-fill" />
      </button>
    </div>

    <!-- 右侧图标区 -->
    <div class="flex items-center gap-x-6">
      <a
        v-for="link in socialLinks"
        :key="link.text"
        :class="link.icon"
        class="text-lg hover:opacity-80"
      />
      <a href="/rss.xml" class="i-ri-rss-line text-lg hover:opacity-80" />
      <ThemeToggle class="text-lg hover:opacity-80" />
    </div>
  </header>

  <!-- 移动端遮罩层 - 无动画 -->
  <div
    v-if="isDrawerOpen"
    class="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm"
    @click="closeDrawer"
  />

  <!-- 移动端抽屉菜单 - 仅保留唤起动画 -->
  <transition name="slide">
    <aside
      v-if="isDrawerOpen"
      class="sm:hidden fixed z-70 top-0 left-0 w-72 h-full bg-white dark:bg-gray-900 shadow-xl overflow-y-auto"
    >
      <div class="p-6 h-full flex flex-col">
        <div class="flex justify-between items-center mb-8">
          <a href="/" aria-label="网站Logo">
            <svg width="32" height="32" viewBox="0 0 945 945" class="logo-icon">
              <path d="M131 133.43 131 590.43 361 820.43 361 363.43 131 133.43z" />
              <path d="M818 363.43 361 363.43 131 133.43 588 133.43 818 363.43z" />
              <path d="M361 591.93 588.75 820.43 818 820.43 590.25 591.93 361 591.93z" />
              <path d="M818 363.43 590.25 591.93 361 591.93 588.75 363.43 818 363.43z" />
            </svg>
          </a>
          <button class="text-2xl p-1" @click="closeDrawer">
            <i class="i-ri-close-line" />
          </button>
        </div>

        <nav class="flex-1 flex flex-col gap-4">
          <a
            v-for="link in navLinks"
            :key="link.text"
            :href="link.href"
            class="text-xl px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            @click="closeDrawer"
          >
            {{ link.text }}
          </a>
        </nav>

        <div class="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
          <div class="flex justify-center gap-6 py-2">
            <a
              v-for="link in socialLinks"
              :key="link.text"
              :class="link.icon"
              class="text-2xl hover:opacity-80"
            />
            <a href="/rss.xml" class="i-ri-rss-line text-2xl hover:opacity-80" />
            <ThemeToggle class="text-2xl hover:opacity-80" />
          </div>
        </div>
      </div>
    </aside>
  </transition>
</template>

<style scoped>
/* 滚动锁定 */
.lock-scroll {
  overflow: hidden;
}

/* 仅保留唤起动画 */
.slide-enter-active {
  transition: transform 0.35s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.slide-enter-from {
  transform: translateX(-100%);
}

/* 导航链接下划线动画 */
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
  background: currentColor;
  transition: width 0.25s ease;
}
.nav-link:hover::after {
  width: 100%;
}

/* Logo颜色继承 */
.logo-icon path {
  fill: currentColor;
}
</style>
