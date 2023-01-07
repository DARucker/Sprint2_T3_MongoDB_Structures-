db.createCollection('orders', {
    validator: {
        $jsonSchema:{
            bsonType: "object",
            required: ["date", "delivery", "products", "total_amount", "id_branch", "delivered_by", "delivered_time"],
            properties: {
                date: {
                    bsonType: "timestamp",
                    description: "this should be timestamp object and is required"
                },
                delivery: {
                    bsonType: "string",
                    enum: ["delivery", "take_away"],
                    description: "this should be one of enum type and is required"
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
                        description: "must contain the product_id and the quantity for each",
                        properties: {
                            id_product: {
                                bsonType: "objectId",
                                description: "this should be of type objectId and is required"
                            },
                            quantity: {
                                bsonType: "int",
                                minimum: 0,
                                description: "this should be of type int and is required"
                            }
                        }
                    }
                },
                total_amount: {
                    bsonType: "double",
                    description: "this should be a double and is required"
                },
                id_branch: {
                    bsonType: "objectId",
                    description: "this should be of type objectId and is required"
                },
                delivered_by:{
                    bsonType: "string",
                    description: "this should be of type string and is required"
                },
                delivered_time: {
                    bsonType: "timestamp",
                    description: "this should be a timestamp object and is required"
                }
            }
        }
    }    
})

