const Register = () => {
  return (
    <div className="lg:container mx-auto">
      <div>
        <h3>Register</h3>
        <form action="#">
          <input type="text" placeholder="Your Name..." />
          <input type="email" placeholder="Your Email..." />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
export default Register;
