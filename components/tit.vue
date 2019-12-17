<template>
    <div>
      <div class="tit">
        <slot name="h3"></slot>
        <slot name="p"></slot>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style rel="stylesheet/less" lang="less" scoped>
  .tit{position: relative;
  h3{color:#4c9bd6;font-size: 24px;position: absolute;    left: 53px;  top: 25px;}
  p{font-size: 22px;color:#707070;font-family:Simsun!important;letter-spacing: 3px;height: 108px;}
  p:first-letter{font-size: 4em;letter-spacing: 10px}
  }
</style>
