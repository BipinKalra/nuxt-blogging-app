<template>
  <div class="homepage">
    <div class="intro">
      <div class="heading-1 bold page-title">Get the latest tech news!</div>
    </div>
    <div class="featured-posts">
      <PostPreviewCard />
      <PostPreviewCard />
    </div>
  </div>
</template>

<script>
import PostPreviewCard from "@/components/PostPreviewCard.vue";
export default {
  components: {
    PostPreviewCard
  }
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro .page-title {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro .page-title {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
