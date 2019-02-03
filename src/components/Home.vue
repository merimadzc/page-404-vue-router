<template>
  <div>
    <h1>{{ title }}</h1>
    <h5>{{ number }}</h5>
    <h3>
      <router-link to="*">{{ note }}</router-link>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
  	return {
  	  title: 'Home',
  	  number: '01',
      note: 'Try 404 Page'
  	}
  }
}
</script>

<style>
h3 {
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 2.5em;
}
</style>