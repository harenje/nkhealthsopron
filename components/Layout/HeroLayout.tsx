type AppProps = {
  children?: React.ReactNode;
};

export default function HeroLayout({ children }: AppProps) {
  return (
    <div className="p-5 h-screen bg-hero-pattern_768 bg-cover bg-center bg-scroll lg:bg-hero-pattern_2048">
      {children}
    </div>
  );
}
