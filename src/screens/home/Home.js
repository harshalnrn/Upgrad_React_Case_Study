import React,{Component} from 'react';
import './Home.css';
import {withStyles} from '@material-ui/core/styles';
import imageData from '../../common/imageData.js';
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
    <GridList cellHeight={350} cols={5} className={classes.gridListImages} >
{

imageData.map(image =>(
<GridListTile key={image.id}>                                    {/* remember why key is needed for each element within map */}
   <img className="image-poster" src={image.image_url} alt={image.title}/>
</GridListTile>

))

}
    </GridList>
</div>

        )
    }
}

export default withStyles(styles)(Home);





