<template>
    <div class="c-storie">
        <div class="storie__header">
            <progress-line active />
            <person class="person" avatarImgSrc="https://picsum.photos/300/300" userName="Jhon Musa" />
        </div>
        <div class="storie__content">
            <slot></slot>
        </div>
        <div class="storie__footer">
            <Button>Following</Button>
        </div>
    </div>
</template>

<script>
import { button } from '../button'
import { person } from '../person'
import { progressLine } from '../progressLine'

export default {
  name: 'storie',
  components: {
    Button: button,
    person,
    progressLine
  },
  props: {
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss">
    .c-storie {
        .person {
            .profile-link {

                &__avatar {
                    width: 2rem;
                    height: 2rem;
                }
            }
        }

        .person-info {

            &__username {
                font-size: 14px;
            }
        }
  }
</style>

<style scoped lang="scss" src="./storie.scss"></style>
