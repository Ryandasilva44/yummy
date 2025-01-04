import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
} from "@mui/material";

const Form: React.FC = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "2rem auto",
        padding: "2rem",
        background: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ color: "#333" }}
      >
        Form Us
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent!");
        }}
      >
        {/* Name and Email in Grid */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              variant="outlined"
              name="email"
              required
            />
          </Grid>
        </Grid>

        {/* Subject */}
        <TextField
          fullWidth
          label="Subject"
          variant="outlined"
          name="subject"
          required
        />

        {/* Message */}
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          name="message"
          multiline
          rows={5}
          required
        />

        {/* Send Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            alignSelf: "center",
            padding: "0.8rem 2rem",
          }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
