<template>
    <div>
        <AHeaderTop/>
        <AHeaderBtm/>
    </div>
</template>
<script>
import AHeaderTop from '@/components/pure/common/AHeaderTop'
import AHeaderBtm from '@/components/pure/common/AHeaderBtm'
export default {
    components: {
        AHeaderTop,
        AHeaderBtm
    }
}
</script>
<style lang="less" scoped>
div{
    position: relative;
}
</style>


