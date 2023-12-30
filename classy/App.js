import AboutClass from "./components/AboutClass";
import About from './components/About';

export default function App() {

  return (
    <div>
      <h1>Home</h1>
      <AboutClass name="About Class Page" />
      <About name="About Function Page" />
    </div>
  );
}