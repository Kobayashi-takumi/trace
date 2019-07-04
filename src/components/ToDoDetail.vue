<template>
    <div id="to-do-detail">
        <v-toolbar
      color="pink"
      dark
    >
    <v-btn flat icon @click="isDeactive">
    <v-icon>clear</v-icon>
    </v-btn>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    
    <v-card>
      <v-container
        fluid
        grid-list-lg
      >
      <v-layout column>
        <v-layout row align-center>
            <v-flex xs8 sm8 align-self-start>
                <v-subheader inset><h1>Files</h1></v-subheader>
            </v-flex>
            <v-layout column>
                <v-flex xs12 sm3 align-self-end>
                    <v-btn flat icon color="indigo" @click="isActive()"><v-icon>add</v-icon></v-btn>
                </v-flex>
            </v-layout>
        </v-layout>
        <v-layout column justify-center v-show="this.isShow">
            <v-flex xs12 sm12 >
                <v-layout column>
                <v-flex>
                <v-text-field
                    label="New File"
                    placeholder="File Name"
                    v-model="fileTitle"
                ></v-text-field>
                </v-flex>
                <v-flex>
                    <v-textarea
                    name="input-7-1"
                    label="Memo"
                    hint="メモを書いてね"
                    v-model="memo"
                    ></v-textarea>
                </v-flex>
                <v-flex align-self-end>
                    <v-btn flat icon color="indigo" @click="addFile"><v-icon>create</v-icon></v-btn>
                </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-layout>

        <v-layout row wrap>
          <v-flex xs12>
            <v-card v-for="item in taskDetail" :key="item" class="ma-4">
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{ item.title }}</div>
                  <v-spacer class="ma-3"></v-spacer>
                  <span>{{ item.memo }}</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    </div>
</template>

<script>
import db from '../plugins/firebase/firestore'

export default {
    name: 'to-do-detail',
    data() {
        return {
            taskDetail: [],
            isShow: false,
            fileTitle: '',
            memo: '',
        }
    },
    computed: {
        folderId() {
            return this.$store.getters.fileId 
            }
        },
    created() {
        this.getDetail();
    },
    methods: {
        getDetail() {
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

        },
        isActive() {
            this.isShow = !this.isShow;
        },
        isDeactive(){
            this.$emit('detail-not-view');
        },
        addFile() {
            const detail = db.collection('tasks').doc(this.folderId).collection('detail')
            detail.add({
                'title': this.fileTitle,
                'memo': this.memo,
            });
            this.tasks = [];
            this.getDetail();
            this.fileTitle = '';
            this.memo = '';
            this.isShow = false;
        },
    }
}
</script>

<style>

</style>
