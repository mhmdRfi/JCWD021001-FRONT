// import { useEffect } from "react";
import { 
    // useAppDispatch, 
    useAppSelector } from "../../redux/hook";
import { Navigate } from 'react-router-dom';

interface AuthProps {
    children: React.ReactNode;
}



const LoggedInRoute: React.FC<AuthProps> = ({children}) => {
    
    const isLogin = useAppSelector(state => state.authReducer.isLogin);


    if (isLogin) {
        return <>{children}</>
    } else {
        return <Navigate to="/" />;
    }

};

export default LoggedInRoute; 