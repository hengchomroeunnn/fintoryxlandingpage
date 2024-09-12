<template>
  <div class="grid grid-cols-5 p-4 space-x-6">
    <div>
      <img src="/assets/images/FintoryLogo.png" alt="logo" class="w-[100px]" />
    </div>
    <div>
      <div class="text-primary font-EN p-2 text-xl">About us</div>
      <div>
        <div>With us, you will get</div>
        <div>
          <ul class="list-disc pl-10">
            <li>Effeciency</li>
            <li>Low cost</li>
            <li>Simply</li>
            <li>Wasteless</li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <div class="text-primary font-EN p-2 text-xl">Features</div>
      <div>
        <div>
          <ul class="list-decimal">
            <li>POS system input input output output</li>
            <li>
              Inventory Management
              <ul class="list-disc">
                <li>High demand products</li>
                <li>Low demand products</li>
                <li>Product is about to expire</li>
                <li>Additional Completion Notice</li>
              </ul>
            </li>
            <li>Financial statements</li>
            <li>AI chat (real time)</li>
            <li>Inform customers, sales promotions</li>
            <li>Donating spoiled food</li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <div class="text-primary font-EN p-2 text-xl">Pricing</div>
      <div>
        <div>
          <ul class="list-disc">
            <li>$15 a Month</li>
            <li>$13 for 6 Months</li>
            <li>$10 for 12 Months</li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div class="text-primary font-EN p-2 text-xl">Contact us!</div>
        <div>
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
      <!-- Registration Section -->
      <div class="pt-2">
        <h2 class="text-2xl font-bold py-2">Register Now!</h2>
        <div class="flex">
          <input
            id="email"
            type="text"
            class="w-[160px] px-2 h-[60px] border-2 border-gray-300 rounded-md focus:outline-none focus:border-primary"
            placeholder="Get product first!" />
          <button
            class="bg-primary p-4 rounded-md flex items-center justify-center">
            <Icon name="mingcute:send-fill" class="text-white"></Icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
