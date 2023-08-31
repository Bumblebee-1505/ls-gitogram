<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="logo">
                    <icon name="logo" />
                </div>
                <div class="icon">
                    <a href="" class="icon__link">
                        <icon name="home" />
                    </a>
                    <a href="" class="icon__link">
                        <icon name="home" />
                    </a>
                    <a href="" class="icon__link">
                        <icon name="shape" />
                    </a>
                </div>
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories__item" v-for="story in stories" :key="story.id">
                        <story-user-item :avatar="story.avatar" :username="story.username"
                            @onPress="handlePress(story.id)" />
                    </li>
                </ul>
            </template>
        </topline>
    </div>

    <mainContent>
        <template #mainContentSlot>
            <div class="main__slot_description">
                <h2 class="main__slot-title">Vue.js</h2>
                <h3 class="main__slot-subtitle">JavaScript framework for building interactive web applications ⚡</h3>

                <div class="main__slot_info">
                    <button class="main__info_link">
                        <div class="main__icon">
                            <icon name="star" />
                        </div>
                        Star
                    </button>
                    <p class="main__info-text">156K</p>

                    <button class="main__info_link">
                        <div class="main__icon">
                            <icon name="fork" />
                        </div>
                        Fork
                    </button>
                    <p class="main__info-text">4</p>
                </div>
            </div>
        </template>
        <template #mainContentComments>
            <div class="c-feed">
                <toggler @onToggle="toggle" />
                <div class="comments" v-if="shown">
                    <ul class="comments__list">
                        <li class="comments-item" v-for="n in 5" :key="n">
                            <comments text="some text" username="John Doe" />
                        </li>
                    </ul>
                </div>
            </div>
        </template>
    </mainContent>
</template>

<script>
import { topline } from '../../components/topline'
import { storyUserItem } from '../../components/storyUserItem'
import { mainContent } from '../../components/mainContent'
import { toggler } from '../../components/toggler'
import { comments } from '../../components/comments'
import stories from './data.json'
import { icon } from '../../icons'
// import { template } from '@babel/core'
export default {
  name: 'feeds',
  components: {
    topline,
    storyUserItem,
    mainContent,
    toggler,
    comments,
    icon
    // template
  },
  data () {
    return {
      stories,
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
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
        color: #262626;
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

.main__slot-title {
    color: #292929;
    font-size: 26px;
    font-weight: 700;
}

.main__slot-subtitle {
    color: #404040;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 32px;
}

.main__slot_info {
    display: flex;
    justify-content: flex-start;
    gap: 10px;

    .main__info_link .main__info-text{
        box-shadow: 0px 1px 0px 0px rgba(27, 31, 35, 0.04);
        border-radius: 6px 0px 0px 6px;
        background: #FAFBFC;
        box-shadow: 0px 1px 0px 0px rgba(27, 31, 35, 0.04), 0px 2px 0px 0px rgba(255, 255, 255, 0.02) inset;
    }
}
.c-feed {
    margin-bottom: 10px;
}
</style>
