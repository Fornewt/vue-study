<template>
  <div>
    <select v-model="selectedValue">
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
    </select>
    <button @click="fetchList">Fetch List</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectedValue: '',
      options: [],
      apiUrl: 'http://localhost:8000/wmsSupplier/getSupplierName'
    };
  },
  methods: {
    async fetchList() {
      try {
        const response = await axios.get(this.apiUrl);
        const data = response.data; // 假设后端返回的是一个 List<String>
        
        // 将 List<String> 转换为适合 options 的格式
        this.options = data.map(item => ({// item 是 map() 方法遍历到的当前元素，即 List<String> 中的每个字符串
          value: item,
          text: item
        }));
      } catch (error) {
        console.error('Error fetching the list:', error);
      }
    }
  }
};
</script>
