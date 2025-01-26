import Carousel from "./components/Carousel"
import Header from "./components/Header"
import Navbar from "./navbar/Navbar"

const App = () => {
  return (
    <main className="pt-5 h-auto min-h-screen w-full sm:px-[17rem] px-4 bg-[#F4F4F4] text-black font-main">
      <Header />
      <Navbar />
      {/* <Carousel /> */}
    </main>
  )
}

export default App