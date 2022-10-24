import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {
    const[blogs, setBlog] = useState([])
    useEffect(
        () => {
            getBlogs()
        },[]
    )

    // Creando procedimiento para mostrar todos
    //Los Blogs

    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    // Creando procedimiento para borrar un blog

    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`)
        getBlogs()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>Crear</Link>
                    <table className='table-primary'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs.map((blog)=>(
                                    <tr key={blog.id}>
                                        <td>{blog.title}</td>
                                        <td>{blog.content}</td>
                                        <td>
                                            <Link to={`/edit/${blog.id}`}
                                            className="btn bnt-info">Editar</Link>
                                            <button onClick={() => deleteBlog(blog.id)}
                                            className="btn btn-danger">
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowBlogs