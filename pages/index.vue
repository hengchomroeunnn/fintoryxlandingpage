<template>
  <!-- Intro Section -->
  <section id="" class="">
    <div class="container mx-auto text-center">
      <div class="relative bg-text text-white rounded-3xl">
        <!-- Background Image and Overlay -->
        <div class="absolute inset-0 opacity-50">
          <img
            src="/assets/images/img-bg.png"
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
                  class="text-[30px] text-white text-center w-[600px] max-sm:text-[14px] max-md:text-[18px] max-sm:w-[250px] max-md:w-[450px]">
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
  <section id="features" class="flex items-center justify-center">
    <div class="relative p-8 rounded-lg max-w-4xl flex items-center">
      <!-- Description Text -->
      <div class="w-1/2 pl-2">
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
        <button class="mt-6 px-6 py-2 bg-primary text-white rounded-lg">
          {{ $t("learn_more") }}
        </button>
      </div>

      <!-- Phone Image -->
      <div class="w-1/2 relative z-10">
        <img
          src="/assets/images/productadding.png"
          alt="Phone Image"
          class="w-full h-auto object-cover" />
      </div>
    </div>
  </section>
  <section id="value" class="flex items-center justify-center">
    <div class="space-y-2">
      <div class="flex justify-center p-4">
        <div class="text-3xl text-center font-bold text-text w-[900px]">
          {{ $t("our_aim") }}
        </div>
        
      </div>
      <div class="text-3xl text-center font-bold text-primary">{{ $t('feature') }}</div>
      <div class="grid grid-cols-2 justify-center items-center space-x-4">
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
          class="flex-col rounded-md flex items-center justify-center shadow-lg p-8 text-white">
          <!-- Background Image -->
          <img
            src="/assets/images/pos.png"
            alt="Product Image"
            class="relative inset-0 w-[30%]" />
        </div>
      </div>

      <div class="grid grid-cols-2 justify-center items-center space-x-4">
        <div
          class="flex-col rounded-md flex items-center justify-center shadow-lg p-8 text-white">
          <!-- Background Image -->
          <img
            src="/assets/images/pos.png"
            alt="Product Image"
            class="relative inset-0 w-[30%]" />
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

      <div class="grid grid-cols-2 justify-center items-center space-x-4">
        <div class="space-y-4">
          <div class="flex items-center">
            <div
              class="w-[50px] h-[50px] bg-primary rounded-md flex justify-center items-center">
              <Icon name="pajamas:expire" class="w-[80%] h-[80%] text-white" />
            </div>
          </div>
          <div class="font-bold text-[18px] text-text">
            {{ $t("feature_3") }}
          </div>
          <div class="w-2/3">{{ $t("expiry_notifications") }}</div>
        </div>
        <div
          class="flex-col rounded-md flex items-center justify-center shadow-lg p-8 text-white">
          <!-- Background Image -->
          <img
            src="/assets/images/pos.png"
            alt="Product Image"
            class="relative inset-0 w-[30%]" />
        </div>
      </div>

      <div class="grid grid-cols-2 justify-center items-center space-x-4">
        <div
          class="flex-col rounded-md flex items-center justify-center shadow-lg p-8 text-white">
          <!-- Background Image -->
          <img
            src="/assets/images/pos.png"
            alt="Product Image"
            class="relative inset-0 w-[30%]" />
        </div>
        <div class="space-y-4">
          <div class="flex items-center">
            <div
              class="w-[50px] h-[50px] bg-primary rounded-md flex justify-center items-center">
              <Icon name="maki:warehouse" class="w-[80%] h-[80%] text-white" />
            </div>
          </div>
          <div class="font-bold text-[18px] text-text">
            {{ $t("feature_4") }}
          </div>
          <div class="w-2/3">{{ $t("replenishment_alerts") }}</div>
        </div>
      </div>

      <div class="grid grid-cols-2 justify-center items-center space-x-4">
        <div class="space-y-4">
          <div class="flex items-center">
            <div
              class="w-[50px] h-[50px] bg-primary rounded-md flex justify-center items-center">
              <Icon name="wpf:future" class="w-[80%] h-[80%] text-white" />
            </div>
          </div>
          <div class="font-bold text-[18px] text-text">
            {{ $t("feature_4") }}
          </div>
          <div class="w-2/3">{{ $t("future_demand") }}</div>
        </div>
        <div
          class="flex-col rounded-md flex items-center justify-center shadow-lg p-8 text-white">
          <!-- Background Image -->
          <img
            src="/assets/images/pos.png"
            alt="Product Image"
            class="relative inset-0 w-[30%]" />
        </div>
      </div>

      <div class="grid grid-cols-2 justify-center items-center space-x-4">
        <div
          class="flex-col rounded-md flex items-center justify-center shadow-lg p-8 text-white">
          <!-- Background Image -->
          <img
            src="/assets/images/pos.png"
            alt="Product Image"
            class="relative inset-0 w-[30%]" />
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
  </section>
  <!--Value Section-->
  <section id="value" class="bg-primary">
    <div class="p-4 space-y-4 flex flex-col items-center justify-center">
      <div class="text-3xl text-white font-bold">{{ $t("why_fintory") }}?</div>
      <div class="text-white w-2/4 text-center">{{ $t("vp") }}</div>
    </div>
    <div class="grid grid-cols-3">
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
            name="solar:smart-vacuum-cleaner-bold-duotone"
            class="w-[80%] h-[80%] text-primary"></Icon>
        </div>
        <div class="text-white font-semibold">{{ $t("value_1") }}</div>
        <div class="text-white text-[14px]">{{ $t("smart_inventory") }}</div>
      </div>
      <div class="p-8 space-y-2 col-start-2">
        <div
          class="w-[50px] h-[50px] bg-white rounded-md flex justify-center items-center">
          <Icon
            name="solar:smart-vacuum-cleaner-bold-duotone"
            class="w-[80%] h-[80%] text-primary"></Icon>
        </div>
        <div class="text-white font-semibold">{{ $t("value_1") }}</div>
        <div class="text-white text-[14px]">{{ $t("smart_inventory") }}</div>
      </div>
    </div>
  </section>
  <!-- Pricing Section -->
  <section class="bg-white">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-primary">{{ $t('pricing') }}</h2>
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <!-- Pricing Card -->
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center  bg-gray-800 rounded-lg border shadow  xl:p-8  text-white">
              <h3 class="mb-4 text-2xl font-semibold">{{ $t('monthly_package') }}</h3>
              <p class="font-light text-gray-500 sm:text-lg">Spend only $0.5 a day</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">$15</span>
                  <span class="text-gray-500">/month</span>
              </div>
              <!-- List -->
              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>{{ $t('all_features') }}</span>
                  </li>
              </ul>
              <a href="#" class="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center">{{ $t('register') }}</a>
          </div>
     <!-- Pricing Card -->
     <div class="flex flex-col p-6 mx-auto max-w-lg text-center  bg-gray-800 rounded-lg border shadow  xl:p-8  text-white">
              <h3 class="mb-4 text-2xl font-semibold">{{ $t('semester_package') }}</h3>
              <p class="font-light text-gray-500 sm:text-lg">Spend only $0.425 a day</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">$13</span>
                  <span class="text-gray-500">/month</span>
              </div>
              <!-- List -->
              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>{{ $t('all_features') }}</span>
                  </li>
              </ul>
              <a href="#" class="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center">{{ $t('register') }}</a>
          </div> <!-- Pricing Card -->
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center  bg-gray-800 rounded-lg border shadow  xl:p-8  text-white">
              <h3 class="mb-4 text-2xl font-semibold">{{ $t('yearly_package') }}</h3>
              <p class="font-light text-gray-500 sm:text-lg">Spend only $0.325 a day</p>
              <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">$10</span>
                  <span class="text-gray-500">/month</span>
              </div>
              <!-- List -->
              <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                      <!-- Icon -->
                      <svg class="flex-shrink-0 w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>{{ $t('all_features') }}</span>
                  </li>
              </ul>
              <a href="#" class="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center">{{ $t('register') }}</a>
          </div>
      </div>
  </div>
</section>
</template>
