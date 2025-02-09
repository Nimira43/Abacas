import { Datagrid, List, ReferenceField, TextField, FunctionField } from 'react-admin'

const PostList = () => (
    <List>
    <Datagrid>
      <TextField
          source='id' label='ID' />
      <TextField source='title' label='Post Title' />
      <FunctionField
        label='Post Content'
        render={(record) => `
          ${record.body.substring(0, 50)}...
        `}
      />
      <ReferenceField
        source='userId'
        reference='users'
      />
    </Datagrid>
  </List>
)

export default PostList