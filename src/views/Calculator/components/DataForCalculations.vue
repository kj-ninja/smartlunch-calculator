<template>
  <SectionWrapper>
    <SectionBarTitle section="dataForCalculations"/>

    <ToggleOptionsField :dataForCalculations="dataForCalculations"/>

    <ErrorField :section-error="dataForCalculationsError"/>
  </SectionWrapper>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import useEventChange from '@/use/eventChange';
import SectionBarTitle from '@/views/Calculator/components/shared/SectionBarTitle.vue';
import ToggleOptionsField from '@/views/Calculator/components/shared/ToggleOptionsField.vue';
import ErrorField from '@/views/Calculator/components/shared/ErrorField.vue';
import SectionWrapper from '@/views/Calculator/components/shared/SectionWrapper.vue';
import { dataForCalculations } from '../variables';

export default defineComponent({
  components: {
    SectionWrapper,
    SectionBarTitle,
    ToggleOptionsField,
    ErrorField,
  },
  setup() {
    const store = useStore();
    const { handleEventChange } = useEventChange('dataForCalculations');
    // eslint-disable-next-line max-len
    const dataForCalculationsError = computed(() => store.state.dataForCalculations.dataForCalculationsError);

    return {
      dataForCalculations,
      handleEventChange,
      dataForCalculationsError,
    };
  },
});
</script>
