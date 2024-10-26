import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { TMain } from '../definitions/main';

export default function LabTabs(props: {
  navigation: TMain['navigation'];
  action: (nav: TMain['navigation']) => void;
}) {
  //@ts-ignore
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    props.action(newValue as TMain['navigation']);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={props.navigation}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label='lab API tabs example'
            textColor='inherit'
            indicatorColor='primary'
          >
            <Tab
              label='Clients'
              value='clients'
            />
            <Tab
              label='Orders'
              value='orders'
            />
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
