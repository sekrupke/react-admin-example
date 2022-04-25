import * as React from "react";
import {
    Datagrid,
    EditButton,
    List, ReferenceManyField,
    TextField,
    SingleFieldList, ChipField, useListContext, useRecordContext
} from 'react-admin';
import {Box, Typography} from "@mui/material";

export const FeedList = () => {

    return (
        <List emptyWhileLoading={true} empty={<EmptyList />}>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="name"/>
                <TextField source="type"/>
                <TextField source="description"/>
                <ReferenceManyField label={"Assigned Threats"} reference={"threatFeedRelation"} target={"feed"}>
                    <SingleFieldList>
                        <ChipField source="threat" />
                    </SingleFieldList>
                </ReferenceManyField>
                <EditButton />
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