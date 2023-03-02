import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';
import { SettingsNotifications } from 'src/sections/settings/settings-notifications';
import { SettingsPassword } from 'src/sections/settings/settings-password';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const Page = () => (
  <>
    <Head>
      <title>
        Support
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
          <Typography variant="h6">
            Support Information
          </Typography>
          <Typography variant="h7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut natus accusamus aliquam officia et doloribus voluptate pariatur magnam sed. Laudantium asperiores cupiditate, illum beatae quasi ab dicta accusantium consectetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut natus accusamus aliquam officia et doloribus voluptate pariatur magnam sed. Laudantium asperiores cupiditate, illum beatae quasi ab dicta accusantium consectetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut natus accusamus aliquam officia et doloribus voluptate pariatur magnam sed. Laudantium asperiores cupiditate, illum beatae quasi ab dicta accusantium consectetur.
          </Typography>
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
