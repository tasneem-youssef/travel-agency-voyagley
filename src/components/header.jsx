import { Link } from "@mui/joy";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import ModalClose from "@mui/joy/ModalClose";
import { SlMenu } from "react-icons/sl";
const Header = () => {
  const [winwidth, setWinwidth] = React.useState(window.innerWidth);
React.useEffect(()=>{
    setWinwidth(window.innerWidth);
})

  const [open, setOpen] = React.useState(false);

  return (
    <div className="Header">
      <a href="/" className="logo zain-black">
        Voyagley
      </a>
      <div className="navitems-container">
        <IconButton className={winwidth<830 ?"burgerMenu":"burgerMenu hide"} onClick={() => setOpen(true)}>
          <SlMenu />
        </IconButton>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              ml: "auto",
              mt: 1,
              mr: 2,
            }}
          >
            <ModalClose id="close-icon" sx={{ position: "initial",'&:hover':{backgroundColor:"transparent"}}} />
          </Box>

          <List
            id="drawer"
            size="lg"
            component="nav"
          >
            <ListItemButton className="DrawerItem" sx={{ fontWeight: "lg" }}>
              <a href="/" className="navitem">
                Home
              </a>
            </ListItemButton>
            <ListItemButton className="DrawerItem">
              <a href="/trips" className="navitem">
                trips
              </a>
            </ListItemButton>
            <ListItemButton className="DrawerItem">
              <a href="/destinations" className="navitem">
                destinations
              </a>
            </ListItemButton>
            <ListItemButton className="DrawerItem">
              <a href="/hotels" className="navitem">
                Hotels
              </a>
            </ListItemButton>

            <ListItemButton className="DrawerItem">
              <a href="/contact" className="navitem">
                Contact Us
              </a>
            </ListItemButton>
          </List>
        </Drawer>

      <div className={winwidth<830?"hide":""}>
          <Link href="/" className="navitem">
          Home
        </Link>
        <Link href="/trips" className="navitem">
          trips
        </Link>
        <Link href="/destinations" className="navitem">
          destinations
        </Link>
        <Link href="/hotels" className="navitem">
          Hotels
        </Link>
        <Link href="/contact" className="navitem">
          Contact Us
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Header;
