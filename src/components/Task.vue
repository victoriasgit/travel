<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id = "app">
    <div class="container-fluid">
      <div class="row">
        <div class = "col-md-12">
          <h1>Список задач в городе</h1>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <label for='itemTitle'>Название задачи </label>
          <input type="text" v-model="itemTitle" id='itemTitle'>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for='itemDesc'>Описание </label>
          <input type="text" v-model="itemDesc" id='itemDesc'>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input type="submit" value=" + Добавить" v-on:click.prevent="addTask" >
        </div>
      </div>
    </div>

    <hr>

    <div id="list" contenteditable="true">
      <div class="container">
        <div class="row">
          <div class="card" v-for="item in items">
            <div class="card-block">
              <h3>{{item.title}}</h3>
              <p>{{item.desc}}</p>
            </div>
            <button class="btn btn-xs btn-danger" @click="deleteItem(item)">x</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'task',
    data() {
      return {
        title: 'Список',
        items: [],
        itemTitle: '',
        itemDesc: '',
        itemCountry: '',
        itemCity: $route.params.cities[indexOf(cities)]
      }
    },
    methods: {
      addCountry: function () {
        if (this.itemCountry !== '') {
          const item = {};
          item.country = this.itemCountry;
          this.items.push(item);
          this.itemCountry = '';
        }
      },
      addTask: function () {
        if (this.itemTitle !== '') {
          const item = {};
          item.title = this.itemTitle;
          item.desc = this.itemDesc;
          this.items.push(item);
          this.itemTitle = '';
          this.itemDesc = '';
        }
      },
      addCity: function () {
        if (this.itemCity !== '') {
          const item = {};
          item.city = this.itemCity;
          this.items.push(item);
          this.itemCity = '';
        }
      },
      deleteItem: function (item) {
        this.items.splice(this.items.indexOf(item), 1);
      },
      editItem: function(item) {
        this.desc = itemTitle;
        this.title = itemDesc;
      },
    }
  }
</script>
