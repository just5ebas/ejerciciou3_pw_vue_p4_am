<template>
  <h1>Informacion del Vehiculo</h1>
  <div v-if="vehiculo">
    <input v-model="vehiculo.id" type="text" disabled />
    <input v-model="vehiculo.placa" type="text" disabled />
    <input v-model="vehiculo.modelo" type="text" disabled />
    <input v-model="vehiculo.paisOrigen" type="text" disabled />
    <input v-model="vehiculo.anho" type="text" disabled />
  </div>
</template>

<script>
import { consultaUnicaFachada } from "../helpers/VehiculoClient";

export default {
  data() {
    return {
      vehiculo: null
    };
  },
  methods: {},
  mounted: {
    async consultarVehiculo() {
      this.vehiculo = await consultaUnicaFachada(this.placa);
      console.log(this.vehiculo);
    },
  },
  props: {
    placa: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>