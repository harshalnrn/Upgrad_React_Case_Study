import React,{Component} from 'react';
import './Home.css';
import profilePic from '../../../src/photo.jpg';
import {withStyles} from '@material-ui/core/styles';
import imageData from '../../common/imageData.js';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from'@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from'@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox  from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    root: {
        
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
   
    gridListImages: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
     },
     title: {
        color: theme.palette.primary.light,
     },
     avatar: {
        margin: 25,      
      }

});

class Home extends Component {




    render(){
        const {
            classes
        }
        =this.props;

        return(

<div>
    <GridList cellHeight={500} cols={2} className={classes.gridListImages} spacing={4} >

    
       
{
    
imageData.map(image =>(
<Grid key={image.id}>   
        
<Grid container direction="row" alignItems="center">                     {/* remember why key is needed for each element within map */}

<Grid item><Avatar alt="Remy Sharp" src={profilePic} className={classes.avatar}></Avatar></Grid>

 <Grid item xs={12} sm container> 

<Grid container direction="column" spacing={2}>

<Grid item xs>
<Typography variant="caption" component="caption"  style={{padding:0,textAlign:'left'}}>harshal_nrn</Typography>
</Grid>
<Grid item xs>
<Typography variant="caption" component="caption"  style={{padding:0,textAlign:'left'}}>03/10/2019 16:08:08</Typography>
</Grid>


</Grid>
</Grid>
</Grid>

  
    
   <img className="image-poster" src={image.image_url} alt={image.title}/>

   <Grid container direction="column" alignItems="left" >
<Grid item xs ><Typography variant="caption" component="caption"  style={{padding:0,textAlign:'center',align:'center',display:'inline',padding:'18px'}}>My profile pic</Typography></Grid>
<Grid item xs ><Typography variant="caption" component="caption"  style={{padding:0,textAlign:'center',align:'center',display:'inline',padding:'18px'}}>#timePass</Typography></Grid>
<Grid item xs ><Typography variant="caption" component="caption"  style={{padding:0,textAlign:'center',align:'center',display:'inline',padding:'18px'}}>2 likes</Typography></Grid>

 </Grid>


</Grid>

)
)

}
    </GridList>
</div>

        )
    }
}

export default withStyles(styles)(Home);





