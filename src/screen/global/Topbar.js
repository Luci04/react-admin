import React, { useContext } from 'react'
import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../theme';
import Input from '@mui/material';
import { LightModeOutlined } from '@mui/icons-material';
import { DarkModeOutlined } from '@mui/icons-material';
import { NotificationsOutlined } from '@mui/icons-material';
import { SettingsOutlined } from '@mui/icons-material';
import { SearchOutlined } from '@mui/icons-material';
import { PersonOutline } from '@mui/icons-material';
import { borderRadius } from '@mui/system';


export const Topbar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return <Box display="flex" justifyContent="space-between" p={2}>
        {/* Search Bar */}
        <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px" >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder={"Search"} />
            <IconButton type="button" sx={{ p: 1 }} >
                <SearchOutlined />
            </IconButton>
        </Box>

        {/* {Icons} */}

        <Box display="flex" >
            <IconButton onClick={colorMode.toggleColorMode} >
                {theme.palette.mode === 'dark' ? <DarkModeOutlined /> :
                    <LightModeOutlined />
                }
            </IconButton>

            <IconButton>
                <NotificationsOutlined />
            </IconButton>

            <IconButton>
                <SettingsOutlined />
            </IconButton>

            <IconButton>
                <PersonOutline />
            </IconButton>
        </Box>
    </Box>
}
