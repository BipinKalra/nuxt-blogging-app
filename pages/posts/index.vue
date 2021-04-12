<template>
  <div class="posts-page all-center">
    <PostList />
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList.vue";

export default {
  components: {
    PostList
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
