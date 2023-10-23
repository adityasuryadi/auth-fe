<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          class="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Flowbite
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Create and account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >First Name</label
              >
              <input
                type="first_name"
                name="first_name"
                id="first_name"
                v-model="form.first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :class="{
                  'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
                    hasValidation('first_name'),
                }"
                placeholder="First Name"
              />
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                <span class="font-medium">{{
                  getValidation("first_name")
                }}</span>
              </p>
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Last Name</label
              >
              <input
                type="last_name"
                name="last_name"
                id="last_name"
                v-model="form.last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :class="{
                  'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
                    hasValidation('last_name'),
                }"
                placeholder="Last Name"
              />
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                <span class="font-medium">{{
                  getValidation("last_name")
                }}</span>
              </p>
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Phone</label
              >
              <input
                type="phone"
                name="phone"
                id="phone"
                v-model="form.phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :class="{
                  'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
                    hasValidation('phone'),
                }"
                placeholder="phone"
              />
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                <span class="font-medium">{{ getValidation("phone") }}</span>
              </p>
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                v-model="form.email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :class="{
                  'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
                    hasValidation('email'),
                }"
                placeholder="Email"
              />
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                <span class="font-medium">{{
                  // validation.length > 0 ? validation[0].message : "aa"
                  getValidation("email")
                }}</span>
              </p>
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                v-model="form.password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :class="{
                  'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
                    hasValidation('password'),
                }"
              />
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                <span class="font-medium">{{ getValidation("password") }}</span>
              </p>
            </div>
            <div>
              <label
                for="confirm-password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Confirm password</label
              >
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                v-model="form.password_confirmation"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :class="{
                  'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500':
                    hasValidation('password_confirmation'),
                }"
              />
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                <span class="font-medium">{{
                  getValidation("password_confirmation")
                }}</span>
              </p>
            </div>
            <button
              @click="postRegister"
              type="button"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?
              <router-link
                to="login"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Login here</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import router from "@/routes/index";
import { type IRegister } from "@/types/index";
import { registerApi, authApi } from "@/api/authApi";
import axios from "axios";

interface IValidation {
  field: string;
  message: string;
}

let validation: IValidation[] = reactive([
  {
    field: "",
    message: "",
  },
]);

const form: IRegister = reactive({
  email: "",
  first_name: "",
  last_name: "",
  password: "",
  password_confirmation: "",
  phone: "",
});

async function postRegister(): Promise<void> {
  try {
    const response = await registerApi(form);
    router.push("login");
  } catch (error) {
    Object.assign(validation, error.response.data.data);
  }
}

function hasValidation(field: string): boolean {
  let valid: IValidation | undefined = validation.find(
    (data) => data.field === field
  );
  if (valid != undefined || valid != null) {
    return true;
  }
  return false;
}

function getValidation(field: string): string | undefined {
  if (validation.length == 0) {
    return "";
  }
  let valid = validation.find((data) => data.field === field);
  return valid?.message;
}
</script>

<style>
</style>