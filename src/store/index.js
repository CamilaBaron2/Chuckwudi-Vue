import { createStore } from 'vuex'
import general from '@/modules/general/store'
import admin from '@/modules/admin/store'

export default createStore({
  modules: {
    general,
    admin
  }
})
