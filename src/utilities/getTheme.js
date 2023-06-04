export function getTheme() {
  const theme = localStorage.getItem("theme-preference");
  const prefersDark = window.matchMedia("(prefers-color-scheme:dark)");

  // if no preference has been set yet
  if (theme !== "dark" && theme !== "light") {
    if (prefersDark) {
      localStorage.setItem("theme-preference", "dark");
    } else {
      localStorage.setItem("theme-preference", "light");
    }
  }

  // don't return the variable theme because it might have changed
  return localStorage.getItem("theme-preference");
}
