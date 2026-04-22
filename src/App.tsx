import { motion } from "motion/react";

export default function App() {
  return (
    <div className="h-dvh bg-[#F4F4F4] text-zad-dark font-sans selection:bg-zad-blue selection:text-white antialiased flex flex-col overflow-hidden">

      {/* Hero: gradient card, fills remaining viewport height */}
      <section className="px-4 sm:px-6 md:px-12 pt-4 sm:pt-6 md:pt-10 flex-1 min-h-0 w-full max-w-[1600px] mx-auto flex">
        <div className="relative flex-1 rounded-[1.75rem] sm:rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col justify-center items-center p-5 sm:p-6 md:p-12 zad-radial-glow shadow-sm">

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full text-center flex flex-col items-center justify-center relative z-10"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide text-zad-dark mb-6 sm:mb-10 md:mb-14 whitespace-nowrap">
              COMING SOON
            </h1>
            <motion.img
              src="/brand/Logo%20Zad.png"
              alt="ZAD"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="h-10 sm:h-[4.5rem] md:h-[6rem] lg:h-[7rem] w-auto select-none"
              draggable={false}
            />
          </motion.div>
        </div>
      </section>

      {/* Footer: slogan image + social icons on a shared baseline */}
      <footer className="px-4 sm:px-6 md:px-12 pb-4 sm:pb-6 pt-4 sm:pt-6 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center items-center gap-3 sm:gap-4 border-t border-gray-200 pt-4 sm:pt-5">

          <img
            src="/brand/Asset%209%4010x.png"
            alt="Do It Right. Once."
            className="h-[1.1rem] sm:h-5 md:h-6 w-auto select-none"
            draggable={false}
          />

          <nav
            aria-label="Social links"
            className="flex items-center gap-3 sm:gap-4"
          >
            <a
              href="https://www.facebook.com/profile.php?id=100054634920851"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="block transition-opacity hover:opacity-70"
            >
              <img
                src="/brand/FB.png"
                alt=""
                className="h-6 md:h-7 w-auto select-none"
                draggable={false}
              />
            </a>
            <a
              href="https://www.instagram.com/zadagency.co"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="block transition-opacity hover:opacity-70"
            >
              <img
                src="/brand/IG.png"
                alt=""
                className="h-6 md:h-7 w-auto select-none"
                draggable={false}
              />
            </a>
            <a
              href="https://www.behance.net/ZADdesigner"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="block transition-opacity hover:opacity-70"
            >
              <img
                src="/brand/BE.png"
                alt=""
                className="h-6 md:h-7 w-auto select-none"
                draggable={false}
              />
            </a>
          </nav>

        </div>
      </footer>

    </div>
  );
}
