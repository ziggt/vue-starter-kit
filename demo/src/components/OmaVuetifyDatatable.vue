<template>
  <v-data-table :headers="headers" :items="rows" hide-actions item-key="name">
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.region }}</td>
        <td class="text-xs-right">{{ props.item.capital }}</td>
        <td class="text-xs-right">{{ props.item.population }}</td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <v-card flat>
        <v-card-text>{{ props.item.name }}</v-card-text>
      </v-card>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios';
export default {
  name: 'OmaVuetifyDatatable',
  data() {
    return {
      headers: [{
          text: 'Nimi',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        { text: 'Alue', value: 'region' },
        { text: 'Pääkaupunki', value: 'capital' },
        { text: 'Väkiluku', value: 'population',type:'number' }
      ],
      rows: []
    }
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var $this = this;
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(function(response) {
          $this.rows = response.data;
        });
    }
  }
};
</script>
