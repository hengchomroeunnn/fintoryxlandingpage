<template>
  <!-- Intro Section -->
  <section id="homepage" class="">
    <div class="container mx-auto text-center">
      <div class="relative bg-text text-white rounded-3xl">
        <!-- Background Image and Overlay -->
        <div class="absolute inset-0 opacity-30">
          <img
            src="/assets/images/img-bg-min.png"
            alt="Inventory management background"
            class="w-full h-full object-cover rounded-3xl" />
        </div>
        <div class="relative z-10 flex justify-between p-8 max-sm:p-2">
          <!-- Left Section -->
          <div
            class="w-full py-[100px] max-sm:py-[20px] max-md:py-[50px] max-lg:py-[70px] max-xl:py-[90px] space-y-10">
            <!-- <h2
              class="text-sm uppercase tracking-wider text-gray-300 text-left">
              Inventory Management Application
            </h2> -->

            <div class="flex justify-center items-center opacity-80">
              <div class="space-y-4">
                <div
                  class="text-[30px] text-white text-center w-[600px] max-sm:text-[18px] max-sm:font-bold max-md:text-[22px] font-bold max-sm:w-[250px] max-md:w-[450px]">
                  {{ $t("headline") }}
                </div>
                <div
                  class="text-lg text-white text-center w-[600px] max-sm:text-[12px] max-md:text-[14px] max-sm:w-[250px] max-md:w-[450px]">
                  {{ $t("subheadline") }}
                </div>
              </div>
            </div>

            <div
              class="flex justify-center max-sm:flex-col max-lg:flex-row max-sm:space-y-2 items-center space-x-4">
              <div>
                <a
                  href="https://calendly.com/hengchomroeun3103/30min"
                  target="_blank"
                  class="inline-block text-primary font-medium bg-white px-6 py-3 rounded-lg max-sm:text-[12px] max-md:text-[14px] max-lg:text-[16px]">
                  {{ $t("request_free_demo") }}
                </a>
              </div>
              <div>
                <a
                  href="#"
                  class="inline-block text-white font-medium bg-primary px-6 py-3 rounded-lg max-sm:text-[12px] max-md:text-[14px] max-lg:text-[16px]">
                  {{ $t("register") }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Features Section -->
  <section id="about-us" class="flex items-center justify-center">
    <div
      class="relative p-8 rounded-lg max-w-4xl flex items-center max-sm:grid max-sm:grid-cols-1">
      <!-- Description Text -->
      <div class="w-1/2 pl-2 max-sm:w-full">
        <h2 class="text-3xl font-bold text-boldText">
          {{ $t("what_is_fintory") }}
        </h2>
        <p class="mt-4 text-text">
          {{ $t("about_fintory") }}
        </p>
        <ul class="mt-4 space-y-2">
          <div class="flex items-center">
            <div class="px-2 text-[#FFD700]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 16 16">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="m2.75 8.75l3.5 3.5l7-7.5" />
              </svg>
            </div>
            <li class="text-text">{{ $t("feature") }} 1: {{ $t("1") }}</li>
          </div>
          <div class="flex items-center">
            <div class="px-2 text-[#FFD700]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 16 16">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="m2.75 8.75l3.5 3.5l7-7.5" />
              </svg>
            </div>
            <li class="text-text">{{ $t("feature") }} 2: {{ $t("2") }}</li>
          </div>
          <div class="flex items-center">
            <div class="px-2 text-[#FFD700]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 16 16">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="m2.75 8.75l3.5 3.5l7-7.5" />
              </svg>
            </div>
            <li class="text-text">{{ $t("feature") }} 3: {{ $t("3") }}</li>
          </div>
          <div class="flex items-center">
            <div class="px-2 text-[#FFD700]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 16 16">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="m2.75 8.75l3.5 3.5l7-7.5" />
              </svg>
            </div>
            <li class="text-text">{{ $t("feature") }} 4: {{ $t("4") }}</li>
          </div>
          <div class="flex items-center">
            <div class="px-2 text-[#FFD700]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 16 16">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="m2.75 8.75l3.5 3.5l7-7.5" />
              </svg>
            </div>
            <li class="text-text">{{ $t("feature") }} 5: {{ $t("5") }}</li>
          </div>
        </ul>
        <div class="flex justify-center">
          <button class="mt-6 px-6 py-2 bg-primary text-white rounded-lg">
            {{ $t("learn_more") }}
          </button>
        </div>
      </div>
      <!-- Phone Image -->
      <div class="w-1/2 relative max-sm:flex max-sm:items-center max-sm:justify-center z-10 max-sm:w-2/3">
        <img
          src="/assets/images/productadding.png"
          alt="Phone Image"
          class="w-full max-sm:ml-16 h-auto object-cover " />
      </div>
    </div>
  </section>
  <section id="features" class="flex items-center justify-center">
    <div class="space-y-2">
      <div class="flex justify-center p-4">
        <div class="text-3xl text-center font-bold text-text">
          {{ $t("our_aim") }}
        </div>
      </div>
      <div class="text-3xl text-center font-bold text-primary">
        {{ $t("feature") }}
      </div>
      <div class="py-10 max-md:space-y-[80px] max-md:flex max-md:flex-col">
        <div
          class="grid grid-cols-2 max-md:grid-cols-1 justify-center items-center">
          <div class="space-y-4">
            <div class="flex items-center">
              <div
                class="w-[50px] h-[50px] bg-primary rounded-md flex justify-center items-center">
                <Icon name="lucide:box" class="w-[80%] h-[80%] text-white" />
              </div>
            </div>
            <div class="font-bold text-[18px] text-text">
              {{ $t("feature_1") }}
            </div>
            <div class="w-2/3">{{ $t("pos") }}</div>
          </div>
          <div
            class="flex-col rounded-md flex items-center max-md:hidden justify-center shadow-lg p-8 text-white">
            <!-- Background Image -->
            <img
              src="/assets/images/POS system input output.png"
              alt="Product Image"
              class="relative inset-0 w-[50%]" />
          </div>
        </div>
        <div
          class="grid grid-cols-2 max-md:grid-cols-1 justify-center items-center">
          <div
            class="flex-col rounded-md flex items-center max-md:hidden justify-center shadow-lg p-8 text-white">
            <!-- Background Image -->
            <img
              src="/assets/images/High low product recommendation.png"
              alt="Product Image"
              class="relative inset-0 w-[40%]" />
          </div>
          <div class="space-y-4">
            <div class="flex items-center">
              <div
                class="w-[50px] h-[50px] bg-primary rounded-md flex justify-center items-center">
                <Icon name="uil:graph-bar" class="w-[80%] h-[80%] text-white" />
              </div>
            </div>
            <div class="font-bold text-[18px] text-text">
              {{ $t("feature_2") }}
            </div>
            <div class="w-2/3">{{ $t("high/low_demand_insights") }}</div>
          </div>
        </div>
        <div
          class="grid grid-cols-2 max-md:grid-cols-1 justify-center items-center">
          <div class="space-y-4">
            <div class="flex items-center">
              <div
                class="w-[50px] h-[50px] bg-primary rounded-md flex justify-center items-center">
                <Icon
                  name="pajamas:expire"
                  class="w-[80%] h-[80%] text-white" />
              </div>
            </div>
            <div class="font-bold text-[18px] text-text">
              {{ $t("feature_3") }}
            </div>
            <div class="w-2/3">{{ $t("expiry_notifications") }}</div>
          </div>
          <div
            class="flex-col rounded-md flex items-center max-md:hidden justify-center shadow-lg p-8 text-white">
            <!-- Background Image -->
            <img
              src="/assets/images/Near-Expiry product.png"
              alt="Product Image"
              class="relative inset-0 w-[50%]" />
          </div>
        </div>
        <div
          class="grid grid-cols-2 max-md:grid-cols-1 justify-center items-center">
          <div
            class="flex-col rounded-md flex items-center max-md:hidden justify-center shadow-lg p-8 text-white">
            <!-- Background Image -->
            <img
              src="/assets/images/Replenishment.png"
              alt="Product Image"
              class="relative inset-0 w-[40%]" />
          </div>
          <div class="space-y-4">
            <div class="flex items-center">
              <div
                class="w-[50px] h-[50px] bg-primary rounded-md flex justify-center items-center">
                <Icon
                  name="maki:warehouse"
                  class="w-[80%] h-[80%] text-white" />
              </div>
            </div>
            <div class="font-bold text-[18px] text-text">
              {{ $t("feature_4") }}
            </div>
            <div class="w-2/3">{{ $t("replenishment_alerts") }}</div>
          </div>
        </div>
        <div
          class="grid grid-cols-2 max-md:grid-cols-1 justify-center items-center">
          <div class="space-y-4">
            <div class="flex items-center">
              <div
                class="w-[50px] h-[50px] bg-primary rounded-md flex justify-center items-center">
                <Icon name="wpf:future" class="w-[80%] h-[80%] text-white" />
              </div>
            </div>
            <div class="font-bold text-[18px] text-text">
              {{ $t("feature_5") }}
            </div>
            <div class="w-2/3">{{ $t("future_demand") }}</div>
          </div>
          <div
            class="flex-col rounded-md flex items-center max-md:hidden justify-center shadow-lg p-8 text-white">
            <!-- Background Image -->
            <img
              src="/assets/images/Future recommendation.png"
              alt="Product Image"
              class="relative inset-0 w-[50%]" />
          </div>
        </div>
        <div
          class="grid grid-cols-2 max-md:grid-cols-1 justify-center items-center">
          <div
            class="flex-col rounded-md flex items-center max-md:hidden justify-center shadow-lg p-8 text-white">
            <!-- Background Image -->
            <img
              src="/assets/images/ai chatbot.png"
              alt="Product Image"
              class="relative inset-0 w-[40%]" />
          </div>
          <div class="space-y-4">
            <div class="flex items-center">
              <div
                class="w-[50px] h-[50px] bg-primary rounded-md flex justify-center items-center">
                <Icon
                  name="tabler:file-text-ai"
                  class="w-[80%] h-[80%] text-white" />
              </div>
            </div>
            <div class="font-bold text-[18px] text-text">
              {{ $t("feature_6") }}
            </div>
            <div class="w-2/3">{{ $t("AI") }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Value Section-->
  <section id="why_fintory" class="bg-primary">
    <div class="p-4 space-y-4 flex flex-col items-center justify-center">
      <div class="text-3xl text-white font-bold">{{ $t("why_fintory") }}?</div>
      <div class="text-white w-2/4 text-center">{{ $t("vp") }}</div>
    </div>
    <div class="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
      <div class="p-8 space-y-2">
        <div
          class="w-[50px] h-[50px] bg-white rounded-md flex justify-center items-center">
          <Icon
            name="solar:smart-vacuum-cleaner-bold-duotone"
            class="w-[80%] h-[80%] text-primary"></Icon>
        </div>
        <div class="text-white font-semibold">{{ $t("value_1") }}</div>
        <div class="text-white text-[14px]">{{ $t("smart_inventory") }}</div>
      </div>
      <div class="p-8 space-y-2">
        <div
          class="w-[50px] h-[50px] bg-white rounded-md flex justify-center items-center">
          <Icon
            name="material-symbols:money-bag"
            class="w-[80%] h-[80%] text-primary"></Icon>
        </div>
        <div class="text-white font-semibold">{{ $t("value_2") }}</div>
        <div class="text-white text-[14px]">{{ $t("profit") }}</div>
      </div>
      <div class="p-8 space-y-2">
        <div
          class="w-[50px] h-[50px] bg-white rounded-md flex justify-center items-center">
          <Icon
            name="arcticons:ai-chat"
            class="w-[80%] h-[80%] text-primary"></Icon>
        </div>
        <div class="text-white font-semibold">{{ $t("value_3") }}</div>
        <div class="text-white text-[14px]">{{ $t("AI_chat") }}</div>
      </div>
      <div class="p-8 space-y-2">
        <div
          class="w-[50px] h-[50px] bg-white rounded-md flex justify-center items-center">
          <Icon
            name="carbon:sustainability"
            class="w-[80%] h-[80%] text-primary"></Icon>
        </div>
        <div class="text-white font-semibold">{{ $t("value_4") }}</div>
        <div class="text-white text-[14px]">{{ $t("sustainability") }}</div>
      </div>
      <div class="p-8 space-y-2">
        <div
          class="w-[50px] h-[50px] bg-white rounded-md flex justify-center items-center">
          <Icon
            name="streamline:discount-percent-circle"
            class="w-[80%] h-[80%] text-primary"></Icon>
        </div>
        <div class="text-white font-semibold">{{ $t("value_5") }}</div>
        <div class="text-white text-[14px]">{{ $t("discounts") }}</div>
      </div>
      <div class="p-8 space-y-2">
        <div
          class="w-[50px] h-[50px] bg-white rounded-md flex justify-center items-center">
          <Icon
            name="material-symbols:money-off-rounded"
            class="w-[80%] h-[80%] text-primary"></Icon>
        </div>
        <div class="text-white font-semibold">{{ $t("value_6") }}</div>
        <div class="text-white text-[14px]">{{ $t("installation") }}</div>
      </div>
      <div class="p-8 space-y-2 lg:col-start-2">
        <div
          class="w-[50px] h-[50px] bg-white rounded-md flex justify-center items-center">
          <Icon
            name="cbi:movies-anywhere"
            class="w-[80%] h-[80%] text-primary"></Icon>
        </div>
        <div class="text-white font-semibold">{{ $t("value_7") }}</div>
        <div class="text-white text-[14px]">{{ $t("anytime_anywhere") }}</div>
      </div>
    </div>
  </section>
  <!-- Pricing Section -->
  <section id="pricing" class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-primary">
          {{ $t("pricing") }}
        </h2>
      </div>
      <div
        class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <!-- Pricing Card -->
        <div
          class="flex flex-col p-6 mx-auto max-w-lg text-center bg-gray-800 rounded-lg border shadow xl:p-8 text-white">
          <h3 class="mb-4 text-2xl font-semibold">
            {{ $t("monthly_package") }}
          </h3>
          <p class="font-light text-gray-500 sm:text-lg">
            {{ $t("monthly_spend") }}
          </p>
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-extrabold">$15</span>
            <span class="text-gray-500">/{{ $t("month") }}</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>{{ $t("all_features") }}</span>
            </li>
          </ul>
          <a
            href="#"
            class="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >{{ $t("register") }}</a
          >
        </div>
        <!-- Pricing Card -->
        <div
          class="flex flex-col p-6 mx-auto max-w-lg text-center bg-gray-800 rounded-lg border shadow xl:p-8 text-white">
          <h3 class="mb-4 text-2xl font-semibold">
            {{ $t("semester_package") }}
          </h3>
          <p class="font-light text-gray-500 sm:text-lg">
            {{ $t("semaster_spend") }}
          </p>
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-extrabold">$13</span>
            <span class="text-gray-500">/{{ $t("month") }}</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>{{ $t("all_features") }}</span>
            </li>
          </ul>
          <a
            href="#"
            class="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >{{ $t("register") }}</a
          >
        </div>
        <!-- Pricing Card -->
        <div
          class="flex flex-col p-6 mx-auto max-w-lg text-center bg-gray-800 rounded-lg border shadow xl:p-8 text-white">
          <h3 class="mb-4 text-2xl font-semibold"s>
            {{ $t("yearly_package") }}
          </h3>
          <p class="font-light text-gray-500 sm:text-lg">
            {{ $t("yearly_spend") }}
          </p>
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-extrabold">$10</span>
            <span class="text-gray-500">/{{ $t("month") }}</span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li class="flex items-center space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span>{{ $t("all_features") }}</span>
            </li>
          </ul>
          <a
            href="#"
            class="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >{{ $t("register") }}</a
          >
        </div>
      </div>
    </div>
  </section>
  <!--Contact us-->
  <section id="contact-us">
    <section class="bg-primary">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <div class="mx-auto max-w-screen-md text-center mb-4">
          <h2 class="text-4xl tracking-tight font-extrabold text-white">
            {{ $t("contact-us") }}
          </h2>
        </div>
        <p class="mb-4 lg:mb-16 font-light text-center text-white sm:text-xl">
          {{ $t("contact_desc") }}
        </p>
        <form @submit.prevent="submitContactForm" class="space-y-4">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-white"
              >{{$t("email")}}</label
            >
            <input
              type="email"
              id="email"
              v-model="email"
              class="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-white border-white placeholder-gray-400 text-text focus:ring-primary focus:border-primary shadow-sm-light"
              placeholder="name@gmail.com"
              required />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >{{$t("subject")}}</label
            >
            <input
              type="text"
              id="subject"
              v-model="subject"
              class="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-white border-white placeholder-gray-400 text-text focus:ring-primary focus:border-primary shadow-sm-light"
              placeholder="Let us know how we can help you"
              required />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-white"
              >{{ $t("urmassage") }}</label
            >
            <textarea
              id="message"
              v-model="message"
              rows="6"
              class="shadow-sm border text-sm rounded-lg block w-full p-2.5 bg-white border-white placeholder-gray-400 text-text focus:ring-primary focus:border-primary shadow-sm-light"
              placeholder="Leave a comment..."></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg  sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary bg-boldText">
            {{$t("send_message")}}
          </button>
        </form>
      </div>
    </section>
  </section>
  <!-- Success Dialog -->
  <div
    v-if="showDialog"
    class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4">
      <div class="text-center">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Message Sent!</h3>
        <p class="text-sm text-gray-600">
          Your message has been successfully sent. We will get back to you
          shortly.
        </p>
      </div>
      <div class="mt-4 flex justify-center">
        <button
          @click="closeDialog"
          class="py-2 px-4 bg-primary text-white rounded-md hover:bg-boldText focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          OK
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default {
  data() {
    return {
      email: "",
      subject: "",
      message: "",
      showDialog: false, // State to show/hide dialog
    };
  },
  methods: {
    async submitContactForm() {
      if (!this.email || !this.subject || !this.message) {
        alert("Please fill in all fields.");
        return;
      }

      try {
        // Access Firestore from Nuxt app context
        const firestore = this.$firestore;

        // Add contact form data to Firestore
        await addDoc(collection(firestore, "message"), {
          email: this.email,
          subject: this.subject,
          message: this.message,
          timestamp: Timestamp.fromDate(new Date()), // Use Timestamp for Firestore dates
        });

        // Clear the form fields
        this.email = "";
        this.subject = "";
        this.message = "";

        // Show success dialog
        this.showDialog = true;
      } catch (error) {
        console.error("Error submitting contact form:", error);
        alert("Failed to send message.");
      }
    },
    closeDialog() {
      this.showDialog = false;
    },
  },
};
</script>
