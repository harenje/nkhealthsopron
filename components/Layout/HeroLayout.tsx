type AppProps = {
  children?: React.ReactNode;
};

export default function HeroLayout({ children }: AppProps) {
  return (
    <div className="h-screen bg-hero-pattern_768 bg-cover bg-center p-5 md:bg-fixed lg:bg-hero-pattern_2048">
      {children}
    </div>
  );
}
