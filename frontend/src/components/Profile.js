import useLogout from "../hooks/useLogout";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { id } = useParams();
    const Logout = useLogout();
    const signOut = async () => {
        await Logout();
    }
    return (
        <>
        <h2>Welcome, {id}. Only visible to those who have logged in</h2>
        <button onClick={signOut}>Sign Out</button>
        </>
    )
}
export default Profile;