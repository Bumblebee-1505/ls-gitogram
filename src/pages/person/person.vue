<template>
    <div class="c-person">
        <a href="#" class="profile-link">
            <img :src="avatarImgSrc" alt="" class="profile-link__avatar">
        </a>
        <div class="person-info">
            <div class="person-info__username">
                {{ userName }}
            </div>
            <div class="person-info__connections connections" v-if="reposts">
                <span class="connections__number">{{ reposts }}</span> reposts <span class="connections__number">{{ watchers }}</span> <a href="#" class="connections__link">watchers</a>
            </div>
            <div class="person-info__realName" v-if="realName">
                {{ realName }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'person',
  props: {
    avatarImgSrc: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    realName: {
      type: String
    },
    reposts: {
      type: Number
    },
    watchers: {
      type: Number
    }
  }
}
</script>

<style scoped lang="scss" src="./person.scss"></style>
