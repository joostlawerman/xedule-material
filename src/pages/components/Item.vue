<style lang="scss">
    .tree-item {
        padding: 16px 0 16px;
        height: 24px;
        background-color: #78909C;
        color: #ffffff;
        margin: 4px;
        width: calc(20% - 8px);
        float: left;
        cursor: pointer;

        span {
            font-weight: bold;
            line-height: 24px;
            font-size: 16px;
            padding: 0 16px 0 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
</style>


<template>
    <div
        class="tree-item"
        v-link="link">
        <span>{{{ name }}}</span>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            link: String
        }
    }
</script>
