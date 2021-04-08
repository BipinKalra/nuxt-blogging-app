<template>
  <div class="homepage">
    <div class="intro">
      <div class="heading-1 bold">Get the latest tech news!</div>
    </div>
    <div class="featured-posts">
      <nuxt-link :to="`/posts/${1}`">
        <div class="post-preview">
          <div class="post-thumbnail"></div>
          <div class="post-content">
            <div class="heading-1 bold post-title"></div>
            <div>Preview Text</div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
