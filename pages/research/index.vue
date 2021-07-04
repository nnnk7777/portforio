<template>
  <div class="flex justify-center pt-5 sm:pt-42 w-screen">
    <div class="flex flex-col justify-center w-full">
      <!-- page title -->
      <div class=" mx-auto w-4/5 lg:w-3/4">
        <h1 class="text-4xl font-thin mt-10 mb-2">
          Research
        </h1>
      </div>
      <!-- cards -->
      <div class="flex justify-center flex-wrap w-full mx-auto" ref="cards">
          <!-- card -->
          <researchCard
            v-for="research, index in research_arr"
            :key="'research-'+index"
            :research=research
            class="m-8"
          />
          <div
            v-for="n, index in this.researches"
            :key="'blank-'+index"
            class="mx-8"
            style="width: 300px; height: 0px;"
          >
            <!-- empty -->
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import researchCard from '~/components/researchCard.vue'
import resaerchJson from '~/assets/json/research.json'

export default {
  components: {
    researchCard
  },
  head() {
    return {
      title: 'Research'
    }
  },
  data() {
    return {
      num: 0,
      researches: resaerchJson
    }
  },
  computed: {
    research_arr(){
      return this.researches.reverse()
    }
  },
  mounted() {
    this.num = this.$refs.cards.childElementCount
  }
}
</script>

<style lang="postcss">
.research-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>
