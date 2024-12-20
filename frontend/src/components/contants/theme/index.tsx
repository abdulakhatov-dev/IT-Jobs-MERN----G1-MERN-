import React, { useState } from "react";
import { MdSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

import { Button } from "@/components/ui/button";

interface PropsI {
  className?: string;
}

const Theme: React.FC<PropsI> = ({ className }) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  const handleToggle = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));

    // Toggle the dark class on the document body
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };

  return (
    <Button onClick={handleToggle} className={`bg-[#168156] hover:bg-[#168156] dark:bg-white ${className}`} size='sm'>
      {themeMode === "dark" ? <IoIosMoon /> : <MdSunny />}
    </Button>
  );
};

export default Theme;
