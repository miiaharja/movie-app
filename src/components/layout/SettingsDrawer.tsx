import { Box, Button, ButtonGroup, Drawer, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  drawerOpen: boolean;
  onClose: (event: React.KeyboardEvent | React.MouseEvent) => void;
};

export const SettingsDrawer = ({ drawerOpen, onClose }: Props) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Drawer
      anchor="right"
      // PaperProps={{ sx: { bgcolor: theme.palette.secondary.dark } }}
      open={drawerOpen}
      onClose={onClose}
      sx={{ bgcolor: "secondary" }}
    >
      <Box sx={{ bgcolor: "secondary" }}>
        <ButtonGroup variant="outlined" sx={{ color: "secondary" }}>
          <Button>{t("system.light")}</Button>
          <Button>{t("system.system")}</Button>
          <Button>{t("system.dark")}</Button>
        </ButtonGroup>
      </Box>
    </Drawer>
  );
};
