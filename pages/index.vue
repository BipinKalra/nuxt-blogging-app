<template>
  <div class="homepage">
    <div class="intro">
      <div class="heading-1 bold page-title">Get the latest tech news!</div>
    </div>
    <PostList :posts="posts" />
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      // This needs to be created to fetch the posts from the vuex store to be used wihtin the markup
      return this.$store.getters.posts;
    }
  }
  // asyncData(context, callback) {
  //   setTimeout(() => {
  //     callback(null, {
  //       posts: [
  //         {
  //           id: 1,
  //           thumbnail:
  //             "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1578710070/1578710068.jpg",
  //           title: "Fantastic Post",
  //           previewText: "This is the preview for a fantastic post!",
  //           content:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  //         },
  //         {
  //           id: 2,
  //           thumbnail:
  //             "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1578710070/1578710068.jpg",
  //           title: "Fantastic Post 2",
  //           previewText: "This is the preview for a fantastic post!",
  //           content:
  //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  //         }
  //       ]
  //     });
  //   }, 1500);
  // }
  // data() {
  //   return {
  //     posts: []
  //   };
  // },
  // created() {
  //   // This setTimeout would be replaced by an actual async api call in real world scenario
  //   setTimeout(() => {
  //     this.posts = [
  //       {
  //         id: 1,
  //         thumbnail:
  //           "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1578710070/1578710068.jpg",
  //         title: "Fantastic Post",
  //         previewText: "This is the preview for a fantastic post!",
  //         content:
  //           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  //       },
  //       {
  //         id: 2,
  //         thumbnail:
  //           "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1578710070/1578710068.jpg",
  //         title: "Fantastic Post 2",
  //         previewText: "This is the preview for a fantastic post!",
  //         content:
  //           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  //       }
  //     ];
  //   }, 1500);
  // }
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-page-background.jpg");
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
</style>
