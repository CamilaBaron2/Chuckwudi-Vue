import { createStore } from 'vuex'
import general from '@/modules/general/store'
import admin from '@/modules/admin/store'
import auth from '@/modules/auth/store'

export default createStore({
  modules: {
    general,
    admin,
    auth
  }
})
