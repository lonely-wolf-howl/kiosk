import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize';

const itemType = {
  COFFEE: 'coffee',
  DESERT: 'desert',
  JUICE: 'juice',
  TEA: 'tea',
};

class Items extends Model {}

Items.init(
  {
    item_id: {
      allowNull: false, // NOT NULL
      autoIncrement: true, // AUTO_INCREMENT
      primaryKey: true, // PK
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false, // NOT NULL
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false, // NOT NULL
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    name: {
      allowNull: false, // NOT NULL
      type: DataTypes.STRING,
      unique: true, // UNIQUE
    },
    option_id: {
      allowNull: true,
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    price: {
      allowNull: false, // NOT NULL
      type: DataTypes.INTEGER,
    },
    type: {
      allowNull: false, // NOT NULL
      type: DataTypes.ENUM([itemType.COFFEE, itemType.DESERT, itemType.JUICE, itemType.TEA]),
    },
    amount: {
      allowNull: true,
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'Items',
  }
);

export { Items, itemType };
