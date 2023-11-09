<template>
  <div class="h-screen w-full flex place-items-center justify-center">
    <h1>vue turbo starter</h1>
    <div class="block">
      <Button prefix="test" type="primary"> Button1 </Button>
    </div>
    <el-button @click="ElMessage('hello')">button</el-button>
    <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
    <LazyElButton type="warning">lazy button</LazyElButton>
    <!--  -->
  </div>
  <NuxtPage />
</template>
