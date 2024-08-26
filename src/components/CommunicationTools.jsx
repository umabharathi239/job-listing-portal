import { useState } from 'react';
import './CommunicationTools.css';
import { Container, Grid, Card, CardContent, Typography, Divider, Box, Button, TextField } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { Mail as MailIcon, Notifications as NotificationsIcon, Phone as PhoneIcon } from '@mui/icons-material';

const CommunicationTools = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    alert('Message sent: ' + message);
    setMessage('');
  };

  return (
    <Container className="container">
      <Grid container spacing={3}>
        {/* Messaging Tool */}
        <Grid item xs={12} md={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6" gutterBottom>Messaging</Typography>
              <Divider />
              <Box mt={2} className="message-container">
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSendMessage}
                  className="send-button"
                >
                  Send
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Notifications */}
        <Grid item xs={12} md={6}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6" gutterBottom>Notifications</Typography>
              <Divider />
              <Box mt={2} className="notifications-container">
                <Typography variant="body1">
                  <NotificationsIcon /> You have 5 new notifications.
                </Typography>
                {/* Add notification details here */}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Support */}
        <Grid item xs={12}>
          <Card className="card">
            <CardContent>
              <Typography variant="h6" gutterBottom>Contact Support</Typography>
              <Divider />
              <Box mt={2} className="contact-support-container">
                <Typography variant="body1">
                  <PhoneIcon /> Need help? Reach out to our support team.
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  href="mailto:support@jobportal.com"
                  className="contact-button"
                >
                  Email Support
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CommunicationTools;
