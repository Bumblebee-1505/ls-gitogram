<template>
    <div class="c-stories-slider">
      <div class="stories-container">
        <storie />
      </div>
    </div>
</template>

<script>
import { storie } from '../storie'

export default {
  name: 'storiesSlider',
  components: {
    storie
  }
}
</script>

<style scoped lang="scss" src="./storiesSlider.scss"></style>
