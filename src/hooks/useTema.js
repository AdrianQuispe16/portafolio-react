import { useState } from "react";
export function useTema() {
  const [tema, setTema] = useState(
    () => document.documentElement.dataset.theme || "dark",
  );
  function alternarTema() {
    const siguiente = tema === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = siguiente;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", siguiente === "dark" ? "#060A16" : "#F4F7FD");
    try {
      localStorage.setItem("theme", siguiente);
    } catch {
      /* almacenamiento opcional */
    }
    setTema(siguiente);
  }
  return { tema, alternarTema };
}
