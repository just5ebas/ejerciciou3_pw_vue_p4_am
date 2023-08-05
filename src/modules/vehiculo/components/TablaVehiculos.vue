<template>
  <h1>Vehiculos</h1>
  <button @click="consultarVehiculos()">Consultar Vehiculos</button>

  <div class="tabla" v-if="lista">
    <h2>ID</h2>
    <h2>Placa</h2>
    <h2>Modelo</h2>
    <h2>Pais de Origen</h2>
    <h2>Año</h2>
    <h2>Boton</h2>
    <div v-for="v in lista" :key="v.id">
      <p>{{ v.id }}</p>
      <p>{{ v.placa }}</p>
      <p>{{ v.modelo }}</p>
      <p>{{ v.paisOrigen }}</p>
      <p>{{ v.anho }}</p>
      <button @click="setPlaca(v.placa)">Visualizar</button>
    </div>
  </div>

  <div v-if="placa">
    <DatosVehiculo />
  </div>
</template>

<script>
import DatosVehiculo from "../components/DatosVehiculo.vue";
import { consultaTotalFachada } from "../helpers/VehiculoClient";

export default {
  data() {
    return {
      lista: null,
      placa: null,
    };
  },
  components: {
    DatosVehiculo,
  },
  methods: {
    async consultarVehiculos() {
      this.lista = await consultaTotalFachada();
      console.log(this.lista);
    },
    setPlaca(placa) {
      this.placa = placa;
    },
  },
};
</script>

<style scoped>
.tabla {
  display: grid;

  grid-template-columns: repeat(6, 150px);
}
</style>