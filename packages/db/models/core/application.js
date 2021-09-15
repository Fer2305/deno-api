import { DataTypes, Model } from 'https://deno.land/x/denodb/mod.ts'

class Application extends Model {
    static table = 'applications'
    static model = 'Application'
    static timestamps = true
    
    static fields = {
        id: { 
            primaryKey: true,
            autoIncrement: true 
        },
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    }
}

export default Application