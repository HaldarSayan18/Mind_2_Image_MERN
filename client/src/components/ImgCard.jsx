import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import reptile from '../assets/reptile.jpg';

const ImgCard = () => {
    return (
        <Card sx={{ width: "100%" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={reptile}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="body1" sx={{ color: 'text.primary' }}>
                        Prompt
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        author
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ImgCard
