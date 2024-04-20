import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function CustomCard({ content }) {
  return (
    <Card sx={content.style}>
      <CardContent>
        <div class='text-center text-red'>
        <Typography variant="subtitle1" gutterBottom>
          {content.title}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {content.num}
        </Typography>
        <Typography variant="subtitle3" gutterBottom>
          {content.content}
        </Typography>
        </div>
      
      </CardContent>
    </Card>
  );
}
