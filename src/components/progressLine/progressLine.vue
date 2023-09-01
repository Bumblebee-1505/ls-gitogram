<template>
    <div :class={active} class="c-progress-line">
        <div ref="indicator" class="indicator"></div>
    </div>
</template>

<script>

export default {
  name: 'progressLine',
  data () {
    return {
      active: false
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.active = true
    })

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style scoped lang="scss" src="./progressLine.scss"></style>
