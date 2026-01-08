import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and wait for fonts/assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Animated spotlight effect */}
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Comedy masks animation */}
            <div className="relative flex items-center gap-4">
              {/* Happy mask */}
              <motion.div
                className="text-6xl"
                initial={{ rotate: -15, y: 0 }}
                animate={{ 
                  rotate: [-15, -10, -15],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🎭
              </motion.div>
            </div>

            {/* Name reveal */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-2"
                animate={{
                  textShadow: [
                    "0 0 20px hsl(var(--primary) / 0)",
                    "0 0 40px hsl(var(--primary) / 0.5)",
                    "0 0 20px hsl(var(--primary) / 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Pom Jey
              </motion.h1>
              <motion.p
                className="text-muted-foreground font-montserrat text-sm tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Actor • Comedian • Creator
              </motion.p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="w-48 h-1 bg-muted rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Curtain text */}
            <motion.p
              className="text-primary/60 text-sm font-medium"
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Raising the curtain...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
