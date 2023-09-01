import spinner from './spinner.vue'

export default {
  title: 'spinner',
  component: { spinner }
}

export const defaultView = () => ({
  components: { spinner },
  template: `
        <spinner />
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}
