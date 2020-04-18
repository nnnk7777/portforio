<template>
  <div class="flex justify-center pt-5 mb-10 sm:pt-42 w-screen">

    <!-- page title -->
    <div class="flex flex-col justify-center">
      <div class=" mx-auto w-4/5 lg:w-3/4">
        <h1 class="text-4xl font-thin mt-10 mb-2">
          About
        </h1>
      </div>

      <div
        class="flex flex-col sm:flex-row justify-center w-7/8 mx-auto h-100"
      >
        <!-- profile image -->
        <div class="h-auto m-3 sm:w-1/2">
          <div class="flex flex-col sm:sticky sm:top-10">

            <div class="flex justify-center mx-auto">
                <img
                  src="../../assets/profileimage.jpg"
                  alt="profile image"
                  class="w-auto h-64 object-cover"
                />

            </div>
          </div>
        </div>

        <!-- descriptions -->
        <div
          class="w-4/5 sm:w-1/2 h-auto m-3 leading-8 flex flex-col mx-auto sm:content-start"
        >
          <div class="pt-0 p-8 sm:pl-16 w-full" style="text-indent: -0.5rem">
            <h2 class="font-bold text-2xl">Basic Info</h2>
            <p class="decsription">
              <i class="fas fa-user"></i>
              野中 滉介
            </p>
            <p class="decsription ml-2">
              Kosuke Nonaka
            </p>
            <p class="decsription underline">
              <i class="fab fa-twitter"></i>
              <a
                href="https://twitter.com/nnnk7777"
                target="_blank"
                rel="noopener"
                class="hover:text-blue-400"
              >
                nnnk7777
                <i class="fas fa-external-link-alt ml-3 text-xs"></i>
              </a>
            </p>
            <p class="decsription">
              <i class="fas fa-birthday-cake"></i>
              1997 / 07 / 01
            </p>
            <p class="decsription">
              <i class="fas fa-user-graduate"></i>
              明治大学先端数理科学研究科先端メディアサイエンス専攻在学中
            </p>
          </div>

          <div class="p-8 sm:pl-16 w-full flex flex-row">
            <div class="flex flex-col w-1/2">
              <h2 class="font-bold text-2xl">Skills</h2>
              <p class="decsription">Vue.js</p>
              <p class="decsription">Nuxt.js</p>
              <p class="decsription">Ruby</p>
              <p class="decsription">Swift</p>
              <p class="decsription">Processing</p>
              <p class="decsription">HTML</p>
              <p class="decsription">CSS</p>
            </div>
            <div class="flex flex-col text-5xl mt-6 mx-auto justify-center">
              <i class="fab fa-vuejs m-auto text-green-600"></i>
              <i class="fas fa-gem m-auto text-red-600"></i>
              <i class="fab fa-swift m-auto text-orange-500"></i>
            </div>
          </div>

          <div class="p-8 sm:pl-16 w-full flex flex-row">
            <div class="flex flex-col w-1/2">
              <h2 class="font-bold text-2xl">Likes</h2>
              <p class="decsription">音楽</p>
              <p class="decsription">犬</p>
              <p class="decsription">映画</p>
              <p class="decsription">筋トレ</p>
              <p class="decsription">カメラ</p>
              <p class="decsription">喫茶店</p>
              <p class="decsription">旅行</p>
            </div>
            <div class="flex flex-col text-5xl mt-6 mx-auto justify-center">
              <i class="fas fa-paw m-auto text-blue-500"></i>
              <i class="fas fa-camera-retro m-auto text-yellow-500"></i>
              <i class="fas fa-headphones-alt m-auto text-gray-600"></i>
              <i class="fas fa-mug-hot m-auto text-indigo-400"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'About'
    }
  }
}
</script>

<style lang="postcss">
.decsription {
  @apply break-all pl-5;
}
</style>
