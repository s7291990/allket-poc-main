import { create } from "zustand";

interface notificationTokenState {
    notificationToken: string;
    setNotificationToken: (notificationToken: string) => void
}

const useNotificationToken = create<notificationTokenState>(set => ({
  notificationToken: '',
  setNotificationToken: (notificationToken: string) => set({ notificationToken: notificationToken })
}))

export default useNotificationToken