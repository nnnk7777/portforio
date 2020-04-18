<template>
  <div class="" @click="checkTag">
    <!-- header -->
    <header
      class="w-screen h-16 relative
             flex items-center justify-between
             bg-blue-900
             pl-8 sm:px-32"
    >
      <!-- logo -->
      <div class="flex items-center justify-start text-white mt-0">
        <nuxt-link to="/">
          <span class="text-white text-5xl decofont">nnk</span>
        </nuxt-link>
      </div>

      <!-- humberger -->
      <div class="sm:hidden relative w-48 mt-1 z-20">
        <div class="flex justify-end">
          <button
            id="burger"
            @click="isOpen = !isOpen"
            class="hamburger hamburger--spring"
            :class="{ 'is-active': isOpen }"
            type="button"
            style="z-index: 30"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <burgerMenu @selected="isOpen = false" :active="isOpen" class="decofont" />
      </div>

      <!-- simple list -->
      <div
        class="hidden text-white sm:flex sm:items-center sm:w-auto sm:justify-end decofont text-xl"
      >
        <nuxt-link to="/about" class="mr-10 md:inline-block">
          About
        </nuxt-link>
        <nuxt-link to="/research" class="mr-10 md:inline-block">
          Research
        </nuxt-link>
      </div>
    </header>

    <!-- content -->
    <div class="relative" style="min-height: calc(100vh - 12rem);">
      <nuxt />
    </div>

    <!-- footer -->
    <footer
      class="block w-screen h-32 relative bottom-0 bg-gray-600 text-white flex justify-center items-center"
    >
      <div class="flex flex-col">
        <!-- sns icons -->
        <div class="flex justify-center">
          <div class="w-32 flex justify-around text-2xl">
            <a href="https://twitter.com/nnnk7777" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/nnnk7777" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/nnnk7777/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/nnnk7777" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
        </div>

        <!-- copyright -->
        <div class="flex justify-center text-xs mt-2">
          <p>© 2020 Kosuke Nonaka</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import burgerMenu from '~/components/burgerMenu'

export default {
  components: {
    burgerMenu
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    checkTag(e) {
      if (
        e.target.tagName != 'LI' &&
        e.target.tagName != 'BUTTON' &&
        e.target.className != 'hamburger-inner' &&
        e.target.className != 'hamburger-box'
      ) {
        this.isOpen = false
      }
    }
  }
}
</script>

<style>
  .decofont {
    font-family: 'Jockey One', sans-serif;
  }
</style>
