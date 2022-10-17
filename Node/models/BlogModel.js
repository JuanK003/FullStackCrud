// importar la conexion

import db from "../database/db"
 // importamos sequelize
import { DataType } from "sequelize"

const BlogModel = db.define(
    'blogs', 
    {
        title:{type: DataTypes.STRING},
        content:{type: DataTypes.STRING},
    }
)

export default BlogModel;