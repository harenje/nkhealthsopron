type AppProps = {
  children?: React.ReactNode;
};

export default function Button({ children }: AppProps) {
  return (
    <button className="rounded-sm bg-nk-red text-nk-white p-2.5 uppercase">
      {children}
    </button>
  );
}
