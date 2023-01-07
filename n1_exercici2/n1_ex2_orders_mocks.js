db.orders.insertMany([
    {
        "date" : new Timestamp(),
        "delivery": "delivery",
        products: [
            {
                "id_product" : ObjectId('63b884c1295c22d09055db97'),
                "quantity" : 7
            }
        ],
        "total_amount" : Double(3.0),
        "id_branch" : ObjectId('63b88c99295c22d09055db9b'),
        "delivered_by" : "delivery1",
        delivered_time : new Timestamp()
    },
    {
        "date" : new Timestamp(),
        "delivery": "take_away",
        products: [
            {
                "id_product" : ObjectId('63b884c1295c22d09055db97'),
                "quantity" : 9
            },
            {
                "id_product" : ObjectId('63b884c1295c22d09055db99'),
                "quantity" : 24
            },
            {
                "id_product" : ObjectId('63b884c1295c22d09055db98'),
                "quantity" : 14
            }
        ],
        "total_amount" : Double(3.5),
        "id_branch" : ObjectId('63b88c99295c22d09055db9b'),
        "delivered_by" : "Jordi Alba",
        delivered_time : new Timestamp()
    }
])
