import Layout from "../../../components/Admin/Layout"
import UserAccountContent from "./UserAccountContent"

const UserAccount = () => {
    return (
        <Layout children={<UserAccountContent/>}/>
    )
}

export default UserAccount