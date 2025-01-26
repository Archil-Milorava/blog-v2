import Header from "./components/Header";
import Navbar from "./navbar/Navbar";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <main className=" p-4  h-auto min-h-screen w-full sm:px-[22rem]  bg-[#F4F4F4] text-black font-main ">
      <Header />
      <Navbar />
      <Landing />
    </main>
  );
};

export default App;
