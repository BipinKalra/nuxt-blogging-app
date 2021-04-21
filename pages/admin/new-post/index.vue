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
      this.$store.dispatch("addPost", postData).then(() => {
        this.$router.replace(`/admin`);
      });
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
