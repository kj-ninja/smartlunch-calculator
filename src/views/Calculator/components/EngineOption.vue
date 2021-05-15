<template>
  <SectionWrapper>
    <SectionBarTitle section="vehicle"/>

    <ToggleOptionsField :dataForCalculations="vehicleData"/>

    <transition name="fade-vehicle">
      <div v-if="isVehicle">
        <ToggleOptionsField :dataForCalculations="engineData"/>

        <InputsField sectionName="vehicle" :sectionData="vehicle"/>
      </div>
    </transition>

    <ErrorField :section-error="vehicleError"/>
  </SectionWrapper>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import InputsField from '@/views/Calculator/components/shared/InputsField.vue';
import ErrorField from '@/views/Calculator/components/shared/ErrorField.vue';
import SectionWrapper from '@/views/Calculator/components/shared/SectionWrapper.vue';
import { vehicleData, engineData, vehicle } from '../variables';
import SectionBarTitle from './shared/SectionBarTitle.vue';
import ToggleOptionsField from './shared/ToggleOptionsField.vue';

export default defineComponent({
  components: {
    SectionWrapper,
    SectionBarTitle,
    ToggleOptionsField,
    InputsField,
    ErrorField,
  },
  setup() {
    const store = useStore();
    const isVehicle = computed(() => store.state.vehicle.isVehicle);
    const vehicleError = computed(() => store.state.vehicle.vehicleError);

    return {
      vehicleData,
      engineData,
      isVehicle,
      store,
      vehicle,
      vehicleError,
    };
  },
});
</script>

<style>
.fade-vehicle-enter-from,
.fade-vehicle-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-vehicle-enter-active {
  transition: all 0.3s ease-out;
}

.fade-vehicle-leave-active {
  transition: all 0.3s ease-in;
}

.fade-vehicle-enter-to,
.fade-vehicle-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
