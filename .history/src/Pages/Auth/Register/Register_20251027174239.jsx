import { Link } from "react-router";

const Register = () => {
  return (
    <div className="lg:container mx-auto">
      <div className="flex items-center mx-auto max-w-[648px] w-full min-h-[382px] p-[31px] justify-center flex-col rounded-lg border-[#9a9caa] border-[1px]">
        <h3>Register</h3>
        <form action="#" className=" ">
          <input type="text" placeholder="Your Name..." className="" />
          <input type="email" placeholder="Your Email..." />
          <button type="submit">Register</button>
        </form>
        <p>
          Don't have account <Link to={"/auth/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
