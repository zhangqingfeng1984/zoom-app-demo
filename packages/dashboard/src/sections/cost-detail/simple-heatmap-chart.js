import { Chart } from 'src/components/chart';
import {
    Card,
    CardContent,
    CardHeader,
  } from '@mui/material';
export const SimpleHeatmapChart = (props) => {
    const {sx} = props;
    const createX = (month, meetingMinutes) => {
        const arr = []
        for (let day = 1; day <= 30; day++) {
            arr.push({ x: `${day}`, y: Math.floor(meetingMinutes * Math.random() * 100) })
        }
        return arr;
    }
    const createSeries = () => {
        const allSeries = []
        for (let month = 1; month <= 12; month++) {
            const meeting = Math.floor(1 + Math.random() * 100)
            const series = {
                name: `Month (${month})`,
                data: createX(month, meeting)
            }
            allSeries.push(series)
        }
        return allSeries
    }
    const chartSeries = createSeries();
    return (
        <Card sx={sx}>
            <CardHeader title="Meeting Heatmap" />
            <CardContent>
                <Chart
                    sx={{ height: '100%' }}
                    height={400}
                    options={{
                        chart: {
                            height: 350,
                            type: 'heatmap',
                        },
                        dataLabels: {
                            enabled: false
                        },
                        colors: ["#0000ff"],
                        
                    }}
                    series={chartSeries}
                    width="100%"
                    type="heatmap"
                />
            </CardContent>
        </Card>
    )
}