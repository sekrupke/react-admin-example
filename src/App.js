import * as React from "react";
import {Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from './users/userList';
import {PostCreate, PostEdit, PostList} from './posts/postList';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './dashboard/dashboard';
import authProvider from './auth/authProvider'
import {customTheme} from "./themes/customTheme";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// Optional localization with <Admin i18nProvider={i18nProvider} ..... </Admin>
// const i18nProvider = polyglotI18nProvider(() => germanMessages, 'de')

const App = () => (
    <Admin theme={customTheme} dashboard={Dashboard} authProvider={authProvider}
           dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
        <Resource name="users" list={UserList} icon={UserIcon}/>
    </Admin>
);

export default App;
