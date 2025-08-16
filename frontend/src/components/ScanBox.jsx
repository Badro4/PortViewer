import { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

function ScanBox() {
  const [ip, setIp] = useState('127.0.0.1');
  const [startPort, setStartPort] = useState(7999);
  const [endPort, setEndPort] = useState(8001);
  const [visibleResults, setVisibleResults] = useState(false);
  const [results, setResults] = useState([]);

  const handleScan = () => {
      console.log("Scanning:", ip, startPort, endPort);
      fetch(`http://localhost:8000/scan/${ip}?start=${startPort}&end=${endPort}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => response.json())
      .then(data => {
        console.log("Scan results:", data);
        setVisibleResults(true);
        setResults(data.open_ports);
      })
      .catch(error => {
        console.error("Error during scan:", error);
      });

  };

return (
  <Paper
    elevation={6}
    sx={{
      padding: 4,
      maxWidth: 500,
      margin: 'auto',
      background: 'linear-gradient(135deg, #FFF8F0 0%, #F8E8D0 100%)',
      color: '#6B4226',
      borderRadius: 4,
      border: '3px solid #FBCB69',
      boxShadow: '0 8px 24px rgba(107, 66, 38, 0.3)',
      fontFamily: "'Baloo 2', cursive",

      '& .MuiTypography-root': {
        fontWeight: 700,
        color: '#6B4226',
        textAlign: 'center',
      },
      '& .MuiTextField-root': {
        '& label': {
          color: '#6B4226',
        },
        '& .MuiOutlinedInput-root': {
          backgroundColor: '#FFF8F0',
          borderRadius: 3,
          '& fieldset': {
            borderColor: '#FBCB69',
          },
          '&:hover fieldset': {
            borderColor: '#E25A5A',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#6B4226',
          },
          '& input': {
            color: '#6B4226',
          },
        },
      },
      '& .MuiButton-root': {
        fontWeight: 700,
        color: '#FFF8F0',
        backgroundColor: '#6B4226',
        borderRadius: 3,
        boxShadow: '0 4px 12px rgba(107, 66, 38, 0.4)',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: '#E25A5A',
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 16px rgba(226, 90, 90, 0.5)',
        },
      },
    }}
  >
    <Typography variant="h5" gutterBottom>
      PortViewer 🔍
    </Typography>

    <TextField
      label="IP Address"
      fullWidth
      margin="normal"
      value={ip}
      onChange={(e) => setIp(e.target.value)}
      autoComplete="off"
    />

    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
      <TextField
        label="Start Port"
        type="number"
        value={startPort}
        onChange={(e) => setStartPort(e.target.value)}
        fullWidth
        autoComplete="off"
      />
      <TextField
        label="End Port"
        type="number"
        value={endPort}
        onChange={(e) => setEndPort(e.target.value)}
        fullWidth
        autoComplete="off"
      />
    </Box>

    <Button
      variant="contained"
      color="primary"
      fullWidth
      sx={{ mt: 3 }}
      onClick={handleScan}
    >
      Find Open Ports 🐾
    </Button>

    {visibleResults && (
      <TextField
        label="Open Ports 🐾"
        disabled
        value={results.join(', ')}
        fullWidth
        autoComplete="off"
        sx={{ mt: 3 }}
      />
    )}
  </Paper>
);
}

export default ScanBox;