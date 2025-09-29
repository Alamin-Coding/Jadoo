import { Navigate, useLocation } from "react-router"
import { useAuth } from "../hooks/useAuth"

const ProtectedRoute = ({children}) => {
    const {currentUser} = useAuth()
    const location = useLocation()
  
    if (!currentUser) {
        return <Navigate to={"/auth/login"} state={{from: location}} replace />
    }

    return children
}

export default ProtectedRoute