<template>
  <div class="base">
      <img
        src="../assets/images/header.jpg"
        alt="header image"
        class="headerImage h-56 md:h-64 object-right md:object-center"
      >

      <div class="contentWrapper md:mt-32 sm:w-2/3">
        <h1 class="subtitle">
          About this site
        </h1>
        <div class="flex justify-center mx-auto">
          <div class="text">
            <p>こちらは研究や趣味について共有するポートフォリオサイトです。</p>
            <p>趣味やスキルについては
              <nuxt-link to="/about" class="link">
                About
              </nuxt-link>
            を、研究の業績や内容については
              <nuxt-link to="/research" class="link">
                Research
              </nuxt-link>
            をご覧ください。</p>
            <p>ご連絡はフッターのSNSアカウントからお願いします。</p>
          </div>
        </div>
      </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  head() {
    return {
      title: 'Kosuke Nonaka',
      titleTemplate : ''
    }
  }
}
</script>

<style lang="postcss" scoped>
  .base {
    @apply flex items-center flex-col;
  }
  .headerImage {
    @apply w-screen object-cover;
  }

  .contentWrapper{
    @apply flex justify-center flex-col my-20 mx-10;
  }

  .subtitle {
    @apply text-4xl font-thin;
  }

  .text{
    @apply antialiased flex flex-col text-base font-thin mt-3 leading-8;
  }

  .link {
    @apply underline text-blue-700 font-medium;
  }
</style>
