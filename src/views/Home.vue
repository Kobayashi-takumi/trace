<template>
  <div id="home">
  <todo-view :tasks='tasks'/>
  <sign-in v-if="this.$store.getters.isSignIn == false" @add-folder="addFolders" />

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
            const task =db.collection('tasks').doc(this.$store.getters.user.uid).orderBy("created_at", "asc")
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
        addFolders() {
          const task = db.collection('tasks').doc(this.$store.getters.user.uid)
            task.add({
                'title': this.$store.getters.title,
                'created_at': Date.now(),
            })
        }
  }
}
</script>
