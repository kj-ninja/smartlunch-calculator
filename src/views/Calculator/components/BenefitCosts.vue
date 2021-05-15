<template>
  <SectionWrapper>
    <SectionBarTitle section="benefitCosts"/>

    <InputsField sectionName="benefitCosts" :sectionData="benefitCosts"/>

    <OverallBenefitCosts/>

    <ErrorField :sectionError="costsError"/>
  </SectionWrapper>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import SectionBarTitle from '@/views/Calculator/components/shared/SectionBarTitle.vue';
import InputsField from '@/views/Calculator/components/shared/InputsField.vue';
import ErrorField from '@/views/Calculator/components/shared/ErrorField.vue';
import OverallBenefitCosts from '@/views/Calculator/components/OverallBenefitCosts.vue';
import SectionWrapper from '@/views/Calculator/components/shared/SectionWrapper.vue';
import { benefitCosts } from '../variables';

export default defineComponent({
  components: {
    SectionWrapper,
    ErrorField,
    SectionBarTitle,
    InputsField,
    OverallBenefitCosts,
  },
  setup() {
    const store = useStore();
    const costsError = computed(() => store.state.benefitCosts.costsError);

    return {
      benefitCosts,
      costsError,
    };
  },
});
</script>
