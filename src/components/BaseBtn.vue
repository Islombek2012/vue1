<template>
      <div>
            <button>👆
                  <slot></slot>
            </button>
      </div>
</template>

<script>
      export default {
            
      }
</script>

<style  scoped>
      button{
            color: black;
            background-color: transparent;
            border: 2px solid black;
            font-size: 20px;
            font-weight: 600;
            padding: 10px 15px;
            cursor: pointer;
      }
</style>