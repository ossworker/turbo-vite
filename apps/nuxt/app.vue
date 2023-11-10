<template>
  <div class="h-screen w-full flex place-items-center justify-center">
    <h1>vue turbo starter</h1>
    <div class="block">
      <my-button size="small" @click="() => {}" label="UI按钮" />
    </div>
    <a-space>
      <a-button type="primary" status="success">Primary</a-button>
      <a-button status="success">Default</a-button>
      <a-button type="dashed" status="success">Dashed</a-button>
      <a-button type="outline" status="success">Outline</a-button>
      <a-button type="text" status="success">Text</a-button>
    </a-space>
    <!--  -->
  </div>
  <NuxtPage />
</template>
<script lang="ts" setup>
import MyButton from "@ui/components/button/Button.vue";

useSeoMeta({
  description: "[description]",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico",
    },
  ],
});
</script>
