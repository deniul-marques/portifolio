import Banner from "./components/Banner/Banner";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
      return (
            <>
                  <div className="sm:flex gap-5">
                        <Sidebar/>
                        <Banner/>
                  </div>
            </>
      )
}