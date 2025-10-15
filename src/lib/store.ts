import { create } from "zustand";
interface ChatStore {
    chatOpen: boolean;
    setChatOpen: (value: boolean) => void;
}
export const useStore = create<ChatStore>(set => ({
    chatOpen: false,
    setChatOpen: (open: boolean) => set({ chatOpen: open })
}));
export const brand = "BLÜM"
