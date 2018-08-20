

<template>

<div id="datatable">
    <vue-good-table :columns="columns" :rows="rows" :pagination-options="{enabled: true, mode: 'records', perPage: 10}">
    </vue-good-table>
</div>

</template>

<script>

import {
    VueGoodTable
}
from 'vue-good-table';
import axios from 'axios';

import 'vue-good-table/dist/vue-good-table.css';

export default {
    name: 'datatable',
    data() {
        return {
            columns: [{
                label: 'Nimi',
                field: 'name',
                filterOptions: {
                    enabled: true,
                    filterFn: function(data, filterString) {
                        return data.toUpperCase().startsWith(filterString.toUpperCase());
                    }
                }
            }, {
                label: 'Alue',
                field: 'region'
            }, {
                label: 'Pääkaupunki',
                field: 'capital'
            }, {
                label: 'Väkiluku',
                field: 'population',
                type: 'number',
            }, ],
            rows: []
        };
    },
    created: function() {
        this.fetchData();
    },
    methods: {
        fetchData: function() {
            var $this = this;
            axios
                .get('https://restcountries.eu/rest/v2/all')
                .then(function(response) {
                    $this.rows = response.data;
                });
        }
    },
    components: {
        VueGoodTable
    }
};

</script>
