<template>
  <div class="admin-new-post-page">
    <div class="new-post-form">
      <AdminPostForm @submitPost="onSubmitPost" />
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
  methods: {
    onSubmitPost(postData) {
      axios
        .post(
          "https://nuxt-blog-26316-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
          { ...postData, updatedDate: new Date() }
        )
        .then(result => {
          this.$router.replace(`/admin`);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
