import DocumentTitle from "react-document-title"
import SideBar from "../../shared/backend/SideBar"
import NavBar from "../../shared/backend/NavBar"
import Footer from "../../shared/backend/Footer"

const BackendLayout = ({ children, title = "Dashboard" }) => {
  return (
    <>
      <DocumentTitle title={title + " :: Smart Stock ::"} />

      <div className="wrapper">
        <SideBar />
        <div className="main">
          <NavBar />
            <main className="content">
                <div className="container-fluid p-0">
                {children}    
                </div>                
            </main>
            <Footer />
        </div>
      </div>
    </>
  )
}

export default BackendLayout
