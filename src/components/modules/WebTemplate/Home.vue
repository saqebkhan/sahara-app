<template>
  <div>
    <!-- Header -->
    <header class="bg-indigo-500 py-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-white text-2xl font-bold">Sahara Hostels</h1>
        <button
          @click="loginAsAdmin"
          class="text-white bg-transparent border border-solid border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500 transition duration-300 ease-in-out"
        >
          Login As Admin
        </button>
      </div>
    </header> 

    <!-- Body -->
    <main class="container mx-auto py-8">
      <!-- Features Section -->
      <section class="mb-8">
        <div class="text-center mb-4">
          <h2 class="text-2xl font-bold">Our Features</h2>
          <p class="text-gray-600">
            Experience the best services Sahara Hostels has to offer.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Feature Item -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/539862028.jpg?k=48af58af8b16eee37f89dd803f9d486aa57f9f121e5899d4003ab7cda1353c5e&o=&hp=1"
              alt="Hygiene Hostel"
              class="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 class="text-lg font-semibold mb-2">Hygiene Hostel</h3>
            <p class="text-gray-600">
              We prioritize cleanliness and hygiene for your comfort.
            </p>
          </div>
          <!-- Feature Item -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/539862028.jpg?k=48af58af8b16eee37f89dd803f9d486aa57f9f121e5899d4003ab7cda1353c5e&o=&hp=1"
              alt="Laundry Services"
              class="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 class="text-lg font-semibold mb-2">Laundry Services</h3>
            <p class="text-gray-600">
              Convenient laundry services available for your convenience.
            </p>
          </div>
          <!-- Feature Item -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/539862028.jpg?k=48af58af8b16eee37f89dd803f9d486aa57f9f121e5899d4003ab7cda1353c5e&o=&hp=1"
              alt="WiFi Service"
              class="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 class="text-lg font-semibold mb-2">WiFi Service</h3>
            <p class="text-gray-600">
              Stay connected with high-speed WiFi throughout the hostel.
            </p>
          </div>
          <!-- Feature Item -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/539862028.jpg?k=48af58af8b16eee37f89dd803f9d486aa57f9f121e5899d4003ab7cda1353c5e&o=&hp=1"
              alt="Delicious Food"
              class="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 class="text-lg font-semibold mb-2">Delicious Food</h3>
            <p class="text-gray-600">
              Savor delicious meals prepared fresh for you.
            </p>
          </div>
          <!-- Feature Item -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/539862028.jpg?k=48af58af8b16eee37f89dd803f9d486aa57f9f121e5899d4003ab7cda1353c5e&o=&hp=1"
              alt="Instant Deposit Refund"
              class="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 class="text-lg font-semibold mb-2">Instant Deposit Refund</h3>
            <p class="text-gray-600">
              Get your deposit refunded instantly hassle-free.
            </p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/539862028.jpg?k=48af58af8b16eee37f89dd803f9d486aa57f9f121e5899d4003ab7cda1353c5e&o=&hp=1"
              alt="Instant Deposit Refund"
              class="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 class="text-lg font-semibold mb-2">Comfort</h3>
            <p class="text-gray-600">
              Get your deposit refunded instantly hassle-free.
            </p>
          </div>
        </div>
      </section>

      <!-- Video Section -->
      <section class="mb-8">
        <div class="text-center mb-4">
          <h2 class="text-2xl font-bold">Take a Tour</h2>
          <p class="text-gray-600">
            Explore our hostel through this video tour.
          </p>
        </div>
        <div class="aspect-w-16 aspect-h-9 w-1/3 h-[250px] mx-auto">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            class="w-full h-full"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <!-- Location Section -->
      <section class="mb-8">
        <div class="text-center mb-4">
          <h2 class="text-2xl font-bold">Find Us</h2>
          <p class="text-gray-600">Visit us at our prime location.</p>
        </div>
      </section>
    </main>
    <!-- Footer -->
    <footer
      class="bg-gray-900 text-white py-4 flex flex-wrap justify-center items-center px-16"
    >
      <!-- Left Column -->
      <div class="w-full lg:w-auto mb-4 lg:mb-0 px-4">
        <div class="text-center lg:text-left">
          <p>&copy; 2024 Sahara Hostels. All rights reserved.</p>
        </div>
      </div>

      <!-- Right Column (Map) -->
      <div class="w-full lg:w-1/3 xl:w-1/4 mt-4 lg:mt-0 px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d514343.8880309842!2d0!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1622616275283!5m2!1sen!2suk"
          class="w-full h-full"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "../../../store";
import { RouteNames } from "../../../router";

const router = useRouter();
const store = useStore();

const loginAsAdmin = () => {
  if (store.isAuthenticated) {
    router.push({ name: RouteNames.DASHBOARD });
  } else {
    router.push({ name: RouteNames.LOGIN });
  }
};
</script>
