import * as React from "react";
import {
    Create,
    Datagrid,
    Edit,
    EditButton,
    List,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    SimpleList,
    TextField,
    TextInput,
    useRecordContext
} from 'react-admin';
import {useMediaQuery} from "@mui/material";

const PostEditTitle = () => {
    const record = useRecordContext();
    return <span>Edit of post {record ? `"${record.title}"` : ''}</span>
}

export const PostFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users">
        <SelectInput optionText="name" />
    </ReferenceInput>,
]

export const PostList = () => {
    const smallView = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <List filters={PostFilters}>
            {smallView ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <ReferenceField source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    )
};

export const PostEdit = () => (
    <Edit title={<PostEditTitle />}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <TextInput multiline source="body"/>
        </SimpleForm>
    </Create>
);