<template>
  <div class="admin-page">
    <div class="new-post">
      <button class="button-primary" @click="$router.push('/admin/new-post')">
        Create Post
      </button>
    </div>
    <div class="existing-posts">
      <div class="heading-1 bold">Existing Posts</div>
      <PostList :isAdmin="true" :posts="posts" />
    </div>
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList.vue";

export default {
  layout: "admin",
  components: {
    PostList
  },
  computed: {
    posts() {
      // This needs to be created to fetch the posts from the vuex store to be used wihtin the markup
      return this.$store.getters.posts;
    }
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
