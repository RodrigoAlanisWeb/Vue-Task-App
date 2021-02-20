<template>
  <table class="table table-dark table-striped mt-3">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nobre</th>
        <th scope="col">Categorias</th>
        <th scope="col">Estado</th>
        <th scope="col">Numero</th>
        <th scope="col">Accion</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tareas" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.nombre }}</td>
        <td>
          {{ item.categorias.join(", ") }}
        </td>
        <td>{{ item.estado }}</td>
        <td>{{ item.numero }}</td>
        <td>
          <button @click="deleteTarea(item.id)" class="btn btn-danger">
            Delete
          </button>
          <router-link
            :to="{
                name: 'Editar',
                params: {
                    id: item.id
                }
            }"
            class="btn btn-info ms-2"
          >
            Editar
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Tareas",
  computed: {
    ...mapState(["tareas"]),
  },
  methods: {
    ...mapActions(["deleteTarea"]),
  },
};
</script>
