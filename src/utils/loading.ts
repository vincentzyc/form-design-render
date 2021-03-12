import { Toast } from 'vant';

export function openLoading(text: string): void {
  Toast.loading({
    message: text,
    duration: 0,
    forbidClick: true,
  });
}

export function closeLoading(): void {
  Toast.clear();
}