<script setup lang="ts">
const loading = ref(false)
const success = ref(false)

const contactForm = ref({
    name: '',
    email: '',
    message: '',
})
const FORMSPARK_ACTION_URL = "https://submit-form.com/5OVo1Yiz8"

async function submitForm() {
    success.value = false
    loading.value = true
    await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
        ...contactForm.value,
        }),
    }).then(()=>{
        success.value = true;
    }).catch(()=>{
        alert("Couldn't submit form")
    })
    .finally(()=>{
        loading.value = false
    })
}
</script>

<template>
    <!--hero section-->
    <div class="relative wfull bg-[url('/images/hero.png')] bg-cover bg-center h50dvh md:h70dvh">
        <div class="w-site px-0">
            <div class="absolute lt-sm:top-8 lt-sm:left-1/2 lt-sm:-translate-x-[50%] z-20 px-10 xl:px-0 hfull wfull">
                <div class="sm:relative bg-e-primary/70 rounded-4 text-6 sm:text-8 lg:text-11 fw800 text-white w-full sm:max-w-150 px6 py6 top-15 lt-sm:text-center">Turn Parking Spots Into Paid Rent</div>
                <button @click="goToContact" class="btn relative flex text-3.5 items-center gap-2 bg-e-primary px8 py3 rounded-2 text-white font-600 sm:absolute! sm:bottom-15 lt-sm:mx-auto lt-sm:mt14 lt-lg:mt18">
                    Get In Touch
                </button>
            </div>
        </div>

        <div class="overlay absolute top-0 hfull wfull bg-[#D9D9D9] opacity-20"></div>
    </div>

    <!--About us Section-->
    <div id="about" class="w-site py15">
        <div>
            <h3 class="text-e-primary text-6 lg:text-8 fw800">Unlock the Earning Potential of Every Parking Space</h3>
            <div class="h2 w10 bg-e-secondary"></div>
        </div>

        <div class="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-8 flex-row justify-between my8 fw600">
            <div class="wfull md:w-1/3 h70 sm:h80 lg:h95">
                <img src="/images/corner.jpeg" class="h-[65%] lg:h-[70%] wfull object-cover" />
                <div class="bg-e-primary/80 flex flex-col justify-center text-white px8 md:px4 lg:px8 h-[35%] lg:h-[30%] rounded-b-4 text-center">
                    <h4 class="text-4 fw600 mb1">In Tiny Corners</h4>
                    <p class="text-3.5">Parking spaces for compact cars in small corners are no hassle.</p>
                </div>
            </div>
            <div class="wfull md:w-1/3 h70 sm:h80 lg:h95">
                <img src="/images/backyard.webp" class="h-[65%] lg:h-[70%] wfull object-cover" />
                <div class="bg-e-secondary/80 flex flex-col justify-center text-white px8 md:px4 lg:px8 h-[35%] lg:h-[30%] rounded-b-4 text-center">
                    <h4 class="text-4 fw600 mb1">In The Backyard</h4>
                    <p class="text-3.5">Parking spot out back or a big lot, backyard parking is a specialty</p>
                </div>
            </div>
            <div class="wfull md:w-1/3 h70 sm:h80 lg:h95">
                <img src="/images/alley.webp" class="h-[65%] lg:h-[70%] wfull object-cover"  />
                <div class="bg-e-primary/80 flex flex-col justify-center text-white px8 md:px4 lg:px8 h-[35%] lg:h-[30%] rounded-b-4 text-center">
                    <h4 class="text-4 fw600 mb1">In The Alley</h4>
                    <p class="text-3.5">Narrow allies aren’t scary to us; we thrive back here</p>
                </div>
            </div>
        </div>
    </div>

    <!--Services Section-->
    <div id="services" class="py15 lg:py25 bg-e-secondary/20">
        <div class="w-site">
            <div>
                <h3 class="text-e-primary text-6 lg:text-8 fw800">Property Owners</h3>
                <div class="h2 w10 bg-e-secondary"></div>
                <h2 class="text-e-primary text-4.5 lg:text-5 fw500 my2">Is your property at its highest and best use?</h2>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap10 lg:gap30 mt10 lt-sm:px0 px6 md:px0">
                <div class="h50 xs:h60 lg:h65 relative">
                    <img src="/images/worthy.webp" class="h-[65%] sm:h-[75%] w-full object-cover bg-center"/>
                    <div class="lt-xs:text-3.5 px-2 lg:px-4 fw600 bg-e-secondary text-white h-[35%] sm:h-[25%] flex items-center justify-center">Rent paid on time automatically</div>
                    <div data-aos="fade-right" class="absolute bottom-16 xs:bottom-20 -left-5 sm:-left-8 w-[150px] sm:w-max bg-e-primary lt-sm:text-3.5 h7 xs:h9 flex justify-center sm:px-8 items-center text-white rounded-tl-2.5 fw600">Credit worthy tenants</div>
                </div>
                <div class="h50 xs:h60 lg:h65 relative">
                    <img src="/images/premiums.webp" class="h-[65%] sm:h-[75%] w-full object-cover bg-center"/>
                    <div class="lt-xs:text-3.5 px-2 lg:px-4 bg-e-secondary text-white fw600 h-[35%] sm:h-[25%] flex items-center justify-center">In some markets, we pay above market rent!</div>
                    <div data-aos="fade-right" class="absolute bottom-16 xs:bottom-20 -left-5 sm:-left-8 w-[150px] sm:w-max bg-e-primary lt-sm:text-3.5 h7 xs:h9 flex justify-center sm:px-8 items-center text-white rounded-tl-2.5 fw600">Rent premiums</div>
                </div>
                <div class="h50 xs:h60 lg:h65 relative">
                    <img src="/images/partners.webp" class="h-[65%] sm:h-[75%] w-full object-cover bg-center"/>
                    <div class="lt-xs:text-3.5 px-2 lg:px-4 fw600 bg-e-secondary text-white h-[35%] sm:h-[25%] flex items-center justify-center">SpotHero works only with us in certain locations!</div>
                    <div data-aos="fade-right" class="absolute bottom-16 xs:bottom-20 -left-5 sm:-left-8 w-[150px] sm:w-max bg-e-primary lt-sm:text-3.5 h7 xs:h9 flex justify-center sm:px-8 items-center text-white rounded-tl-2.5 fw600">Exclusive partnership</div>
                </div>
                <div class="h50 xs:h60 lg:h65 relative">
                    <img src="/images/turn.webp" class="h-[65%] sm:h-[75%] w-full object-cover bg-center"/>
                    <div class="lt-xs:text-3.5 fw600 px-2 lg:px-4 bg-e-secondary text-white h-[35%] sm:h-[25%] flex items-center justify-center">Leases renewed year after year</div>
                    <div data-aos="fade-right" class="absolute bottom-16 xs:bottom-20 -left-5 sm:-left-8 w-[150px] sm:w-max bg-e-primary lt-sm:text-3.5 h7 xs:h9 flex justify-center sm:px-8 items-center text-white rounded-tl-2.5 fw600">Reduced Turnover</div>
                </div>
                <div class="h50 xs:h60 lg:h65 relative">
                    <img src="/images/no-vacancy.webp" class="h-[65%] sm:h-[75%] w-full object-cover bg-center"/>
                    <div class="lt-xs:text-3.5 px-2 lg:px-4 bg-e-secondary text-white fw600 h-[35%] sm:h-[25%] flex items-center justify-center">Fill your spots when the residential market can’t!</div>
                    <div data-aos="fade-right" class="absolute bottom-16 xs:bottom-20 -left-5 sm:-left-8 w-[150px] sm:w-max bg-e-primary lt-sm:text-3.5 h7 xs:h9 flex justify-center sm:px-8 items-center text-white rounded-tl-2.5 fw600">No vacancy</div>
                </div>
                <div class="h50 xs:h60 lg:h65 relative">
                    <img src="/images/advice.webp" class="h-[65%] sm:h-[75%] w-full object-cover bg-center"/>
                    <div class="lt-xs:text-3.5 px-2 lg:px-4 fw600 bg-e-secondary text-white h-[35%] sm:h-[25%] flex items-center justify-center">Great direction, photos, and signage solve problems</div>
                    <div data-aos="fade-right" class="absolute bottom-16 xs:bottom-20 -left-5 sm:-left-8 w-[150px] sm:w-max bg-e-primary lt-sm:text-3.5 h7 xs:h9 flex justify-center sm:px-8 items-center text-white rounded-tl-2.5 fw600">Expert Advice</div>
                </div>
            </div>

        </div>
    </div>

    <!--Testimonials-->
    <div id="testimonials" class="w-site py15 lg:py20 text-e-primary">
        <div class="mb5">
            <h3 class="text-6 lg:text-8 fw800">Our Happy Partners</h3>
            <div class="h2 w10 bg-e-secondary"></div>
        </div>
        <p>We believe partnerships should be a win for everyone involved.</p>

        <div class="flex lt-md:flex-wrap gap-6 lg:gap10 mt15">
            <div class="wfull md:w-1/3">
                <div class="flex gap4 mb4 items-center">
                    <div class="h10 w10 rounded-full text-white bg-e-secondary flex justify-center items-center">J</div>
                    <div class="text-3.5 fw600">
                        <p>Jasmine,</p>
                        <p>NEXTGEN realty</p>
                    </div>
                </div>
                <div class="bg-[#EEF5F7] h20 rounded-full flex justify-center items-center px8 text-3.5">“Yourspotrented.com works everywhere. Flexibility closes deals"</div>
            </div>
            <div class="wfull md:w-1/3">
                <div class="flex gap4 mb4 items-center">
                    <div class="h10 w10 rounded-full text-white bg-e-primary flex justify-center items-center">A</div>
                    <div class="text-3.5 fw600">
                        <p>Alp,</p>
                        <p>Boston Brokerage Group</p>
                    </div>
                </div>
                <div class="bg-[#EEF5F7] h20 rounded-full flex justify-center items-center px8 text-3.5">“Yourspotrented.com was able to zero out my vacancy fast”</div>
            </div>
            <div class="wfull md:w-1/3">
                <div class="flex gap4 mb4 items-center">
                    <div class="h10 w10 rounded-full text-white bg-black flex justify-center items-center">S</div>
                    <div class="text-3.5 fw600">
                        <p>SpotHero Customer</p>
                    </div>
                </div>
                <div class="bg-[#EEF5F7] h20 rounded-full flex justify-center items-center px8 text-3.5">“Was very easy, convenient, and affordable"</div>
            </div>
        </div>
        
    </div>

    <!--Contact-->
    <div id="contact" class="py15 lg:py20 text-e-primary bg-e-primary/10">
        <div class="w-site">
            <div class="mb5">
                <h3 class="text-6 lg:text-8 fw800">Contact Us</h3>
                <div class="h2 w10 bg-e-secondary"></div>
            </div>
            <p class="lt-lg:text-3.5">Please contact us with as much information as possible including the location, start date, desired rental rate, and access directions.</p>

            <form class="text-3.5 my10 flex flex-col lt-md:gap8 gap10"  @submit.prevent="submitForm" incomplete-message="Please fill out all the required fields">
                <div class="flex flex-col md:flex-row gap8 md:gap15">
                    <div class="wfull md:w-1/2 flex flex-col gap-2">
                        <label for="name">Name</label>
                        <input v-model="contactForm.name" required id="name" name="name" type="text" placeholder="Enter name" class="outline-0 shadow-sm border-0 px4 py4 rounded-3.5" />
                    </div>
                    <div class="wfull md:w-1/2 flex flex-col gap-2">
                        <label for="email">Email</label>
                        <input v-model="contactForm.email" required id="email" name="email" type="mail" placeholder="Enter email" class="outline-0 shadow-sm border-0 px4 py4 rounded-3.5" />
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="message">Message</label>
                    <textarea v-model="contactForm.message" required id="message" name="message" placeholder="Enter your message" rows="5" class="outline-0 shadow-sm border-0 px4 py4 rounded-3.5"></textarea>
                </div>
                <div v-if="success" class="my5 p5 border border-dashed border-green-6 text-green-6">
                    Thank you for reaching out, our team will review your inquiry and respond as soon as possible.
                </div>
                <button :disabled="loading" type="submit" class="self-end flex text-3.5 lt-md:text-3 lt-md:px6 items-center gap-2 bg-e-primary! px10 py3 rounded-2 text-white font-600">
                    <span v-if="loading">Sending...</span>
                    <span v-else>Submit</span>
                <!-- <span class="group-hover:(w-31em h-15em)" /> -->
                </button>
            </form>
        </div>
    </div>
</template>

<style>
</style>