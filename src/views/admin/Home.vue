<script>
export default {
  name: "Home",

};
</script>
<script setup>
import CHeader from "./components/CHeader.vue";
import CSide from "./components/CSide.vue";
import {ref} from "vue";

const ref_cSide = ref(null)
const mt = (refs) => {
  ref_cSide.value.test()
}
</script>
<template>
  <div class="home">
    <lay-layout class="main">
      <c-side v-if="true" ref="ref_cSide"/>
      <div class="right-content">
        <c-header/>
        <div class="c-body">
          <div class="c-content">
            <div class="view">
              <RouterView/>
            </div>
          </div>
        </div>
      </div>
    </lay-layout>
  </div>
</template>
<style>

.main .c-body {
  background-color: #f2f2f2;
  padding: 15px;
  overflow: auto;
}
.main .c-content {
  background-color: #fff;

}


.main .layui-side {
//flex: initial !important; //width: initial !important;
}

</style>

