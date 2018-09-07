<template>
  <draggable v-model="myArray" :options="{group:'people'}" @start="drag=true" @end="drag=false">
    <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
  </draggable>
</template>

<script>
import axios from 'axios';
import draggable from 'vuedraggable'
export default {
  name: 'Draggable',
  components: {
    draggable
  },
  data() {
    return {
      myArray: []
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var $this = this;
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(function(response) {
          $this.myArray = response.data;
        });
    }
  }
};
</script>
