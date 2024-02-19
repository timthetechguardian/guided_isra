import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Reusable Card Component
const CustomCard = ({ title, description, buttonText, onButtonClick }) => (
  <Card variant="outlined">
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={onButtonClick}>{buttonText}</Button>
    </CardActions>
  </Card>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ width: 350, height: 500 }}>
      <CustomCard
        title="Word of the Day"
        description='well meaning and kindly. "a benevolent smile"'
        buttonText="View"
        onButtonClick={() => console.log("Learn More Clicked")}
      />
    </Box>
  );
}
