<template>
  <div class="profile flex justify-center font-serif">
    <div class="all flex justify-between">
      <img :src="`${profile.img}`" class="rounded-full w-2/5 "></img>
      <div class="flex-column mx-auto my-auto text-2xl space-y-1">
        <p class="text-6xl">{{profile.fName}}&nbsp{{profile.lName}}</p>
        <p>Age: {{profile.age}}</p>
        <div class="flex flex-row">
          <p>Skills:&nbsp</p>
          <span v-for="s in profile.skills" :key="s.skill">
           <p>{{ s.skill }}&nbsp</p>
          </span>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      profile: {
        img: 'https://scontent.fbkk2-6.fna.fbcdn.net/v/t39.30808-6/271728204_352438620222098_47695820887750871_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=-of60TAOJNgAX9HPTo5&tn=oKTOO6mmNEzYwJtM&_nc_ht=scontent.fbkk2-6.fna&oh=00_AT_f7KlGHkeRgFNc_G2OYNDWMAmI8p31LFs26Xv-MUkomw&oe=61E6AB4B',
        fName: 'Supichaya',
        lName: 'Kanaraksanti',
        age: '20',
        skills: [{skill: 'Vue.js'}, {skill: 'JavaScript'}, {skill: 'SQL'}, ],
      },
    };
  },
};
</script>
<style>
.all {
  margin-top: 7%;
}
</style>
