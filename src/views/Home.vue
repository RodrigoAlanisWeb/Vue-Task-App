<template>
  <div class="home container">
    <form @submit.prevent="submit()">
      <Input :tarea="tarea"/>
    </form>
    <hr>
    <Tareas/>
  </div>
</template>

<script>

import Input from '@/components/Input.vue'
import Tareas from '@/components/Tareas.vue'
import { mapActions } from 'vuex'
import shortid from 'shortid';

export default {
  name: "Home",
  components: {
    Input,
    Tareas
  },
  data() {
    return {
      tarea: {
        id: '',
        nombre: "",
        descripcion: "",
        categorias: [],
        estado: "",
        numero: 0,
      },
    };
  },
  methods: {
    ...mapActions(['setTareas']),
    submit() {
      if (this.tarea.nombre.trim() === "" ) {
        console.log("vacio");
        return;
      }

      // generar id
      this.tarea.id = shortid.generate()
      console.log(this.tarea.id);

      // Enviar Datos

      this.setTareas(this.tarea);

      this.tarea = {
        id: '',
        nombre: "",
        descripcion: "",
        categorias: [],
        estado: "",
        numero: 0,
      }
    },
  },
};
</script>
