db.createCollection('products', {
    validator: {
        $jsonSchema:{
            bsonType: "object",
            required: ["mark", "graduation", "frame", "glass_color", "frame_color", "price", "id_supplier"],
            properties: {
                mark: {
                    bsonType: "string",
                    description: "this should be of type string and is required"
                },
                graduation: {
                    bsonType: "string",
                    description: "this should be of type string and is required"
                },
                frame: {
                    bsonType: "string",
                    description: "this should be of type string and is required"
                },
                glass_color: {
                    bsonType: "string",
                    description: "this should be of type string and is required"
                },
                frame_color: {
                    bsonType: "string",
                    description: "this should be of type string and is required"
                },
                price: {
                    bsonType: "double",
                    description: "this should be of type double and is required"
                },
                id_supplier: {
                    bsonType: "objectId",
                    description: "this should be of type objectId and is required"
                },

                    
                
            }
        }
    }    
})
