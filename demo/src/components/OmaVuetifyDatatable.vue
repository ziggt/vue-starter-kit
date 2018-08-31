<template>
  <!-- <v-data-table :headers="headers" :items="rows" hide-actions item-key="name"> -->
  <v-data-table :headers="headers" :items="rows" hide-actions item-key="name">
    <template slot="items" slot-scope="props">
      <tr>
      	<td><button @click="props.expanded = !props.expanded">Avaa</button></td>
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.region }}</td>
        <td class="text-xs-right">{{ props.item.capital }}</td>
        <td class="text-xs-right">{{ props.item.population }}</td>
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      	<p>lisätietoja yms.</p>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios';
export default {
  name: 'OmaVuetifyDatatable',
  data() {
    return {
      headers: [{text:'',sortable:false},{
          text: 'Nimi',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        { text: 'Alue', value: 'region' },
        { text: 'Pääkaupunki', value: 'capital' },
        { text: 'Väkiluku', value: 'population', type: 'number' }
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
