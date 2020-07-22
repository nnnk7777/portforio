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
      <div class="flex justify-center flex-wrap w-3/4 mx-auto" ref="cards">
          <!-- card -->
          <researchCard
            v-for="reseach in research_arr"
            :title=reseach.title
            :description=reseach.description
            :link=reseach.link
            :thumbnail=reseach.thumbnail
            class="m-8"
          />
          <div
            v-for="n in this.researches"
            class="m-8"
            style="width: 320px; height: 0px;"
          >
            <!-- empty -->
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import researchCard from '~/components/researchCard.vue'

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
      researches: []
    }
  },
  computed: {
    research_arr(){
      return this.researches.reverse()
    }
  },
  mounted() {
    this.num = this.$refs.cards.childElementCount
    this.$axios
      .get('https://nonaka.nkmr.io/api/myweb/get_researches.php')
      .then(response => {
        this.researches = response.data
      })
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
