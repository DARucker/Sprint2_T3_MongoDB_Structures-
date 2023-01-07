db.branches.insertMany([
    {
    "address": {
        "street": "street 1",
        "floor": "floor 1",
        "door": "door 1",
        "zip": "080001",
        "phone": "123456789",
        "localidad": "Barcelona",
        "province": "Barcelona"
    },
    employees: [
        {
            "name": "Employee_1",
            "surname": "Surname_1",
            "nif": "12345678A",
            "type" : "cook"
        },
                {
            "name": "Employee_2",
            "surname": "Surname_1",
            "nif": "12345678B",
            "type" : "delivery"
        },
                {
            "name": "Employee_3",
            "surname": "Surname_1",
            "nif": "12345678C",
            "type" : "other"
        }
    ]
},
    {
    "address": {
        "street": "street 2",
        "floor": "floor 3",
        "door": "door 32",
        "zip": "080001",
        "phone": "123456789",
        "localidad": "Barcelona",
        "province": "Barcelona"
    },
    employees: [
        {
            "name": "Employee_12",
            "surname": "Surname_12",
            "nif": "12345678Z",
            "type" : "delivery"
        }
    ]
},
    {
    "address": {
        "street": "Diagonal",
        "floor": "floor 1",
        "door": "door 1",
        "zip": "080001",
        "phone": "123456789",
        "localidad": "Barcelona",
        "province": "Barcelona"
    },
    employees: [
        {
            "name": "Pepe",
            "surname": "Galleta",
            "nif": "12345678X",
            "type" : "other"
        }
    ]
}
])


