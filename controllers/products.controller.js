let products = [
    {"id": 1, "title": "Tv", "description": "Wonderfull tv", "price": 10000},
    {"id": 2, "title": "PS5", "description": "Wonderfull Ps5", "price": 20000},
    {"id": 3, "title": "Xbox", "description": "Wonderfull xbox", "price": 5000},
    {"id": 4, "title": "CD Player", "description": "Wonderfull CD", "price": 120000}
]

exports.getProducts = (req, res) => {
    res.send(products)
}

