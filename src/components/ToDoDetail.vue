<template>
    <div id="to-do-detail">

            <v-container>
                <v-layout row align-start>
                    <v-flex>
                        <v-card>
                            <v-toolbar color="indigo" dark>

                            <v-toolbar-title>My files</v-toolbar-title>

                            <v-spacer></v-spacer>

                            <v-btn icon>
                                <v-icon>search</v-icon>
                            </v-btn>
                            </v-toolbar>

                            <v-list two-line subheader>
                            <v-subheader inset>Files</v-subheader>

                            <v-list-tile
                                v-for="item in taskDetail"
                                :key="item"
                                avatar
                            >
                                <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
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
    </div>
</template>

<script>
import db from '../plugins/firebase/firestore'

export default {
    name: 'to-do-detail',
    data() {
        return {
            taskDetail: [],
        }
    },
    computed: {
        folderId() {
            return this.$store.getters.fileId 
            }
        },
    created() {
        let list = []
        const task =db.collection('tasks').doc(this.folderId).collection('detail')
        task.onSnapshot(querySnapshot => {
            querySnapshot.forEach( doc => {
                let data = {
                    'id': doc.id,
                    'title': doc.data().title,
                    'memo': doc.data().memo
                }
                list.push(data)
            })
        })
        this.taskDetail = list
    }
}
</script>

<style>

</style>
