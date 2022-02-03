import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ({
}) => {
  return (
    <div style={{ paddingBottom: 20 }}>
      <AppBar position="static">
        <Toolbar>
          EMEI Aristides Nogueira - RETORNO DAS AULAS PRESENCIAIS 2022
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
