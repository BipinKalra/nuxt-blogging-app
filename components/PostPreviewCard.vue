<template>
  <nuxt-link :to="`/posts/${post.id}`" class="post-preview">
    <div>
      <div
        class="post-thumbnail"
        :style="{ backgroundImage: `url('${post.thumbnail}')` }"
      ></div>
      <div class="post-content">
        <div class="heading-1 bold">{{ post.title }}</div>
        <div>{{ post.previewText }}</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
