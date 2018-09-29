<template>
  <div id="Header" class='header'>
    <div class='header__logo'/>
    <a class='header__item' href='#advantages'>Наши преимущества</a>
    <a class='header__item' href='#contact'>Контакты</a>
    <a class='header__item phone' href='tel:+78332226333'>
      <div class='phone__label'>Позвонить нам</div>
      <div class='phone__number'>22-63-33</div>
    </a>
  </div>
</template>

<script>
import './Header.less';

export default {
  name: 'Header',
};
</script>
