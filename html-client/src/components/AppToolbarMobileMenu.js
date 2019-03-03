import React from "react";
import {Menu, MenuItem, IconButton, Badge} from "@material-ui/core"
import {Mail, Notifications, AccountCircle} from "@material-ui/icons"

const AppToolbarMobileMenu = ({anchor, onClick}) => {
    const isOpen = Boolean(anchor);
    return (
        <Menu anchorEl={anchor}
              anchorOrigin={{vertical: 'top', horizontal: 'right'}}
              transformOrigin={{vertical: 'top', horizontal: 'right'}}
              open={isOpen}
              onClose={onClick}>
            <MenuItem onClick={onClick}>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <Mail/>
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem onClick={onClick}>
                <IconButton color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <Notifications/>
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={onClick}>
                <IconButton color="inherit">
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    )
};

export default AppToolbarMobileMenu;
