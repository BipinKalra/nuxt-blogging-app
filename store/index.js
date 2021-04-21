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
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      posts(state) {
        state.posts;
      }
    }
  });
};

export default createStore;
