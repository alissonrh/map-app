import { Model, INTEGER, STRING, GEOMETRY } from 'sequelize';
import db from '.'; // './index.ts'


class Location extends Model {
  id!: number;
  name!: string;
  location_id!: number;
  boundaries!: string;
}

Location.init({
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
  boundaries: {
    type: GEOMETRY,
    allowNull: false,
}
}, {
  sequelize: db,
  modelName: 'locations',
  timestamps: false
})

export default Location;