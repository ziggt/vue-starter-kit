<style scoped>

#autocomplete {
    width: 400px;
    margin: auto;
}

#autocomplete input {
    width: 100%;
}

ul {
    display: none;
    list-style: none;
    position: relative;
    float: right;
    width: 100%;
    text-align: left;
    margin: 0;
    padding: 0;
    border-width: 0 1px 1px 1px;
    border-style: solid;
    border-color: #bcbcbc;
}

ul.show {
  display: block;
}

ul li {
    padding: 4px;
    cursor: pointer;
}

.active {
    background: #4e91fc;
    color: white;
}

</style>

<template>

<div id="autocomplete">
    <input type="text" v-model="value" @keydown.down="moveDown" @keydown.up="moveUp" @keydown.enter="selectByEnter" />
    <ul :class="{show: listVisible}">
        <!-- Saisikohan 2-way bindingin tehtyä helpommin? Tarkista v-model ja sync... -->
        <AutocompleteItem v-for="(v, index) in values" :key="index" :index="index" :value="v.value" :isActive="v.isActive"
          @clicked="selectByClick" @hovered="activateItem" @mouseleft="deactivateItem" />
    </ul>
</div>

</template>

<script>

import _ from 'lodash';
import axios from 'axios';

import AutocompleteItem from './AutocompleteItem.vue'

export default {
    name: 'autocomplete',
    data: function() {
        return {
            values: [],
            value: '',
            countries: [],
            locked: false,
            listVisible: false
        }
    },
    watch: {
        value: function() {
            this.debouncedComplete();
        },
        values: function() {
          this.listVisible = this.values && this.values.length > 0;
        }
    },
    created: function() {
        this.debouncedComplete = _.debounce(this.complete, 500);
        this.fetchData();
    },
    methods: {
        complete: function() {
            if (this.value.length < 2) {
                this.values = [];
                return;
            }

            if (!this.locked) {
                let index = -1;
                this.values = this.value ? this.countries.filter(word => word.toUpperCase().startsWith(this.value.toUpperCase())).map(counrty => {
                    index = index + 1;
                    return {
                        index: index,
                        value: counrty,
                        isActive: false
                    };
                }) : [];
            } else {
                this.locked = false;
            }
        },

        fetchData() {
            const $this = this;
            axios
                .get('https://restcountries.eu/rest/v2/all')
                .then(function(response) {
                    $this.countries = response.data.map(country => country.name);
                });
        },

        selectByClick: function(value) {
            this.value = value;
            this.values = [];
            this.locked = true;
        },

        activateItem: function(index) {
            const item = this.values.find(value => value.index == index);
            item.isActive = true;
        },

        deactivateItem: function(index) {
            const item = this.values.find(value => value.index == index);
            item.isActive = false;
        },

        moveDown: function() {
            if (!this.values || this.values.length == 0) {
                return;
            }

            if (this.values.length == 1) {
                this.values[0].isActive = true;
                return;
            }

            if (this.values.some(value => value.isActive)) {
                const value = this.values.find(value => value.isActive);

                const index = value.index;

                if (this.values.length > (index + 1)) {
                    this.values[index].isActive = false;
                    this.values[index + 1].isActive = true;
                }
            } else {
                this.values[0].isActive = true;
            }
        },

        moveUp: function() {
            if (!this.values || this.values.length == 0) {
                return;
            }

            if (this.values.some(value => value.isActive)) {
                const value = this.values.find(value => value.isActive);

                const index = value.index;

                if (index > 0) {
                    this.values[index].isActive = false;
                    this.values[index - 1].isActive = true;
                } else {
                    this.values[0].isActive = false;
                }
            }
        },

        selectByEnter: function() {
            if (!this.values || !this.values.some(value => value.isActive)) {
                return;
            }

            const selected = this.values.find(value => value.isActive);

            this.value = selected.value;
            selected.isActive = false;
            this.values = [];
            this.locked = true;
        }

    },
    components: {
        AutocompleteItem
    }
};

</script>
