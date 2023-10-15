<template>
  <main>
    <div class="content_block">
      <div class="slide container start">
        <img src="@/assets/images/slider-home/fon.png" alt="fon">
        <div class="slide__block">
          <div class="slide__information">
            <h1 class="slide__title">недвижимость Москвы</h1>
            <span
                class="slide__text">Премиальные объекты в центре Москвы. Высший стандарт комфорта и уровня жизни</span>
            <div class="slide__button">Оставить заявку на подбор</div>
          </div>
        </div>
      </div>
    </div>
    <div class="content_block">
      <div class="business container">
        <div class="previev l-0 t-0">
          <h1 class="title">бизнес</h1>
          <span class="context">Комфорт и функциональность  в сердце города</span>
        </div>
        <NavigationsBlockButtonBordered
            text="Все объекты бизнесс"
        />
        <div class="business card_block">
          <Card
              card_image='src/assets/images/business-images/2.png'
              card_title='FØRST'
              card_context='2 комнаты'
              card_title_bot='ЮАО'
              card_context_bot='53.5 м2 площадь'
              card_price='от 22 300 000 руб'
          />
          <Card
              card_image='src/assets/images/business-images/1.png'
              card_title='Portland'
              card_context='3 комнаты'
              card_title_bot='ЮВАО'
              card_context_bot='78.9 м2 площадь'
              card_price='от 27 500 000 руб'
          />
        </div>
      </div>
    </div>
    <div class="content_block ">
      <div class="premium container">
        <div class="previev r-0 t-0">
          <h1 class="title">Премиум</h1>
          <span class="context">Изысканный дизайн и превосходные удобства</span>
        </div>
        <NavigationsBlockButtonBordered
            text="Все объекты премиум"
        />
        <div class="card_block">
          <Card
              card_image='src/assets/images/premium-images/1.png'
              card_title='REPUBLIC'
              card_context='3 комнаты'
              card_title_bot='ЦАО'
              card_context_bot='63.5 м2 площадь'
              card_price='от 57 800 000 руб'
          />
          <Card
              card_image='src/assets/images/premium-images/2.png'
              card_title='Moments'
              card_context='3 комнаты'
              card_title_bot='СЗАО'
              card_context_bot='82.5 м2 площадь'
              card_price='от 53 200 000 руб'
          />
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss"></style>