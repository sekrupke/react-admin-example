import * as React from "react";
import {Admin, Resource} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import Dashboard from './dashboard/dashboard';
import authProvider from './auth/authProvider'
import {customTheme} from "./themes/customTheme";
import CustomLayout from "./themes/customLayout";
import {FeedList} from "./feeds/feedList";

//const dataProvider = jsonServerProvider('/api');
//const i18nProvider = polyglotI18nProvider(() => germanMessages, 'de')

const simpleRestDataProver = simpleRestProvider('/api')

const App = () => (
    <Admin layout={CustomLayout} theme={customTheme} dashboard={Dashboard} authProvider={authProvider} dataProvider={simpleRestDataProver}>
        <Resource name="feeds" list={FeedList} />
    </Admin>
);

export default App;
