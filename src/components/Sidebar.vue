<template>
  <div>
    <TransitionRoot
      v-if="$route.name !== RouteNames.PRINT_RENT"
      as="template"
      :show="sidebarOpen"
    >
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-52 flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon
                      class="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <img
                    class="h-8 w-auto"
                    :src="logo"
                    alt="Your Company"
                  />
                </div>
                <!-- For small screens -->
                <nav class="flex flex-1 flex-col">
                  <ul
                    role="list"
                    class="flex flex-1 flex-col gap-y-7"
                  >
                    <li>
                      <ul
                        role="list"
                        class="-mx-2 space-y-1"
                      >
                        <li
                          class="cursor-pointer"
                          v-for="item in navigation"
                          :key="item.name"
                        >
                          <a
                            :href="item.href"
                            @click="switchCurrent(item)"
                            :class="[
                              isActive(item.route)
                                ? 'bg-gray-50 text-indigo-600'
                                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                            ]"
                          >
                            <component
                              :is="item.icon"
                              :class="[
                                isActive(item.route)
                                  ? 'text-indigo-600'
                                  : 'text-gray-400 group-hover:text-indigo-600',
                                'h-6 w-6 shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li class="mt-auto">
                      <a
                        href="#"
                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                      >
                        <Cog6ToothIcon
                          class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      v-if="$route.name !== RouteNames.PRINT_RENT"
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-52 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4"
      >
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-14 w-auto"
            :src="logo"
            alt="Your Company"
          />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul
            role="list"
            class="flex flex-1 flex-col gap-y-7"
          >
            <li>
              <ul
                role="list"
                class="-mx-2 space-y-1"
              >
                <li
                  class="cursor-pointer"
                  v-for="item in navigation"
                  :key="item.name"
                >
                  <a
                    @click="switchCurrent(item)"
                    :class="[
                      isActive(item.route)
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        isActive(item.route)
                          ? 'text-indigo-600'
                          : 'text-gray-400 group-hover:text-indigo-600',
                        'h-6 w-6 shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <a
                href="#"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
              >
                <Cog6ToothIcon
                  class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-52">
      <div
        v-if="$route.name !== RouteNames.PRINT_RENT"
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon
            class="h-6 w-6"
            aria-hidden="true"
          />
        </button>

        <!-- Separator -->
        <div
          class="h-6 w-px bg-gray-200 lg:hidden"
          aria-hidden="true"
          v-if="$route.name !== RouteNames.PRINT_RENT"
        />
        <div
          class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6"
          v-if="$route.name !== RouteNames.PRINT_RENT"
        >
          <div
            class="relative flex flex-1"
            action="#"
            method="GET"
          >
            <label
              for="search-field"
              class="sr-only"
              >Search</label
            >
            <div class="grid grid-cols-6 relative">
              <h2
                class="text-nowrap max-sm:hidden sm:mt-1 md:text-2xl md:mt-0 lg:mt-0 lg:text-3xl font-sans font-semibold lg:ml-20 top-1/4 text-center m-0 absolute text-gray-900 cursor-pointer"
                @click="resetSelectedHostel"
              >
                {{ store.selectedHostel }}
              </h2>
              <h2
                class="text-nowrap max-sm:block hidden font-sans font-semibold top-1/4 text-center mt-1 absolute text-gray-900 cursor-pointer"
                @click="resetSelectedHostel"
              >
                {{
                  store.selectedHostel === "SAHARA GROUP OF HOSTELS"
                    ? "SAHARA GROUP"
                    : store.selectedHostel
                }}
              </h2>
            </div>
          </div>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <!-- Separator -->
            <div
              class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
              aria-hidden="true"
            />

            <!-- Profile dropdown -->
            <Menu
              as="div"
              class="relative"
            >
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user menu</span>
                <span class="hidden lg:flex lg:items-center">
                  <span
                    class="ml-4 text-sm font-semibold leading-6 text-gray-900"
                    aria-hidden="true"
                    >Sohel Khan</span
                  >
                  <ChevronDownIcon
                    class="ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </MenuButton>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                >
                  <MenuItem v-slot="{ active }">
                    <a
                      :class="[
                        active ? 'bg-gray-50' : '',
                        'block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer',
                      ]"
                      >Your profile</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      :class="[
                        active ? 'bg-gray-50' : '',
                        'block px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer',
                      ]"
                      @click="logout"
                      >Log out</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "../store";
import logo from "../assets/sahara-logo.png";

import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  TrashIcon,
  UsersIcon,
  CurrencyRupeeIcon,
  XMarkIcon,
  Squares2X2Icon,
  DocumentTextIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { RouteNames } from "@/router";

const store = useStore();

const router = useRouter();

const route = useRoute();

const navigation = [
  {
    name: "Dashboard",
    route: RouteNames.DASHBOARD,
    icon: Squares2X2Icon,
    current: true,
  },
  {
    name: "Inmates List",
    route: RouteNames.INMATES,
    icon: UsersIcon,
    current: false,
  },
  {
    name: "Deleted",
    route: RouteNames.DELETED,
    icon: TrashIcon,
    current: false,
  },
  {
    name: "Expense",
    route: RouteNames.EXPENSES,
    icon: CurrencyRupeeIcon,
    current: false,
  },
  {
    name: "Slots",
    route: RouteNames.SLOTS,
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    name: "History",
    route: RouteNames.HISTORY,
    icon: DocumentTextIcon,
    current: false,
  },
];

const switchCurrent = (item) => {
  router.push({ name: item.route });
  sidebarOpen.value = sidebarOpen.value && false;
};

const resetSelectedHostel = () => {
  store.selectedHostel = "SAHARA GROUP OF HOSTELS";
};

const logout = () => {
  store.isAuthenticated = false;
  sessionStorage.removeItem("isAuthenticated");
  router.push({ name: RouteNames.HOME });
};
const isActive = (activeRoute) => {
  const isKnownRoute = navigation.some((item) => item.route === route.name);
  return (
    route.name === activeRoute ||
    (!isKnownRoute && activeRoute === RouteNames.INMATES)
  );
};

const sidebarOpen = ref(false);
</script>
