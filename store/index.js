import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: []
    },
    mutations: {
      setPosts(state, newPosts) {
        state.posts = newPosts;
      }
    },
    actions: {
      // This is a special action called by nuxt on the server. Can be used to perform the fetch operation once on the server itself so that theres no need for any checks to be performed in individual pages
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: 1,
                thumbnail:
                  "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1578710070/1578710068.jpg",
                title: "Fantastic Post",
                previewText: "This is the preview for a fantastic post!",
                content:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              },
              {
                id: 2,
                thumbnail:
                  "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1578710070/1578710068.jpg",
                title: "Fantastic Post 2",
                previewText: "This is the preview for a fantastic post!",
                content:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
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
