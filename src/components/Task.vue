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

    <div id="list" >
      <div class="container">
        <div class="row">
          <div class="card" v-for="item in tasks[$route.params.city]">
            <div class="card-block" contenteditable="true">
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
        tasks: {

        }
      }
    },
    methods: {
//      addCountry: function () {
//        if (this.itemCountry !== '') {
//          const item = {};
//          item.country = this.itemCountry;
//          this.items.push(item);
//          this.itemCountry = '';
//        }
//      },
//      addTask: function () {
//        if (this.itemTitle !== '') {
//          const item = {};
//          item.title = this.itemTitle;
//          item.desc = this.itemDesc;
//          this.items.push(item);
//          this.itemTitle = '';
//          this.itemDesc = '';
//        }
//      },
      addTask: function () {
        if (this.itemTitle !== '') {
          console.log(this.$route);
          if (typeof this.tasks[this.$route.params.city] === 'undefined')
            this.tasks[this.$route.params.city] = [];

          const item = {};
          item.title = this.itemTitle;
          item.desc = this.itemDesc;
          this.tasks[this.$route.params.city].push(item);
          this.itemTitle = '';
          this.itemDesc = '';
        }
      },
      deleteItem: function (item) {
        console.log(this.tasks[this.$route.params.city].indexOf(item));
        this.tasks[this.$route.params.city].splice(this.tasks[this.$route.params.city].indexOf(item), 1);
        console.log(this.tasks);
        this.$forceUpdate()
      },
      editItem: function(item) {
        this.desc = itemTitle;
        this.title = itemDesc;
      },
//      addCity: function () {
//        if (this.itemCity !== '') {
//          const item = {};
//          item.city = this.itemCity;
//          this.items.push(item);
//          this.itemCity = '';
//        }
//      },

    }
  }
</script>
