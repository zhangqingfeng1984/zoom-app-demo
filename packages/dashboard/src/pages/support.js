import Head from "next/head";
import {
  Box,
  Container,
  Stack,
  Typography,
  List,
  ListItemText,
  ListItemAvatar,
  ListItemButton,
  Avatar,
  Paper,
  Divider,
  SvgIcon,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import PhoneIcon from "@heroicons/react/24/solid/PhoneIcon";
const Page = () => (
  <>
    <Head>
      <title>Support</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4">Support Information</Typography>
          <Paper elevation={3}>
            <List>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      backgroundColor: "theme.primary",
                    }}
                  >
                    <SvgIcon>
                      <PhoneIcon />
                    </SvgIcon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="General Support for Citi Cards" secondary="1-800-950-5114" />
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      backgroundColor: "theme.primary",
                    }}
                  >
                    <SvgIcon>
                      <PhoneIcon />
                    </SvgIcon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Servicio al cliente español" secondary="1-800-947-9100" />
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      backgroundColor: "theme.primary",
                    }}
                  >
                    <SvgIcon>
                      <PhoneIcon />
                    </SvgIcon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="General Support & Servicing for Costco Anywhere Visa®"
                  secondary="1-855-378-6467"
                />
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      backgroundColor: "theme.primary",
                    }}
                  >
                    <SvgIcon>
                      <PhoneIcon />
                    </SvgIcon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="General Support & Servicing for Costco Anywhere Visa® Business Card"
                  secondary="1-855-378-6468"
                />
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      backgroundColor: "theme.primary",
                    }}
                  >
                    <SvgIcon>
                      <PhoneIcon />
                    </SvgIcon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Collections Servicing Costco" secondary="1-855-805-5486" />
              </ListItemButton>
              <Divider />
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      backgroundColor: "theme.primary",
                    }}
                  >
                    <SvgIcon>
                      <PhoneIcon />
                    </SvgIcon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Collections Servicing Cards" secondary="1-800-388-2200" />
              </ListItemButton>
            </List>
          </Paper>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
