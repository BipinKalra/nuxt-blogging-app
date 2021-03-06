import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: []
    },
    mutations: {
      setPosts(state, newPosts) {
        state.posts = newPosts;
      },
      addPost(state, post) {
        state.posts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.posts.findIndex(
          post => post.id === editedPost.id
        );
        state.posts[postIndex] = editedPost;
      }
    },
    actions: {
      // This is a special action called by nuxt on the server. Can be used to perform the fetch operation once on the server itself so that theres no need for any checks to be performed in individual pages
      nuxtServerInit(vuexContext, context) {
        // return new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     vuexContext.commit("setPosts", [
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
        //     ]);
        //     resolve();
        //   }, 1000);
        // });

        // Code above was written just to emulate the behaviour of a fetch request

        // This code can be used while using normal axios import
        // return axios
        //   .get(`${process.env.baseURL}/posts.json`)
        //   .then(response => {
        //     const postsArray = [];
        //     for (const key in response.data) {
        //       postsArray.push({ ...response.data[key], id: key });
        //     }
        //     vuexContext.commit("setPosts", postsArray);
        //   })
        //   .catch(error => console.log(error));

        // This code would replace the code above in case we use @nuxtjs/axios module which is globally available in the application
        return context.app.$axios
          .$get(`/posts.json`)
          .then(response => {
            const postsArray = [];
            for (let key in response) {
              postsArray.push({ ...response[key], id: key });
            }
            vuexContext.commit("setPosts", postsArray);
          })
          .catch(error => console.log(error));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      async addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        };
        return this.$axios
          .$post(`/posts.json`, createdPost)
          .then(result => {
            vuexContext.commit("addPost", {
              ...createdPost,
              id: result.name
            });
          })
          .catch(error => console.log(error));
      },
      async editPost(vuexContext, post) {
        return this.$axios
          .$put(`/posts/${post.id}.json`, post)
          .then(response => {
            vuexContext.commit("editPost", post);
          })
          .catch(error => console.log(error));
      }
    },
    getters: {
      posts(state) {
        return state.posts;
      }
    }
  });
};

export default createStore;
