import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Snackbar, Alert } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { fetchPosts } from "../utils/api";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const apiPosts = await fetchPosts();
        const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
        const allPosts = [...apiPosts, ...storedPosts];
        const uniquePosts = Array.from(new Map(allPosts.map(post => [post.id, post])).values());

        uniquePosts.sort((a, b) => a.id - b.id);
        setPosts(uniquePosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    if (router.query.postCreated) {
      setOpenSnackbar(true);
    }
  }, [router.query.postCreated]);

  const handleEdit = (post) => {
    router.push({ pathname: "/create", query: { id: post.id } });
  };

  const handleDelete = (id) => {
    let storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    
    storedPosts = storedPosts.filter((post) => post.id !== id);
  
    storedPosts = storedPosts.map((post, index) => ({
      ...post,
      id: index + 1, 
    }));
  
    localStorage.setItem("posts", JSON.stringify(storedPosts));
    
    setPosts(storedPosts);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#2F4F4F" }}> 
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Title</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Body</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          {/* ✅ Alternate Row Colors */}
          <TableBody>
            {posts.map((post, index) => (
              <TableRow key={post.id} sx={{ backgroundColor: index % 2 === 0 ? "#708090" : "#B0C4DE" }}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(post)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(post.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
        <Alert severity="success" onClose={() => setOpenSnackbar(false)}>Post Created Successfully!</Alert>
      </Snackbar>
    </>
  );
};

export default Home;
