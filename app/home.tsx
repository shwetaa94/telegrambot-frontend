import React from 'react'
import {
    Container,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Link,
} from '@mui/material';
import DeleteButton from '@/components/DeleteButton';
import UpdateApiKeyButton from '@/components/ApiUpdateButton';
import CheckBox from '@/components/CheckBox';

const HomePage = ({ apiKey, users }: any) => {
    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>Weather Admin Dashboard</Typography>

            {/* Box for Managing API Keys */}
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                <Typography variant="h5" gutterBottom>Manage API Key</Typography>
                <Typography variant="body1" gutterBottom>Current API Key: {apiKey}</Typography>
                <UpdateApiKeyButton title={"Update API Key"} />

            </Paper>

            {/* Box for Listing Current Users */}
            <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h5" gutterBottom>Current Users</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Username</TableCell>
                                <TableCell>Chat ID</TableCell>
                                <TableCell>Action</TableCell>
                                <TableCell>Blocked</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users && users.map((user: any) => (
                                <TableRow key={user.chatId}>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.chatId}</TableCell>
                                    <TableCell>
                                        <DeleteButton chatId={user.chatId} />
                                    </TableCell>
                                    <TableCell>
                                        <CheckBox value={user.isBlock} chatId={user.chatId} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Typography variant="body2" style={{ marginTop: '20px' }}>
            
                You can find the bot at: <Link href="https://t.me/shweta888bot" target="_blank" rel="noopener noreferrer">https://t.me/shweta888bot</Link>
            </Typography>
        </Container>
    )
}

export default HomePage