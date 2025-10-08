import { Router } from "wouter";
import { ThemeProvider } from "../ThemeProvider";
import StyleGuide from "../../pages/StyleGuide";

export default function StyleGuideExample() {
  return (
    <ThemeProvider>
      <Router>
        <StyleGuide />
      </Router>
    </ThemeProvider>
  );
}
