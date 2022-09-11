<template>
    <div class="team">
         <v-container class="mt-5">
            <v-layout row wrap>
               <v-flex xs12 sm6 md4 lg3  v-for="person in team" :key="person.name">
                 <v-card small elevation="4" class="ma-3 text-center py2">
                    <v-responsive class="py-2">
                        <img :src="person.image" :alt="person.name">
                    </v-responsive>
                    <v-card-text>
                        <div class="fw-bolder">{{person.name}}</div>
                        <div subheading>{{person.role}}</div>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-action>
                        <v-btn class="mb-2">
                            <v-icon>
                                mdi-github
                            </v-icon>
                            <span>
                                sign Up
                            </span>
                        </v-btn>
                    </v-card-action>
                 </v-card>
                </v-flex>
            </v-layout>

         </v-container>
    </div>
</template>


<script>
export default{
    data(){
        return{
            team:[
                {name:'Talel',role:'full stack',image:"../../public/logo.png"},
                {name:'taha',role:'front end',image:"../../public/logo.png"},
                {name:'chtag',role:'back end',image:"../../public/logo.png"},
                {name:'cho3ba',role:'designer',image:"../../public/logo.png"}
            ]
        }
    }
}
</script>
