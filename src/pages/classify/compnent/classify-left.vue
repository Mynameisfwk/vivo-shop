<template>
    <div>
         <div class="calssify-left" ref="wrapper">
            <ul class="calssify-left-ul" >
                <li v-for="(list,index) in left" :key="index" @click="qiehuan(index)" :class="{active:index===classifyIndex}">
                    {{list.name}}
                </li>
            </ul>
        </div>
    </div>
</template>


<style lang="stylus" scoped>
.calssify-left
        flex: 0 0 2.9rem;
        width: 4rem;
        height 100%
        background: #f6f6f6;
        margin-bottom: 1.51rem;
        li
            height 1.3rem
            line-height 1.3rem
            text-align center
</style>



<script>
export default {
    
}
</script>
