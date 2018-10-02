<template>
  <div id="Page" class='page'>
    <div class='page__header'>Интернет в частный дом</div>
    <div class="page__text">
      <div class="page__text-item-main">Безлимитный фиксированный интернет в г. Кирове и пригороде.</div>
      <div class="page__text-item-addition">Стабильная скорость и отзывчивая техническая поддрежка.</div>
    </div>
    <input class='page__input' v-model='phone' v-if='!isSend'
           type="tel" id="phone" name="phone"
           placeholder="+7-987-654-32-10" autofocus/>
   <input class='page__input' v-model='phone' v-if='isSend'
          type="tel" id="phone" name="phone"
          placeholder="+7-987-654-32-10" readonly/>
    <div class='page__error' v-if='isShowError'>Неверный номер. Введите телефон в формате +7-987-654-32-10</div>
    <div class="page__button" v-on:click='sendPhone' v-if='!isSend'>Оставить заявку</div>
    <div class="page__button-not-active" v-if='isSend'>Заявка отправлена</div>
    <div class="page__slogan">Ловит там, где не ловит</div>
  </div>
</template>

<script>
import './Page.less';

export default {
  name: 'Page',
  data: () => ({
    phone: '',
    isSend: false,
    isPhoneValid: true,
    isShowError: false,
  }),
  methods: {
    sendPhone: function() {
      console.log('send phone', this.phone);
      const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
      this.isPhoneValid = re.test(this.phone);
      if (this.isPhoneValid) {
        const data = {
          phone: this.phone,
          landing: 'landing fish',
        }
        send_phone(data);
        this.isSend = true;
        this.isShowError = false;
      } else {
        this.isShowError = true;
        console.log('phone not valid', this.phone);
      }
    }
  },
};


const HOST = 'http://127.0.0.1:3000/landing/message/';
const send_phone = (data) => fetch(
  HOST,
  {
    method: 'post',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data)
  }
).then(respone => {
  console.log(respone);
  if (respone.status === 200) {
    console.log('всё ОК, номер отправили');
    return Promise.resolve()
  }
  return Promise.reject(respone.json())
}).then(
  (result) => {console.log('ok');},
  (error) => {
    console.log('Показать сообщение об ошибке');
    console.log(error);
  }
);
</script>
