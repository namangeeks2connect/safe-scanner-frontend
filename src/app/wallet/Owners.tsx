import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

function Owners() {
  return (
    <Paper sx={{p: 2}}>
      <Stack spacing={2} direction="row" marginBottom={3} alignItems="center">
        <Stack spacing={1} flexGrow={1}>
          <Typography fontWeight="medium">Threshold</Typography>
          <Typography color="text.disabled" variant="body2">
            Number of owners who are required to confirm any transaction
          </Typography>
        </Stack>
        <Chip
          label="3 Owners"
          color="black"
          sx={{color: "primary.light", borderRadius: 1, height: 24}}
        />
      </Stack>
      <Grid container columnSpacing={4} rowSpacing={2}>
        {[...Array(12)].map((_, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Stack direction={"row"} spacing={2} alignItems="center">
              <Avatar
                alt=""
                sx={{width: 20, height: 20}}
                src="/images/account-key 1 (2).svg"
              />
              <Stack flexGrow={1} spacing={0.5}>
                <Typography
                  variant="subtitle2"
                  color="text.disabled"
                  fontWeight="medium"
                >
                  Owner 1
                </Typography>
                <Typography color="text.secondary" fontWeight="medium">
                  0x242a…6b96
                </Typography>
              </Stack>
              <IconButton>
                <ContentCopyIcon color="primary" sx={{fontSize: 20}} />
              </IconButton>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default Owners;