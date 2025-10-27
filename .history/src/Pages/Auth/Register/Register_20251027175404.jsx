import { MoveRight } from "lucide-react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="lg:container mx-auto p-[80px]">
      <div className="flex items-center mx-auto max-w-[648px] w-full min-h-[382px] p-[31px] justify-center flex-col rounded-lg border-[#9a9caa] border-[1px]">
        <h3 className="text-3xl text-[#272343] font-semibold font-inter mb-5 capitalize">
          Register
        </h3>
        <form
          action="#"
          className="space-y-4 flex flex-col items-center w-full "
        >
          <input
            type="text"
            placeholder="Your Name..."
            className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5"
          />
          <input
            type="email"
            placeholder="Your Email..."
            className="w-full h-[50px] bg-[#f0f2f3] rounded-lg pl-3.5"
          />
          <button
            className="w-full cursor-pointer justify-center h-[50px] bg-[#007580] rounded-lg pl-3.5 text-base text-white font-semibold font-inter capitalize flex items-center gap-2.5"
            type="submit"
          >
            Register <MoveRight />
          </button>
        </form>
        <p className="text-base font-normal font-inter text-[#272343] flex items-center justify-center gap-5 ">
          Don't have account{" "}
          <Link to={"/auth/login"} className="text-[#007580]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
