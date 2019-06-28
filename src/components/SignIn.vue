<template>
    <div id="sign-in">
        <v-app>
            <v-container fluid>
                <v-layout align-center justify-center row>
                    <v-flex xs12 md4>
                        <v-card class="box-card">
                            
                            <v-layout justify-center align-content-space-around column>
                                <v-flex align-self-center>
                                    <v-card-title>
                                        <h3 class="headline mb-0">Sign In</h3>
                                    </v-card-title>
                                </v-flex>
                                <v-flex class='pb-0'>
                                    <v-card-actions>
                                        <v-btn dark large color="cyan">
                                            <v-icon dark>android</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-flex>
                            </v-layout>
                            
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-app>
    </div>
</template>

<script>
export default {
    name: 'sign-in'
}
</script>
<style scoped>
.box-card {
    border-radius: 10px;
    height: 300px;
}
</style>
