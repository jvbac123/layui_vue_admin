<script setup>
import {reactive, ref} from "vue";
const formData = reactive({
  input: null,
  passwd: null,
  radio: null,
  switch:false,
  desc:null,
})
const form=ref();
const submit=function (){
  form.value.validate((isValidate, model, errors)=>{
    console.log(isValidate)
  })
}
</script>
<template>
  <div class="n-body">
    <lay-field title="表单验证">
      <lay-form :model="formData" ref="form" required  >
        <lay-form-item label="输入框" prop="input">
          <lay-input v-model="formData.input"/>
        </lay-form-item>
        <lay-form-item label="密码框" prop="passwd">
          <lay-input type="password" v-model="formData.passwd"/>
        </lay-form-item>
        <lay-form-item label="单择框" prop="radio" >
          <lay-radio v-model="formData.radio" label="无" value="0"/>
          <lay-radio v-model="formData.radio" label="是" value="1"/>
          <lay-radio v-model="formData.radio" label="否" value="2"/>
        </lay-form-item>
        <lay-form-item label="单择按钮" prop="radio">
          <lay-radio-button v-model="formData.radio" label="无" value="0"/>
          <lay-radio-button v-model="formData.radio" label="是" value="1"/>
          <lay-radio-button v-model="formData.radio" label="否" value="2"/>
        </lay-form-item>
        <lay-form-item label="开关" prop="switch">
          <lay-switch v-model="formData.switch"></lay-switch>
        </lay-form-item>
        <lay-form-item label="描述" prop="desc">
          <lay-textarea placeholder="请输入描述" v-model="formData.desc"></lay-textarea>
        </lay-form-item>
        <lay-form-item>
          <lay-button type="primary" @click="submit">提交</lay-button>
          <lay-button type="normal" native-type="reset">重置</lay-button>
        </lay-form-item>
      </lay-form>
      <div>
        formData: {{ formData }}
      </div>
    </lay-field>
  </div>

</template>
<style scoped>
.n-body {
  padding: 30px;
}
</style>