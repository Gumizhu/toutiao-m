<!--
 * @Author: Gumizhu
 * @Date: 2023-03-22 11:42:21
 * @Descripttion:
 * @LastEditors: Gumizhu
 * @LastEditTime: 2023-03-22 12:14:16
-->
<template>
  <div id="app">
    <h1>黑马头条</h1>
    <div>
      <i class="toutiao toutiao-yuedu"></i>
    </div>

    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <!-- 路由的出口（路由挂载点） -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less"></style>
