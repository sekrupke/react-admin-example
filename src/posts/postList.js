import * as React from "react";
import {
    Create,
    Datagrid,
    Edit,
    EditButton,
    Filter,
    List,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
    SimpleList
} from 'react-admin';
import {useMediaQuery} from '@material-ui/core';

const PostEditTitle = ({record}) => {
    return <span>Edit of post {record ? `"${record.title}"` : ''}</span>
}

export const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
)

export const PostList = (props) => {
    const smallView = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <List filters={<PostFilter/>} {...props}>
            {smallView ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => record.id}
                    tertiaryText={record => "31.12.2021"}
                />
                ) : (
                <Datagrid>
                    <TextField source="id"/>
                    <ReferenceField source="userId" reference="users">
                        <TextField source="name"/>
                    </ReferenceField>
                    <TextField source="title"/>
                    <EditButton/>
                </Datagrid>
            )}
        </List>
    )
};

export const PostEdit = props => (
    <Edit title={<PostEditTitle/>} {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <TextInput multiline source="body"/>
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