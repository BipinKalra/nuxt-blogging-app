<template>
  <div class="post-list">
    <PostPreviewCard
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
      :is-admin="isAdmin"
    />
  </div>
</template>

<script>
import PostPreviewCard from "@/components/posts/PostPreviewCard.vue";

export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  },
  components: {
    PostPreviewCard
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
