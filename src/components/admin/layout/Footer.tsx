export const Footer = () => {
  return (
    <p className="pl-[330px] flex items-center justify-center text-gray-700">
      &copy; {new Date().getFullYear()} <a href="https://www.datec.pe/" target="_blank" className="font-medium uppercase mx-1">Datec.</a> Todos los derechos
      reservados.
    </p>
  );
};
