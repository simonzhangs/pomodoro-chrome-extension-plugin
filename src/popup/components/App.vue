<template>
    <div class="header">
        <Navbar></Navbar>
        hello pomodoro
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    name: "App",
    components: {Navbar,}
};
</script>

<style lang="less" scoped>
.header {
    width: 300px;
    height: 400px;
    color: pink;
}
</style>
