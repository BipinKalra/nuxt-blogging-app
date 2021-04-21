<template>
  <div class="single-post-page">
    <div class="post">
      <div class="heading-1 bold post-title">{{ post.title }}</div>
      <div class="post-details">
        <div class="post-detail">
          <!-- This | symbol after updatedDate below binds the date filter to this value where date filter is globally defined in plugins -->
          Last updated on <strong>{{ post.updatedDate | date }}</strong>
        </div>
        <div class="post-detail">
          Written By <strong>{{ post.author }}</strong>
        </div>
      </div>
      <div class="mt-20">{{ post.content }}</div>
    </div>
    <div class="post-feedback mt-20">
      <div>
        Let me know what you think of the post, Send a mail to
        <a href="mailto:bipinkalra@gmail.com">bipinkalra@gmail.com</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  asyncData(context) {
    return axios
      .get(
        //.json needs to be added in the end to get json data from firebase
        `${process.env.baseURL}/posts/${context.params.id}.json`
      )
      .then(response => {
        return {
          post: response.data
        };
      })
      .catch(error => console.log(error));
  }
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
