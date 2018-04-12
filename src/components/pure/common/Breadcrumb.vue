<template>
    <Breadcrumb separator=">">
        <Breadcrumb-item v-for="item,index in bread" :href="item.url" :key="index">{{item.name}}</Breadcrumb-item>
        <!-- <BreadcrumbItem href="/index">Home</BreadcrumbItem>
        <BreadcrumbItem href="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem> -->
    </Breadcrumb>
</template>
<script>
export default {
  props: ["bread"],
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>

</style>


