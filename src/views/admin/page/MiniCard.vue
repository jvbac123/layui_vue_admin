<template>
  <lay-card class="mini-card" :title="data.name">
    <template #body>
      {{ data.count }}
    </template>
    <template #extra>
      <span class="extra">实时</span>
    </template>
    <template #footer>
      当前分类总记录数
    </template>
  </lay-card>
</template>
<script setup>
import {computed} from "vue";

const props = defineProps({data:Object});

const color= computed({
  get() {
    switch (props.data.color) {
      case 0:return "#20c2ff";
      case 1:return "#314157";
      case 2:return "#ffb98d";
      case 3:return "#029789";
      default:return "#029789";
    }

  }
})

</script>
<style>
.mini-card > * {
  background-color: #f2f2f2;
}

.mini-card .extra {
  padding: 3px;
  color: white;
}

.mini-card .extra {
  background-color: v-bind(color);
}
</style>