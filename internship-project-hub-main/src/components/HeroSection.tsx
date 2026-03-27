import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const scrollTo = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[420px] items-center justify-center overflow-hidden"
    >
      <img
        src={heroBanner}
        alt="Hero banner"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 px-6 text-center">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl">
          Discover Your Style
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-primary-foreground/80">
          Premium electronics, clothing &amp; accessories — all in one place.
        </p>
        <button
          onClick={scrollTo}
          className="mt-6 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 active:scale-95"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
