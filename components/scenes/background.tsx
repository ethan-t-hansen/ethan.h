"use client";

import { useTheme } from "next-themes";
import Sky from "./sky";
import { useEffect, useState } from "react";

export const Background = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted ? theme ?? resolvedTheme : undefined;

  if (!mounted) {
    return <div className="fixed inset-0 -z-10 bg-[#f4f4f4]" />;
  }

  return (
    <div className="fixed inset-0 -z-10 transition-all duration-300 bg-background 
    sky:bg-gradient-to-tr sky:from-blue-700 sky:via-blue-500 sky:to-blue-200">
      {activeTheme === "sky" && <Sky />}
    </div>
  );
};
