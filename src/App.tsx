import { motion } from "motion/react";

function Slogan({ className = "" }: { className?: string }) {
  return (
    <div
      aria-label="Do It Right. Once."
      className={`font-semibold tracking-tight text-zad-dark inline-flex items-center justify-center whitespace-nowrap ${className}`}
    >
      <span>D</span>
      <span
        aria-hidden="true"
        className="inline-block rounded-full bg-zad-blue w-[0.32em] h-[0.32em] mx-[0.08em]"
      />
      <span>&nbsp;It Right.&nbsp;</span>
      <span
        aria-hidden="true"
        className="inline-block rounded-full bg-zad-blue w-[0.72em] h-[0.72em] mx-[0.06em]"
      />
      <span>nce.</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] text-zad-dark font-sans selection:bg-zad-blue selection:text-white overflow-x-hidden antialiased flex flex-col justify-between">

      {/* 1. Hero: Nền gradient sáng->xanh */}
      <section className="px-6 md:px-12 relative z-10 w-full max-w-[1600px] mx-auto pt-6 md:pt-12">
        <div className="relative w-full rounded-[2.5rem] md:rounded-[3rem] overflow-hidden min-h-[80vh] flex flex-col justify-center items-center p-8 md:p-12 zad-radial-glow shadow-sm">

           <motion.div
             initial={{ opacity: 0, scale: 0.95, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="w-full text-center flex flex-col items-center justify-center relative z-10 gap-8 md:gap-12"
           >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zad-dark">
                 Coming Soon<motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-zad-blue">.</motion.span>
              </h1>

              {/* ZAD primary logo */}
              <motion.img
                src="/brand/Logo%20Zad.png"
                alt="ZAD"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="w-[72%] max-w-[720px] h-auto select-none"
                draggable={false}
              />

              {/* Slogan styled per brand: "D● It Right. ●nce." */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                <Slogan className="text-[1.5rem] sm:text-[2rem] md:text-[2.75rem] lg:text-[3.5rem]" />
              </motion.div>
           </motion.div>
        </div>
      </section>

      {/* 4. Minimal Bottom Bar Footer */}
      <footer className="px-6 md:px-12 pb-8 pt-12 max-w-[1600px] mx-auto w-full mt-auto">
         <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-200 pt-6">

            {/* Left: Branding & Slogan */}
            <div className="flex items-center gap-3 text-sm md:text-base font-semibold tracking-wide text-gray-500">
               <img
                 src="/brand/LOGO%20ZAD-39.png"
                 alt="ZAD.Inc"
                 className="h-6 md:h-7 w-auto select-none"
                 draggable={false}
               />
               <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
               <span>Do it right. Once.</span>
            </div>

            {/* Right: Socials & Top Action */}
            <div className="flex items-center gap-6 md:gap-10">
               <div className="flex gap-5 text-sm text-zad-dark font-bold tracking-widest">
                  <a href="#" className="hover:text-zad-blue transition-colors">FB</a>
                  <a href="#" className="hover:text-zad-blue transition-colors">IG</a>
                  <a href="#" className="hover:text-zad-blue transition-colors">BE</a>
                  <a href="#" className="hover:text-zad-blue transition-colors">LI</a>
               </div>
            </div>

         </div>
      </footer>

    </div>
  );
}
