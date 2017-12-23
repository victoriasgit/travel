<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
  <div class="container-fluid">
    <div class="row">
      <div class = "col-md-12">
        <h1>wish-list стран</h1>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col">
        <label for='itemCountry'>Название страны </label>
        <input type="text" v-model="itemCountry" id='itemCountry'>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input type="submit" value=" + Добавить страну" v-on:click.prevent="addCountry" >
      </div>
    </div>
  </div>


  <div id="list">
    <div class="col-sm-12 col-md-8 col-lg-6">

          <div class="card" v-for="(country, countryKey) in countries">
            <h4 class="card-heading">
              {{country.name}}

              <button class="btn btn-xs btn-danger" @click="deleteCountry(countryKey)">x</button>
            </h4>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" v-for="(city, cityKey) in country.cities">
                <!--{{city}}-->
                <router-link :to="'/task/' + city">{{city}}</router-link>
                <button class="btn btn-xs btn-danger float-right" @click="deleteCity(countryKey, cityKey)">x</button>
              </li>
              <div class="list-group-item ">
                <div class="input-group">
                <input type="text" :ref="'cityInput'+ countryKey" id='itemCity' class="form-control" placeholder="Добавить город">
                <button class=" input-group-addon btn btn-success" @click="addCity(countryKey)"><i class="fa fa-"></i></button>
                </div>
              </div>
            </ul>
          </div>

    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'app-country',
    data() {
      return {
        countries: [
          {
            name: 'Страна',
            cities: ['Город 1', "Город 2"]
          },
          {
            name: 'Страна 2',
            cities: ['Город 1', "Город 2"]
          }
        ],
        itemCountry: ''
      }
    },
    methods: {
      example() {
        console.log(this.countries)
      },
      addCountry: function () {
        if (this.itemCountry !== '') {
          const country = {name: this.itemCountry, cities: []};
//          item.countries = this.itemCountry;
          this.countries.push(country);
          this.itemCountry = '';
        }
      },
      addCity: function (countryKey) {

        this.countries[countryKey].cities.push( this.$refs['cityInput'+countryKey][0].value);
      },
      deleteCountry: function (countryKey) {
        this.countries.splice(countryKey, 1);
      },
      deleteCity: function (countryKey, cityKey) {
//        let filtered = this.countries.filter(x => x.name === countries.name);
        this.countries[countryKey].cities.splice(cityKey, 1);
      },
    }
  }
</script>

