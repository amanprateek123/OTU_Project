import React,{useEffect, useState} from 'react'
import './Nav.scss'
import {Button,List,ListItem,Divider,Drawer} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import img from './logo.png'

export default function Nav() {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  function teamScroll(){
    window.scroll({
      top: document.body.offsetHeight*(7/9.5),
      left: 0, 
      behavior: 'smooth',
    });
  }

  function aboutScroll (){
    window.scroll({
      top: document.body.offsetHeight*(1/2.8),
      left: 0, 
      behavior: 'smooth',
    });
  }
   
    const [classes,setClasses] = useState("")
    const listenScrollEvent = e => {
        if (window.scrollY > 85) {
          setClasses("black")
        } else {
            setClasses("")
        }
      }
      useEffect(()=>{
        window.addEventListener('scroll',listenScrollEvent)
      },[])
      const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <div
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          className="side"
        >
          <List>
          <ListItem className="side_list">
             Home
          </ListItem>
          <Divider />
          <ListItem className="side_list">
             Career 
          </ListItem>
          <Divider />
          <ListItem className="side_list" onClick={aboutScroll} >
             About
          </ListItem>
          <Divider />
          <ListItem className="side_list" onClick={teamScroll} >
             Team
          </ListItem>
          <Divider />
          <ListItem className="side_list" onClick={handleScroll}>
             Contact
          </ListItem>
          <Divider />
          </List>
        </div>
      );
          
    return (
        <div className={classes+" navbar"} >
            <div className="nav">
                 <div className="imgst" style={{backgroundImage:`url(${img})`}} >
                
                </div>
                <div className="nav_tab" >
                   <MenuIcon onClick={toggleDrawer('right', true)} style={{color:'blue'}} />
                </div>
                <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
                   {list('right')}
                </Drawer>
                <div className="img" style={{backgroundImage:`url(${img})`}} >
                
                </div>
                <div className="btns" >
                 {/* <Button variant="contained" color="inherit" className="btn" >Sign In</Button>
    <Button variant="contained" color="inherit" className="btn" >Sign Up</Button>*/}
                  <Button variant="contained" color="inherit" className="btn" onClick={handleScroll} >Contact Us</Button>
                </div>
            </div>
        </div>
    )
}
