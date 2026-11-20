import { useEffect } from "react";
export function useAnimacionesEntrada() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    const timers = [];
    timers.push(
      setTimeout(
        () =>
          document.querySelectorAll("#heroBars .chart-bar").forEach((bar, i) =>
            timers.push(
              setTimeout(() => {
                bar.style.height = `${bar.dataset.h}%`;
              }, i * 60),
            ),
          ),
        2000,
      ),
    );
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);
}
