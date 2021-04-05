const bcrypt = require("bcrypt");

const data = {
	users: [
		{
			name: "Saket Pawar",
			email: "admin@admin.com",
			password: bcrypt.hashSync("1234", 8),
			isAdmin: true,
		},
		{
			name: "Kalyani Pawar",
			email: "kalyani@admin.com",
			password: bcrypt.hashSync("1234", 8),
			isAdmin: false,
		},
	],
	products: [
		{
			_id: "1",
			name: "Nike Slim Shirt",
			category: "Shirts",
			image: "/images/p1.jpg",
			price: 120,
			brand: "Nike",
			rating: 4.5,
			numReviews: 10,
			description: "high quality product",
			countInStock: 20,
		},
		{
			_id: "2",
			name: "Adidas Fit Shirt",
			category: "Shirts",
			image: "/images/p2.jpg",
			price: 100,
			brand: "Adidas",
			rating: 4.0,
			countInStock: 10,
			numReviews: 10,
			description: "high quality product",
		},
		{
			_id: "3",
			name: "Lacoste Free Shirt",
			category: "Shirts",
			image: "/images/p3.jpg",
			price: 220,
			brand: "Lacoste",
			rating: 4.8,
			numReviews: 17,
			description: "high quality product",
			countInStock: 8,
		},
		{
			_id: "4",
			name: "Nike Slim Pant",
			category: "Pants",
			image: "/images/p4.jpg",
			price: 78,
			brand: "Nike",
			rating: 4.5,
			numReviews: 14,
			description: "high quality product",
			countInStock: 8,
		},
		{
			_id: "5",
			name: "Puma Slim Pant",
			category: "Pants",
			image: "/images/p5.jpg",
			price: 65,
			brand: "Puma",
			rating: 4.5,
			numReviews: 10,
			description: "high quality product",
			countInStock: 8,
		},
		{
			_id: "6",
			name: "Adidas Fit Pant",
			category: "Pants",
			image: "/images/p6.jpg",
			price: 139,
			brand: "Adidas",
			rating: 4.5,
			numReviews: 15,
			description: "high quality product",
			countInStock: 8,
		},
	],
};
module.exports = data;
