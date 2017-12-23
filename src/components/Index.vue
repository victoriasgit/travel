<template>
  <div class="container-fluid" id="main">

    <!-- Home -->
    <section class="tm-section tm-section-home" id="home">
      <div class="tm-page-content-width tm-padding-b">
        <div class="text-center tm-site-title-wrap">
          <h1 class="tm-site-title">Добро пожаловать!</h1>
        </div>
        <div class="tm-textbox tm-white-bg">
          <h2 class="tm-green-text tm-section-title">Hello!</h2>
          <p>Мы рады приветствовать Вас на нашем сайте!</p>
          <p>Здесь Вы можете начать свое путешествие с новыми технологиями, который мы создали специально для Вас!</p>
          <router-link to='/task' class="tm-btn">Приступим!</router-link>
        </div>
      </div>
    </section>

    <!-- описание какое то -->
    <section class="tm-section tm-section-services" id="services">
      <div class="tm-page-content-width">
        <div class="tm-translucent-white-bg tm-content-box tm-content-box-right tm-textbox-full-height">
          <div class="tm-content-box-inner">
            <h2 class="tm-section-title tm-blue-text">Что мы предлагаем?</h2>
            <p>какое то описание того,что у нас есть</p>

            <div class="media">
              <i class="fa fa-4x fa-podcast tm-fa-icon"></i>
              <div class="media-body">
                <p class="tm-small-font">Приложение может быть открыто в любой момент. блабла,больше текста</p>
                <br>
              </div>
            </div>

            <div class="media">
              <i class="fa fa-3x fa-calendar tm-fa-icon"></i>
              <div class="media-body">
                <p class="tm-small-font">Вы можете отмечать свои задачи! и еще что то</p>
                <br>
              </div>
            </div>
            <div class="media">
              <i class="fa fa-3x fa-bell-o tm-fa-icon"></i>
              <div class="media-body">
                <p class="tm-small-font">Что нибудь еще, я не знаю что,просто три пункта лучше,чем два, да и везде стоит этот значок в третьем пункте,так что хз.</p>
              </div>
            </div>
            <a href="#gallery" class="tm-btn">Больше информации</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

</script>

<style></style>
