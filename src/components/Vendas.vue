<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="10">
                <h1>Vendas</h1>
            </v-col>
        </v-row>
        <v-row class="text-center">
            <v-col cols="10">
                <v-data-table dark :headers="headers" :items="venda" item-key="name">

                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>


    <script>
    import axios from "axios";
    export default{
        name: "Vendas",
        data() {
            return{
                headers:[
                    {text: "Item", value: "item"},
                    {text: "Valor", value: "valor"}

                ],

                venda: [
                    {id: 1, item: "temperos", valor: 50.00},
                    {id: 2, item: "fermento", valor: 20.00},
                ],
                methods:{
                    inicializa() {
                        axios("http://localhost:3000/Vendas")
                        .then((response) => {
                            this.users = response.data;
                        })
                        .catch((error) => console.log(error));
                    },
                },
                created() {
                    this.inicializa();
                },
            

            };

           
        },
    };
</script>
