import { useState, useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const PostForm = ({ onSubmit, defaultValues = {} }) => {
  const [formData, setFormData] = useState({
    title: defaultValues.title || "",
    body: defaultValues.body || "",
  });

  useEffect(() => {
    setFormData({
      title: defaultValues.title || "",
      body: defaultValues.body || "",
    });
  }, [defaultValues]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.body) return;
    onSubmit(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        {defaultValues.id ? "Edit Post" : "Create Post"}
      </Typography>
      <TextField
        fullWidth
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Body"
        name="body"
        value={formData.body}
        onChange={handleChange}
        margin="normal"
        required
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        {defaultValues.id ? "Update Post" : "Submit"}
      </Button>
    </Box>
  );
};

export default PostForm;
