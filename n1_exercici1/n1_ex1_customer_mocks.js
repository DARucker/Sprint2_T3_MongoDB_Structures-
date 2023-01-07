{
    "name" : "customer_1",
    "email" : ("customer_1@mail"),
    "reg_date" : new Timestamp(),
    "address" : {
        "street" : "Calle 1",
        "floor" : "1",
        "door" : "1 A",
        "city" : "Barcelona",
        "zip" : "080001",
        "phone" : "111111111",
        "fax" : "111222333",
        "country" : "Spain"
    }
},
{
    "name" : "customer_2",
    "email" : ("customer_2@mail"),
    "reg_date" : new Timestamp(),
    "address" : {
        "street" : "Calle 2",
        "floor" : "2",
        "door" : "2 A",
        "city" : "Barcelona",
        "zip" : "080001",
        "phone" : "111111111",
        "fax" : "111222333",
        "country" : "Spain"
    },
    refered: "customer_1"
},
{
    "name" : "customer_3",
    "email" : ("customer_3@mail"),
    "reg_date" : new Timestamp(),
    "address" : {
        "street" : "Calle 3",
        "floor" : "3",
        "door" : "3 A",
        "city" : "Barcelona",
        "zip" : "080003",
        "phone" : "111111333",
        "fax" : "111222333",
        "country" : "Spain"
    },
    refered: "customer_1"
}