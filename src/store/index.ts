import Vue from 'vue';
import Vuex from 'vuex';
import { PopupStatus, Profile } from '@/types';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    profile: {
      firstName: '',
      lastName: '',
      company: '',
      favoriteBand: '',
      mood: '',
    } as Profile,
    popup: {
      one: false,
      two: false,
      three: false,
    } as PopupStatus,
  },
  mutations: {
    updateProfile(state, payload: Profile) {
      Vue.set(state, 'profile', payload);
    },
    updateProfileItem(state, payload: {item: string, value: string}) {
      Vue.set(state.profile, payload.item, payload.value);
    },
    togglePopup(state, payload: 'one' | 'two' | 'three') {
      Vue.set(state.popup, payload, !state.popup[payload]);
    },
  },
});
