import progressLine from './progressLine.vue'

export default {
  title: 'progressLine',
  component: { progressLine },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'fires when progress reaches the end'
    }
  }
}

export const defaultView = (args) => ({
  components: { progressLine },
  data () {
    return { args }
  },
  template: `
        <progressLine @onFinish="args.onFinish" ></progressLine>
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}
