import * as React from "react";
import { useRecordContext } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const customUrlStyle = makeStyles({
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        height: '0.5em',
        paddingLeft: 2,
    },
});

const CustomUrlField = ({ source }) => {
    const record = useRecordContext();
    const styleClasses = customUrlStyle();

    return record ? (
        <a href={record[source]} className={styleClasses.link}>
            {record[source]}
            <LaunchIcon className={styleClasses.icon} />
        </a>
    ) : null;
}

export default CustomUrlField;