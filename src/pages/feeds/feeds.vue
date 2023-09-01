<template>
    <div class="topline">
        <topline>
            <template #headline>
              <logo />
              <BaseMenu />
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item" v-for="story in stories" :key="story.id">
                        <story-user-item
                            :avatar="story.avatar"
                            :username="story.username"
                            @onPress="handlePress(story.id)"
                        />
                    </li>
                </ul>
            </template>
        </topline>
    </div>
    <div class="page-content">
      <ul class="feeds">
        <li class="feeds__item" v-for="item in items" :key="item.id">
          <feed class="feed"
            :username="item.owner.login"
            :avatarImgSrc="item.owner.avatar_url"
            :publicDate="item.updated_at" >
            <repository
              :title="item.name"
              :description="item.description"
              :starsCount="item.stargazers_count"
              :forksCount="item.forks"
            />
          </feed>
        </li>
      </ul>
      <pre>{{ items }}</pre>
    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './data.json'
import { feed } from '../../components/feed'
import { logo } from '../../components/logo'
import { menu } from '../../components/menu'
import { repository } from '../../components/repository'
import * as api from '../../api'

export default {
  name: 'feeds',
  components: {
    topline,
    BaseMenu: menu,
    storyUserItem,
    feed,
    logo,
    repository
  },
  data () {
    return {
      stories,
      items: []
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
      // console.log(this.items)
    } catch (error) {
      console.log(error)
    }

    console.log(this.$store.state.foo)
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss">
</style>
