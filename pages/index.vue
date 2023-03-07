<template>
  <div>
    <div>
      <h1>List of users</h1>
      <div v-if="error">
        <p class="error-msg">Oops, something went wrong. The data could not be retrieved.</p>
      </div>
      <div class="wrapper" v-else>
        
        <div>
          <div v-for="(user, index) in users.results" :key="user.login.uuid">
            <div @click="isShow = !isShow">
              <div class="user-table">
                <p>{{index}}</p>
                <p>{{user.login.username}}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isShow" class="user-profile">
          <div class="overlay">
            <div  class="overlay-header">
              <h2>User profile</h2>
              <p @click="isShow = !isShow">&#10005;</p>
            </div>
            <div  class="overlay-body" v-for="user in users.results.slice(0, 1)" :key="user.login.uuid">
              <div class="row">
                <b>Username:</b>
                <p>{{user.login.username}}</p>
              </div>
              <div class="row">
                <b>Name:</b>
                <p>{{user.name.title}} {{user.name.first}} {{user.name.last}}</p>
              </div>
              <div class="row">
                <b>Email:</b>
                <p>{{user.email}}</p>
              </div>
              <div class="row">
                <b>Phone:</b>
                <p>{{user.phone}}</p>
              </div>
              
            </div>
          </div>
        </div>
        <!-- <ul>
          <li>{{ user.login.username.slice(0, 1) }}</li>
        </ul> -->
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
</script>


<script>
  export default {
    data() {
      return {
        isShow: false,
      }
    }
  }
</script>

<style lang="css">

table, th, td {
  border:1px solid black;
}

  .wrapper {
    display: flex;
    gap: 2rem;
  }

  .user-profile {
    height: 100%;
    width: 100%;
  }

  .user-table {
    display: flex;
    gap: 1rem;
  }
  .user-table:hover {
    color: gray;
    cursor: pointer;
  }
  
  .overlay {
    display: flex;
    flex-direction: column;
    background: #eee;
    padding: 1rem 0rem 1rem 2rem;
    justify-content: center;
  }

  .overlay-header {
    display: flex;
    gap: 2rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .overlay-header p:hover{
    color: gray;
    cursor: pointer;
  }

  .overlay-body{
    padding: 0 2rem 0 0;
  }

  .row {
    display: flex;
    gap: .5rem;
  }

  .error-msg {
    color: red;
  }
</style>