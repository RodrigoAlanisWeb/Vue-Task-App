<template>
  <div class="container">
    <form @submit.prevent="updateTarea(tarea)">
      <Input :tarea="this.tarea" />
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Input from "@/components/Input.vue";

export default {
  components: {
    Input,
  },
  computed: {
    ...mapState(["tarea"]),
  },
  methods: {
    ...mapActions(["setTarea","updateTarea"]),
  },
  created() {
    this.setTarea(this.$route.params.id);
  },
};
</script>