<template>
    <div class="card">
        <div>Store Display</div>
        <label for="FirstName">
          First Name:
          <input
              id="FirstName"
              type="text"
              v-model="profile.firstName"
              disabled
          />
        </label>
        <label for="lastName">
          Last Name:
          <input
              id="lastName"
              type="text"
              v-model="profile.lastName"
              disabled
          />
        </label>
        <label for="company">
          Company:
          <input
              id="company"
              type="text"
              v-model="profile.company"
              disabled
          />
        </label>
        <label for="favoriteBand">
          Favorite Band:
          <input
              id="favoriteBand"
              type="text"
              v-model="profile.favoriteBand"
              disabled
          />
        </label>
        <select v-model="profile.mood" id="mood" disabled>
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
export default class StoreDisplay extends Vue {
  get profile(): Profile {
    return this.$store.state.profile;
  }
}
</script>
