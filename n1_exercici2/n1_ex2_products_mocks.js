db.products.insertMany([
    {
        "name" : "Napolitana",
        "description" : "with slices of tomatoes",
        "image" : "napo.jpg",
        "price" : Double(12.0), 
        categ_pizza: "piedra"
    },
    {
        "name" : "Cheesburguer",
        "description" : "Haburguer with cheese",
        "image" : "cheeseburguer.jpg",
        "price" : Double(8.0)
    },
        {
        "name" : "Coke",
        "description" : "Coke",
        "image" : "coke.jpg",
        "price" : Double(3.5)
    },
])