import { login } from "@/apiCalls/auth";
import { InputBox } from "@/components/InputBox";
import { Button } from "@/components/ui/button";
import { UserType } from "@/types/user";
import { ArrowUpRight } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  
  const [user, setUser] = useState<UserType>({
    email: "",
    password: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value
    })
  }

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    await login(user);
    setTimeout(() => {window.location.reload()}, 1000)
  }

  return (
    <div className="login">
      <div className="top">
        <div className="flex items-center justify-between p-4">

          <Link to={"/"}>
            <h1 className="text-4xl font-bold text-red-600">MoviX</h1>
          </Link>

          <Link to={"/register"}>
            <Button className="bg-red-600 hover:bg-red-500">
              Sign Up
            </Button>
          </Link>

        </div>
      </div>

      <form className="bg-white p-10 w-fit mx-auto mt-10 flex flex-col items-center gap-6 rounded-xl" onSubmit={handleLogin}>
        <h1 className="text-3xl font-semibold">Sign In</h1>
        <InputBox
          title="Email"
          name="email"
          id="email"
          placeholder="Email"
          type="email"
          value={user.email}
          onChange={handleChange}
        />
        <InputBox
          title="Password"
          name="password"
          id="password"
          placeholder="Password"
          type="password"
          value={user.password}
          onChange={handleChange}
        />
        <Button type="submit" className="w-96 bg-red-600 hover:bg-red-500">Sign In</Button>

        <span className="flex items-center gap-1">
          New to MoviX?
          <Link className="text-red-500 flex items-center gap-0" to={"/register"}>
            <span className="underline">Sign Up</span>
            <ArrowUpRight className="inline w-5 h-5" />
          </Link>
        </span>

        <div className="text-sm flex flex-col gap-1 w-full">
          <p className="text-base font-medium">Use thes credentials to Login</p>
          <span>Email : user@mail.com</span>
          <span>Password : 1234</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
