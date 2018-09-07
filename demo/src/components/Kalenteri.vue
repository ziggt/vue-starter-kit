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
    <p v-if="showError">Väärä formaatti. Anna muodossa 12.12.2012</p>
    <v-menu ref="menu1" :close-on-content-click="false" v-model="menu1" :nudge-right="40" lazy offset-y transition="scale-transition" full-width>
      <v-text-field v-bind:style="{border: bordered }" slot="activator" v-model="calendarDate" label="Klikkaa antaaksesi päivämäärä" persistent-hint prepend-icon="event" @change="parseDate"></v-text-field>
      <v-date-picker v-model="calendarModelDate" first-day-of-week=1 locale="fi-fi" no-title @input="reformatDate"></v-date-picker>
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
      calendarDate: moment(new Date()).format('DD.MM.YYYY').toString(),
      calendarModelDate: null,
      border: null,
      showError: false
    }

  },
  computed: {
    bordered() {
      return this.border;
    }
  },
  created() {

    let [date, month, year] = this.calendarDate.split('.');
    let parsed = year + "-" + month + "-" + date;
    this.calendarModelDate = parsed;
  },
  methods: {
    parseDate(input) {


      if (input == null) {
        return null;
      } else {
        const regex = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/gm;
        if (regex.exec(input)) {
          this.pvm = input;
          this.border = "";
          this.showError = false;
        } else {
          this.showError = true;
          this.border = " 2px solid red";
        }
      }
      this.calendarDate = this.pvm;
      this.calendarModelDate = this.parseCalendar(this.calendarDate);
      return this.pvm;

    },
    parseCalendar(paivamaara) {
      let [date, month, year] = paivamaara.split('.');
      let parsed = year + "-" + month + "-" + date;
      return parsed;
    },
    reformatDate(input) {
      this.showError = false;
      this.border = "";
      if (input == null) {
        return null;
      }
      const [year, month, day] = input.split('-');
      this.calendarDate = `${day}.${month}.${year}`;
      this.pvm = this.calendarDate;
      this.calendarModelDate = this.parseCalendar(this.calendarDate);
      return `${day}.${month}.${year}`;
    }
  }
};
</script>
