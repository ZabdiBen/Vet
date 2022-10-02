import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Alerta from '../components/Alerta';

const Registrar = () => {

  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ repeatpassword, setRepeatpassword ] = useState('');
  const [ alerta, setAlerta ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if([email,name,password, repeatpassword ].includes('')){
      setAlerta({msg:'there are fields empty, all fields are required', error: true})
      return;
    }
    if(password !== repeatpassword ){
      setAlerta({msg:'los password no son iguales', error: true})
    }
    setAlerta({})

    //Crear el usuario en la api == video 468
  }

  const {msg} = alerta;

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-4xl mt-5">
          Sign up and administrate your patients
        </h1>
      </div>

      <div className=" mt-12 md:mt-3 shadow-lg px-5 py-10 rounded-xl " >

        { msg && <Alerta alerta={alerta} /> }
        
        <form onSubmit={handleSubmit} className="lg:flex lg:flex-wrap lg:justify-between " >
          <div className="w-5/12" >
            <label htmlFor="email" className="uppercase text-gray-600 block font-bold" >Email</label>
            <input id="email" type="email" placeholder="Email" className="border w-full  p-3 mt-3 bg-gray-50 rounded-xl" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className=" w-5/12 " >
            <label htmlFor="Name" className="uppercase text-gray-600 block font-bold" >Name</label>
            <input id="Name" type="Name" placeholder="Name" className="border w-full  p-3 mt-3 bg-gray-50 rounded-xl" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="w-5/12 my-5" >
            <label htmlFor="password" className="uppercase text-gray-600 block font-bold" >password</label>
            <input id="password" type="password" placeholder="password" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="w-5/12 my-5" >
            <label htmlFor="repeat-password" className="uppercase text-gray-600 block font-bold" >Repeat password</label>
            <input id="repeat-password" type="password" placeholder="repeat-password" className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" value={repeatpassword} onChange={e => setRepeatpassword(e.target.value)} />
          </div>
          <input type="submit" value="Create session" className="bg-indigo-600 w-full py-3 rounded-xl text-white uppercase font-bold hover:cursor-pointer hover:bg-indigo-800 hover:transition " />
        </form>

        <nav className="lg:flex lg:justify-evenly mt-5" >
          <Link className="block text-center my-5 text-gray-600 " to="/">Do you have a account? Sign in!!!</Link>
          <Link className="block text-center my-5 text-gray-600 " to="/olvide-password">I Forget my password</Link>
        </nav>

      </div>
    </>
  );
};

export default Registrar;
