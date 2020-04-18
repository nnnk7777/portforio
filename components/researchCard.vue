<template lang="html">
  <!-- card -->
  <div class="max-w-xs rounded-md overflow-hidden shadow-lg my-5 sm:m-8">
    <!-- research thumbnail -->
    <div class="w-full h-56 bg-indigo-600">
      <img
        :src="thumbnail"
        alt="research image"
        class="w-full h-full object-cover"
      />
    </div>
    <!-- texts -->
    <div class="flex flex-col w-full my-2 p-5 h-auto">
      <!-- research title -->
      <div class="h-24 overflow-hidden">
        <h1 class="research-title font-bold text-xl pb-3">
          {{ this.title }}
        </h1>
      </div>
      <!-- description -->
      <div class="h-20 pt-2 text-sm overflow-hidden">
        <p>{{ this.description }}</p>
      </div>
    </div>
    <!-- read more -->
    <div class="w-full flex justify-end pr-5 pb-5">
      <a :href="link" target="_blank">
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
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
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
