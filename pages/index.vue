<template>
  <div>
    <div>
      <h1>List of users</h1>
      <div v-if="error">
        <p class="error-msg">Oops, something went wrong. The data could not be retrieved.</p>
      </div>
      <div class="wrapper" v-else>
        <ul>
          <li v-for="user in users.results" :key="user.login.uuid">
            <div >
              <p>{{user.login.username}}</p>
            </div>
          </li>
        </ul>
        <div class="user-profile">
          <div>
            <h2>Show Me</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const {
    data: users,
    pending,
    error
  } = await useFetch('https://randomuser.me/api/?results=10')
  // const { data: user } = await useFetch('https://randomuser.me/api')
  // const { data: results} = await useFetch('https://pokeapi.co/api/v2/pokemon')
</script>


<script>
  export default {
    data() {
      return {
       
      }
    }
  }
</script>
<style lang="css">
  .wrapper {
    display: flex;
    gap: 2rem;
  }

  .user-profile {
    height: 100%;
    width: 100%;
  }

  .error-msg {
    color: red;
  }
</style>