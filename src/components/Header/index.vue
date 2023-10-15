<template>
  <div class="header">
    <div class="header__ container start">
      <div class="header__left">
        <div class="header__logo">
          <img alt="logo" class="logo" src="@/assets/logo.svg"/>
        </div>
        <div class="header__nav">
          <RouterLink to="/card">Недвижимость</RouterLink>
          <RouterLink to="/">О проекте</RouterLink>
          <RouterLink to="/">Новости</RouterLink>
        </div>
      </div>
      <div class="header__right">
        <div class="header__nav">
          <div class="header__telephone">
            <img src="@/assets/icons/icon-telephone.svg" />
            <span>8 800 300 55 00</span>
          </div>
          <div class="header__but button_bordered header-button">
            <span>Заказать звонок</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style scoped lang="scss" src="./index.scss"></style>