import { Box, Button, ButtonGroup, Drawer } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
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
      sx={{ bgcolor: "secondary" }}
    >
      <Box sx={{ bgcolor: "secondary" }}>
        <ButtonGroup variant="outlined">
          <Button disabled={colorMode === "light"} onClick={() => setColorMode("light")}>
            {t("system.light")}
          </Button>
          <Button disabled={colorMode === "system"} onClick={() => setColorMode("system")}>
            {t("system.system")}
          </Button>
          <Button disabled={colorMode === "dark"} onClick={() => setColorMode("dark")}>
            {t("system.dark")}
          </Button>
        </ButtonGroup>
      </Box>
    </Drawer>
  );
};
