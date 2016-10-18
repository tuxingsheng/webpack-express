<style lang="less" scoped>
    #bbb{
        background-color: blue;
    }
</style>

<template>
    <div>
        <div id="aaa" @click="alert">
            <span>{{ aaa }}</span>
        </div>
        <div id="bbb">
            <span>{{ bbb }}</span>
        </div>
        <div id="ccc">
            <span>{{ ccc }}</span>
        </div>
        5555555555
    </div>
</template>

<script>
    export default{
        props: [],
        ready(){

        },
        data() {
            return {
                aaa: 'aaaaaa',
                bbb: 'bbbbbb',
                ccc: 'cccccc'
            }
        },
        methods: {
            alert() {
                alert('AppContent');
            }
        }
    }
</script>