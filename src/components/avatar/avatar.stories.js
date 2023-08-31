import avatar from './avatar.vue'

export default {
  title: 'avatar',
  components: { avatar }
}

export const defaultView = () => ({
  components: { avatar },
  template: `
        <avatar
            :avatarUrl=""
            :nickname="Peter"
    `
})

defaultView.story = {
  name: 'Стандартный вид'
}
