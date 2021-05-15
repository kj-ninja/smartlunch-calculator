<template>
  <div v-for="(sectionInputName, index) in sectionData"
       :key="index"
       class="flex justify-between items-center px-10 mb-14">

    <label :for="sectionInputName" class="flex flex-col w-5/12">
      <span class="text-base font-600 text-secondary md:text-16">
        {{ $t(`calculator.${sectionName}.${sectionInputName}`) }}
      </span>

      <span class="text-12 font-400 text-black">
        {{ $t(`calculator.${sectionName}.${sectionInputName}Desc`) }}
      </span>
    </label>

    <input class="text-14 w-136 border-solid border-2 border-gray-500 rounded-3xl py-5 px-12
                  placeholder-gray-400 focus:outline-none focus:border-primary md:w-150"
           @input="handleEventChange"
           :name="sectionInputName"
           :placeholder="$t(`calculator.${sectionName}.placeholder`)"
           :type="type === 'string' ? 'text' : 'number'"
           :id="sectionInputName"
           step="100">

  </div>
</template>

<script>
import { defineComponent, toRefs } from 'vue';
import useEventChange from '@/use/eventChange';

export default defineComponent({
  props: {
    sectionName: String,
    sectionData: Array,
    type: String,
  },
  setup(props) {
    const { sectionName } = toRefs(props);
    const { handleEventChange } = useEventChange(sectionName.value);

    return {
      handleEventChange,
    };
  },
});
</script>

<style lang="scss" scoped>
input::-webkit-input-placeholder {
  font-size: 12px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
  -moz-appearance: textfield; /* Firefox */
}
</style>
