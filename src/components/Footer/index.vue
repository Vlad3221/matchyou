<template>
  <div class="content_block pink">
    <div class="footer container start">
      <div class="footer__block-logo">
        <img src="@/assets/logo.svg" alt="logo" class="footer__block-logo_image">
      </div>
      <div class="footer__block-navigation">
        <ul>
          <li>
            <RouterLink to="/">О проекте</RouterLink>
          </li>
          <li>
            <RouterLink to="/">Недвижимость</RouterLink>
          </li>
          <li>
            <RouterLink to="/">Новости</RouterLink>
          </li>
        </ul>
        <ul>
          <li>
            <RouterLink to="/">Политика конфиденциальности</RouterLink>
          </li>
          <li>
            <RouterLink to="/">Пользовательское соглашение</RouterLink>
          </li>
        </ul>
      </div>
      <div class="footer__block-about">
        <ul>
          <li>
            <AboutTelephone />
          </li>
          <li>
            <RequestACall
                styl="dark"
                text="Обратная связь"
            />
          </li>
        </ul>
        <div class="footer__block-message">
          <RouterLink to="/" class="footer__block-message_wp">
            <img src="@/assets/icons/messagers/wp.png" alt="wp">
          </RouterLink>
          <RouterLink to="/" class="footer__block-message_tg">
            <img src="@/assets/icons/messagers/tg.png" alt="tg">
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss"></style>