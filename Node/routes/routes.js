import express from "express";
import { 
    getAllBlogs, 
    getBlog, 
    createBlog, 
    updateBlog, 
    deleteBlog
} from "../controllers/BlogController.js";

const router = express.Router();

router.get('/', getAllBlogs);

router.get('/:id', getBlog);

router.get('/', createBlog);

router.get('/:id', updateBlog);

router.get('/:id', deleteBlog);

export default router;