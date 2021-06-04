import React, { useState } from 'react'
// import './App.css';
import { fade, makeStyles } from '@material-ui/core/styles';
import { 
  CssBaseline, Box, AppBar, Toolbar, InputBase, 
  Typography, Select, MenuItem 
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import CustomerPage from './CustomerPage';
import StorePanel from './StorePanel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "column",
    height: '100vh',
  },
  appbar: {
    flexGrow: 1,
  },
  toolbar: {
    flexGrow: 1,
  },
  identitySelectorTabs: {
    flexGrow: 0.9,
    borderRadius: 50,
    backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  identitySelectorTab: {
    minWidth: 0,
    margin: 5,
    flexGrow: 0.9,
    borderRadius: 50,
    // backgroundColor: fade(theme.palette.common.white, 0.25),
    // width: 30,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      // width: 50,
    }
  },
  identitySelectorBox: {
    color: 'inherit',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    // width: '100%',
    borderRadius: 50,
    // padding: theme.spacing(1),
  },
  identitySelectorSelect: {
    color: 'inherit',
    '&:before': {
      borderColor: theme.palette.common.white,
    },
    '&:after': {
      borderColor: theme.palette.common.white,
    },
    margin: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  identitySelectorSelectIcon: {
    fill: 'white',
  },
  searchBarBox: {
    position: 'relative',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
    borderRadius: 50,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    color: 'inherit',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '60ch',
      },
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,                // 這個容器長好長滿

    display: 'flex',
    flexDirection: 'column',    // flexDirection: 現在是由上到下排列
    justifyContent: 'center',   // justifyContent: 在flex方向上的排列
    alignItems: 'center',       // alignItems: 子物件在格子中的位置
    // flexGrow: 1,
    // height: '100%',

  },
}))

function App() {
  const classes = useStyles();
  const [identity, setIdentity] = useState("Customer")
  const [searchWord, setSearchWord] = useState('')
  const handleIdentityChange = (event) => {
    setIdentity(event.target.value);
  };
  const handleSearchWordChange = (event) => {
    setSearchWord(event.target.value);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appbar}
      // color="purple"
      >
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.toolbar}>
            Toolbar (Add logo here)
          </Typography>
          <Box className={classes.searchBarBox}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              className={classes.inputInput}
              placeholder="Search restaurant!"
              onChange={setSearchWord} />
          </Box>
          <Box className={classes.identitySelectorBox}>
            <Select
              className={classes.identitySelectorSelect}
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              // open={open}
              // onClose={handleClose}
              // onOpen={handleOpen}
              value={identity}
              onChange={handleIdentityChange}
              inputProps={{
                classes: {
                    icon: classes.identitySelectorSelectIcon,
                },
              }}
            >
              <MenuItem value="Customer">我想訂餐</MenuItem>
              <MenuItem value="Deliveryman">我是外送員</MenuItem>
              <MenuItem value="Store">我是店家</MenuItem>
            </Select>
          </Box>
        </Toolbar>
      </AppBar>
      {/* a place covered by appbar */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {identity == "Customer" && <CustomerPage />}
        {identity == "Deliveryman" && <Box />}
        {identity == "Store" && <StorePanel />}
      </main>
    </div>
  );
}

export default App;
