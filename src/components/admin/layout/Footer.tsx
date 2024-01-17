export const Footer = () => {
  return (
    <p className="lg:pl-96 flex items-center justify-center text-gray-700 dark:bg-secondary-100 dark:text-primary-200">
      &copy; {new Date().getFullYear()} <a href="https://www.datec.pe/" target="_blank" className="font-medium uppercase mx-1">Datec.</a> Todos los derechos
      reservados.
    </p>
  );
};
