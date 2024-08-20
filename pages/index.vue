<script setup lang="ts">
</script>

<template>
    <!--hero section-->
    <div class="relative wfull bg-[url('/images/hero.jpeg')] bg-cover bg-center h50dvh md:h65dvh">
        <div class="w-site px-0">
            <div class="absolute lt-sm:top-8 lt-sm:left-1/2 lt-sm:-translate-x-[50%] z-20 px-10 xl:px-0 hfull wfull">
                <div class="sm:relative bg-e-primary/70 rounded-4 text-6 sm:text-8 lg:text-11 fw800 text-white w-full sm:max-w-150 px6 py6 top-15 lt-sm:text-center">Turn Parking Spots Into Paid Rent</div>
                <button @click="goToContact" class="btn relative flex text-3.5 items-center gap-2 bg-e-primary px8 py3 rounded-2 text-white font-600 sm:absolute! sm:bottom-15 lt-sm:mx-auto lt-sm:mt14 lt-lg:mt18">
                    Get In Touch
                </button>
            </div>
        </div>

        <div class="overlay absolute top-0 hfull wfull bg-[#D9D9D9] opacity-40"></div>
    </div>

    <!--About us Section-->
    <div id="about" class="w-site py15">
        <div>
            <h3 class="text-e-primary text-6 lg:text-8 fw800">Went Rent Parking</h3>
            <div class="h2 w10 bg-e-secondary"></div>
        </div>

        <div class="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-8 flex-row justify-between my8">
            <div class="wfull md:w-1/3 h80 lg:h95">
                <img src="/images/corners.jpeg" class="h-[70%] md:h-[65%] lg:h-[70%] wfull object-cover" />
                <div class="bg-e-primary/80 flex flex-col justify-center text-white px8 md:px4 lg:px8 h-[30%] md:h-[35%] lg:h-[30%] rounded-b-4 text-center">
                    <h4 class="text-3.5 lg:text-4 fw600 mb2">In Tiny Corners</h4>
                    <p class="text-3.2 lg:text-3.5">Compact car only parking space in tiny corners are not a problem</p>
                </div>
            </div>
            <div class="wfull md:w-1/3 h80 lg:h95">
                <img src="/images/backyard.jpeg" class="h-[70%] md:h-[65%] lg:h-[70%] wfull object-cover" />
                <div class="bg-e-secondary/80 flex flex-col justify-center text-white px8 md:px4 lg:px8 h-[30%] md:h-[35%] lg:h-[30%] rounded-b-4 text-center">
                    <h4 class="text-3.5 lg:text-4 fw600 mb2">In The Backyard</h4>
                    <p class="text-3.2 lg:text-3.5">Parking spot out back or a big lot, backyard parking is a specialty</p>
                </div>
            </div>
            <div class="wfull md:w-1/3 h80 lg:h95">
                <img src="/images/alley.jpeg" class="h-[70%] md:h-[65%] lg:h-[70%] wfull object-cover"  />
                <div class="bg-e-primary/80 flex flex-col justify-center text-white px8 md:px4 lg:px8 h-[30%] md:h-[35%] lg:h-[30%] rounded-b-4 text-center">
                    <h4 class="text-3.5 lg:text-4 fw600 mb2">In The Alley</h4>
                    <p class="text-3.2 lg:text-3.5">Narrow allies aren’t scary to us; we thrive back here</p>
                </div>
            </div>
        </div>
    </div>

    <!--Services Section-->
    <div id="services" class="bg-e-secondary/20 py15 lg:py25">
        <div class="w-site">
            <div>
                <h3 class="text-e-primary text-6 lg:text-8 fw800">Property Owners</h3>
                <div class="h2 w10 bg-e-secondary"></div>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap10 lg:gap15 mt10 lt-sm:px4 px6 md:px0">
                <div class="h70 relative">
                    <img src="/images/credit.jpeg" class="h-[80%] w-full object-cover"/>
                    <div class="bg-[#D9D9D9] text-e-primary h-[20%] flex items-center justify-center">Rent paid on time automatically</div>
                    <div data-aos="fade-right" class="absolute bottom-20 -left-8 w-max bg-e-primary h9 flex justify-center px-8 items-center text-white rounded-tl-2.5 fw600">Credit worthy tenants</div>
                </div>
                <div class="h70 relative">
                    <img src="/images/rent.jpeg" class="h-[80%] w-full object-cover"/>
                    <div class="bg-[#D9D9D9] text-e-primary h-[20%] flex items-center justify-center">Rent paid on time automatically</div>
                    <div data-aos="fade-right" class="absolute bottom-20 -left-8 w-max bg-e-primary h9 flex justify-center px-8 items-center text-white rounded-tl-2.5 fw600">Rent premiums</div>
                </div>
                <div class="h70 relative">
                    <img src="/images/partnership.jpeg" class="h-[80%] w-full object-cover"/>
                    <div class="bg-[#D9D9D9] text-e-primary h-[20%] flex items-center justify-center">Rent paid on time automatically</div>
                    <div data-aos="fade-right" class="absolute bottom-20 -left-8 w-max bg-e-primary h9 flex justify-center px-8 items-center text-white rounded-tl-2.5 fw600">Exclusive partnership</div>
                </div>
                <div class="h70 relative">
                    <img src="/images/turnover.jpeg" class="h-[80%] w-full object-cover"/>
                    <div class="bg-[#D9D9D9] text-e-primary h-[20%] flex items-center justify-center">Rent paid on time automatically</div>
                    <div data-aos="fade-right" class="absolute bottom-20 -left-8 w-max bg-e-primary h9 flex justify-center px-8 items-center text-white rounded-tl-2.5 fw600">Reduced Turnover</div>
                </div>
                <div class="h70 relative">
                    <img src="/images/vacancy.jpeg" class="h-[80%] w-full object-cover"/>
                    <div class="bg-[#D9D9D9] text-e-primary h-[20%] flex items-center justify-center">Rent paid on time automatically</div>
                    <div data-aos="fade-right" class="absolute bottom-20 -left-8 w-max bg-e-primary h9 flex justify-center px-8 items-center text-white rounded-tl-2.5 fw600">No vacancy</div>
                </div>
                <div class="h70 relative">
                    <img src="/images/advice.jpeg" class="h-[80%] w-full object-cover"/>
                    <div class="bg-[#D9D9D9] text-e-primary h-[20%] flex items-center justify-center">Rent paid on time automatically</div>
                    <div data-aos="fade-right" class="absolute bottom-20 -left-8 w-max bg-e-primary h9 flex justify-center px-8 items-center text-white rounded-tl-2.5 fw600">Expert Advice</div>
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

            <form class="text-3.5 my10 flex flex-col lt-md:gap8 gap10">
                <div class="flex flex-col md:flex-row gap8 md:gap15">
                    <div class="wfull md:w-1/2 flex flex-col gap-2">
                        <label>Name</label>
                        <input type="text" placeholder="Enter name" class="outline-0 shadow-sm border-0 px4 py4 rounded-3.5" />
                    </div>
                    <div class="wfull md:w-1/2 flex flex-col gap-2">
                        <label>Email</label>
                        <input type="mail" placeholder="Enter email" class="outline-0 shadow-sm border-0 px4 py4 rounded-3.5" />
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <label>Message</label>
                    <textarea placeholder="Enter your message" rows="5" class="outline-0 shadow-sm border-0 px4 py4 rounded-3.5"></textarea>
                </div>
                <button class="self-end flex text-3.5 lt-md:text-3 lt-md:px6 items-center gap-2 bg-e-primary px10 py3 rounded-2 text-white font-600">
                Submit
                <!-- <span class="group-hover:(w-31em h-15em)" /> -->
                </button>
            </form>
        </div>
    </div>
</template>

<style>
</style>