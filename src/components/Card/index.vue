<template>
  <div class="card component_card">
    <img :src="card_image" >
    <div class="card title">
      <div>
        <span class="title">{{ card_title }}</span>
        <span class="context">{{ card_context }}</span>
      </div>
      <div>
        <span v-if="card_title_bot" class="title">{{ card_title_bot }}</span>
        <span v-if="card_title_bot && card_context_bot" class="context">{{ card_context_bot }}</span>
      </div>
    </div>
    <div class="card information">
      <span class="title">{{ card_price }}</span>
      <RouterLink :to=card_link class="page_link">Оставить заявку</RouterLink>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss"></style>