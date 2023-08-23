<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="logo">
                    <icon name="logo"/>
                </div>
                <div class="icon">
                    <a href="" class="icon__link">
                        <icon name="home"/>
                    </a>
                    <a href="" class="icon__link">
                        <icon name="home"/>
                    </a>
                    <a href="" class="icon__link">
                        <icon name="shape"/>
                    </a>
                </div>
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories__item" v-for="story in stories" :key="story.id">
                        <story-user-item
                            :avatar="story.avatar"
                            :username="story.username"
                            @onPress="handlePress(story.id)"
                        />
                    </li>
                </ul>
            </template>
        </topline>

        <mainContent>
            <mainContentSlot></mainContentSlot>
        </mainContent>
    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { storyUserItem } from '../../components/storyUserItem'
import { mainContent } from '../../components/mainContent'
import { mainContentSlot } from '../../components/mainContentSlot'
import stories from './data.json'
import { icon } from '../../icons'
export default {
  name: 'feeds',
  components: {
    topline,
    storyUserItem,
    mainContent,
    mainContentSlot,
    icon
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="scss" scoped>
    .logo {
        color: #000;
        width: 174px;
        height: 40px;
        &:hover {
            cursor: pointer;
            color: #31AE54;
        }
    }
    .icon {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__link {
            width: 32px;
            color: #262626 ;
            margin-right: 20px;
        }

        &__link:last-child {
            margin-right: 0;
        }

        &__link:hover {
            color: #31AE54;
        }
    }

    .stories {
        display: flex;
        justify-content: space-between;
    }
</style>
