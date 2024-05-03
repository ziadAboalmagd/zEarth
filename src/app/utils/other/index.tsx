import { useEffect, useState } from "react";

export const useViewport = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : undefined
  );

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
};
