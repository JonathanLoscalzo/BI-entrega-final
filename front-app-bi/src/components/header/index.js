import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { FaChartBar } from 'react-icons/fa'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { FaHome, FaDashcube, FaFileWord, FaFileContract } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'
import './style.css';

export default class extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleClick() {
    window.open("https://github.com/JonathanLoscalzo/BI-entrega-final", "_blank")
  }

  render() {
    return (
      <div>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}>
            <div>
              <List>
                <ListItem button key="Home" onClick={() => this.props.history.push({ pathname: '/' })}>
                  <ListItemIcon><FaHome /></ListItemIcon>
                  <ListItemText primary="Home"></ListItemText>
                </ListItem>
                <ListItem button key="Stats" onClick={() => this.props.history.push({ pathname: '/Stats' })}>
                  <ListItemIcon><FaChartBar /></ListItemIcon>
                  <ListItemText primary="Stats"></ListItemText>
                </ListItem>
                <ListItem button key="Dashboard" onClick={() => this.props.history.push({ pathname: '/Dashboard' })}>
                  <ListItemIcon><FaDashcube /></ListItemIcon>
                  <ListItemText primary="Dashboard"></ListItemText>
                </ListItem>
                <ListItem button key="Ngrams" onClick={() => this.props.history.push({ pathname: '/Ngrams' })}>
                  <ListItemIcon><FaFileContract /></ListItemIcon>
                  <ListItemText primary="Ngrams"></ListItemText>
                </ListItem>
                {/* <ListItem button key="Wordcounts" onClick={() => this.props.history.push({ pathname: '/Wordcounts' })}>
                  <ListItemIcon><FaFileWord /></ListItemIcon>
                  <ListItemText primary="Wordcounts"></ListItemText>
                </ListItem> */}
              </List>
              <Divider />
              <ListItem button key="GitHub" onClick={this.handleClick}>
                <ListItemIcon><GoMarkGithub /></ListItemIcon>
                <ListItemText primary="Github Entrega"></ListItemText>
              </ListItem>
            </div>
          </div>
        </Drawer>
        <AppBar className="Header-app" position="static" color="default">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography style={{ display: "flex", alignItems: "left" }} variant="title" color="inherit">
              <FaChartBar /> BI
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

    );
  }
}
