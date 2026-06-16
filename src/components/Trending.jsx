import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import TripsTab from "./trips component";
import { useEffect, useState } from "react";
import HotelsTab from "./Hotels component";
import ActivitesTab from "./Activies component";
const Trending = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (___, value) => {
    setActiveTab(value);
  };

  return (
    <div className="trending" id="Trending">
      <h2 className="component-title">Trending</h2>
      <Tabs className="tabs-holder" value={activeTab} onChange={handleTabChange}>
        <TabList disableUnderline={true} className="TabList">
          <Tab
            className="tab-title"
            sx={activeTab == 0 ? { fontWeight: 700 } : {}}
            disableIndicator
            value={0}
          >
            Trips
          </Tab>
          <Tab
            className="tab-title"
            sx={activeTab == 1 ? { fontWeight: 700 } : {}}
            disableIndicator
            value={1}
          >
            Hotels
          </Tab>
          <Tab
            className="tab-title"
            sx={activeTab == 2 ? { fontWeight: 700 } : {}}
            disableIndicator
            value={2}
          >
            Activities
          </Tab>
        </TabList>

        <TabPanel className="tabPanel" value={0}>
          <TripsTab />
        </TabPanel>
        <TabPanel className="tabPanel" value={1}>
          <HotelsTab />
        </TabPanel>
        <TabPanel className="tabPanel" value={2}>
          <ActivitesTab />
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default Trending;
