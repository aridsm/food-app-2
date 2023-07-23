import Content from "./routes/Content";
import ArcSvg from "./assets/imgs/arc.tsx";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Content />
      <ArcSvg className="absolute top-0 -right-[125px] rotate-180 -z-10" />
    </div>
  );
}

export default App;
