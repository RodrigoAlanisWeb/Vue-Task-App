<template>
    <div class="navbar navbar-dark bg-dark p-1">
        <router-link to="/" class="navbar-brand">
            Formularios
        </router-link>
        <div class="d-flex">
            <router-link to="/" class="btn btn-secondary">
                Tareas
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>