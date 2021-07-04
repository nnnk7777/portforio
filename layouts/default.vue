<template>
  <div class="" @click="checkTag">
    <!-- header -->
    <header
      class="header px-8 sm:px-32"
    >
      <!-- logo -->
      <div class="logo">
        <nuxt-link to="/">
          <span class="decofont text-5xl">nnk</span>
        </nuxt-link>
      </div>

      <!-- humberger -->
      <div class="sm:hidden humbergerBuns">
        <div class="flex justify-end">
          <button
            id="burger"
            @click="isOpen = !isOpen"
            class="hamburger hamburger--spring"
            :class="{ 'is-active': isOpen }"
            type="button"
            style="z-index: 30"
            name="hamburgerMenu"
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
        class="hidden sm:flex sm:items-center sm:w-auto sm:justify-end decofont text-xl"
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
      class="footer"
    >
      <div class="flex flex-col">
        <!-- sns icons -->
        <div class="flex justify-center">
          <div class="w-32 flex justify-around text-2xl">
            <a
              v-for="contact,index in this.contacts" :key="index"
              :href="String(contact.url) + String(contact.name)"
              target="_blank"
               rel="noopener"
            >
              <i class="fab" :class="'fa-'+contact.name"></i>
            </a>
          </div>
        </div>

        <!-- copyright -->
        <div class="copyright">
          <p>© {{ this.currentYear }} Kosuke Nonaka</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import burgerMenu from '~/components/burgerMenu'
import contactsJson from '~/assets/json/contacts.json'

export default {
  components: {
    burgerMenu
  },
  data() {
    return {
      isOpen: false,
      currentYear: null,
      contacts: contactsJson
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
  },
  mounted(){
    const y = new Date()
    this.currentYear = y.getFullYear()
  }
}
</script>

<style lang="postcss" scoped>
  .header {
    @apply flex items-center justify-between w-screen h-16 bg-blue-900;
  }
  .footer{
    @apply w-screen h-32 relative bottom-0 bg-gray-700 text-white flex justify-center items-center;
  }
  .logo{
    @apply flex items-center justify-start text-white mt-0;
  }
  .decofont {
    @apply text-white;
    font-family: 'Jockey One', sans-serif;
  }
  .copyright {
    @apply flex justify-center text-xs mt-2;
  }
  .hambergerBuns {
    @apply  relative w-48 mt-1 z-20;
  }
</style>
