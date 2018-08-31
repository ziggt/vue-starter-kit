<style scoped>
.kalenteriCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<template>
  <div>
    <div class="kalenteriCenter">
      <datepicker placeholder="Valitse päiväys" format="dd.MM.yyyy" monday-first=true  @selected="valitsePvm"></datepicker>
    </div>
    <div>
      <p class="center-text">valinta: {{state.date}}</p>
    </div>
  </div>
</template>

<script>
//MIT Lisenssi https://github.com/charliekassel/vuejs-datepicker
import Datepicker from "vuejs-datepicker/dist/vuejs-datepicker.esm.js";

//MIT Lisenssi https://momentjs.com/
import moment from 'moment';

let state = {
  date: moment(new Date()).format('DD.MM.YYYY')
};

console.log(state.date);

export default {
  name: 'Kalenteri',
  components: {
    Datepicker
  },
  data() {
    return {
      state: state,
      valittuPvm: null
    }
  },
  methods: {
    valitsePvm(selection) {
      console.log("valittu pvm: " + moment(selection).format('DD.MM.YYYY'));
      state.date = moment(selection).format('DD.MM.YYYY');

    }
  }


};
</script>
