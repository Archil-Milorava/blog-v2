import FooterMain from "./components/footer/FooterMain";
import Header from "./components/Header";
import Navbar from "./navbar/Navbar";
import BlogPage from "./pages/BlogPage";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <main className=" p-4  h-auto min-h-screen w-full sm:px-[28rem]  bg-[#F4F4F4] text-black font-main ">
      <Header />
      <Navbar />
      <Landing />
      {/* <BlogPage /> */}
      <FooterMain />
    </main>
  );
};

export default App;
