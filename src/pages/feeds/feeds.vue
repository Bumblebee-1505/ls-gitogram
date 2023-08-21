<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="logo">
                    <icon name="logo"/>
                </div>
                <div class="icon">
                    <icon name="home"/>
                    <icon name="home"/>
                    <icon name="shape"/>
                </div>
            </template>
        </topline>

        <topline>
            <template #content>
                <h2>Content</h2>
            </template>
        </topline>

    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'
export default {
  name: 'feeds',
  components: {
    topline,
    icon
  }
}
</script>

<style lang="scss" scoped>
    .logo {
        color: black;
    }
    .icon {
        color: black;
    }
    .icon:hover {
        color: greenyellow;
    }
</style>
