import React from 'react'
import './styles.css'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

/**
 * type: possible values: primary, danger, success, info, 
 */
export default ({ icon, name, value, type, action }) => (
    <Card className={type}>
        <CardContent>
            <Typography variant="headline" component="h2">
                {icon} {value}
            </Typography>
            <Typography color="textSecondary">
                {name}
            </Typography>
        </CardContent>
        {action &&
            <CardActions>
                <Button onClick={action} size="small">Ver discurso</Button>
            </CardActions>}
    </Card>

)

