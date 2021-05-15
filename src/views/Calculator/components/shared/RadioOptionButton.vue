<template>
  <div @click="handleRadioOption(name, value)"
       :class="{'border-2 border-radioBorder': isActive(name, value)}"
       class="bg-gray-100 rounded-full h-48 w-48 flex items-center justify-center relative
             md:h-56 md:w-56 cursor-pointer">

    <div v-if="isActive(name, value)"
         class="bg-secondary rounded-full h-40 w-40 md:h-48 md:w-48
               flex items-center justify-center"/>

    <span v-if="name !== 'engine'" class="absolute font-900 text-12"
          :class="{'text-white': isActive(name, value)}">
          {{ content }}
    </span>

    <SvgSmallCar v-if="value === 'small'" :color="[isActive(name, value) ? 'white' : 'black']"/>
    <SvgBigCar v-if="value === 'big'" :color="[isActive(name, value) ? 'white' : 'black']"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import SvgSmallCar from '@/views/Calculator/components/shared/SvgSmallCar.vue';
import SvgBigCar from '@/views/Calculator/components/shared/SvgBigCar.vue';

export default defineComponent({
  components: { SvgSmallCar, SvgBigCar },
  props: ['name', 'value', 'content'],
  setup() {
    const store = useStore();

    const isActive = (name, value) => {
      if (name === 'isVehicle' || name === 'engine') {
        if (store.state.vehicle[name] === null) {
          return false;
        }

        return store.state.vehicle[name] === value;
      }

      if (store.state.dataForCalculations[name] === null) {
        return false;
      }

      return store.state.dataForCalculations[name] === value;
    };

    const handleRadioOption = (name, value) => {
      store.commit('onToggleOptionData', {
        name,
        value,
      });
    };

    return {
      isActive,
      handleRadioOption,
    };
  },
});
</script>
