import './AnalyticsReports.css';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Container, Grid, Card, CardContent, Typography, Divider, Box } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Added for Pie chart
);

const dataOverview = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
    },
  ],
};

const dataPerformance = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Performance',
      data: [33, 53, 85, 41, 44, 65, 90],
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const dataDemographics = {
  labels: ['Male', 'Female', 'Other'],
  datasets: [
    {
      label: 'Demographics',
      data: [45, 35, 20],
      backgroundColor: [
        'rgba(75,192,192,0.4)',
        'rgba(255,99,132,0.4)',
        'rgba(255,206,86,0.4)'
      ],
      borderColor: [
        'rgba(75,192,192,1)',
        'rgba(255,99,132,1)',
        'rgba(255,206,86,1)'
      ],
      borderWidth: 1,
    },
  ],
};

const dataHiringFunnel = {
  labels: ['Hired', 'Offered', 'Interviewed', 'Applied'],
  datasets: [
    {
      label: 'Candidates',
      data: [50, 100, 200, 500],
      backgroundColor: 'rgba(75,192,192,0.6)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
    },
  ],
};

const AnalyticsReports = () => {
  return (
    <Container className="container">
      <Grid container spacing={3}>
        {/* Overview Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6" gutterBottom>Overview</Typography>
              <Divider />
              <Box mt={2} className="chart-container">
                <Bar data={dataOverview} options={{ responsive: true, maintainAspectRatio: false }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Job Posting Performance */}
        <Grid item xs={12} sm={6} md={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6" gutterBottom>Job Posting Performance</Typography>
              <Divider />
              <Box mt={2} className="chart-container">
                <Line data={dataPerformance} options={{ responsive: true, maintainAspectRatio: false }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Candidate Demographics */}
        <Grid item xs={12} sm={6} md={3}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6" gutterBottom>Candidate Demographics</Typography>
              <Divider />
              <Box mt={2} className="chart-container">
                <Pie data={dataDemographics} options={{ responsive: true, maintainAspectRatio: false }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Hiring Funnel */}
        <Grid item xs={12}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6" gutterBottom>Hiring Funnel</Typography>
              <Divider />
              <Box mt={2} className="chart-container">
                <Bar data={dataHiringFunnel} options={{ responsive: true, maintainAspectRatio: false, indexAxis: 'y' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnalyticsReports;
