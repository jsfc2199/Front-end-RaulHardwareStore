import { signInWithPopup, GoogleAuthProvider, OAuthCredential } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebaseConfig'
import { logInInReducer } from '../../state/slice/loggedInSlice'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from '../../store'

const providerGoogleAuth = new GoogleAuthProvider();

const GoogleLogIn: React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector((state: RootState) => state.logged)


    useEffect(() => {
        if (user !== null) {
            navigate("/providers")
        }
    }, [])

    const signInWithGoogleButton = () => {
        signInWithPopup(auth, providerGoogleAuth)
            .then((result) => {
                const credential: OAuthCredential | null = GoogleAuthProvider.credentialFromResult(result);
                const token = credential!.accessToken;
                const user = result.user;

                dispatch(logInInReducer(user))

                navigate('/providers')

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                const email = error.email;

                const credential = GoogleAuthProvider.credentialFromError(error);
            })
    }

    return (
        <div>
            <button className="btn btn-delete" onClick={signInWithGoogleButton}>Log in with Google</button>
        </div>
    )
}

export default GoogleLogIn;