import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSignUp: false,
  isLoginIn: false,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/api/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth: ", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSignUp: true });
    try {
      const res = await axiosInstance.post("/api/auth/signup", data);
      set({ authUser: res.data });

      toast.success("Signup successful");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in signup: ", error);
    } finally {
      set({ isSignUp: false });
    }
  },

  login: async (data) => {
    set({ isLoginIn: true });
    try {
      console.log("data: ", data);
      const res = await axiosInstance.post("/api/auth/login", data);
      set({ authUser: res.data });

      toast.success("Login successful");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in login: ", error);
    } finally {
      set({ isLoginIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/api/auth/logout");
      set({ authUser: null });

      toast.success("Logout successful");
    } catch (error) {
      toast.error("Error logging out");
      console.log("Error in logout: ", error);
    }
  },
}));
