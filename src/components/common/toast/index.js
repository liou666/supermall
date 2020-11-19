import Toast from './toast.vue';

const obj={
    install(Vue){
      const toastConstructor=Vue.extend();
      const toast =new toastConstructor(Toast);
      toast.$mount(document.createElement('div'))
      document.body.append(toast.$el);
      Vue.prototype.$toast=toast
    }
};

export default obj