import { defineStore } from "pinia";

import AxiosService from "@/services/axios";
import { ICounter } from "@/types/interfaces";

const axios = new AxiosService("");
const testUrl = "https://jsonplaceholder.typicode.com/todos";

export const useBasicStore = defineStore("basic", {
  state: (): ICounter => ({
    count: 0,
  }),
  actions: {
    async updateCounter(): Promise<void> {
      this.count += 1;
      const data = await axios.get(testUrl);

      console.log(data);
    },
  },
  getters: {
    counter: (state): number => {
      return state.count;
    },
  },
});
