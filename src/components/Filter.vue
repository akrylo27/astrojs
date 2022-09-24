<template>
  <div class="filter">
    <select @change="chn" class="select">
      <option :value="list" v-for="(list, index) in lists" :key="index">
        {{ list }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data: () => ({
    lists: [4,8,20,1000]
  }),
  methods: {
    chn(e) {
      this.$emit('limit', e.target.value)
    }
  }
}
</script>

<style scoped>
  .select {
    width: 100px;
    display: block;
    appearance: none;
    border: 1px solid rgba(0,0,0,.1);
    box-sizing: border-box;
    padding: 5px 10px;
    background: none;
    margin: 20px 0 0;
    outline: none;
  }
</style>
