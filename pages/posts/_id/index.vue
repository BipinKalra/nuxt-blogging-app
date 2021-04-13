<template>
  <div class="single-post-page">
    <div class="post">
      <div class="heading-1 bold post-title">{{ post.title }}</div>
      <div class="post-details">
        <div class="post-detail">
          Last updated on <strong>{{ post.updatedDate }}</strong>
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
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        post: {
          id: 1,
          author: "Bipin",
          updatedDate: new Date().toLocaleDateString("en-US"),
          thumbnail:
            "https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1578710070/1578710068.jpg",
          // This context object allows us to access the current context ie. various pieces of information which isn't available yet, otherwise
          title: "Fantastic Post (ID: " + context.route.params.id + ")",
          previewText: "This is the preview for a fantastic post!",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      });
    }, 1000);
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
