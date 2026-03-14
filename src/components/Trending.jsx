import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import TripsTab from './trips component';
const Trending = () => {
  return (
    <div className="trending">
      <h2 className="component-title">Trending</h2>
      <Tabs
      className='tabs-holder'
      defaultValue={0}
    >
      <TabList disableUnderline={true} className="TabList">
        <Tab className="tab-title" disableIndicator value={0}>
          Trips
        </Tab>
        <Tab className="tab-title" disableIndicator value={1}>
          Hotels
        </Tab>
        <Tab className="tab-title" disableIndicator value={2}>
          Activities
        </Tab>
      </TabList>
      <TabPanel className='tabPanel' value={0}>
<TripsTab/>
      </TabPanel>
      <TabPanel className='tabPanel' value={1}>
hotels component      </TabPanel>
      <TabPanel className='tabPanel' value={2}>
Activities component      </TabPanel>
    </Tabs>
    </div>
  );
};
export default Trending;
