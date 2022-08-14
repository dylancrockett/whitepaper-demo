import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { useState } from 'react';
import { ComplexDeclarativeDialogDemo } from './ComplexDeclarativeDialogDemo';
import { ComplexImperativeDialogDemo } from './ComplexImperativeDialogDemo';
import { DeclarativeDialogDemo } from './DeclarativeDialogDemo';
import { ImperativeDialogDemo } from './ImperativeDialogDemo';

function App() {
	const [tab, setTab] = useState("1");

	return (
		<TabContext value={tab}>
			<Box>
				<TabList onChange={(_, value: string) => { setTab(value); }} aria-label="lab API tabs example">
					<Tab label={"Imperative"} value={"imperative"}/>
					<Tab label={"Declarative"} value={"declarative"}/>
					<Tab label={"Complex Imperative"} value={"cmplx-imperative"}/>
					<Tab label={"Complex Declarative"} value={"cmplx-declarative"}/>
				</TabList>
			</Box>
			<TabPanel value={"imperative"}><ImperativeDialogDemo/></TabPanel>
			<TabPanel value={"declarative"}><DeclarativeDialogDemo/></TabPanel>
			<TabPanel value={"cmplx-imperative"}><ComplexImperativeDialogDemo/></TabPanel>
			<TabPanel value={"cmplx-declarative"}><ComplexDeclarativeDialogDemo/></TabPanel>
		</TabContext>
	);
}

export default App;
