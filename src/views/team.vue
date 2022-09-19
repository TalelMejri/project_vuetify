<template>
    <div class="team">
         <v-container class="mt-5">
            <v-layout row wrap>
               <v-flex xs12 sm6 md4 lg3  v-for="person in team" :key="person.name">
                 <v-card small elevation="4" class="ma-3 text-center py2">
                    <v-responsive class="py-2">
                         <v-avatar size="100" class="grey lighten-2">
                            <img :src="person.image" :alt="person.name">
                         </v-avatar>
                     
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
import pic1 from "@/assets/pic1.png";
import pic2 from "@/assets/pic2.png";
import pic3 from "@/assets/pic3.png";
import pic4 from "@/assets/pic4.png";
export default{
    
    data(){
        return{
            team:[
                {name:'Talel',role:'full stack',image:pic1},
                {name:'taha',role:'front end',image:pic2},
                {name:'chtag',role:'back end',image:pic3},
                {name:'cho3ba',role:'designer',image:pic4}
            ]
        }
    }
}
</script>
