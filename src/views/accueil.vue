<template>
    <div class="home my-5 py-5 d-flex justify-content-center">
        <v-container class="m-3">
             <v-layout row class="mb-3">
                <v-flex>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                     <v-btn small 
                     v-bind="attrs"
                     v-on="on"
                          color=" me-2" @click="sortby('titel')" > 
                       <v-icon left small>mdi-folder</v-icon>
                       <span class="cpation text-loxercase">By project Name</span>
                    </v-btn>
                   </template>
                     <span>Sort by project name</span>
                </v-tooltip>

                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                     <v-btn small 
                     v-bind="attrs"
                     v-on="on"
                          color=" me-2" @click="sortby('person')" > 
                       <v-icon left small>mdi-account</v-icon>
                       <span class="cpation text-loxercase">By person Name</span>
                    </v-btn>
                   </template>
                     <span>Sort by person name</span>
                </v-tooltip>
                    
            </v-flex>
             </v-layout>
            <v-card flat  v-for="projet in project" :key="projet.titel"  >
                <v-layout row  :class="`pa-3 projet ${projet.status}`">
                   <v-flex  xs12  md6>
                        <div class="caption grey--text">projet vuetify</div>
                        <div >{{projet.titel}} </div>
                   </v-flex>
                   <v-flex xs6 sm4 md2> 
                        <div class="caption grey--text">Person</div>
                        <div>{{projet.person}}</div>
                   </v-flex>
                   <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">
                            Due By
                        </div>
                        <div>{{projet.due}}</div>
                   </v-flex>
                   <v-flex xs6 sm4 md2>
                     <div class="right">
                         <v-chip :class="`${projet.status} white--text caption my-2`">{{projet.status}}</v-chip>
                    </div>
                   </v-flex>
               </v-layout>
               <v-divider></v-divider>
           </v-card>
        </v-container>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                project:[
                    {titel:'Bootstrap',person:'hkimi',due:'10/9/2022',status:'complete'},
                    {titel:'PHP',person:'talel',due:'15/9/2022',status:'overdue'},
                    {titel:'Laravel',person:'hama',due:'20/9/2022',status:'ongoing'},
                    {titel:'Vue Js',person:'teko',due:'30/9/2022',status:'complete'}
                ]
            }
        },
        methods:{
            sortby(prop){
                this.project.sort((a,b)=>a[prop]<b[prop] ? -1 : 1);
            }
        }
    }
</script>

<style scoped>
    .projet.complete{
        border-left: 4px solid blue;
    }
    .projet.ongoing{
        border-left: 4px solid orange;
    }
    .projet.overdue{
        border-left: 4px solid red;
    }
    .v-chip.complete{
        background: blue;
    }
    .v-chip.ongoing{
        background:  orange;
    }
    .v-chip.overdue{
        background:  red;
    }
</style>
