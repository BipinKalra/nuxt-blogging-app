<template>
  <div class="posts-page all-center">
    <PostList :posts="posts" />
  </div>
</template>

<script>
export default {
  // asyncData can be used instead of fetch if we are using the created hook to fetch data
  // async fetch(context) {
  //   // New way of doing things - Promise based approach. Old approach in the index page for the website
  //   // return new Promise((resolve, reject) => {
  //   //   setTimeout(() => {
  //   //     resolve({
  //   //       posts: [
  //   //         {
  //   //           id: 1,
  //   //           thumbnail:
  //   //             "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1578710070/1578710068.jpg",
  //   //           title: "Fantastic Post",
  //   //           previewText: "This is the preview for a fantastic post!",
  //   //           content:
  //   //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  //   //         },
  //   //         {
  //   //           id: 2,
  //   //           thumbnail:
  //   //             "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1578710070/1578710068.jpg",
  //   //           title: "Fantastic Post 2",
  //   //           previewText: "This is the preview for a fantastic post!",
  //   //           content:
  //   //             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  //   //         }
  //   //       ]
  //   //     });

  //   //     // In case of error
  //   //     // reject(new Error());
  //   //   }, 1500);
  //   // })
  //   //   .then(data => {
  //   //     // In case of asyncData we need to return the data but in case of fetch we can just add the fetched data to the store directly in the then block
  //   //     // return data;

  //   //     // The context object has the reference to the vuex store as well
  //   //     context.store.commit("setPosts", data.posts);
  //   //   })
  //   //   .catch(e => {
  //   //     context.error(e);
  //   //   });
  // },
  computed: {
    posts() {
      // This needs to be created to fetch the posts from the vuex store to be used wihtin the markup
      return this.$store.getters.posts;
    }
  }
  // Created method can be used alongside of asyncdata but this can be eliminated by using the fetch hook
  // created() {
  //   this.$store.dispatch("setPosts", this.posts);
  // }
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
