import Sidebar from "../sidebar/Sidebar"
import Navbar from "../navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      { children }
      <Sidebar />
    </div>
  );
}
 
export default Layout;