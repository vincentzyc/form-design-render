import './style.styl'
import { defineComponent, ref } from "vue";
import { Toast } from 'vant';
import { closeLoading, openLoading } from '@/utils/loading';
import { ApiModule1 } from '@/api';
// 使用例子 <ValidateCodeBtn :phone="phone"/>
export default defineComponent({
  name: "ValidateCodeBtn",
  props: {
    phone: {
      type: String,
      required: true
    },
  },
  setup(props) {
    let codetxt = ref("获取验证码")
    let time = ref()
    let disbtn = ref(false)

    /**
     * 倒计时
     * @param {Number} time  倒计时秒数
     * @param {Function} tickFunc  每秒回调
     * @param {Function} done     结束后回调
     */
    const countDown = (time: number, tickFunc: Function, done: Function) => {
      let tick = () => {
        setTimeout(() => {
          if (time > 0) {
            time--;
            tickFunc(time);
            tick();
          } else {
            done();
            return;
          }
        }, 1000);
      };
      tick();
    }
    const sendcCode = () => {
      disbtn.value = true;
      codetxt.value = "重新发送";
      time.value = 60;
      countDown(
        time.value,
        (tick: number) => {
          time.value = tick;
        },
        () => {
          time.value = "";
          disbtn.value = false;
        }
      );
      Toast('验证码已发送')
    }
    const getCode = async () => {
      if (disbtn.value) return;
      if (!(/^1[3-9]\d{9}$/.test(props.phone))) {
        Toast('请输入正确的手机号');
        return;
      }
      openLoading('正在发送...');
      await ApiModule1.getVerifyCode(props.phone)
      closeLoading();
      sendcCode();
    }
    return () => (
      <button class="validate-code-btn" disabled={disbtn.value} onClick={getCode}>{codetxt.value} {time.value}</button>
    )
  }
})
