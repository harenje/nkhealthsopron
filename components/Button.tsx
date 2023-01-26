type AppProps = {
  children?: React.ReactNode;
};

export default function Button({ children }: AppProps) {
  return (
    <button className="rounded-sm bg-nk-red text-nk-white p-2.5 uppercase transition-all hover:scale-110 hover:shadow-md hover:shadow-nk-red duration-300 delay-100">
      {children}
    </button>
  );
}
