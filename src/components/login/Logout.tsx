import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { RootState } from '../../store';
import { logOutInReducer } from "../../state/slice/loggedInSlice";

const Logout = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOutApp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        dispatch(logOutInReducer())
        
        navigate("/logInGoogle")
    }

    return (
        <div>
            <button className="btn btn-delete" onClick={(e)=>logOutApp(e)}>Log Out</button>
        </div>
    )
}

export default Logout
