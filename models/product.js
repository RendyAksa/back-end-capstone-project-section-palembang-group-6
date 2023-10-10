"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Product.belongsTo(models.User, {
				foreignKey: "userId",
				as: "user",
			});
		}
	}
	Product.init(
		{
			title: DataTypes.STRING,
			image: DataTypes.STRING,
			description: DataTypes.TEXT,
			price: DataTypes.DECIMAL,
		},
		{
			sequelize,
			modelName: "Product",
		}
	);
	return Product;
};
