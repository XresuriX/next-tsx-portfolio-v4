import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function App({ Component, pageProps }) {
  return (
    <div className="grid h-screen p-10 grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 bg-scroll bg-[url('../assets/JaMap.jpg')]">
      {/* // do this div style later (after putting the content) */}
      <div className="h-full col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl ">
        <Sidebar />
        {/* //!sidebar */}
      </div>
      <div className="flex flex-col col-span-12 bg-white rounded-2xl dark:text-white lg:col-span-9">
        {/* //!navbar */}
        <Navbar /> 
        {/* //!about */}
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default App;
