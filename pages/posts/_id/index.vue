<template>
  <div class="single-post-page">
    <div class="post">
      <div class="heading-1 bold post-title">Title</div>
      <div class="post-details">
        <div class="post-detail">Last updated on</div>
        <div class="post-detail">Written By</div>
      </div>
      <div>Post Content</div>
    </div>
    <div class="post-feedback">
      <div>
        Let me know what you think of the post, Send a mail to
        <a href="mailto:bipinkalra@gmail.com">bipinkalra@gmail.com</a>
      </div>
    </div>
  </div>
</template>

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
