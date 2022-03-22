<template>
    <div class="card">
        <div class="title">Form Two</div>
        <div class="subtitle">
          Saves while typing, dont use v-model → use event and value
        </div>
        <label for="FirstName">
          First Name:
          <input
              id="FirstName"
              type="text"
              :value="profile.firstName"
              @input="updateProfileItem($event.target.value, 'firstName')"
          />
        </label>
        <label for="lastName">
          Last Name:
          <input
              id="lastName"
              type="text"
              :value="profile.lastName"
              @input="updateProfileItem($event.target.value, 'lastName')"
          />
        </label>
        <label for="company">
          Company:
          <input
              id="company"
              type="text"
              :value="profile.company"
              @input="updateProfileItem($event.target.value, 'company')"
          />
        </label>
        <label for="favoriteBand">
          Favorite Band:
          <input
              id="favoriteBand"
              type="text"
              :value="profile.favoriteBand"
              @input="updateProfileItem($event.target.value, 'favoriteBand')"
          />
        </label>
        <select
          :value="profile.mood"
          @input="updateProfileItem( $event.target.value, 'mood')"
        >
          <option disabled value="">Please select one</option>
          <option>Happy</option>
          <option>Unhappy</option>
          <option>Meh</option>
        </select>
    </div>
</template>

<script lang="ts">
import { Profile } from '@/types';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FormTwo extends Vue {
  get profile(): Profile {
    return this.$store.state.profile;
  }

  updateProfileItem(value: string, item: string) {
    this.$store.commit('updateProfileItem', { item, value });
  }
}
</script>
