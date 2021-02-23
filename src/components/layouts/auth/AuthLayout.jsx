import DocumentTitle  from 'react-document-title'

const AuthLayout = ({children , title = ""}) => {
    return (
        <>

        <DocumentTitle title={title + " :: Smart Stock ::"} />
        <link rel="stylesheet" href="assets/css/app.css" />
        {/* <link rel="stylesheet" href="../../../styles/custom.css" /> */}

        <div className="bg-info"> 
            <div className="d-flex flex-column align-items-center justify-content-center vh-100">
                {children}
            </div>
            
        </div>

        
        </>
    )
}

export default AuthLayout
