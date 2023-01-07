db.createCollection('products', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name","description","image","price"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "this should be of type string and is required"
                },
                description: {
                    bsonType: "string",
                    description: "this should be of type string and is required"
                },
                image: {
                    bsonType: "string",
                    description: "this should be of type string and is required"
                },
                price: {
                    bsonType: "double",
                    description: "this should be a double and is required"
                },
                categ_pizza: {
                    bsonType: "string",
                    enum: ["piedra", "media_masa", "null"],
                    description: "accepted values: piedra, media_masa, null"
                },
            }
        }
    }
})