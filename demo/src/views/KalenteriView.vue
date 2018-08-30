<template>
  <div>
    <h1>Vuejs kalenteri</h1>
    <Kalenteri />
   <p>käännös: {{ $vuetify.t('testiKaannos.text')}}</p>
  </div>
</template>

<script>
import Kalenteri from '@/components/Kalenteri.vue';

export default {
  name: 'vuejs-datepicker',
  components: {
    Kalenteri
  }
};
</script>
