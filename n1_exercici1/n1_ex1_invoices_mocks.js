db.invoices.insertOne({
    "id_customer" : ObjectId('63b8274b295c22d09055db85'),
    "date" : new Timestamp(),
    "seller" : "vendedor_1",
     "products" : [
         {"id_product" : ObjectId('63b7063d295c22d09055db66'), "quantity" : Double(1.0)},
         {"id_product" : ObjectId('63b7063d295c22d09055db67'), "quantity" : Double(3.0)}
     ]
    })


    db.invoices.aggregate([{$lookup: {from: "customers", localField: "id_customer", foreignField: "_id", as: "id_customer"}}])