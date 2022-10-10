import useLogout from "../hooks/useLogout";
import { useAuthContext } from "../context/AuthProvider";

const Profile = () => {
    const { auth } = useAuthContext();
    const Logout = useLogout();
    const signOut = async () => {
        await Logout();
    }
    return (
        <>
        <div className="profile">
        <p>Welcome, {auth.username}. Only visible to those who have logged in.</p>
        <button className="sign-out" type="button" onClick={signOut}>Sign Out</button>
        </div>
        </>
    )
}
export default Profile;