<template>
    <div class="container-rigth">
     
      <div class="buscador">
        <div class="d-flex align-items-center w-100">
        <input type="text" class="form-control " placeholder="Cedula del cliente"  v-model="cliente.cedula" v-on:keyup.enter="buscarCliente">
        <button class="btn btn-success m-2 " >Buscar</button>
      </div>
    </div>
    <div class="agregar">
      <input type="text" v-model='cliente.cedula' placeholder="Cedula">
      <input type="text" v-model='cliente.nombres' placeholder="Nombres">
      <input type="text" v-model='cliente.apellidos' placeholder="Apellidos">
      <input type="text" v-model='cliente.email' placeholder="Email"  >
      <input type="text" v-model='cliente.telefono' placeholder="Telefono"  >

      <button class="btn btn-success" >Agregar</button>
    </div>
        <div class="table">
          <table>
            <tr>
              <th>Cedula</th>
              <th>Nombres</th> 
              <th>Apellidos</th>
              <th>Email</th>
              <th>Telefono</th>
            </tr>
           <!-- <tr v-for="(cliente,index) of clientes" >
              <td> {{cliente.cedula }} </td>
              <td> {{cliente.nombres}} </td>
              <td> {{cliente.apellidos}} </td>
              <td> {{cliente.email}} </td>
              <td> {{cliente.telefono}} </td>
              
              <td><button class=" btn btn-danger" @click='eliminarCliente(index)'>-</button></td>
              <td><button class=" btn btn-info" @click='actulizarCliente(index)'>+</button></td>
              
            </tr>
            -->
          </table>
        </div>
      
    
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Cliente",
    data(){
        return {
            cliente: {
                cedula: 11111,
                nombres: "",
                apellidos: "",
                email: "",
                telefono: "",
            },
            status: "enabled"
        }
    },
    methods: {
        buscarCliente(){
            console.log("response", this.cliente);
            var cliente = this.cliente;
            axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => {
                this
                console.log(response, cliente);
                cliente.cedula= response.data.id
                cliente.nombres= response.data.title

            })
            .catch(function (error) {
                console.log(error);
            });
/*
        var a = {
            "cedula": "11111",
            "nombres": "Winston Leonard",
            "apellidos": "Spencer Churchill",
            "email": "winston.churchill@gmail.com",
            "telefono": "7893214568"
        }
            axios.get("http://desafio-7.herokuapp.com/client/search/")
            .then()
        */
        }
    }
}
</script>