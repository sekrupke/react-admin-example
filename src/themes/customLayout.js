import { Layout } from 'react-admin';
import CustomAppBar from "./customAppBar";

const CustomLayout = (props) => <Layout {...props} appBar={CustomAppBar} />;

export default CustomLayout;