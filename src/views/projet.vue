<template>
    <div  class="home">
        <h3 class="subheading grey--text p-3">Projects</h3>

        <v-container class="my-5">
            <v-expansion-panels>
                <v-expansion-panel
                 v-for="projet in myproject" :key="projet.titel"
                >
                <v-expansion-panel-header>
                     {{projet.titel}}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card class="px-4 grey--text">
                        <v-card-header>
                          <div class="font-weight-bold"> Due By  {{projet.due}}</div>

                       
                        </v-card-header>
                   
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
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
                    {titel:'Vue Js',person:'tekto',due:'30/9/2022',status:'complete'},
                    {titel:'Vue Js',person:'talel',due:'30/9/2022',status:'complete'}
                ]
            }
        },
        computed:{
            myproject(){
                return this.project.filter(project=>{
                    return project.person=="talel"
                })
            }
        }
    }
</script>
