<template lang="html">
  <!-- card -->
  <div class="cardBase">
    <!-- research thumbnail -->
    <div class="w-full h-56 bg-indigo-600">
      <img
        :src="'/research/'+this.research.thumbnailFile"
        alt="research image"
        class="w-full h-full object-cover"
      />
    </div>
    <!-- texts -->
    <div class="flex flex-col w-full my-2 p-5 h-auto">
      <p class="text-xs text-gray-700">
        <span>
          <i class="far fa-clock"></i>
          {{ this.research.date }}
        </span>
        <span class="ml-4">
          <i class="fas fa-globe"></i>
          {{ this.research.location }}
        </span>
      </p>
      <!-- research title -->
      <div class="h-24 overflow-hidden">
        <h1 class="research-title font-bold text-xl pb-3">
          {{ this.research.title }}
        </h1>
      </div>
      <!-- description -->
      <div class="h-20 pt-2 text-sm overflow-hidden">
        <p>{{ this.research.description }}</p>
      </div>
    </div>
    <!-- read more -->
    <div class="w-full flex justify-end pr-5 pb-5">
      <a :href="this.research.link" target="_blank" rel="noopener">
        <span
          class="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700"
        >
          <i class="fas fa-external-link-alt pr-1"></i>
          read more
        </span>
      </a>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    research: {
      type: Object,
      required: true
    },
  }
}
</script>

<style lang="postcss">
  .cardBase {
    @apply rounded-md overflow-hidden shadow-lg my-5;
    width: 300px;
  }
  .research-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
</style>
