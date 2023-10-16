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
          <AboutTelephone/>
          <RequestACall
              text="Заказать звонок"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>
<style scoped lang="scss" src="./index.scss"></style>