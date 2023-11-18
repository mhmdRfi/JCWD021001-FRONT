
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

import { RootState } from "../../redux/store";

interface AuthProps {
    children: React.ReactNode;
}



const AdminRoute: React.FC<AuthProps> = ({children}) => {
    
    // const dispatch = useAppDispatch();
    // dispatch(keepLogin());
    const isLogin = useSelector((state: RootState) => state.authReducer.isLogin);
    const user = useSelector((state: RootState) => state.authReducer.user);
    const isAdmin = user.roleId;

    
    if (isLogin) {
    if (isAdmin == 1) {
        return <>{children}</>
        
        } else if (isAdmin == 2) {
            return <Navigate to= "/cashier" />
        }
    } else if (!isLogin){
        return <Navigate to = "/" />
    }

    
};

export default AdminRoute; 