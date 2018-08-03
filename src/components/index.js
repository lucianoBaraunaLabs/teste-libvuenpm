import Vue from 'vue'
import FlockButton from './Button.vue'
import FlockBanner from './Banner.vue'

// Todos os componentes passados dessa forma vão ficar globalmente disponíveis dentro de app
// https://vuejs.org/v2/guide/components-registration.html#Global-Registration

const Components = {
  FlockButton,
  FlockBanner
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
