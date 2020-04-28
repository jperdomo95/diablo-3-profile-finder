<template>
  <div class="home-view">
    <home-title></home-title>

    <main-form></main-form>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTitle from './HomeTitle'
import MainForm from './HomeForm'
export default {
  name: 'Home',
  components: {
    HomeTitle,
    MainForm
  }
}
</script>
