import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

const Navbar = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        CRUD APP
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Link href="/" passHref>
          <Button sx={{ color: "black" }}>Home</Button>
        </Link>
        <Link href="/create" passHref>
          <Button sx={{ color: "black" }}>Create Post</Button>
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
