<template>
  <table class="prop">
    <tr>
      <td class="name">
        {{ name }}
      </td>
      <td>
        <p>
          <small>Type</small><br>
          {{ type }}
        </p>
        <p v-if="defaultValue">
          <small>Default</small><br>
          {{ defaultValue }}
        </p>
        <div v-if="slotContent" class="description">
          <small>
            Description
          </small><br>
          <slot></slot>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    defaultValue: {
      type: String,
      default: ''
    }
  },
  computed: {
    slotContent() {
      return !!this.$slots.default;
    }
  }
}
</script>

<style lang="stylus" scoped>
.prop
  width 100%
  border-bottom 1px solid #eaecef
.name
  width 200px
  vertical-align top
  padding 1rem 0
  font-weight: bold
.description
  margin: 1rem 0
</style>
