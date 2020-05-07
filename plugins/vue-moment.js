import Vue from 'vue'
import VueMoment from 'vue-moment'
import moment from 'moment'
import 'moment/locale/en-gb' // whatever you import here will be set as default, no need to import all locales you intend to use

Vue.use(VueMoment, { moment })