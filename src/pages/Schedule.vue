<template>
    <div id="app">
        <day v-for="day in days" :model="day">
        </day>
    </div>
</template>

<script>
    import Day from './components/Day'

    export default {
        components: {
            Day
        },
        data() {
            return {
                days: {}
            }
        },
        created() {
            fetch('https://devlopment.space/xedule/locations/130/attendees/52257/weeks/37')
                .then((resp) => resp.json())
                .then((json) => this.days = json)
                .catch((e) => console.log(e))
        }
    }
</script>
