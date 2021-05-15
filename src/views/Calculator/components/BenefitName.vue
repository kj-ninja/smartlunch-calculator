<template>
  <SectionWrapper>
    <SectionBarTitle section="benefitName"/>

    <InputsField sectionName="benefitName" :sectionData="benefitName" type="string"/>

    <ErrorField :sectionError="benefitNameError"/>
  </SectionWrapper>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { benefitName } from '@/views/Calculator/variables';
import { useStore } from 'vuex';
import SectionWrapper from '@/views/Calculator/components/shared/SectionWrapper.vue';
import SectionBarTitle from './shared/SectionBarTitle.vue';
import InputsField from './shared/InputsField.vue';
import ErrorField from './shared/ErrorField.vue';

export default defineComponent({
  components: {
    SectionWrapper,
    SectionBarTitle,
    InputsField,
    ErrorField,
  },
  setup() {
    const store = useStore();
    const benefitNameError = computed(() => store.state.benefitName.benefitNameError);

    return {
      benefitName,
      benefitNameError,
    };
  },
});
</script>
