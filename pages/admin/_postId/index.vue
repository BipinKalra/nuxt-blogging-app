<template>
  <div class="admin-edit-post-page">
    <div class="edit-post-form">
      <AdminPostForm :post="post" @submitPost="onEditPost" />
    </div>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm.vue";

export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return context.app.$axios
      .$get(
        //.json needs to be added in the end to get json data from firebase
        `/posts/${context.params.postId}.json`
      )
      .then(response => {
        return {
          post: { ...response, id: context.params.postId }
        };
      })
      .catch(error => console.log(error));
  },
  methods: {
    onEditPost(postData) {
      this.$store.dispatch("editPost", postData).then(() => {
        this.$router.replace(`/admin`);
      });
    }
  }
};
</script>

<style scoped>
.edit-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .edit-post-form {
    width: 500px;
  }
}
</style>
