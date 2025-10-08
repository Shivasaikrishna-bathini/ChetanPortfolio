import { Router, Route } from "wouter";
import { ThemeProvider } from "../ThemeProvider";
import ProjectDetail from "../../pages/ProjectDetail";

export default function ProjectDetailExample() {
  return (
    <ThemeProvider>
      <Router base="/project">
        <Route path="/motion-detector" component={ProjectDetail} />
      </Router>
    </ThemeProvider>
  );
}
