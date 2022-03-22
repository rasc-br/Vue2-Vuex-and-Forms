<template>
  <div class="modal" data-testID="phoenixPopup">
    <div
      class="modal-overlay"
      :class="blur ? 'blur' : ''"
      @click="closeOnOutsideClick ? $emit('close') : ''"
      @keyup.esc="$emit('close')"
      :data-testID="closeOnOutsideClick ? 'phoenixPopupCloseButton' : ''"
    ></div>
    <div
      :class="['modal-container', extraClass ? extraClass : '']"
      data-testID="phoenixPopupBody"
    >
      <slot name="content">
        <!-- content is inserted here -->
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class PopupWrapper extends Vue {
  @Prop({ default: true }) readonly blur!: boolean;

  @Prop({ default: true }) readonly closeOnOutsideClick!: boolean;

  @Prop({ default: '' }) readonly extraClass!: string;
}
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  &.blur {
    background-color: rgba(#000, 0.6);
  }
}
.modal-container {
  position: absolute;
  width: 100%;
  text-align: center;
  padding: 30px;
  max-width: 360px;
}
</style>
