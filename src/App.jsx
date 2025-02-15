import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TaskBoard from "./Task/TaskBoard";

function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <TaskBoard></TaskBoard>
      <Footer></Footer>
    </>
  );
}

export default App;
