import { Toast } from 'vant';

export function openLoading(text: string): void {
  Toast.loading({
    message: text,
    duration: 0,       // 持续展示 toast
    forbidClick: true, // 禁用背景点击
    overlay: true,     //显示背景遮罩层
  });
}

export function closeLoading(): void {
  Toast.clear();
}