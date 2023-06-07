import MuiAppBar from "../../components/MuiAppBar";
import MuiHero from '../../components/MuiHero';
import MuiCard from '../../components/MuiCard';
import {Box, Grid} from '@mui/material'

function MuiLayout() {
  return (
    <>
      <MuiAppBar />
      <MuiHero />
      <Box width={{sm: "100%", md: "75%", lg:"50%"}} margin="auto" p={2}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}><MuiCard/></Grid>
          <Grid item xs={12} sm={6} md={4}><MuiCard/></Grid>
          <Grid item xs={12} sm={6} md={4}><MuiCard/></Grid>
          <Grid item xs={12} sm={6} md={4}><MuiCard/></Grid>
          <Grid item xs={12} sm={6} md={4}><MuiCard/></Grid>
          <Grid item xs={12} sm={6} md={4}><MuiCard/></Grid>
          <Grid item xs={12} sm={6} md={4}><MuiCard/></Grid>
          <Grid item xs={12} sm={6} md={4}><MuiCard/></Grid>
          <Grid item xs={12} sm={6} md={4}><MuiCard/></Grid>
        </Grid>
      </Box>
    </>
  );
}

export default MuiLayout;
