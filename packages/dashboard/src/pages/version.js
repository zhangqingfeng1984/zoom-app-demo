import Head from 'next/head';
import { Box, Container, Stack, Typography, Rating } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

const Page = () => (
  <>
    <Head>
      <title>
        Version
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
            Application Version
          </Typography>
          <Typography variant="h7">
            Latest Build: 1.0.0 
          </Typography>
          <Rating name="size-large" defaultValue={3.5} precision={0.5} size="small" />
          <Typography fontSize={14} color={'gray'}>
            Important Legal Disclosures & Information
            Citibank.com provides information about and access to accounts and financial services provided by Citibank, N.A. and its affiliates in the United States and its territories. It does not, and should not be construed as, an offer, invitation or solicitation of services to individuals outside of the United States.
            Terms, conditions and fees for accounts, products, programs and services are subject to change. Not all accounts, products, and services as well as pricing described here are available in all jurisdictions or to all customers. Your eligibility for a particular product and service is subject to a final determination by Citibank. Your country of citizenship, domicile, or residence, if other than the United States, may have laws, rules, and regulations that govern or affect your application for and use of our accounts, products and services, including laws and regulations regarding taxes, exchange and/or capital controls that you are responsible for following.
            The products, account packages, promotional offers and services described in this website may not apply to customers of International Personal Bank U.S. in the Citigold® Private Client International, Citigold® International, Citi International Personal, Citi Global Executive Preferred, and Citi Global Executive Account Packages.
            Deposit products and services are offered by Citibank, N.A., Member FDIC
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
