<template>
  <div class="filter">
    <pre>
      {{ filter }}
    </pre>
    <select @change="addName">
      <option value="Alex">Alex</option>
      <option value="A;ma">Alma</option>
    </select>
    <select @change="addAge">
      <option value="10">10</option>
      <option value="12">12</option>
    </select>
  </div>
</template>

<script>
export default {
  data: () => ({
    filter: {
      name: null,
      age: null
    }
  }),
  methods: {
    addName(e) {
      this.filter.name = e.target.value
    },
    addAge(e) {
      this.filter.age = e.target.value
    }
  }
}
</script>
