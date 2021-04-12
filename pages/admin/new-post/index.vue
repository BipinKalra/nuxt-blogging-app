<template>
  <div class="admin-new-post-page">
    <div class="new-post-form">
      <AdminPostForm />
    </div>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm.vue";

export default {
  components: {
    AdminPostForm
  }
};
</script>
