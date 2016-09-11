<template>
    <div id="app">
        <day v-for="day in days" :model="day">
        </day>
    </div>
</template>

<script>
    import Day from './components/Day'

    export default {
        route: {
            data (transition) {
                return fetch(
                    'https://devlopment.space/xedule/locations/'+transition.to.params.location+'/attendees/'+transition.to.params.attendee+'/weeks/37'
                ).then(
                    (res) => res.json()
                ).then(
                    (json) => ({ days: json })
                )
            }
        },
        components: {
            Day
        },
        data() {
            return {
                days: {}
            }
        }
    }
</script>
