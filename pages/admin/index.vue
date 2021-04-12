<template>
  <div class="admin-page">
    <div class="new-post">
      <button class="button-primary">Create Post</button>
    </div>
    <div class="existing-posts">
      <div class="heading-1 bold">Existing Posts</div>
      <PostList />
    </div>
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
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts .heading-1 {
  text-align: center;
}
</style>
