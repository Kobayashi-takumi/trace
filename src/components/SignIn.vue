<template>
    <div id="sign-in">
        <v-app>
            <v-container fluid>
                <v-layout align-center justify-center row wrap class="pa-5">
                    <v-flex md12>
                        <h1 style="margin: auto;">Trace</h1>
                    </v-flex>
                    <v-flex xs12 md3>
                        <v-card class="box-card cyan lighten-4">
                            <v-layout justify-center>
                                <v-flex md4 xs4 align-self-center>
                                    <v-card-title class="card-title pa-4">
                                        <h2 class="headline">Sign in</h2>
                                    </v-card-title>
                                </v-flex>
                            </v-layout>
                            <v-spacer class="pa-5"></v-spacer>
                            <v-layout justify-center>
                                <v-flex md3 xs3>
                                    <v-card-actions class="login-btn">
                                        <v-btn dark large color="cyan" @click="doLogin">
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
import Firebase from '../plugins/firebase/firebase'

export default {
    name: 'sign-in',
    created() {
        Firebase.onAuth();
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },
        isSignIn() {
            return this.$store.getters.isSignIn;
        }
    },
    methods: {
        doLogin() {
            Firebase.login();
        },
    }
}
</script>
<style scoped>
.box-card {
    border-radius: 10px;
    height: 300px;
}

</style>
