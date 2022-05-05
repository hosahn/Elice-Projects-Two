import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Cardlist() {
  return (
    <>
{itemData.map((item) => (
  
<Card sx={{ maxWidth: 200 } } >
      <CardMedia
        component="img"
        height="140"
        image={item.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.author}
        </Typography>
      </CardContent>
      <CardActions>
        
        {
                <IconButton
                sx={{ color: 'rgba(215, 25, 235, 0.54)' }}
                a target="_blank" href={item.something}
              >
                <GitHubIcon />
              </IconButton>
              
            }
            {
                <IconButton
                sx={{ color: 'rgba(25, 25, 255, 0.54)' }}
                a target="_blank" href={item.github}
              >
                <GitHubIcon />
              </IconButton>
              
            }
      </CardActions>
      
    </Card>
     ))}



    
    </>
  );
}

const itemData = [
  {
    img: 'logo512.png',
    title: '이호산(팀장)',
    author: 'BE',
    github: 'https://naver.com',
    something: 'https://google.com',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'logo512.png',
    title: '노서현',
    author: 'FE',
    github: 'https://naver.com',
  },
  {
    img: 'https://ifh.cc/v-cg80Gr',
    title: '심은지',
    author: 'BE',
    github: 'https://naver.com',
  },
  {
    img: 'https://ifh.cc/v-cg80Gr',
    title: '명하준',
    author: 'FE',
    github: 'https://naver.com',
  },
  {
    img: 'https://ifh.cc/v-cg80Gr',
    title: '김효진',
    author: 'FE',
    github: 'https://naver.com',
  },
  
  
];
