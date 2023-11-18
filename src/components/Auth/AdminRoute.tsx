// import { useEffect } from "react";
import { 
    useAppDispatch, 
    useSelect } from "../../redux/hook";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { keepLogin } from "../../redux/reducer/authReducer";
import { RootState } from "../../redux/store";

interface AuthProps {
    children: React.ReactNode;
}



const AdminRoute: React.FC<AuthProps> = ({children}) => {
    
    // const dispatch = useAppDispatch();
    // dispatch(keepLogin());
    const user = useSelector((state: RootState) => state.authReducer.user);
    const isAdmin = user.roleId;

    console.log("ini roleId");
    console.log("ini user",useSelector((state: RootState) => state.authReducer.user));
    

    if (isAdmin !== 1) {
        return <Navigate to="/home" />;
    } 

    return <>{children}</>
};

export default AdminRoute; 