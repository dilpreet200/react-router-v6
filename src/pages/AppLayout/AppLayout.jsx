import Sidebar from "../SideBar/Sidebar";
import Map from "../Map/Map";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map/>
    </div>
  );
}

export default AppLayout;
