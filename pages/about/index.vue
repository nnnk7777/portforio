<template>
  <div class="base pt-5 sm:pt-42">
    <!-- page title -->
    <div class="titleWrapper">
      <div class=" mx-24 sm:mx-12 w-4/5">
        <h1 class="titleText">
          About
        </h1>
      </div>

      <div class="flex-col sm:flex-row profileWrapper">
        <!-- profile image -->
        <div class="h-auto m-3 sm:w-1/2">
          <div class="flex flex-col">
            <div class="profileImageWrapper">
              <img
                src="~/assets/images/profileimage.jpg"
                alt="profile image"
                class="profileImage"
              />
            </div>
          </div>
        </div>

        <!-- descriptions -->
        <div
          class="w-4/5 sm:w-2/3 h-auto m-3 leading-8 flex flex-col mx-auto sm:content-start"
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
              </a>
            </p>
            <p class="decsription">
              <i class="fas fa-birthday-cake"></i>
              1997 / 07 / 01
            </p>
            <p class="decsription">
              <i class="fas fa-user-graduate"></i>
              {{ this.profile.educationalBackground }}
            </p>
          </div>

          <div class="p-8 sm:pl-16 w-full flex flex-row">
            <div class="flex flex-col">
              <h2 class="font-bold text-2xl">Skill</h2>
              <div
                v-for="(skill, index) in this.profile.skill"
                :key="'skill-' + index"
                class="mt-3 leading-snug"
              >
                <p class="boldText">
                  {{ skill.title }}
                </p>
                <p class="decsription">
                  {{ skill.content }}
                </p>
              </div>
            </div>
          </div>

          <div class="p-8 sm:pl-16 w-full flex flex-row">
            <div class="flex flex-col">
              <h2 class="font-bold text-2xl">Like</h2>
              <div class="ml-5">
                <p class="description">
                  {{ this.profile.like }}
                </p>
                <p class="description">
                  {{ this.profile.music.title }}
                </p>
                <div class="pl-3 leading-snug">
                  <p class="description">
                    {{ this.profile.music.genres }}
                  </p>
                  <a
                    class="description underline"
                    target="_blank"
                    :href="this.profile.music.AppleMusic"
                  >
                    <i class="fab fa-apple"></i>
                    <span class="description">AppleMusic</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileJson from '~/assets/json/profile.json'

export default {
  head() {
    return {
      title: 'About'
    }
  },
  data() {
    return {
      profile: profileJson
    }
  }
}
</script>

<style lang="postcss" scoped>
.base {
  @apply flex justify-center w-full mb-10;
}
.titleWrapper {
  @apply flex flex-col justify-center;
}
.titleText {
  @apply text-4xl font-thin mt-10 mb-2;
}
.boldText {
  @apply font-bold pl-5;
}
.decsription {
  @apply break-words pl-6;
}

.profileWrapper {
  @apply flex justify-center mx-auto;
}
.profileImageWrapper {
  @apply flex justify-center mx-auto rounded overflow-hidden shadow-lg;
}
.profileImage {
  @apply w-auto h-64 object-cover;
}
</style>
