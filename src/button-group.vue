<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {
    for(let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if(name!='button') {
        console.warn(`g-button-group的子元素应该全是g-button,但你写的是${name}`);
      }
    }
  }
}
</script>
<style scoped lang="scss">
.g-button-group {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > .g-button {
    margin:  0;
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: var(--button-radius);
      border-bottom-left-radius: var(--button-radius);
    }
    &:last-child {
      border-top-right-radius: var(--button-radius);
      border-bottom-right-radius: var(--button-radius);
    }
    &:hover {
      position: relative;
      zoom: 1;
    }
  }
}
</style>