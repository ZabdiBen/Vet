const Alerta = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error
          ? "from-red-400 to-red-600 "
          : "from-indigo-400 to-indigo-600"
      } bg-gradient-to-r p-2 rounded text-center text-white uppercase font-bold mb-10 `}
    >
      {alerta.msg}
    </div>
  );
};

export default Alerta;
