import { toast } from 'sonner';
import axiosInstance from '../axiosInstance';
import { UserType } from '../types/user';

export const login = async (user: UserType) => {
    try {
        const res = await axiosInstance.post("/auth/login", user);
        localStorage.setItem("user", JSON.stringify(res.data));
        console.log(res.data)
        toast.success("Login Success!");
    }
    catch (error) {
        toast.error("Error in Login")
        console.log(error);
    }
}

export const register = async (user: UserType) => {
    try {
        await axiosInstance.post("/auth/register", user);
        toast.success("Registration Done!");
    } catch (error) {
        toast.error("Error in Register");
        console.log("Error in register, ", error);
    }
}

export const logout = async () => {
    try {
        localStorage.removeItem("user");
    }
    catch (error) {
        console.log("Error Loggin out, ", error);
    }
}