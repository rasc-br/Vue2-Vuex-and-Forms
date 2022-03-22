<template>
    <div class="card">
        <div class="title">Form One</div>
        <div class="subtitle">
          Saves everything in the end, uses a local variable to save temporary state
        </div>
        <label for="FirstName">
          First Name:
          <input
              id="FirstName"
              type="text"
              v-model="editedProfile.firstName"
          />
        </label>
        <label for="lastName">
          Last Name:
          <input
              id="lastName"
              type="text"
              v-model="editedProfile.lastName"
          />
        </label>
        <label for="company">
          Company:
          <input
              id="company"
              type="text"
              v-model="editedProfile.company"
          />
        </label>
        <label for="favoriteBand">
          Favorite Band:
          <input
              id="favoriteBand"
              type="text"
              v-model="editedProfile.favoriteBand"
          />
        </label>
        <select v-model="editedProfile.mood">
          <option disabled value="">Please select one</option>
          <option>Happy</option>
          <option>Unhappy</option>
          <option>Meh</option>
        </select>
        <button
          type="button"
          @click="updateProfile"
        >
         Save!
        </button>
    </div>
</template>

<script lang="ts">
import { Profile } from '@/types';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FormOne extends Vue {
  get profile(): Profile {
    return this.$store.state.profile;
  }

  public editedProfile: Partial<Profile> = {};

  updateProfile(): void {
    this.$store.commit('updateProfile', this.editedProfile);
    this.$store.commit('togglePopup', 'one');
  }

  created(): void {
    this.editedProfile = JSON.parse(JSON.stringify(this.profile));
  }
}
</script>
