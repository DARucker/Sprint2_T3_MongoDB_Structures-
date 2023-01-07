db.createCollection('customers', {
    validator: {
        $jsonSchema:{
            bsonType: "object",
            required: ["name", "email", "reg_date", "address"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "this should be of type string and is required"
                },
                email: {
                    bsonType: "string",
                    description: "this should be of type string and is required"
                },
                reg_date: {
                    bsonType: "timestamp",
                    description: "this should be of type string and is required"
                },
                address: {
                    bsonType: "object",
                    description: "this should be of type object and is required",
                    required: ["street", "floor", "door", "city", "zip", "phone", "fax", "country"],
                    properties: {
                        street: {
                            bsonType: "string",
                            description: "this should be of type string and is required"
                        },
                        floor: {
                            bsonType: "string",
                            description: "this should be of type string and is required"
                        },
                        door: {
                            bsonType: "string",
                            description: "this should be of type string and is required"
                        },
                        city: {
                            bsonType: "string",
                            description: "this should be of type string and is required"
                        },
                        zip: {
                            bsonType: "string",
                            description: "this should be of type string and is required"
                        },
                        phone: {
                            bsonType: "string",
                            description: "this should be of type string and is required"
                        },
                        fax: {
                            bsonType: "string",
                            description: "this should be of type string and is required"
                        },
                        country: {
                            bsonType: "string",
                            description: "this should be of type string and is required"
                        }
                    }
                },
                refered: {
                    bsonType: "string",
                    description: "this should be of type string and is optional"
                },
            }
        }
    }    
})