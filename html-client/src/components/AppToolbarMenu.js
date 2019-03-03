import React from "react";
import {Menu, MenuItem} from "@material-ui/core";


const AppToolbarMenu = ({anchor, onClick}) => {
    const isOpen = Boolean(anchor);
    return (
        <Menu anchorEl={anchor}
              anchorOrigin={{vertical: 'top', horizontal: 'right'}}
              transformOrigin={{vertical: 'top', horizontal: 'right'}}
              open={isOpen}
              onClose={onClick}>
            <MenuItem onClick={onClick}>Profile</MenuItem>
            <MenuItem onClick={onClick}>My account</MenuItem>
        </Menu>
    )
};

export default AppToolbarMenu;
