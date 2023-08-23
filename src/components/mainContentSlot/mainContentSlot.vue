<template>
    <div class="main__slot_description">
        <h2 class="main__slot-title">Vue.js</h2>
        <h3 class="main__slot-subtitle">JavaScript framework for building interactive web applications ⚡</h3>

        <div class="main__slot_info">
            <div class="main__info_star">
                <icon name="star" />
            </div>

            <div class="main__info_fork"></div>
        </div>
    </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'mainContent',
  components: {
    icon
  }
}

</script>

<style src="./mainContentSlot.scss" lang="scss" scoped></style>
