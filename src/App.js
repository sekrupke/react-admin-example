import * as React from "react";
import {Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from './users/userList';
import {PostCreate, PostEdit, PostList} from './posts/postList';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import Dashboard from './dashboard/dashboard';
import authProvider from './auth/authProvider'
import {customTheme} from "./themes/customTheme";
import CustomLayout from "./themes/customLayout";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

//const i18nProvider = polyglotI18nProvider(() => germanMessages, 'de')

const App = () => (
    <Admin layout={CustomLayout} theme={customTheme} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
        <Resource name="users" list={UserList} icon={UserIcon}/>
    </Admin>
);

export default App;
