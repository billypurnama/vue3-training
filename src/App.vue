<template>
  <div id="teleport-target"></div>
  <div id="app">
    <!-- <div class="image-logo">
      <img alt="Vue logo" src="./assets/logo.png">
    </div> -->
    <div class="button-container">
      <button 
        class="button" 
        @click="$refs.modal.isVisible = !$refs.modal.isVisible">
        Open Modal
      </button>
      <button 
        class="button button-invert" 
        @click="$refs.modalPokémon.isVisible = !$refs.modalPokémon.isVisible">
        Generate Your Lucky Pokémon
      </button>
    </div>

    <!-- Modal -->
    <teleport to="#teleport-target">
      <Modal 
        ref="modal"
        title="Information"
        :buttonVisible="true"
        buttonLabel="I Understand">
        <template v-slot:description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nihil inventore quos soluta consequatur id minus aspernatur officiis laboriosam vel veritatis modi vitae neque ullam, et expedita obcaecati blanditiis voluptates.
        </template>
      </Modal>
      <Modal 
        ref="modalPokémon"
        :title="pokémon.name">
        <template v-slot:description>
          <div class="sprite-container">
            <div class="sprite-wrapper">
              <img class="sprite" :src="pokémon.sprites.front_default" alt="Sprite" />
              <p class="sprite-description">Normal</p>
            </div>
            <div class="sprite-wrapper">
              <img class="sprite"  :src="pokémon.sprites.front_shiny" alt="Sprite Shiny" />
              <p class="sprite-description">Shiny</p>
            </div>
          </div>
          <div class="pokemon-info">
            <template v-for="(data, index) in pokémon.types" :key="index">
              <div class="ability-wrapper">
               <p class="ability">{{ `Type ${index+1}: ${data.type.name}` }}</p>
              </div>
            </template>
            <template v-for="(data, index) in pokémon.abilities" :key="index">
              <div class="ability-wrapper">
               <p class="ability">{{ `Ability ${index+1}: ${data.ability.name}` }}</p>
              </div>
            </template>
          </div>
        </template>
      </Modal>
    </teleport>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
import usePokemonList from './features/use-pokémon-list'

export default {
  name: 'App',
  components: {
    Modal,
  },
  setup () {
    const { pokémon } = usePokemonList()
    return { pokémon }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app::before {
  content: '';
  position: absolute;
  background-image: linear-gradient(to bottom right, #48BEFF, #0E3264);
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.button-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.button {
  border: none;
  background: white;
  width: 150px;
  height: 50px;
  font-size: 16px;
  margin-bottom: 30px;
  box-shadow: 
    0px 2px 4px -1px rgba(0, 0, 0, 0.2), 
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.button-invert {
  color: white;
  font-size: 14px;
  background: linear-gradient(to bottom right, salmon, hotpink);
}
.sprite-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sprite-container > .sprite-wrapper {
  margin: 0 5px;
}
.sprite-wrapper {
  display: flex;
  flex-direction: column;
  width: 120px;
  align-items: center;
  box-shadow: 
    0px 2px 4px -1px rgba(0, 0, 0, 0.2), 
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.sprite {
  max-height: 96px;
  max-width: 96px;
}
.sprite-description {
  font-size: 12px;
}
.pokemon-info {
  margin: 20px 0;
}
.ability-wrapper {
  margin-left: 25px;
  margin-bottom: 10px;
  padding: 3px 10px;
  width: 230px;
  box-shadow: 
    0px 2px 4px -1px rgba(0, 0, 0, 0.2), 
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.ability {
  text-align: left;
  text-transform: capitalize;
}

</style>
