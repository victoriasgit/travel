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
        <input class="i1" type="text" v-model="itemCountry" id='itemCountry'>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input class="m1" type="submit" value=" + Добавить страну" v-on:click.prevent="addCountry" >
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
                <input class="i2" type="text" :ref="'cityInput'+ countryKey" id='itemCity' class="form-control" placeholder="Добавить город">
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

<style>
    body {
        height: 100%;
        width: 100%;
        background:  #4b5257 url(../photo/bgFirst.jpeg)  no-repeat center top;
        background-size: cover; /* Масштабируем фон */
        font: 15px Tahoma, sans-serif;
        border-top: 8px solid #7e7e7e;
        padding: 10px;
    }
    #app {
        height: 100%;
        max-width: 600px;
        width:  600%;
        padding: 100px 60px 50px;
        margin: 0 auto;
        background: url(../photo/opacity.jpg);
        opacity: 0.6;
    }
    h1 {
        text-align: center;
        text-shadow: 2px 8px 6px rgba(0,0,0,0.2),
        0px -5px 35px rgba(255,255,255,0.3);
        color:green;
    }
    h4, .col, .input-group, .list-group-item {
        text-align: center;
        color: black;
        cursor: pointer;
        border: none;
        opacity: 1;
    }
    .btn, .m1 {
        background-color: #68b12f;
        background: -webkit-gradient(linear, left top, left bottom, from(#68b12f), to(#50911e));
        background: -webkit-linear-gradient(top, #68b12f, #50911e);
        background: -moz-linear-gradient(top, #68b12f, #50911e);
        background: -ms-linear-gradient(top, #68b12f, #50911e);
        background: -o-linear-gradient(top, #68b12f, #50911e);
        background: linear-gradient(top, #68b12f, #50911e);
        border: 1px solid #509111;
        border-bottom: 1px solid #5b992b;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        -ms-border-radius: 3px;
        -o-border-radius: 3px;
        box-shadow: inset 0 1px 0 0 #9fd574;
        -webkit-box-shadow: 0 1px 0 0 #9fd574 inset ;
        -moz-box-shadow: 0 1px 0 0 #9fd574 inset;
        -ms-box-shadow: 0 1px 0 0 #9fd574 inset;
        -o-box-shadow: 0 1px 0 0 #9fd574 inset;
        color: white;
        font-weight: bold;
        padding: 6px 20px;
        text-align: center;
        text-shadow: 0 -1px 0 #396715;
    }
    .i1:focus, .i2:focus {
        height:20px;
        width:220px;
        padding:5px 8px;
        box-shadow: 0 0 3px #aaa;
    }
</style>

