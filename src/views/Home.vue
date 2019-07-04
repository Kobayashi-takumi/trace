<template>
  <div id="home">
    <v-app>
      <v-container fluid>
          <v-layout row justify-center>
            <v-flex sx12 sm6>
              <todo-view :tasks="tasks" @add-folder="addFolders" @detail-show="isShow"/>
            </v-flex>
            <v-flex v-if="detailShow" class="px-5">
              <detail-view @detail-not-view="isNotShow"/>
            </v-flex>
          </v-layout>
      </v-container>
      <sign-in v-if="this.$store.getters.isSignIn == false"/>
    </v-app>
  </div>
</template>


<script>
import SignIn from '../components/SignIn'
import TodoView from '../components/TodoView'
import detailView from '../components/ToDoDetail'
import db from '../plugins/firebase/firestore'

export default {
  name: 'home',
  components: {
    SignIn,
    TodoView,
    detailView,
  },
  created() {
    this.getTask();
  },
  data() {
    return {
      tasks: [],
      detailShow: false,
    }
  },
  methods: {
    getTask() {
      let list = []
            const task =db.collection('tasks')
            task.onSnapshot(querySnapshot => {
                querySnapshot.forEach( doc => {
                    let data = {
                        'id': doc.id,
                        'title': doc.data().title,
                        'created_at': doc.data().created_at,
                    }
                    list.push(data)
                })
            })
            list.sort((a, b) => {
                a = a['created_at']
                b = b['created_at']
                if( a < b ) return -1;
                if( a > b ) return 1;
                return 0; 
            });
      this.tasks = list
    },
    addFolders(title) {
      const task = db.collection('tasks')
        task.add({
            'title': title,
            'created_at': Date.now(),
        });
    this.tasks = [];
    this.getTask();
    },
    isShow() {
      this.detailShow = true;
    },
    isNotShow() {
      this.detailShow = false;
    },
  }
}
</script>
