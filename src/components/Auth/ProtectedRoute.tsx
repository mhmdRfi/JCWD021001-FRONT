// import { useEffect } from "react";
import { 
    // useAppDispatch, 
    useAppSelector } from "../../redux/hook";
import { Navigate } from 'react-router-dom';

interface AuthProps {
    children: React.ReactNode;
}



const UseAuth: React.FC<AuthProps> = ({children}) => {
    
    const isLogin = useAppSelector(state => state.authReducer.isLogin);


    if (!isLogin) {
        return <Navigate to="/" />;
    }

    return <>{children}</>
};

export default UseAuth; 