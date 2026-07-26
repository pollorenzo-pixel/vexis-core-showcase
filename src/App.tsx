import { PracticeLibrary } from "./components/PracticeLibrary";

export function App() {
  return (
    <main>
      <header className="hero">
        <p className="eyebrow">Employer-facing engineering reconstruction</p>
        <h1>VEXIS Core Showcase</h1>
        <p className="hero__summary">
          A clean-room React and TypeScript demonstration of selected frontend
          patterns. It uses synthetic data and contains no production code,
          credentials, customer data or proprietary training content.
        </p>
      </header>

      <PracticeLibrary />
    </main>
  );
}
