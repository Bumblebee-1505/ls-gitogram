import comment from './comment.vue'

export default {
  title: 'comment',
  component: { comment }
}

export const defaultView = () => ({
  components: { comment },
  template: `
      <comment text="Some text" username="Jhon Doe" />
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}
