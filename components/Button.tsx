import { isPropertySignature } from "typescript";

type AppProps = {
  children?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ onClick, children }: AppProps) {
  return (
    <button className="rounded-sm bg-nk-red text-nk-white p-2.5 uppercase transition-all hover:scale-110 hover:shadow-md hover:shadow-nk-red duration-300 delay-100" onClick={onClick}>
      {children}
    </button>
  );
}