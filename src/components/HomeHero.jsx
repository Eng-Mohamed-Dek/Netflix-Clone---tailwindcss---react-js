import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center"
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0/85%),rgb(0 0 0/60%)), url(./images/misc/home.jpeg)`,
      }}
    >
      <header className="z-10 flex w-full justify-between">
        <div className="my-6 mx-4">{/* logo not needed  its fake*/}</div>
        <div className="my-6 mx-4 rounded bg-[#e50a14] py-4 font-bold px-8 text-1xl cursor-pointer">
				  <Link to="/login" className="rounded bg-[#e50a14] py-4 font-bold px-8 text-1xl cursor-pointer">
            Sign
          </Link>
        </div>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center text-center sm:px-20">
        <h1 className="max-w-lg text-5xl font-bold tracking-wide text-white">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="mt-10 mb-8 text-2xl text-white">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="text-lg text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="m-20 flex flex-col space-y-6 sm:flex-row sm:space-y-0">
          <input
            placeholder="Email address"
            className="w-full min-w-[400px] bg-white px-5 py-5 text-black outline-none sm:p-6 text-[14px]"
          />
          <button className="flex w-full items-center justify-center bg-[#e50914] py-5 text-xl sm:py-0 sm:px-8">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        {/* <Subscribe /> */}
      </main>
    </div>
  );
};

export default HomeHero;
