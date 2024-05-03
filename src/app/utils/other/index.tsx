import { useEffect, useState } from "react";

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      // Update width state only if window is available
      if (typeof window !== "undefined") {
        setWidth(window.innerWidth);
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleWindowResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Return the width so we can use it in our components
  return { width };
};
