<template>
    <nav class="p-4 flex justify-between items-center drop-shadow-md">
      <img src="../assets/images/solar.png" alt="logo" class="w-40">
      <ul class="flex space-x-4">
        <li><a href="#">HOME</a></li>
        <li class="relative group">
          <a href="#">ABOUT US</a>
          <ul class="absolute left-0 hidden group-hover:block bg-gray-700 text-white">
            <li><a href="#" class="block px-4 py-2">Mission</a></li>
            <li><a href="#" class="block px-4 py-2">Vision</a></li>
          </ul>
        </li>
        <li><a href="#">LOCATIONS</a></li>
      </ul>
      <button class="bg-orange-600 text-white px-4 py-2 uppercase rounded-md">Get Qoute</button>
    </nav>
</template>
