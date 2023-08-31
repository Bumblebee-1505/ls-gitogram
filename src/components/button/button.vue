<template>
    <button class="button">{{ text || "Follow" }}</button>

</template>

<script>
export default {
  title: 'хButton',
  props: {
    hoverText: {
      type: String
    }
  },
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>

</style>
