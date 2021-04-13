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
  data() {
    return {
      posts: [
        {
          id: 1,
          thumbnail:
            "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1578710070/1578710068.jpg",
          title: "Fantastic Post",
          previewText: "This is the preview for a fantastic post!",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
          id: 2,
          thumbnail:
            "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1578710070/1578710068.jpg",
          title: "Fantastic Post 2",
          previewText: "This is the preview for a fantastic post!",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      ]
    };
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
