import React, {useState} from 'react';
import {withStyles, AppBar, Toolbar, IconButton, Typography, Badge, InputBase, Tab, Tabs} from '@material-ui/core';
import {
  Menu as MenuIcon, Search as SearchIcon, Mail as MailIcon, Notifications as NotificationsIcon,
  AccountCircle, More as MoreIcon
} from '@material-ui/icons';
import AppToolbarMobileMenu from './AppToolbarMobileMenu';
import AppToolbarMenu from './AppToolbarMenu';
import styles from './AppToolbar.styles'

const AppToolbar = ({classes}) => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [tab, setTab] = useState('one');
  const isMenuOpen = Boolean(menuAnchor);
  const handleMenuOpen = (event) => setMenuAnchor(event.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);
  const handleMobileMenuOpen = (event) => setMobileMenuAnchor(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMenuAnchor(null);
  const handleTabChange = (_, value) => setTab(value);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
            <MenuIcon/>
          </IconButton>
          <div className={classes.grow}/>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon/>
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon/>
              </Badge>
            </IconButton>
            <IconButton aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={handleMenuOpen}
                        color="inherit">
              <AccountCircle/>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
              <MoreIcon/>
            </IconButton>
          </div>
        </Toolbar>
        <Toolbar>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            REDMINE-NEXT
          </Typography>
        </Toolbar>
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab value="new" label="+"/>
          <Tab value="overview" label="Overview"/>
          <Tab value="activity" label="Activity"/>
          <Tab value="issues" label="Issues"/>
          <Tab value="spent_time" label="Spent time"/>
          <Tab value="grantt" label="Gantt"/>
          <Tab value="calendar" label="Calendar"/>
          <Tab value="news" label="News"/>
          <Tab value="documents" label="Documents"/>
          <Tab value="wiki" label="Wiki"/>
          <Tab value="files" label="Files"/>
          <Tab value="repository" label="Repository"/>
          <Tab value="settings" label="Settings"/>
        </Tabs>
      </AppBar>
      <AppToolbarMobileMenu anchor={mobileMenuAnchor} onClick={handleMobileMenuClose}/>
      <AppToolbarMenu anchor={menuAnchor} onClick={handleMenuClose}/>
    </div>
  );
};

export default withStyles(styles)(AppToolbar);
