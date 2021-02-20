import { createStore } from 'vuex'
import router from '../router/index'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre: "",
      descripcion: "",
      categorias: [],
      estado: "",
      numero: 0,
    },
  },
  mutations: {
    cargar(state, payload) {
      state.tareas = payload;
    },
    set(state, payload) {
      state.tareas.push(payload)
      localStorage.setItem('tasks', JSON.stringify(state.tareas));
    },
    delete(state, payload) {
      state.tareas = state.tareas.filter(item => item.id !== payload);
      localStorage.setItem('tasks', JSON.stringify(state.tareas));
    },
    tarea(state, payload) {
      if (!state.tareas.find(item => item.id === payload)) {
        router.push('/');
        return;
      }
      state.tarea = state.tareas.find(item => item.id === payload);
    },
    updateM(state, payload) {
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item);
      localStorage.setItem('tasks', JSON.stringify(state.tareas));
      router.push('/');
    }
  },
  actions: {
    setTareas({ commit }, tarea) {
      commit('set', tarea)
    },
    deleteTarea({ commit }, id) {
      commit('delete', id)
    },
    setTarea({ commit }, id) {
      commit('tarea', id);
    },
    updateTarea({ commit }, tarea) {
      commit('updateM', tarea);
    },
    cargarLocalStorage({commit}) {
      if (localStorage.getItem('tasks')) {
        commit('cargar', JSON.parse(localStorage.getItem('tasks')))
        return;
      }

      localStorage.setItem('tasks', JSON.stringify([]));
    },
  },
  modules: {
  }
})
