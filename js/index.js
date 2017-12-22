var vm = new Vue({
    el: '#el',
    template: '#demo-template',
    data: {
        selected: 2,
        options: [
            { id: 1, text: 'Hello' },
            { id: 2, text: 'World' }
        ]
    }
});

Vue.component('app-country', {
    data: function () {
        return {
            cities: [
            ]
        }
    },
    template: '<div><div class="country" v-for="country in countries"><p>{{country.title}}</p></div></div>',

});

Vue.component('app-city', {
    data: function () {
        return {
            cities: [
            ]
        }
    },
    template: '<div><div class="city" v-for="city in cities"><p>{{city.title}}</p></div></div>'
});

const app = new Vue({
    el: '#app',
    data: {
        title: 'Список',
        items: [
        ],
        itemTitle: '',
        itemDesc: '',
        itemCountry: '',
        itemCity: '',

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
});

