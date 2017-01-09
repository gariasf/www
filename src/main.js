import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import es from './assets/lang/langEs.js'
import en from './assets/lang/langEn.js'
import ca from './assets/lang/langCa.js'
import Home from './components/Content/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: App,
      children: [
        {
          path: '',
          component: Home
        }
      ],
    }
    // {path: '*', component: NotFound}
  ]
})

new Vue({
  router,
  data () {
        return {
            languages: ['En', 'Ca', 'Es'], /* Array of aviable languages to map them with their corresponding id (pos) when necessary */
            activeLanguage: 0, /* Define the default active language */
            lang: en /* Set the default language object */
        }
    },
    methods: {
        updateLang: function(languageId){
            /* Update current app language to the passed one, which is the prop from the clicked button */
            this.activeLanguage = languageId;
           
           /* Depending on the new language id, load it's corresponding language object */
           if(languageId == 0){
                this.lang = en
           } else if (languageId == 1){
                this.lang = ca
           } else if(languageId == 2){
                this.lang = es
           }
        }
    }
}).$mount('#app-root')
