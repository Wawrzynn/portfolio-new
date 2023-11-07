function Button({ text }) {
  return (
    <span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-primary-dark dark:bg-primary-light dark:text-primary-dark focus:ring-1 rounded-lg mt-6 duration-500 hover:bg-primary-hover hover:text-primary-light dark:hover:bg-primary-hover dark:hover:text-primary-light">
      <button>{text}</button>
    </span>
  );
}

export default Button;
