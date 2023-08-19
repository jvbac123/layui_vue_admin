<template>
  <lay-layer v-model="visible"
             :shade="true" :anim="2" :area="['500px', '400px']" :btn="btn"
  >
    <div style="padding: 24px;">
      <lay-form v-model="model1" required>
        <lay-form-item label="邮箱" prop="email">
          <lay-input/>
        </lay-form-item>
        <lay-form-item label="昵称" prop="nickname">
          <lay-input/>
        </lay-form-item>
        <lay-form-item label="密码" prop="Pwd">
          <lay-input type="password"/>
        </lay-form-item>
        <lay-form-item label="确认密码" prop="confirmPwd">
          <lay-input type="password"/>
        </lay-form-item>
      </lay-form>
    </div>
  </lay-layer>
</template>

<script setup>
import {
  LayButton, LayIcon,
  LayForm, LayInput, LayFormItem, layer
} from '@layui/layui-vue'
import {computed, ref} from "vue";

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const visible=computed({
  get:()=> props.modelValue,
  set: value => emit('update:modelValue', value)
})


const btn = ref([
  {text: "提交", callback: () => visible.value = false},
  {text: "取消", callback: () => visible.value = false},
])
const model1 = ref({
  email: 'admin',
})

</script>
<style scoped>

</style>