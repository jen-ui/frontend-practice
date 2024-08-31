import { ButtonProps } from '../interface';


const Button = (
    { handleClick,children }
: ButtonProps) => {
  return (
    <button
      className="flex h-8 w-32 p-2 bg-sky-500 items-center rounded-md font-semibold tracking-tight justify-center text-white"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
export default Button