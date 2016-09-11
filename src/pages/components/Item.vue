<style lang="scss">
    .tree-item {
        padding: 16px 0 16px;
        height: 24px;
        background-color: #78909C;
        color: #ffffff;
        margin: 4px;
        width: calc(20% - 8px);
        float: left;

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
        // data: function () {
        //     return {
        //         open: false
        //     }
        // },
        // computed: {
        //     isFolder: function () {
        //         return this.model.children && this.model.children.length
        //     }
        // },
        //methods: {
        //     toggle: function () {
        //         if (!this.open) {
        //             if (this.model.children < 1) {
        //                 this.model.loadChildren();
        //             }
        //
        //             this.open = true;
        //
        //             return;
        //         }
        //         this.open = false;
        //     }
        // }
    }
</script>
