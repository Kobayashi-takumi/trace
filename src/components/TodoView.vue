<template>
    <div id="todo-view">
        <v-card>
            <v-toolbar color="light-blue" dark>

            <v-toolbar-title>My Folders</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            </v-toolbar>

            <v-list two-line subheader>
            <v-layout row align-center>
            <v-flex xs8 sm8 align-self-start>
                <v-subheader inset> <h2>Folders</h2> </v-subheader>
            </v-flex>
                <v-layout column>
                <v-flex xs12 sm3 align-self-end>
                    <v-btn flat icon color="light-blue" @click="isActive()"><v-icon>add</v-icon></v-btn>
                </v-flex>
                <v-flex xs3 sm3 md3 v-show="this.isShow">
                    <v-layout row>
                    <v-text-field
                        label="New Folder"
                        placeholder="Folder Name"
                        v-model="folderTitle"
                    ></v-text-field>
                    <v-btn flat icon color="light-blue" @click="addFolder"><v-icon>create</v-icon></v-btn>
                    </v-layout>
                </v-flex>
                </v-layout>
            </v-layout>

            <v-list-tile
                v-for="task in tasks"
                :key="task.id"
                avatar
                
            >
                <v-list-tile-avatar>
                <v-icon>folder_open</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                <v-list-tile-title>{{ task.title }}</v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action>
                <v-btn icon ripple @click="detailActive(); setFileData(task.id)">
                    <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
                </v-list-tile-action>
            </v-list-tile>
            </v-list>
        </v-card>
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
            detailShow: false,
        }
    },
    methods: {
        addFolder() {
            this.$emit('add-folder', this.folderTitle);
            this.folderTitle = '';
            this.isShow = false;
        },
        isActive() {
            this.isShow = !this.isShow;
        },
        detailActive() {
            this.$emit('detail-show')
        },
        setFileData(id) {
            this.$store.commit('setFileId', id);
        },
    },
}

</script>

<style>

</style>
