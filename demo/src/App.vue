<!-- 
  <template>
  <div id="app">
    <div id="nav">
      <router-link to="/autocompleteview">Autocomplete</router-link> |
      <router-link to="/datatableview">Datatable</router-link> |
      <router-link to="/vuetifydatatableview">Vuetify Datatable</router-link>
    </div>
    <router-view/>
  </div>
</template>
Vaihtoehtoinen nav bar
-->
<template>
  <v-app>
    <v-content>
      <v-toolbar>
        <v-toolbar-title>Vue Starter Kit 0.1</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/autocompleteview">Autocomplete</v-btn>
          <v-btn flat to="/datatableview">Datatable</v-btn>
          <v-btn flat to="/vuetifydatatableview">Vuetify Datatable</v-btn>
          <v-btn flat to="/vuetifyautocomplete">Vuetify Autocomplete</v-btn>
          <v-btn flat to="/kalenteriview">Kalenteri</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <router-view />
    </v-content>
  </v-app>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
