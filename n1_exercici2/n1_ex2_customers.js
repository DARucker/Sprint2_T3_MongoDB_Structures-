db.createCollection('customers', {
    validator: {
        $jsonSchema:{
            bsonType: "object",
            required: ["name", "surname", "address"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "this should be of type string and is required"
                },
                surname: {
                    bsonType: "string",
                    description: "this should be of type string and is required"
                },
                address: {
                    bsonType: "object",
                    description: "this should be of type object and is required",
                    required: ["street", "floor", "door", "zip", "phone", "localidad", "province"],
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
                        zip: {
                            bsonType: "string",
                            description: "this should be of type string and is required"
                        },
                        phone: {
                            bsonType: "string",
                            pattern: '^[0-9]{9}$',
                            description: "this should be of type number, have 9 digits, and is required"
                        },
                        localidad: {
                            bsonType: "string",
                            description: "this should be of type string and is required"
                        },
                        province: {
                            bsonType: "string",
                            description: "this should be of type string and is required"
                        }
                    }
                },
            }
        }
    }    
})