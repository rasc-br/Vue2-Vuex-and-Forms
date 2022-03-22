<template>
  <div id="app">
    <main>
      <StoreDisplay/>
      <PopupWrapper
        v-if="popupStatus.one"
        @close="togglePopup('one')"
        >
        <template v-slot:content>
          <FormOne/>
        </template>
      </PopupWrapper>
      <PopupWrapper
        v-if="popupStatus.two"
        @close="togglePopup('two')"
        >
        <template v-slot:content>
          <FormTwo/>
        </template>
      </PopupWrapper>
      <PopupWrapper
        v-if="popupStatus.three"
        @close="togglePopup('three')"
        >
        <template v-slot:content>
          <FormThree/>
        </template>
      </PopupWrapper>
      <button
        type="button"
        @click="togglePopup('one')"
      >
        Open Form One
      </button>
      <button
        type="button"
        @click="togglePopup('two')"
      >
        Open Form Two
      </button>
      <button
        type="button"
        @click="togglePopup('three')"
      >
        Open Form Three
      </button>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormOne from '@/components/FormOne.vue';
import FormTwo from '@/components/FormTwo.vue';
import FormThree from '@/components/FormThree.vue';
import StoreDisplay from '@/components/StoreDisplay.vue';
import PopupWrapper from '@/components/PopupWrapper.vue';
import { PopupStatus } from './types';

@Component({
  components: {
    FormOne,
    FormTwo,
    FormThree,
    StoreDisplay,
    PopupWrapper,
  },
})
export default class HomeView extends Vue {
  get popupStatus(): PopupStatus {
    return this.$store.state.popup;
  }

  togglePopup(popup: string) {
    this.$store.commit('togglePopup', popup);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
main {
  display: inline-grid;
}
.card {
  display: inline-grid;
  background-color: #eee;
  margin: 10px;
  padding: 2px 16px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  .title {
    font-size: 20px;
  }
  .subtitle {
    margin: 5px;
  }
}
button {
  margin: 10px;
}
</style>
