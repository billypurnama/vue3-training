<template>
  <div 
    ref="overlay"
    v-if="isVisible"
    class="overlay"  
    @click="toggle($event)">
    <div class="modal-wrapper">
      <p class="modal-title">{{ title }}</p>
      <slot name="description"></slot>
      <button 
        v-if="buttonVisible"
        ref="button"
        class="button" 
        @click="toggle($event)">
        {{ buttonLabel }}
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    buttonLabel: {
      type: String,
      default: 'OK',
    },
    buttonVisible: {
      type: Boolean,
      default: false,
    }
  },
  setup () {
    let modalData = reactive({
      isVisible: false,
    })
    function toggle (event) { 
      if (event.target !== this.$refs.overlay && 
        event.target !== this.$refs.button) return
      modalData.isVisible = !modalData.isVisible 
    }
    return { ...toRefs(modalData), toggle }
  }
}
</script>

<style scoped>
.overlay {
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.8);
}

.modal-wrapper {
  width: 300px;
  height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: white;
  overflow-y: auto;
}

.modal-title {
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
}

.button {
  border: none;
  background: white;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 
    0px 2px 4px -1px rgba(0, 0, 0, 0.2), 
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.button:hover {
  transition: all .6s;
  cursor: pointer;
  color: white;
  background-color: dodgerblue;
}
</style>