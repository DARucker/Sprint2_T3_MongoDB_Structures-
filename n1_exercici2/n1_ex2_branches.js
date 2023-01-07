db.createCollection('branches', {
    validator: {
        $jsonSchema:{
            bsonType: "object",
            required: ["address", "employees"],
            properties: {
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
                employees: {
                    bsonType: ["array"],
                    minItems: 1, 
                    uniqueItems: true,
                    additionalProperties: false,
                    items: {
                        bsonType: ["object"],
                        required: ["name", "surname", "nif", "type"],
                        additionalProperties: false,
                        description: "must contain name, surname and nif",
                        properties: {
                            name: {
                                bsonType: "string",
                                description: "this should be of type string and is required"
                            },
                            surname: {
                                bsonType: "string",
                                description: "this should be of type string and is required"
                            },
                            nif: {
                                bsonType: "string",
                                pattern: "^[0-9]{8}[A-Z]$",
                                description:
                                  "format must contain 8 digits followed by one capital leter without any space between",
                            },
                            type:{
                                bsonType: "string",
                                enum: ["cook", "delivery", "other"],
                                description: "accepted values are only: cook, delivery u other",
                            }
                        }
                }
            }
        }
    }    
}})