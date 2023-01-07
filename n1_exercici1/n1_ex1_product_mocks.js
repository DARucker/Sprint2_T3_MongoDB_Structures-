{
    "mark" : "Ray-Ban",
    "graduation" : "1 A",
    "frame" : "black",
    "glass_color" : "black",
    "frame_color" : "black",
    "price" : Double(2.0),
    "id_supplier": ObjectId('63b824bb295c22d09055db78')
},
{
    "mark" : "Ray-Ban",
    "graduation" : "2 B",
    "frame" : "small",
    "glass_color" : "white",
    "frame_color" : "white",
    "price" : Double(3.0),
    "id_supplier": ObjectId('63b824bb295c22d09055db78')
},
{
    "mark" : "Oakely",
    "graduation" : "4 c",
    "frame" : "Big",
    "glass_color" : "Blue",
    "frame_color" : "White",
    "price" : Double(10.0),
    "id_supplier": ObjectId("63b6eab5295c22d09055db5c")
},
{
    "mark" : "Oakely",
    "graduation" : "5 c",
    "frame" : "Gigant",
    "glass_color" : "Blue",
    "frame_color" : "Red",
    "price" : Double(150.0),
    "id_supplier": ObjectId("63b6eab5295c22d09055db5c")
}


db.products.aggregate([{$lookup: {from: "suppliers", localField: "id_supplier", foreignField: "_id", as: "id_supplier"}}])

