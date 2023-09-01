import button from './button.vue'

export default {
  title: 'button',
  component: { button }
}

export const defaultView = () => ({
  components: { xButton: button },
  template: `
        <x-button>Following</x-button>
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}
