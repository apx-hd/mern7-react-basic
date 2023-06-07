import { Box, Typography, Button } from "@mui/material";
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });
  

function MuiHero() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={4}
      mb={4}
    >
      <Typography variant="h2" gutterBottom>
        Album Layout
      </Typography>
      <Box width={"50%"}>
        <Typography variant="h4" component="p" textAlign={"center"}>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </Typography>
      </Box>
      <Box display="flex" gap={2} mt={4}>
        <CustomButton variant="contained" size="large">
          Main Call to Action
        </CustomButton>
        <Button variant="outlined" size="large" color="secondary">
          Secondary Action
        </Button>
      </Box>
    </Box>
  );
}

export default MuiHero;
