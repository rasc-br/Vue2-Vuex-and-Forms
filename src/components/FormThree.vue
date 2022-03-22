<template>
    <div class="card">
        <div class="title">Form Three</div>
        <div class="subtitle">
          Saves while typing, with v-model and computed
        </div>
        <label for="FirstName">
          First Name:
          <input
              id="FirstName"
              type="text"
              v-model="firstName"
          />
        </label>
        <label for="lastName">
          Last Name:
          <input
              id="lastName"
              type="text"
              v-model="lastName"
          />
        </label>
        <label for="company">
          Company:
          <input
              id="company"
              type="text"
              v-model="company"
          />
        </label>
        <label for="favoriteBand">
          Favorite Band:
          <input
              id="favoriteBand"
              type="text"
              v-model="favoriteBand"
          />
        </label>
        <select v-model="mood">
          <option disabled value="">Please select one</option>
          <option>Happy</option>
          <option>Unhappy</option>
          <option>Meh</option>
        </select>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FormThree extends Vue {
  get firstName(): string {
    return this.$store.state.profile.frstName;
  }

  set firstName(value: string) {
    this.$store.commit('updateProfileItem', { item: 'firstName', value });
  }

  get lastName(): string {
    return this.$store.state.profile.frstName;
  }

  set lastName(value: string) {
    this.$store.commit('updateProfileItem', { item: 'lastName', value });
  }

  get company(): string {
    return this.$store.state.profile.frstName;
  }

  set company(value: string) {
    this.$store.commit('updateProfileItem', { item: 'company', value });
  }

  get favoriteBand(): string {
    return this.$store.state.profile.frstName;
  }

  set favoriteBand(value: string) {
    this.$store.commit('updateProfileItem', { item: 'favoriteBand', value });
  }

  get mood(): string {
    return this.$store.state.profile.frstName;
  }

  set mood(value: string) {
    this.$store.commit('updateProfileItem', { item: 'mood', value });
  }
}
</script>
