<style scoped>
    .tree-item {
        padding: 16px;
        height: 24px;
        font-size: 16px;
        background-color: #455A64;
        font-family: 'Roboto', sans-serif;
        color: #ffffff;
        margin: 16px;
        font-weight: bold;
        width: 20%;
        float: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>


<template>
    <div>
        <div class="tree-item" :class="{bold: open}"
            @click="toggle">

            {{{ model.name }}}

            <!-- <span>[{{open ? '-' : '+'}}]</span> -->
        </div>
        <item
            v-if="open"
            lass="item"
            v-for="model in model.children"
            :model="model">

        </item>
    </div>
</template>

<script>
    export default {
        name: 'item',
        props: {
            model: Object
        },
        data: function () {
            return {
                open: false
            }
        },
        computed: {
            isFolder: function () {
                return this.model.children && this.model.children.length
            }
        },
        methods: {
            toggle: function () {
                if (!this.open) {
                    if (this.model.children < 1) {
                        this.model.loadChildren();
                    }

                    this.open = true;

                    return;
                }
                this.open = false;
            }
        }
    }
</script>
