import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { SettingsDrawer } from "./SettingsDrawer";
import { useAppTheme } from "../../useAppTheme";

type NavItem = {
  to: string;
  label: string;
};

export const Header = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [drawerToggle, setDrawerToggle] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { to: "/", label: t("nav.popular") },
      { to: "/top-rated", label: t("nav.top-rated") },
    ],
    [t],
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDrawerToggle = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerToggle(open);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MovieFilterIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MOVIE APP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navItems.map((navItem) => (
                <MenuItem
                  key={navItem.label}
                  component={NavLink}
                  to={navItem.to}
                  onClick={handleCloseNavMenu}
                  sx={{ "&.active": { color: theme.palette.secondary.main } }}
                >
                  <Typography textAlign="center">{navItem.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <MovieFilterIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MOVIE APP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navItems.map((navItem) => (
              <Button
                key={navItem.label}
                onClick={handleCloseNavMenu}
                component={NavLink}
                to={navItem.to}
                sx={{ my: 2, color: "white", display: "block", "&.active": { color: theme.palette.secondary.main } }}
              >
                {navItem.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={t("system.open-settings").toString()}>
              <IconButton onClick={handleDrawerToggle(true)} sx={{ p: 0 }}>
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <SettingsDrawer drawerOpen={drawerToggle} onClose={handleDrawerToggle(false)} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
