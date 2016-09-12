<style lang="scss">
    @function bottom-shadow($depth) {
        $primary-offset: nth(1.5 3 6 10 15, $depth) * 1px;
        $blur: nth(1 3 3 5 6, $depth) * 4px;
        $color: rgba(black, nth(.24 .23 .23 .22 .22, $depth));

        @return 0 $primary-offset $blur $color;
    }

    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    ul {
        list-style: none;
    }

    .header {
        width: 100%;
        height: 64px;
        background-color: #43A047;
        color: #ffffff;
        position: fixed;
        line-height: 64px;
        box-shadow: bottom-shadow(2);
        top: 0;
        z-index: 99;

        @media only screen and (max-width: 768px) {
            height: 56px;
        }
        .title {
            float: left;

            font-size: 18px;
            line-height: 64px;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .back {
            float: left;

            cursor: pointer;

            margin: 0 32px 0 24px;
            font-size: 24px;
            height: 64px;
            width: 24px;

            i {
                line-height: 64px;
            }
        }
    }
    .page {
        padding: 64px 0 0 0;

        // @media only screen and (max-width: 768px) {
        //     padding: 64px 0 0 0;
        // }
    }
</style>
<template>
    <div>
        <div class="header">
            <div class="back">
                <i v-if="$route.path != '/'" @click="back" class="material-icons">arrow_back</i>
            </div>
            <div class="title">
                Xedule Material - {{ $route.path }}
            </div>
        </div>
        <router-view transition="fade" class="page"></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            back() {
                this.$route.router.go(window.history.back())
            }
        }
    }
</script>
