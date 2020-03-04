<template>
<div>
<b-nav class="navbar navbar-expand-sm bg-dark navbar-dark">
   <ul class="navbar-nav"> 
    <div id="navbar" class="navbar-menu">
        <router-link to="/" class="navbar-item">Home</router-link>
      <router-link to="/about" class="navbar-item">About</router-link>
    </div>
   </ul>
</b-nav>
</div>
</template>
<script>
export default {
    name: 'Nav'
}
</script>
