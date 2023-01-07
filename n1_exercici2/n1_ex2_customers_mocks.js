db.customers.insertMany([
    {
    "name": "cliente_1",
    "surname": "surname_1",
    "address": {
        "street": "street 1",
        "floor": "floor 1",
        "door": "door 1",
        "zip": "080001",
        "phone": "123456789",
        "localidad": "Barcelona",
        "province": "Barcelona"
    }
},
{
    "name": "cliente_2",
    "surname": "surname_2",
    "address": {
        "street": "street 2",
        "floor": "floor 2",
        "door": "door 2",
        "zip": "080002",
        "phone": "123456789",
        "localidad": "Barcelona",
        "province": "Barcelona"
    }
}])