<script>
import { routes } from '@/router/index.js';
import { mapMutations } from "vuex";
export default {
    data() {
        //只执行一次
        this.RoutesMap = new Map();
        this.initRoutesMap(routes);
        return {
            pathList: []
        }
    },
    methods: {
        ...mapMutations(['changeCurrentPath']),
        initRoutesMap(routes) {
            routes.forEach(item => {
                this.RoutesMap.set(item.name, item.label);
                if (item.children) {
                    this.initRoutesMap(item.children)
                }
            });
        }
    },
    mounted() {
        // console.log(this.$route.matched);
    },
    watch: {
        $route: {
            //立即执行一次
            immediate: true,
            handler(route) {
                this.changeCurrentPath(route.fullPath);
                this.pathList = route.matched.map(item => {
                    return {
                        name: item.name,
                        label: this.RoutesMap.get(item.name)
                    }
                });
                this.pathList.shift();
            }
        }
    }
}
</script>
<template>
    <el-breadcrumb separator=">">
        <el-breadcrumb-item v-for="item in pathList" :to="{ name: item.name }">{{ item.label }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<style lang="scss" scoped>
//el标签可以理解为在标签上加了个class
.el-breadcrumb {
    margin-bottom: 20px;
}
</style>
