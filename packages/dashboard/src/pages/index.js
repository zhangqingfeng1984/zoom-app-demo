import { useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import {
  ToggleButtonGroup,
  ToggleButton,
  Box,
  Container,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewMeetings } from "src/sections/overview/overview-meetings";
import { OverviewClevelCostTable } from "src/sections/overview/overview-clevel-cost-table";
import { LatestMeetings } from "src/sections/overview/overview-latest-meetings";
import { OverviewMyMeetingCost } from "src/sections/overview/overview-my-meeting-cost";
import { DeveloperPercentage } from "src/sections/overview/overview-developer-percentage";
import { OverviewParticipants } from "src/sections/overview/overview-participants";
import { OverviewTotalCosts } from "src/sections/overview/overview-total-costs";
import { OverviewRolesOfParticipantsPie } from "src/sections/overview/overview-roles-of-participants-pie";
import { useOverviewCards } from "src/hooks/use-overview-mock";
import { mock } from "mockjs";

const now = new Date();

const Page = () => {
  const {
    meetings,
    setMeetings,
    participants,
    setParticipants,
    developerPercentage,
    setDeveloperPercentage,
    totalCost,
    setTotalCost,
    meetingCostThisYear,
    setMeetingCostThisYear,
    meetingCostLastYear,
    setMeetingCostLastYear,
    roleOfParticipants,
    setRoleOfParticipants,
    clevelCost,
    setClevelCost,
  } = useOverviewCards();
  const mockCostYear = () => {
    const data = [];
    for (let i = 0; i < 12; i++) {
      data.push(Math.random() * 100);
    }
    return data;
  };
  const mockRoleOfParticipants = () => {
    const managers = Math.floor(Math.random() * 100);
    const developers = 100 - managers - Math.floor((100 - managers) * Math.random());
    const other = 100 - managers - developers;
    return [managers, developers, other];
  };
  const [filterType, setFilterType] = useState("week");
  const handleToggleChange = (event, value) => {
    setFilterType(value);
    const nextMeetings = `$${Math.floor(Math.random() * 100 + 10)}k`;
    const nextParticipants = `${Math.floor(Math.random() * 100 + 10)}k`;
    const nextDeveloperPercentage = Math.floor(Math.random() * 100 + 10);
    const nextTotalCosts = `$${Math.floor(Math.random() * 100 + 10)}k`;
    const nextMeetingCostThisYear = mockCostYear();
    const nextMeetingCostLastYear = mockCostYear();
    const nextRoleOfParticipants = mockRoleOfParticipants();
    setMeetings(nextMeetings);
    setParticipants(nextParticipants);
    setDeveloperPercentage(nextDeveloperPercentage);
    setTotalCost(nextTotalCosts);
    setMeetingCostThisYear(nextMeetingCostThisYear);
    setMeetingCostLastYear(nextMeetingCostLastYear);
    setRoleOfParticipants(nextRoleOfParticipants);
  };

  const mockClevelCost = () => {
    const nextClevelCost = mock({
      "data|6": [
        {
          id: "@string(8)",
          "ref|1000-2000": 1000,
          "cost|100-500.2-2": 100.25,
          "clevel|1": ["C11", "C9", "C12", "C13"],
          customer: {
            name: "@name",
          },
          createdAt: "@date",
          "status|1": ["Online", "Offline"],
        },
      ],
    }).data;
    setClevelCost(nextClevelCost);
  };

  return (
    <>
      <Head>
        <title>Overview</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ my: 2 }}>
            <ToggleButtonGroup
              color="primary"
              value={filterType}
              exclusive
              onChange={handleToggleChange}
              aria-label="Platform"
            >
              <ToggleButton value="week">Week</ToggleButton>
              <ToggleButton value="month">Month</ToggleButton>
              <ToggleButton value="year">Year</ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewMeetings difference={12} positive sx={{ height: "100%" }} value={meetings} />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewParticipants
                difference={16}
                positive={false}
                sx={{ height: "100%" }}
                value={participants}
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <DeveloperPercentage sx={{ height: "100%" }} value={developerPercentage} />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTotalCosts sx={{ height: "100%" }} value={totalCost} />
            </Grid>
            <Grid xs={12} lg={8}>
              <OverviewMyMeetingCost
                chartSeries={[
                  {
                    name: "This year",
                    data: meetingCostThisYear,
                  },
                  {
                    name: "Last year",
                    data: meetingCostLastYear,
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <OverviewRolesOfParticipantsPie
                chartSeries={roleOfParticipants}
                labels={["Managers", "Developers", "Other"]}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <LatestMeetings
                onClick={mockClevelCost}
                products={[
                  {
                    id: "5ece2c077e39da27658aa8a9",
                    image: "/assets/products/product-1.png",
                    name: "2022 Year end meeting",
                    updatedAt: subHours(now, 6).getTime(),
                  },
                  {
                    id: "5ece2c0d16f70bff2cf86cd8",
                    image: "/assets/products/product-2.png",
                    name: "Department Meeting",
                    updatedAt: subDays(subHours(now, 8), 2).getTime(),
                  },
                  {
                    id: "b393ce1b09c1254c3a92c827",
                    image: "/assets/products/product-5.png",
                    name: "Employee performance review",
                    updatedAt: subDays(subHours(now, 1), 1).getTime(),
                  },
                  {
                    id: "a6ede15670da63f49f752c89",
                    image: "/assets/products/product-6.png",
                    name: "Team work sprite",
                    updatedAt: subDays(subHours(now, 3), 3).getTime(),
                  },
                  {
                    id: "bcad5524fe3a2f8f8620ceda",
                    image: "/assets/products/product-7.png",
                    name: "Application develop startup",
                    updatedAt: subDays(subHours(now, 5), 6).getTime(),
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid xs={12} md={12} lg={8}>
              <OverviewClevelCostTable orders={clevelCost} sx={{ height: "100%" }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
