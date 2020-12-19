<template>
  <section class="container-sesion container-xl">
    <div class="sesion">
      <h2 class="h-2 text-black mt-5">Usuario</h2>
      <input type="text" v-model='usuario'>
      <h2 class="h-2 text-black mt-5">Contraseña</h2>
      <input type="password" v-model=contrasena v-on:keyup.enter="comparacion">
      <button class="boton " @click='comparacion'>Iniciar sesion</button>
    </div>
  </section>
  
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'App',
  data() {
    return {
      usuario: "",
      contrasena: "",
      clientes: [
        {cedula:"",
        nombres: '' ,
        apellidos: '',
        email: '',
        telefono: '',
      } ],
      cliente: {
        cedula: "",
        nombres: "",
        apellidos: "",
        email: "",
        telefono: "",
      },
      productos: [{ 
        codigo_producto: "",
        nombre_producto: "",
        precio: "",
       cantidad_disponible: "",
        } ],
      producto: {
        codigo_producto: "",
        nombre_producto: "",
        precio: "",
       cantidad_disponible: "",
      },
      compra:{
        id_compra: "",
        cedula: "",
        apellidos: "",
        codigo_producto: "",
        producto: "",
        precio_compra: "",
      },
      compras:[{
        id_compra:"" ,
        cedula: "",
        nombres: "",
        apellidos: "",
        codigo_producto: "",
        producto: "",
        precio_compra: "",
      }]
    }
  },
  methods: {
    comparacion(){
      if (this.usuario == '')// /*aca va el usuario de la base de datos*/ && this.contraseña == 'contraseña' /*aca va el usuario de la base de datos*/){
      { 
          //location.href =("./pages/tabla.html");
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El usuario o la contraseña es incorrecto!',
        })
      }
    },
    esCliente(persona) {
      return persona.cedula ===this.cliente.cedula;
    },
    buscarCliente(){
      const found = this.clientes.find(this.esCliente);
      alert(`
      Cedula: ${found.cedula}
      Nombre: ${found.nombres}
      Apellidos: ${found.apellidos}
      Email: ${found.email}
      Telefono: ${found.telefono}`)
    },
    actulizarCliente(index){
      console.log('click')
      var dato = this.clientes[index].cedula
      if (dato == this.cliente.cedula){
        this.clientes.splice(index,1)
        this.agregarCliente()
      }
    },
    agregarCliente(){
      this.clientes.push({ 
        cedula: this.cliente.cedula,
        nombres: this.cliente.nombres,
        apellidos: this.cliente.apellidos,
        email:this.cliente.email,
        telefono: this.cliente.telefono
      })
      this.cliente.cedula=""
      this.cliente.nombres=""
      this.cliente.apellidos=""
      this.cliente.email=""
      this.cliente.telefono=""
      this.guardarBaseDeDatos()

    },
    eliminarCliente(index){
      Swal.fire({
        title: 'Estas seguro?',
        text: "Esto no tiene revesa!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado!',
            'Fue borrado correctamente.',
            'success'
          )
          this.clientes.splice(index,1)
          this.guardarBaseDeDatos()
        }
    
    })
    

    }, 
    esProducto(product) {
      return product.codigo_producto ===this.producto.codigo_producto;
    },
    buscarProducto(){
     
      const found = this.productos.find(this.esProducto);
      alert(`
      Codigo producto: ${found.codigo_producto}
      Nombre: ${found.nombre_producto}
      Precio: ${found.precio}
      Cantidad: ${found.cantidad_disponible}
      `)
      this.producto.codigo_producto=""
    },
    actulizarProducto(index){
     
      var dato = this.productos[index].codigo_producto
      if (dato == this.producto.codigo_producto){
        this.productos.splice(index,1)
        this.agregarProducto()
      
        
      }
    },
    agregarProducto(){
  
      this.productos.push({ 
        codigo_producto: this.producto.codigo_producto,
        nombre_producto: this.producto.nombre_producto,
        precio:this.producto.precio,
        cantidad_disponible: this.producto.cantidad_disponible
      
      })
      this.producto.codigo_producto=""
      this.producto.nombre_producto=""
      this.producto.precio=""
      this.producto.cantidad_disponible=""
    this.guardarBaseDeDatos()

    },
    eliminaProducto(index){
      Swal.fire({
        title: 'Estas seguro?',
        text: "Esto no tiene revesa!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado!',
            'Fue borrado correctamente.',
            'success'
          )
          this.productos.splice(index,1)
          this.guardarBaseDeDatos()

        }
    
    })

    },
    esCompra(comp) {
      return comp.id_compra ===this.compra.id_compra;
    },
    buscarCompra(){
      const found = this.compra.find(this.esCompra);
      alert(`
      Id compra: ${found.id_compra}
      Cedula: ${found.cedula}
      Nombres: ${found.nombres}
      Apellidos: ${found.apellidos}
      Codigo producto: ${found.codigo_producto}
      Producto: ${found.producto}
      Precio compra: ${found.precio_compra}
      `)
    },
    agregarCompra(){
      this.compras.push({ 
        id_compra: this.compra.id_compra,
        cedula: this.compra.cedula,
        nombres: this.compra.nombres,
        apellidos: this.compra.apellidos,
        codigo_producto: this.compra.codigo_producto,
        producto:  this.compra.producto,
        precio_compra: this.compra.precio_compra
      })
      this.compra.id_compra =""
      this.compra.cedula =""
      this.compra.nombres =""
      this.compra.apellidos =""
      this.compra.codigo_producto =""
      this.compra.producto =""
      this.compra.precio_compra =""
      this.guardarBaseDeDatos()

    },  
    guardarBaseDeDatos(){ //la funcion la guarda en local toca pasarlo a remoto
      localStorage.setItem('compras-vue',  JSON.stringify(this.compras))
      localStorage.setItem('productos-vue',  JSON.stringify(this.productos))
      localStorage.setItem('clientes-vue',  JSON.stringify(this.clientes))
    },
  },
  created() {
    let compradb =JSON.parse(localStorage.getItem('compras-vue')) //guardamos  la base de datos en local
    let productosdb =JSON.parse(localStorage.getItem('productos-vue')) // falta pasarlo a remoto
    let clientesdb =JSON.parse(localStorage.getItem('clientes-vue'))
  // si es nula la crea si no la guarda 
    if (compradb == null){
      this.compras = [{}]
    }else{
      this.compras = compradb
    }
    if (productosdb == null){
      this.productos = [{}]
    }else{
      this.productos = productosdb
    }if (clientesdb == null){
      this.clientes = [{}]
    }else{
      this.clientes = clientesdb
    }
    
  },
}
</script>

<style>
html{
  box-sizing: border-box;
}
body{
  font-family: 'Roboto';
  
}
#app{
  background-image: linear-gradient( 109.6deg,  rgba(5,84,94,1) 16%, #bbb 91.1% );
  
}
.header{
  /*background-color: #0a043c;*/
  background-color: transparent;

}
.container-sesion{
  display: flex;
  height: 100vh;
  justify-content: center;

  
}
.sesion{
  width: 50%;
  max-width: 400px;
  height: 500px;
  padding: 20px;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-shadow: 5px 7px 12px 1px #00000080;
}
.sesion input{
  border: none;
  width: 80%;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 5px 7px 12px 1px #00000080;

}

h2{
  color: white;
}
.sesion .boton{
  margin-top:40px;
  width: 50%;
}
.boton{
  border: none;
  border-radius: 10px;
  padding: 5px 15px;
  color: white;
  background-color: #56b14d ;
  box-shadow: 5px 7px 12px 1px #00000080;
}
.boton:hover{
  background-color:  #2db920;

}

.boton :active{
  outline: none;
}
/*           tabla.html             */
.container-sec{
  padding: 0;
  display: flex;
}
.navegador{
  width: 20%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /*background-color: #03506f;*/
}
.navegador .boton {
  width: 80%;
  ;
}

.container-rigth{
  width: 70%;
  padding: 20px;
}
.container-rigth h2{
  font-size: 40px;
  margin-top:20px;
  text-align: center;
}
.container-rigth h3{
  font-size: 25px;
  margin-top: 200px;
  text-align: center;
  color: white;
}

/* clientes*/
.buscador{
  display: flex;
  flex-wrap: wrap;
}
.buscador input{
  background-color: pink; /*url(./img/lupa.png);*/
  background-color: white;
  height: 40px;
  background-repeat: no-repeat;
  background-position: left;
  background-size: 30px 30px;
  padding-left: 40px;
}

.table{
  width:100%;
  height: 400px;
  overflow: scroll;
  padding: 10px;
  background-color: white;
}
.table table{
  width: 100%;
  border:none
}
/* footter*/

.footer{
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: white;
}
.footer a {
  color:white;
  text-decoration: none;
}
.footer a:hover{
  text-decoration: underline;
}

.agregar {
  margin-bottom: 10px;
}
.agregar input{
  border: none;
  border-radius: 15px;
  padding:5px 10px;
  margin:5px;
} 

</style>
