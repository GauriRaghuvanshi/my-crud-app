import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { TextField, Button, Paper, Typography, Box, Snackbar, Alert } from "@mui/material";
import { useCreatePost, useUpdatePost } from "../hooks/usePosts";

const Create = () => {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const createPost = useCreatePost();
  const updatePost = useUpdatePost();

  useEffect(() => {
    if (id) {
      const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
      const postToEdit = storedPosts.find((p) => p.id == id);
      if (postToEdit) {
        setTitle(postToEdit.title);
        setBody(postToEdit.body);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    let lastId = storedPosts.length > 0 ? Math.max(...storedPosts.map((p) => p.id)) : 100;

    const newPost = {
      id: id ? parseInt(id) : lastId + 1,  // Keep ID consistent
      title,
      body,
    };

    if (id) {
      // Update Post
      storedPosts = storedPosts.map((p) => (p.id == id ? newPost : p));
      updatePost.mutate({ id, post: newPost });
    } else {
      // Create Post
      storedPosts.push(newPost);
      createPost.mutate(newPost);
    }

    localStorage.setItem("posts", JSON.stringify(storedPosts));

    setOpenSnackbar(true);
    setTimeout(() => {
      router.push("/"); 
    }, 1000);
  };

  return (
    <Paper sx={{ maxWidth: 500, p: 4, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        {id ? "Edit Post" : "Create Post"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Button type="submit" variant="contained" color="primary">
            {id ? "Update" : "Add"} Post
          </Button>
          <Button variant="outlined" color="secondary" onClick={() => router.push("/")}>
            Cancel
          </Button>
        </Box>
      </form>

      <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={() => setOpenSnackbar(false)}>
        <Alert severity="success">{id ? "Post Updated" : "Post Created"} Successfully!</Alert>
      </Snackbar>
    </Paper>
  );
};

export default Create;
