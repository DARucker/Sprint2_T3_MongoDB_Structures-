db.createCollection('suppliers', {
    validator: {
        $jsonSchema:{
            bsonType: "object",
            required: ["name", "nif", "address"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "this should be of type string and is required"
                },
                nif: {
                    bsonType: "string",
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
                }
            }
        }
    }    
})