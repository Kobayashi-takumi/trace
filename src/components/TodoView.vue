<template>
    <div id="todo-view">
        <v-app>
            <v-container fluid>
                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-card>
                            <v-toolbar color="light-blue" dark>
                            <v-toolbar-side-icon></v-toolbar-side-icon>

                            <v-toolbar-title>My files</v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-btn icon>
                                <v-icon>search</v-icon>
                            </v-btn>

                            <v-btn icon>
                                <v-icon>view_module</v-icon>
                            </v-btn>
                            </v-toolbar>

                            <v-list two-line subheader>
                            <v-layout row align-center>
                            <v-flex xs8 sm8 align-self-start>
                                <v-subheader inset> <h2>Folders</h2> </v-subheader>
                            </v-flex>
                                <v-layout column>
                                <v-flex xs12 sm3 align-self-end>
                                    <v-btn flat icon color="indigo" @click="isActive()"><v-icon>add</v-icon></v-btn>
                                </v-flex>
                                <v-flex xs3 sm3 md3 v-show="this.isShow">
                                    <v-layout row>
                                    <v-text-field
                                        label="New Folder"
                                        placeholder="Folder Name"
                                    ></v-text-field>
                                    <v-btn flat icon color="indigo" @click="addFolder"><v-icon>create</v-icon></v-btn>
                                    </v-layout>
                                </v-flex>
                                </v-layout>
                            </v-layout>

                            <v-list-tile
                                v-for="task in tasks"
                                :key="task.title"
                                avatar
                                
                            >
                                <v-list-tile-avatar>
                                <v-icon>folder_open</v-icon>
                                </v-list-tile-avatar>

                                <v-list-tile-content>
                                <v-list-tile-title>{{ task.title }}</v-list-tile-title>
                                
                                </v-list-tile-content>

                                <v-list-tile-action>
                                <v-btn icon ripple>
                                    <v-icon color="grey lighten-1">info</v-icon>
                                </v-btn>
                                </v-list-tile-action>
                            </v-list-tile>

                            </v-list>
                        </v-card>
                    </v-flex>
            </v-layout>
            </v-container>
        </v-app>
    </div>
</template>

<script>

export default {
    name: 'todo-view',
    props: ['tasks'],
    data() {
        return {
            isShow: false,
            folderTitle: '',
        }
    },
    methods: {
        addFolder() {
            this.$emit('add-folder');
            this.folderTitle = '';
        },
        isActive() {
            this.isShow = !this.isShow;
        }
    }
}

</script>

<style>

</style>
