<template>
    <div>
        <header class="header container-xl p-3">
            <h1 class=" title  h1 text-white"> <strong><span class="text-warning">Business</span> Flow</strong> </h1>
        </header>
    </div>
    <section class=" container-sec container-xl ">
        <nav class="navegador">
            <router-link class="boton" to="/home">Home</router-link>
            <router-link class="boton" to="/cliente">Clientes</router-link>
            <button class="boton" onclick="location.href='../pages/producto.html'">Productos</button>
            <button class="boton" onclick="location.href='../pages/compras.html'" >Compras</button>
            <button class="boton bg-danger" onclick="location.href='../index.html'" >Salir</button>
        </nav>

        <router-view/>
    </section>
    <footer class="footer"> <p> Hecho con 💚 por   <a href="https://github.com/RingilDeveloper"> RingilDeveloper</a> </p></footer>
</template>

<script>
export default {
    name: "Main"
}
</script>