<template>
  <div class="flex justify-center">
    <div class="mt-0">
      <img
        src="../assets/header.jpg"
        alt="header image"
        class="h-56 md:h-64 w-screen object-cover object-right md:object-center"
      >

      <div class="my-20 md:mt-32 flex justify-center flex-col mx-10 sm:mx-auto sm:w-2/3">
        <h1 class="text-4xl font-thin">
          About this site
        </h1>
        <div class="flex justify-center">
          <div class="antialiased flex flex-col text-base font-thin mt-3 leading-8">
            <p>こちらは研究や趣味について共有するポートフォリオサイトです。</p>
            <p>趣味やスキルについては
              <nuxt-link to="/about" class="underline text-blue-700 font-medium">
                About
              </nuxt-link>
            を、研究の業績や内容については
              <nuxt-link to="/research" class="underline text-blue-700 font-medium">
                Research
              </nuxt-link>
            をご覧ください。</p>
            <p>ご連絡はフッターのSNSアカウントからお願いします。</p>
          </div>
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
