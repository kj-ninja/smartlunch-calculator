<template>
  <SectionWrapper>
    <SectionBarTitle section="salary"/>

    <InputsField sectionName="salary" :sectionData="salary"/>

    <ErrorField :sectionError="salaryError"/>
  </SectionWrapper>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import useEventChange from '@/use/eventChange';
import SectionBarTitle from '@/views/Calculator/components/shared/SectionBarTitle.vue';
import InputsField from '@/views/Calculator/components/shared/InputsField.vue';
import ErrorField from '@/views/Calculator/components/shared/ErrorField.vue';
import SectionWrapper from '@/views/Calculator/components/shared/SectionWrapper.vue';
import { salary } from '../variables';

export default defineComponent({
  components: {
    SectionWrapper,
    SectionBarTitle,
    InputsField,
    ErrorField,
  },
  setup() {
    const store = useStore();
    const { handleEventChange } = useEventChange('salary');
    const salaryError = computed(() => store.state.salary.salaryError);

    return {
      salary,
      handleEventChange,
      salaryError,
    };
  },
});
</script>
