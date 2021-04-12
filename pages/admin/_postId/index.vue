<template>
  <div class="admin-edit-post-page">
    <div class="edit-post-form">
      <AdminPostForm :post="loadedPost" />
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
  data() {
    return {
      loadedPost: {
        author: "Bipin",
        title: "Woahhh! What a post!",
        thumbnailLink:
          "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1578710070/1578710068.jpg",
        content: `I am kinda new to Vue but there is a problem I encountered with this solution. When I add @click="e => e.target.classList.toggle('active')" on vue-bootstrap card parent element what happens is that the whole card doesn't get the CSS toggle, instead the class applies on parts of card you click and you can toggle multiple in a single card.`
      }
    };
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
