const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-stone-300">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Ensar Okumus. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Vite, TypeScript, Tailwind CSS, Framer Motion, FormSubmit,
        Vercel hosting.
      </p>
    </footer>
  );
};
export default Footer;
