<template>
    <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
      <button type="button" class="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg whatsapp-gradient">
        <span class="[&>svg]:h-4 [&>svg]:w-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.4 283.2 32 224.1 32 99.1 32 0 130.9 0 256c0 45.5 12.2 90.3 35.3 129.3L0 480l99.7-34.8c38.5 20.9 81.1 31.8 124.4 31.8 124.9 0 224-98.9 224-224 0-59.1-23.4-114.9-65.2-156.7zM224.1 426c-37.5 0-73.8-10.2-105.3-29.4l-7.5-4.5-59.3 20 20-58.3-4.9-7.7c-21.5-33.6-32.8-72.8-32.8-112.9 0-114.7 93.4-208 208-208 55.5 0 107.6 21.6 146.9 61 39.3 39.4 61 91.5 61 146.9-.1 114.8-93.5 208.2-208.1 208.2zm115.4-154.3c-6.3-3.1-37.3-18.4-43.1-20.6-5.8-2.1-10.1-3.1-14.3 3.1s-16.4 20.6-20.1 24.8c-3.7 4.2-7.4 4.7-13.7 1.6-6.3-3.1-26.6-9.8-50.6-31.2-18.7-16.6-31.2-37.1-34.9-43.4-3.7-6.3-.4-9.6 2.7-12.7 3.1-3.1 6.3-7.4 9.5-11.1 3.1-3.7 4.2-6.3 6.3-10.5 2.1-4.2 1-7.9-.5-11-1.5-3.1-13.7-32.9-18.9-45.2-5-12-10.1-10.4-13.7-10.6-3.5-.2-7.4-.2-11.4-.2s-10.5 1.5-16 7.9c-5.5 6.3-20.9 20.5-20.9 50 0 29.5 21.4 58 24.4 62.1 3.1 4.2 42.1 64.5 101.8 90.4 59.7 25.9 59.7 17.3 70.5 16.3 10.8-1 34.6-14.2 39.5-27.9 4.8-13.7 4.8-25.4 3.3-27.9-1.4-2.5-5.8-3.9-12.1-6.9z"/>
          </svg>
        </span>
      </button>
    </a>
  </template>
  
  <script>
  export default {
    name: 'WhatsAppButton',
  };
  </script>
  
  <style scoped>
  .whatsapp-gradient {
    background: #25d366;
  }
  </style>
  