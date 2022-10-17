// Importanto Modelo
import BlogModel from "../models/BlogModel";

//Métodos para el CRUD
// Mostrar Todo
export const getAllBlogs = async (req, res) => {
    try{
        const blogs = await BlogModel.findAll();
        res.json(blogs);
    }
    catch (error){
        res.json({message: error.message});
    }
};

//Mostrar un Registro
export const getBlog = async(req, res) => {
    try{
        const blog = await BlogModel.findAll(
            {
                where: 
                {
                    id:req.params.id
                }
            }
        );
        res.json(blog[0]);
    }
    catch(error){
        res.json({message: error.message});
    }
};

//Crear un Registro
export const createBlog = async (req, res) => {
    try{
        await BlogModel.create(req.body);
        res.json({message: "Registro Creado con éxito!"});
    }
    catch(error){
        res.json({message: error.message});
    }
};

//Actuaizar un Registro
export const updateBlog = async (req, res) => {
    try{
        await BlogModel.update(req.body,
            {
                where:
                {
                    id: req.body.params.id
                }
            }
        )
        res.json({message: "Registro Actualizado con éxito!"});
    }
    catch(error){
        res.json({message: error.message});
    }
};

//Eliminar un Registro
export const deleteBlog = async (req, res) => {
    try{
        await BlogModel.destroy(req.body,
            {
                where:
                {
                    id: req.body.params.id
                }
            }
        )
        res.json({message:"Registro Eliminado con éxito!"});
    }
    catch(error){
        res.json({message: error.message});
    }
};