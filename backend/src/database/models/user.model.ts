import { Model, INTEGER, STRING, GeometryDataType, GEOMETRY } from 'sequelize';
import db from '.'; // './index.ts'
import Location from './location.model';


class User extends Model {
  id!: number;
  name!: string;
  location_id!: number;
  position!: GeometryDataType;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  location_id: {
    type: INTEGER,
    allowNull: true,
  },
  position: {
    type: GEOMETRY,
    allowNull: false,
}
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false
});

User.belongsTo(Location, {foreignKey: 'location_id', as: 'location'})

export default User;