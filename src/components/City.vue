<template>
  <div><div class="city" v-for="city in cities"><p>{{city.title}}</p></div></div>
</template>

<script>
  export default {
    name: 'app-city',
    data: function () {
      return {
        cities: [
        ]
      }
    }
  }
</script>
