import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
    </ThemeProvider>
  );
}
