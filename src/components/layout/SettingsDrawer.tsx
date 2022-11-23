import { Box, Button, ButtonGroup, Drawer } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  drawerOpen: boolean;
  onClose: (event: React.KeyboardEvent | React.MouseEvent) => void;
};

export const SettingsDrawer = ({ drawerOpen, onClose }: Props) => {
  const { t } = useTranslation();

  return (
    <Drawer anchor="right" open={drawerOpen} onClose={onClose} sx={{ color: "secondary" }}>
      <Box sx={{ color: "secondary" }}>
        <ButtonGroup variant="outlined" sx={{ color: "secondary" }}>
          <Button>{t("system.light")}</Button>
          <Button>{t("system.system")}</Button>
          <Button>{t("system.dark")}</Button>
        </ButtonGroup>
      </Box>
    </Drawer>
  );
};
