import { Box, Button, ButtonGroup, Container, Drawer } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import { useColorModeContext } from "../../providers/ColorModeProvider";

type Props = {
  drawerOpen: boolean;
  onClose: (event: React.KeyboardEvent | React.MouseEvent) => void;
};

export const SettingsDrawer = ({ drawerOpen, onClose }: Props) => {
  const { t } = useTranslation();
  const { colorMode, setColorMode } = useColorModeContext();

  return (
    <Drawer
      anchor="right"
      // PaperProps={{ sx: { bgcolor: theme.palette.secondary.dark } }}
      open={drawerOpen}
      onClose={onClose}
    >
      <Container>
        <Box sx={{ bgcolor: "secondary", p: 1 }}>
          <ButtonGroup variant="outlined" sx={{ bgcolor: "secondary", m: 1 }}>
            <Button
              disabled={colorMode === "light"}
              onClick={() => setColorMode("light")}
              startIcon={<LightModeIcon />}
            >
              {t("system.light")}
            </Button>
            <Button
              disabled={colorMode === "system"}
              onClick={() => setColorMode("system")}
              startIcon={<SettingsSystemDaydreamIcon />}
            >
              {t("system.system")}
            </Button>
            <Button disabled={colorMode === "dark"} onClick={() => setColorMode("dark")} startIcon={<DarkModeIcon />}>
              {t("system.dark")}
            </Button>
          </ButtonGroup>
        </Box>
      </Container>
    </Drawer>
  );
};
