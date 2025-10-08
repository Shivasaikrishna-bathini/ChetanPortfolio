import { Router } from "wouter";
import { ThemeProvider } from "../ThemeProvider";
import Home from "../../pages/Home";

export default function HomeExample() {
  return (
    <ThemeProvider>
      <Router>
        <Home />
      </Router>
    </ThemeProvider>
  );
}
