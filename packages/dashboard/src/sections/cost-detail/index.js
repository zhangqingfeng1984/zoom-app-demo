import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { OverviewMeetings } from "src/sections/overview/overview-meetings";

import { OverviewMyMeetingCost } from "src/sections/overview/overview-my-meeting-cost";
import { DeveloperPercentage } from "src/sections/overview/overview-developer-percentage";
import { OverviewParticipants } from "src/sections/overview/overview-participants";
import { OverviewTotalCosts } from "src/sections/overview/overview-total-costs";
import { OverviewRolesOfParticipantsPie } from "src/sections/overview/overview-roles-of-participants-pie";
import { SimpleHeatmapChart } from "./simple-heatmap-chart";

export const CostAnalysis = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} lg={3}>
          <OverviewMeetings difference={12} positive sx={{ height: "100%" }} value="$14k" />
        </Grid>
        <Grid xs={12} sm={6} lg={3}>
          <OverviewParticipants
            difference={16}
            positive={false}
            sx={{ height: "100%" }}
            value="2.6k"
          />
        </Grid>
        <Grid xs={12} sm={6} lg={3}>
          <DeveloperPercentage sx={{ height: "100%" }} value={75.5} />
        </Grid>
        <Grid xs={12} sm={6} lg={3}>
          <OverviewTotalCosts sx={{ height: "100%" }} value="$45k" />
        </Grid>
        <Grid xs={12} lg={8}>
          <OverviewMyMeetingCost
            chartSeries={[
              {
                name: "This year",
                data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
              },
              {
                name: "Last year",
                data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
              },
            ]}
            sx={{ height: "100%" }}
          />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <OverviewRolesOfParticipantsPie
            chartSeries={[63, 15, 22]}
            labels={["Managers", "Developers", "Other"]}
            sx={{ height: "100%" }}
          />
        </Grid>
        <Grid xs={12} md={6} lg={12}>
          <SimpleHeatmapChart />
        </Grid>
      </Grid>
    </Container>
  );
};
