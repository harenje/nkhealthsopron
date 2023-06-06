type AppProps = {
  children?: React.ReactNode;
};

export default function Backdrop({ children }: AppProps) {
  return (
    <div className="fixed top-0 left-0 z-10 h-screen w-screen bg-nk-black opacity-75">
      {children}
    </div>
  );
}
