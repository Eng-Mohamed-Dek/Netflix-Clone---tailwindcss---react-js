import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center"
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0/60%),rgb(0 0 0/60%)), url(./images/misc/home.jpeg)`,
      }}
    >
      <div className="relative flex h-screen md:w-screen w-[400px] mx-auto flex-col md:items-center md:justify-center mt-20 md:mt-0">
      <Link to="/">
        <img
          src="./images/logo/mainlogo.svg"
          alt=""
          className="absolute top-0 left-2 w-[150px] object-contain cursor-pointer ml-20"
        />
      </Link>
        <form className="relative mt-24 space-y-8 rounded bg-black/70 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
          <h1 className="text-white text-4xl font-semibold my-6">Login</h1>
          <label className="inline-block w-full">
            <input type="email" placeholder="email" className="form-control" />
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="password"
              className="form-control"
            />
          </label>
          <button className="btn">Sign in</button>
          <div className="flex flex-row space-x-2 my-4">
            <p className="text-[#8d8d8d] text-lg">New to netflix ?</p>{" "}
            <Link className="hover:underline" to="/Login">
              Sign up now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
