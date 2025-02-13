const specialsData = [
    { 
        id: 1, 
        name: "Greek Salad", 
        price: "$12.99", 
        image: "https://example.com/greek-salad.jpg" 
    },
    { 
        id: 2, 
        name: "Bruschetta", 
        price: "$8.99", 
        image: "https://example.com/bruschetta.jpg" 
    },
    { 
        id: 3, 
        name: "Lemon Dessert", 
        price: "$5.99", 
        image: "https://example.com/lemon-dessert.jpg" 
    }
];

const Specials = () => {
    return (
        <div className="specialssection">
            <h1>Specials</h1>
            <div className="menu-grid">
                {specialsData.map((item) => (
                    <div key={item.id} className="menu-item">
                        <img src={item.image} alt={item.name} className="menu-image" />
                        <h2>{item.name}</h2>
                        <p>Price: {item.price}</p>
                        <div className="od">
                        <button>Order Delivery</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Specials;
