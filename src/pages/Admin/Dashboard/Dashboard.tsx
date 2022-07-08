import {DashContent} from "./DashContent"

import Layout from "../../../components/Admin/Layout"

function DashboardContent() {
  return (
    <Layout children={<DashContent/>}/>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
