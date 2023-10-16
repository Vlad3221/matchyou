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
    <div class="content_block">
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
    <div class="content_block pink">
      <div class="delux container">
        <div class="previev l-0 t-0">
          <h1 class="title">Делюкс</h1>
          <span class="context">Непревзойденная роскошь с эксклюзивными преимуществами</span>
        </div>
        <NavigationsBlockButtonBordered
            text="Все объекты делюкс"
        />
        <div class="card_block">
          <Card
              card_image='src/assets/images/delux-images/2.png'
              card_title='Ильинка 3/8'
              card_context='7 комнат'
              card_title_bot='ЦАО'
              card_context_bot='202.5 м2 площадь'
              card_price='от 486 490 000 руб'
          />
          <Card
              card_image='src/assets/images/delux-images/1.png'
              card_title='Чистые Пруды'
              card_context='6 комнат'
              card_title_bot='ЦАО'
              card_context_bot='193.1 м2 площадь'
              card_price='от 563 800 000 руб'
          />
        </div>
      </div>
    </div>
    <div class="content_block">
      <div class="about container">
        <h1 class="about__title-text text-center">ПРЕМИАЛЬНАЯ Роскошь в Обслуживании</h1>
        <span class="about__context text-center">Каждая деталь имеет значение</span>
        <div class="about__information">
          <div class="about__information-image">
            <img src="@/assets/images/matchyou.svg" alt="matchyou.svg">
          </div>
        </div>
        <div class="about__title-image">
          <img src="@/assets/images/about-images/fon.png" alt="">
        </div>
        <div class="about__context">
          <span>Наш подход гарантирует, что каждый аспект вашей покупки будет учтён. От персональных консультаций  и эксклюзивных показов до полного юридического сопровождения — мы с уважением относимся к вашим уникальным потребностям. С нами вы не просто выбираете жильё; вы инвестируете в качество жизни. Соблюдение конфиденциальности и высокий профессионализм делают наш сервис идеальным выбором для тех, кто стремится к исключительности в каждой детали.</span>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss"></style>