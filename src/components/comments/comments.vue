<template>
    <div class="c-comment">
        <p>
            <span class="username">{{ username }}</span>

            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }

  }
}
</script>

<style src="./comments.scss" lang="scss" scoped></style>
