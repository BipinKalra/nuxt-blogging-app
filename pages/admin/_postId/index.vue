<template>
  <div class="admin-edit-post-page">
    <div class="edit-post-form">
      <AdminPostForm :post="post" @submitPost="onEditPost" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminPostForm from "@/components/admin/AdminPostForm.vue";

export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return axios
      .get(
        //.json needs to be added in the end to get json data from firebase
        `https://nuxt-blog-26316-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.postId}.json`
      )
      .then(response => {
        return {
          post: response.data
        };
      })
      .catch(error => console.log(error));
  },
  methods: {
    onEditPost(postData) {
      axios
        .put(
          `https://nuxt-blog-26316-default-rtdb.europe-west1.firebasedatabase.app/posts/${this.$route.params.postId}.json`,
          postData
        )
        .then(response => console.log(response))
        .catch(error => console.log(error));

      this.$router.replace(`/admin`);
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
