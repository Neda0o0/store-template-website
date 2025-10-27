import { Link } from "react-router";

const Register = () => {
  return (
    <div className="lg:container mx-auto">
      <div className="flex items-center w-full justify-center">
        <h3>Register</h3>
        <form action="#">
          <input type="text" placeholder="Your Name..." />
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
