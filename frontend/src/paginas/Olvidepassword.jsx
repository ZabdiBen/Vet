import { Link } from "react-router-dom";

const Olvidepassword = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-4xl mt-5">
          Regain your access and don't lose your patients
        </h1>
      </div>

      <div className=" mt-12 md:mt-3 shadow-lg px-5 py-10 rounded-xl " >
        <form action="" className="lg:flex lg:flex-wrap lg:justify-between " >
          <div className="w-full my-5" >
            <label htmlFor="email" className="uppercase text-gray-600 block font-bold" >Email</label>
            <input id="email" type="email" placeholder="Email" className="border w-full  p-3 mt-3 bg-gray-50 rounded-xl" />
          </div>
          <input type="submit" value="Send instruction" className="bg-indigo-600 w-full py-3 rounded-xl text-white uppercase font-bold hover:cursor-pointer hover:bg-indigo-800 hover:transition " />
        </form>
        <nav className="lg:flex lg:justify-evenly mt-5" >
          <Link className="block text-center my-5 text-gray-600 " to="/registrar">You don't have a account? Sign up!!!</Link>
          <Link className="block text-center my-5 text-gray-600 " to="/">Do you have a account? Sign in!!!</Link>
        </nav>
      </div>
    </>
  )
}

export default Olvidepassword