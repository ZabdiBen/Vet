import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-4xl mt-5">
          Start session and administrate your patients
        </h1>

      </div>
      <div className=" mt-12 md:mt-3 shadow-lg px-5 py-10 rounded-xl " >
        <form action="" className="" >
          <div className=" w-full" >
            <label htmlFor="email" className="uppercase text-gray-600 block font-bold" >Email</label>
            <input id="email" type="email" placeholder="Email" className="border w-full  p-3 mt-3 bg-gray-50 rounded-xl" />
          </div>
          <div className="w-full mb-5" >
            <label htmlFor="password" className="uppercase text-gray-600 block font-bold" >password</label>
            <input id="password" type="password" placeholder="password" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" />
          </div>
          <input type="submit" value="Start session" className="bg-indigo-600 w-full py-3 rounded-xl text-white uppercase font-bold hover:cursor-pointer hover:bg-indigo-800 hover:transition " />
        </form>

        <nav className="lg:flex lg:justify-evenly mt-5" >
          <Link className="block text-center my-5 text-gray-600 "  to="/registrar">You don't have a account? Sign up!!!</Link>
          <Link className="block text-center my-5 text-gray-600 " to="/olvide-password">I Forget my password</Link>
        </nav>

      </div>
    </>
  ); 
};

export default Login;
