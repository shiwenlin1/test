const specialsData = [
    { 
        id: 1, 
        name: "Greek Salad",
        price: "$10.99",
        description:"The famous greek salad if cripsy lettuce,peppers, ovlives and our Chicago style feta cheese garnished with crunchy garlic.  ",
        image: "/greeksalad.jpg" 
    },
    { 
        id: 2, 
        name: "Bruschetta", 
        price: "$10.99", 
        description:"Our Bruschetta is made from grilled bread that has been smeared with garilc and seasoned with salt and olive oil.",
        image: "/bruschetta.jpg" 
    },
    { 
        id: 3, 
        name: "Lemon Dessert", 
        price: "$8.99", 
        description:"This comes straight from grandma recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: "/LemonTart.webp" 
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
                        <p>Description:{item.description}</p>
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
