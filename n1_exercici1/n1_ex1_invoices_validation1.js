db.createCollection('invoices', {
    validator: {
        $jsonSchema:{
            bsonType: "object",
            required: ["id_customer", "date", "seller", "products"],
            properties:{
                id_customer: {
                    bsonType: "objectId",
                    description: "this should an objectId and is required"
                },
                date: {
                    bsonType: "timestamp",
                    description: "this should be a new Timestamp() and is required"
                },
                seller: {
                    bsonType: "string",
                    description: "this should be a string and is required"
                },
                products: {
                    bsonType: ["array"],
                    minItems: 1, 
                    uniqueItems: true,
                    additionalProperties: false,
                    items: {
                        bsonType: ["object"],
                        required: ["id_product", "quantity"],
                        additionalProperties: false,
                        description: "'items' must contain the stated fields.",
                        properties: {
                            id_product: {
                                bsonType: "objectId",
                                description: "this should be an objectId and is required"
                            },
                            quantity:{
                                bsonType: "double",
                                description: "this should be a double and is required"
                            }
                        }
                    }
                }
            }
        }
    }
})
