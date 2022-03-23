<template>
  <div class="nav">
    <nav>
      <div class="navigation-links">
        <router-link to="/settings">
            <svg-icon icon-class="settings"></svg-icon>
            设置
        </router-link>
        <router-link to="/history">历史</router-link>
        <router-link to="/feedback">反馈</router-link>
        <router-link to="/about">关于</router-link>
      </div>
    </nav>
  </div>
</template>

<style lang="less" scoped>

.svg-icon {
    width: 12px;
    height: 12px;
    color: red;
}
</style>
