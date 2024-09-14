<script setup lang="ts">
definePageMeta({
    layout: 'location'
})

const route = useRoute()

type Location = {
    address: string,
    gettingHere: string,
    images: string[],
    restrictions: string[],
    title: string
}

const location = ref<Location>(
    {
        address: '',
        gettingHere: '',
        images: [],
        restrictions: [],
        title: ''
    }
)
const hasError = ref(false)

async function fetchLocation(id:string) {
    const {data, error} = await useFetch(`https://facility-details-backend.onrender.com/facility-details/${id}`)
    console.log(data.value, error.value)
    if (error.value !== null ){
        hasError.value = true
    }
    else{
        location.value = data.value!.details as Location 
    } 
}

// fetchLocation()

onMounted(async()=>{
    // console.log(route.params.id)
    await fetchLocation(route.params.id as string)
})
</script>

<template>
    <div class="page" :class="hasError? 'h100svh': ''">
        <div class="container"v-if="!hasError">
          <h1 class="head">Facility Information</h1>
        <div class="cont">
            <div>
                <span class="cont-title">Facility:</span>
                <div class="skeleton-loader" v-if="location.title === ''"></div>
                <span v-else class="location">{{ location?.title }}</span>                
            </div>
            <div>
                <span class="cont-title">Address:</span>
                <div class="skeleton-loader" v-if="location.address === ''"></div>
                <span class="address" v-else>{{ location?.address }}</span>
            </div>
        </div>
          <div class="cont">
              <h2>Getting There</h2>
              <div class="skeleton-loader h20!" v-if="location.gettingHere === ''"></div>
              <p>{{ location?.gettingHere }}</p>
          </div>
    
          <div class="photos">
            <h2 class="mb2">Photos</h2>
            <div class="photo-gallery">
                <div v-for="image, idx in location?.images" :key="image" class="image">
                    <img :src="`${image}`" alt="Parking spot" />
                    <div class="tag">{{ idx + 1 }}/{{ location?.images.length }}</div>
                </div>
            </div>
          </div>
    
          <div class="cont">
            <h2>Restrictions</h2>
            <div class="skeleton-loader h20!" v-if="location.restrictions.length === 0"></div>
            <p v-else v-for="restriction of location?.restrictions" :key="restriction">{{ restriction }}</p>
          </div>
    
          <div class="cont">
            <h2>Attention</h2>
            <p>These photos and directions are available in the SpotHero app/website if you are logged in or in your confirmation email if you CLICK on the parking pass. Please check your spam folder, and confirm which email address is on your spothero account</p>
          </div>
        </div>

        <div v-else class="container h-full justify-center">
            <div class="cont text-center my-auto py15!">
                <svg xmlns="http://www.w3.org/2000/svg" class="h15 w15 mx-auto my4" viewBox="0 0 24 24"><path fill="#1C58F2" d="M2.73 20L12 4l9.27 16zM12 17.616q.262 0 .439-.177t.176-.439t-.177-.438t-.438-.178t-.438.177t-.177.439t.177.439t.438.177m-.5-2.231h1v-5h-1z"/></svg>
                <h1 class=" text-[#1C58F2] fw500 text-6 md:text-8 mb4">Something went wrong</h1>
                <p>Please make sure you have the correct facilty id</p>
            </div>
        </div>
    </div>
</template>
    
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap');
    
    .head {
        font-size: 1.5rem;
        font-weight:700;
        margin-top: 40px; 
    }
    
    .page{
        background-color: #F6F7F9;
        font-family: "SUSE", sans-serif;
        font-optical-sizing: auto;
    }
    .container {
      display: flex;
      flex-direction: column;
      gap: 30px;
      margin: auto;
      max-width: 1000px;
      padding: 20px;
    }
    
    .photos{
        background-color: #fff ;
        padding:10px 30px 30px 30px;
        border-radius: 10px;
    }
    .photo-gallery{
        display: flex;
        gap: 30px;
    }
    .photo-gallery > .image{
        height: auto;
        width: calc(33.33% - 30px);
        max-width: 250px;
        position: relative
    }
    
    .tag{
        position: absolute;
        top:10px;
        right:10px;
        font-size:0.7rem;
        background-color: #000000ab;
        color: #fff;
        padding:4px 8px;
        border-radius:10px;
    }
    .image > img{
        object-fit: cover;
        width: 100%;
    }
    
    .cont{
        background-color: #fff ;
        padding:10px 30px 30px 30px;
        border-radius: 10px;
    }
    
    .cont-title{
        color :#1C58F2;
        padding-right: 20px;
    }
    
    a{
        color :#1C58F2;
        font-style: italic;  
    }
    
    .cont > div{
        margin:10px 0px;
    }
    
    h2{
        font-size:1.2rem;
        font-weight: 600;
    }
    .location{
        font-size: 1.5rem;
        font-weight: 500;
    }
    br{
        margin-bottom: 30px;
    }
    p{
        font-size:0.9rem;
    }
    .skeleton-loader {
  height: 20px;
  width: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
    
    @media (max-width: 540px) {
    .container {
      gap: 20px;
      padding: 20px;
    }
    .photo-gallery{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .photo-gallery > .image{
        height: auto;
        width: 100%;
        max-width: none;
    }
    .cont-title{
        padding-right: 10px;
    }
    .cont, .photos{
        padding:10px 16px 16px 16px;
    }
    
    .location{
        font-size: 1.4rem;
        display: block;
        margin: 15px 0px;
    }
    
    }
    </style>