<template>
  <input
    type="text"
    class="form-control my-2"
    placeholder="Ingrese Nombre"
    v-model.trim="tarea.nombre"
  />

  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      id="check1"
      class="form-check-input"
      v-model="tarea.categorias"
      value="js"
    />
    <label for="check1" class="form-check-label">Javascript</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      type="checkbox"
      id="check2"
      class="form-check-input"
      v-model="tarea.categorias"
      value="node"
    />
    <label for="check2" class="form-check-label">Node js</label>
  </div>

  <div class="mt-2">
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="Radio1"
        value="normal"
        v-model="tarea.estado"
      />
      <label class="form-check-label" for="adio1">Normal</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        id="Radio2"
        value="urgente"
        v-model="tarea.estado"
      />
      <label class="form-check-label" for="Radio2">Urgente</label>
    </div>
  </div>

  <div class="mt-2">
    <input type="number" class="form-control" v-model.number="tarea.numero" />
  </div>
  <button :disabled="disabled" class="btn btn-dark mt-3 w-full" type="submit">
    Procesar
  </button>
</template>

<script>
export default {
  name: "Input",
  props: {
    tarea: Object,
  },
  computed: {
    disabled() {
      return this.tarea.nombre.trim() === "" ? true : false;
    },
  },
};
</script>

<style>
</style>