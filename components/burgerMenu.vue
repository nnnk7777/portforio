<template>
  <transition name="right">
    <div v-show="active" class="absolute bg-gray-600 opacity-90 w-48 z-10 text-white text-lg overflow-x-hidden">
      <ul @click="$emit('selected')">
        <nuxt-link to="/about">
          <li class="burgerPatty">
            <span style="width:20px" class="flex justify-center mr-2">
              <i class="fas fa-id-card"></i>
            </span>
            About
          </li>
        </nuxt-link>
        <nuxt-link to="/research">
          <li class="burgerPatty">
            <span style="width:20px" class="flex justify-center mr-2">
              <i class="fas fa-graduation-cap"></i>
            </span>
            Research
          </li>
        </nuxt-link>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
      required: true
    }
  },
}
</script>

<style lang="postcss">
  .right-enter-active,
  .right-leave-active {
    transform: translate(0px, 0px);
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  .right-enter,
  .right-leave-to {
    transform: translateX(16rem) translateX(0px);
  }

  .burgerPatty {
    @apply flex items-center bg-blue-900 h-10 pl-8 my-px;
  }
</style>
