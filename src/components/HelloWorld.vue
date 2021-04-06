<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <van-button @click="test" type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Button } from 'vant';

export default defineComponent({
  name: 'HelloWorld',
  components: {
    'van-button': Button
  },
  props: {
    msg: String,
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const test = () => {
      console.log(12313);
      emit('update:modelValue', '666')
    }
    return {
      test
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
