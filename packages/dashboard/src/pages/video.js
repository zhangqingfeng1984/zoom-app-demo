import Head from 'next/head';
import { Box, Container, Stack, Typography, Rating, Card, CardContent, CardHeader } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import ReactPlayer from 'react-player'

const Page = () => (
    <>
        <Head>
            <title>
                Video
            </title>
        </Head>
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 8
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={3}>
                    <Typography variant="h4">
                        Video Demos
                    </Typography>
                    <Rating name="size-large" defaultValue={3.5} precision={0.5} size="small" />
                    <Card>
                        <CardHeader title="zoom-apps" />
                        <CardContent>
                            <ReactPlayer autoPlay={true} url="/zoom-apps.mp4"></ReactPlayer>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader title="zoom-dashboard" />
                        <CardContent>
                            <ReactPlayer autoPlay={true} url="/zoom-apps.mp4"></ReactPlayer>
                        </CardContent>
                    </Card>
                </Stack>
            </Container>
        </Box>
    </>
);

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;
