<template>
  <div id="home">
  <todo-view :tasks='tasks' @add-folder="addFolders"/>
  <sign-in v-if="this.$store.getters.isSignIn == false"/>

  </div>
</template>


<script>
import SignIn from '../components/SignIn'
import TodoView from '../components/TodoView'
import db from '../plugins/firebase/firestore'

export default {
  name: 'home',
  components: {
    SignIn,
    TodoView
  },
  created() {
    this.getTask();
  },
  data() {
    return {
      tasks: [],
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
                        'detail': doc.data().detail,
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
        }
  }
}
</script>
