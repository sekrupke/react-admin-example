import * as React from "react";
import {
    Datagrid,
    EditButton,
    List,
    TextField,
    useGetManyReference,
} from 'react-admin';
import {Box, Typography} from "@mui/material";

export const FeedList = () => {
    const { data, isLoading, error } = useGetManyReference(
        'threats',
        {
            target: 'id',
        }
    );
    if (isLoading) { return null; }
    if (error) { return <p>There is no data available!</p>; }

    return (
        <List emptyWhileLoading={true} empty={<EmptyList />}>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="name"/>
                <TextField source="type"/>
                <TextField source="description"/>
                <ul>
                    {data.map(threat => (
                        <li key={threat.id}>{threat.entry}</li>
                    ))}
                </ul>
                <EditButton/>
            </Datagrid>
        </List>
    )
};

const EmptyList = () => (
    <Box textAlign="center" m={1}>
        <Typography variant="h4" paragraph>
            No feeds available.
        </Typography>
    </Box>
);