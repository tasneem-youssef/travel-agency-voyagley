import { Link } from "@mui/joy";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import ModalClose from "@mui/joy/ModalClose";
import { SlMenu } from "react-icons/sl";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
const Header = () => {
  /*getting scroll height*/
  const [scrollHeight, setScrollHeight] = useState(0);
  useEffect(() => {
    const getHeight = () => {
      const height = window.scrollY;
      setScrollHeight(height);
    };
    getHeight();
    window.addEventListener("scroll", getHeight);
    return () => {
      window.removeEventListener("scroll", getHeight);
    };
  }, []);

  /*getting window width for responsive design*/
  const [winwidth, setWinwidth] = useState(window.innerWidth);
  useEffect(() => {
    setWinwidth(window.innerWidth);
  }, []);
  const [open, setOpen] = useState(false);
  return (
    <div className={`Header ${scrollHeight >= 960 ? "header-scrolled" : ""} `}>
      <a href="/" className="logo zain-black">
        Voyagley
      </a>
      <div className="navitems-container">
        <IconButton
          className={winwidth < 830 ? "burgerMenu" : "burgerMenu hide"}
          onClick={() => setOpen(true)}
        >
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
            <ModalClose
              id="close-icon"
              sx={{
                position: "initial",
                "&:hover": { backgroundColor: "transparent" },
              }}
            />
          </Box>

          <List id="drawer" size="lg" component="nav">
            <ListItemButton className="DrawerItem" sx={{ fontWeight: "lg" }}>
              <a href="/travel-agency-voyagley/" className="navitem">
                Home
              </a>
            </ListItemButton>
            <ListItemButton className="DrawerItem">
              <a
                href="/travel-agency-voyagley/trips"
                className="navitem"
              >
                trips
              </a>
            </ListItemButton>
            <ListItemButton className="DrawerItem">
              <a
                href="/travel-agency-voyagley/destinations"
                className="navitem"
              >
                destinations
              </a>
            </ListItemButton>
            <ListItemButton className="DrawerItem">
              <a
                href="/travel-agency-voyagley/hotels"
                className="navitem"
              >
                Hotels
              </a>
            </ListItemButton>
            <ListItemButton className="DrawerItem">
              <a
                href="/travel-agency-voyagley/activities"
                className="navitem"
              >
                Activities
              </a>
            </ListItemButton>

            <ListItemButton className="DrawerItem">
              <a href="#" className="navitem">
                Contact Us
              </a>
            </ListItemButton>
          </List>
        </Drawer>

        <div className={winwidth < 830 ? "hide" : ""}>
          <Link
            href="/travel-agency-voyagley/"
            className="navitem"
          >
            Home
          </Link>

          <Link
            href="/travel-agency-voyagley/trips"
            className="navitem"
          >
            trips
          </Link>
          <Link
            href="/travel-agency-voyagley/destinations"
            className="navitem"
          >
            destinations
          </Link>
          <Link
            href="/travel-agency-voyagley/hotels"
            className="navitem"
          >
            Hotels
          </Link>
          <Link
            href="/travel-agency-voyagley/activities"
            className="navitem"
          >
            Activities
          </Link>
          <Link href="#contact" className="navitem">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
