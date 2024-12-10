import { InputBox } from "@/components/InputBox";
import { Button } from "@/components/ui/button";
import { UserType } from "@/types/user";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { ArrowRightCircle, ArrowUpRight } from "lucide-react";
import { register } from "@/apiCalls/auth";

const Register = () => {
  const [user, setUser] = useState<UserType>({
    username: "",
    email: "",
    password: ""
  })


  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value
    })
  }

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    await register(user);
  }

  return (
    <div className="register">
      <div className="top">
        <div className="flex items-center justify-between p-4">

          <Link to={"/"}>
            <h1 className="text-4xl font-bold text-red-600">MoviX</h1>
          </Link>

          <Link to={"/login"}>
            <Button className="bg-red-600 hover:bg-red-500">
              Sign In
            </Button>
          </Link>

        </div>
      </div>


      <form onSubmit={handleRegister} className="w-fit px-10 py-10 mx-auto mt-10 flex flex-col items-center gap-6 bg-white text-black rounded-xl">
        <h1 className="text-3xl font-semibold">Register</h1>
        <InputBox
          title="Email"
          name="email"
          value={user.email}
          type="email"
          id="email"
          onChange={handleOnChange}
          placeholder="Email"
        />

        <InputBox
          title="User Name"
          name="username"
          value={user.username}
          type="text"
          id="username"
          onChange={handleOnChange}
          placeholder="username"
        />
        <InputBox
          title="Password"
          name="password"
          value={user.password}
          type="password"
          id="password"
          onChange={handleOnChange}
          placeholder="Password"
        />
        <Button type="submit" className="bg-red-600 hover:bg-red-500 w-96">
          Start <ArrowRightCircle />
        </Button>
        <span className="flex items-center gap-1">
          Have MoviX account?
          <Link className="text-red-500 flex items-center gap-0" to={"/login"}>
            <span className="underline">Sign In</span>
            <ArrowUpRight className="inline w-5 h-5" />
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
