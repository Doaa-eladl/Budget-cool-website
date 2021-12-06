<template>
  <div class="container">
    <headercomponent/>
    <introcomonent/>
  </div>
  <divedercomponent/>
  <div class="container">
    <featurescomponent/>
  </div>
  <pricecomponent/>
  <div class="container">
    <Newslettercomponent/>
  </div>
  <divedercomponent/>
  <div class="container">
    <footercompoonent/>
  </div>
</template>

<script>
import headercomponent from '../components/headercomponent.vue'
import introcomonent from '../components/introcomonent.vue'
import divedercomponent from '../components/divedercomponent.vue'
import featurescomponent from '../components/featurescomponent.vue'
import pricecomponent from '../components/pricecomponent.vue'
import Newslettercomponent from '../components/Newslettercomponent.vue'
import footercompoonent from '../components/footercompoonent.vue'

export default {
  components: {
    headercomponent,
    introcomonent,
    divedercomponent,
    featurescomponent,
    pricecomponent,
    Newslettercomponent,
    footercompoonent,
  }
}
</script>

<style scoped>
    @media (max-width: 750px) {
      .container{
        min-width: 750px;
      }
    }
</style>