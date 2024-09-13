<template>
  <hr class="" />
  <div class="grid grid-cols-4 p-4">
    <div>
      <img
        src="/assets/images/FintoryLogo.png"
        alt="logo"
        class=" max-sm:w-[40px] max-md:w-[60px] max-xl:w-[100px] w-[100px]" />
    </div>
    <div>
      <NuxtLink
        to="#about-us"
        class="text-primary max-sm:text-[10px]  p-2 text-xl max-md:text-[16px] font-semibold"
        >  {{$t("about_us")}}</NuxtLink
      >
    </div>
    <div>
      <NuxtLink
        to="#features"
        class="text-primary max-sm:text-[10px]  p-2 text-xl max-md:text-[16px] font-semibold"
        >{{ $t("features") }}</NuxtLink
      >
    </div>
    <div>
      <NuxtLink
        to="#pricing"
        class="text-primary max-sm:text-[10px]  p-2 text-xl max-md:text-[16px] font-semibold"
        >  {{$t("pricing")}}</NuxtLink
      >
    </div>
    <!-- <div>
      <NuxtLink
        to="#contact-us"
        class="text-primar max-sm:text-[10px]  p-2 text-xl max-md:text-[16px] font-semibold">
        {{ $t('contact-us') }}
      </NuxtLink>
      <div>
        <div class="">
          <div>
            <ul class="space-y-4">
              <li>
                <div class="flex space-x-2">
                  <div>
                    <Icon
                      name="ph:phone-call-fill"
                      class="bg-primary text-2xl"></Icon>
                  </div>
                  <div>+855 93 406 289</div>
                </div>
              </li>
              <li>
                <div class="flex space-x-2">
                  <div>
                    <Icon
                      name="tabler:mail-filled"
                      class="bg-primary text-2xl"></Icon>
                  </div>
                  <div>fintory.startup@gmail.com</div>
                </div>
              </li>
              <li>
                <div class="flex space-x-2">
                  <div>
                    <Icon name="bxs:map" class="bg-primary text-2xl"></Icon>
                  </div>
                  <div>
                    CADT, 2nd Bridge Prek Leap, National Road Number 6, Phnom
                    Penh
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
        <!-- Early Access Section -->
        <div class="pt-2 col-start-4 max-sm:col-span-4 max-xl:col-span-2 max-xl:col-start-3 max-md:col-span-2 max-md:col-start-3">
      <h2 class="text-xl font-bold py-2">{{ $t("early_access") }}</h2>
      <div class="flex   max-md:space-y-0 max-md:flex-row max-md:space-x-2">
        <input
          @keydown.enter="submitEmail"
          id="email"
          v-model="email"
          type="text"
          class="text-md px-2 h-[40px] border-2 border-gray-300 rounded-md focus:outline-none focus:border-primary w-full"
          placeholder="name@gmail.com" />
        <button
          @click="submitEmail"
          class="h-[40px] bg-primary px-4 rounded-md flex items-center justify-center max-md:w-auto">
          <Icon name="mingcute:send-fill" class="text-white"></Icon>
        </button>
      </div>
    </div>

    <!-- Notify Dialog -->
    <div
      v-if="dialogVisible"
      class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div class="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h3 class="text-xl font-semibold mb-4">{{ dialogTitle }}</h3>
        <p class="mb-4">{{ dialogMessage }}</p>
        <button
          @click="closeDialog"
          class="w-full bg-primary text-white py-2 rounded-lg">
          OK
        </button>
      </div>
    </div>
  </div>
  <div><hr class="" /></div>
  <div
    class="flex justify-between p-4 max-md:flex-col max-md:justify-center max-md:items-center max-md:space-y-4">
    <div class="space-x-4 text-2xl">
      <a href="">
        <Icon class="hover:bg-primary" name="ic:baseline-facebook"></Icon>
      </a>
      <a href="">
        <Icon class="hover:bg-primary" name="mdi:instagram"></Icon>
      </a>
      <a href="">
        <Icon class="hover:bg-primary" name="ic:baseline-telegram"></Icon>
      </a>
      <a href=""> <Icon class="hover:bg-primary" name="tabler:phone"></Icon> </a
      ><a href=""
        ><Icon class="hover:bg-primary" name="tabler:mail-filled"></Icon
      ></a>
    </div>
    <div>{{ $t('term_and_condition') }}</div>
    <div>{{ $t('all_rights_reserved') }}</div>
  </div>
</template>

<script>
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default {
  data() {
    return {
      email: "",
      dialogVisible: false,
      dialogTitle: "",
      dialogMessage: "",
    };
  },
  methods: {
    validateEmail(email) {
      // Regular expression for basic email validation
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    async submitEmail() {
      if (!this.email) {
        this.showDialog("Error", "Please enter an email address.");
        return;
      }

      if (!this.validateEmail(this.email)) {
        this.showDialog("Error", "Please enter a valid email address.");
        return;
      }

      try {
        // Access Firestore from Nuxt app context
        const firestore = this.$firestore;

        // Add email to Firestore
        await addDoc(collection(firestore, "email"), {
          email: this.email,
          timestamp: Timestamp.fromDate(new Date()), // Use Timestamp for Firestore dates
        });

        // Clear the input field
        this.email = "";

        // Notify the user
        this.showDialog("Success", "Email submitted successfully!");
      } catch (error) {
        console.error("Error submitting email:", error);
        this.showDialog("Error", "Failed to submit email.");
      }
    },
    showDialog(title, message) {
      this.dialogTitle = title;
      this.dialogMessage = message;
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>
