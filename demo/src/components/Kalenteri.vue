<style scoped>
.kalenteriCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}

.test {
  text-align: justify !important;
}
</style>
<template class="test">
  <div>
    <p class="center-text">Valittu päiväys: <strong>{{ pvm }}</strong></p>
    <v-menu ref="menu1" :close-on-content-click="false" v-model="menu1" :nudge-right="40" lazy offset-y transition="scale-transition" full-width>
      <v-text-field slot="activator" v-model="calendarDate" label="Klikkaa antaaksesi päivämäärä" persistent-hint prepend-icon="event" @change="parseDate"></v-text-field>
      <v-date-picker no-title @input="reformatDate"></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
//MIT Lisenssi https://momentjs.com/
import moment from 'moment';

export default {
  name: 'Kalenteri',

  data() {
    return {
      pvm: moment(new Date()).format('DD.MM.YYYY').toString(),
      menu1: false,
      calendarDate: moment(new Date()).format('DD.MM.YYYY').toString()
    }

  },
  methods: {
    parseDate(input) {

      if (input == null) {
        return null;
      } else {
        const regex = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/gm;
        if (regex.exec(input)) {
          this.pvm = input;
        }
      }
      this.calendarDate = this.pvm;
      return this.pvm;
    },
    reformatDate(input) {

      if (input == null) {
        return null;
      }
      const [year, month, day] = input.split('-');

      this.pvm = `${day}.${month}.${year}`;
      this.calendarDate = this.pvm;
      return `${day}.${month}.${year}`;
    }
  }
};
</script>
