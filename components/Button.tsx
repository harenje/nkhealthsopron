import { isPropertySignature } from "typescript";

type AppProps = {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export default function Button({ onClick, children }: AppProps) {
  return (
    <button
      className="rounded-sm bg-nk-red p-2.5 text-xs uppercase text-nk-white transition-all delay-100 duration-300 hover:scale-110 hover:shadow-md hover:shadow-nk-red sm:text-sm lg:text-lg min-[1920px]:text-xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
