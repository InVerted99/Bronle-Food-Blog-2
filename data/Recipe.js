export const recipes = [
    {
        id: "recipe-1",
        category: "Quick and Easy",
        title: "Brandons Egg Roll Tacos",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Brandons-Egg-Roll-Tacos-1-3.jpg",
        descriptions: [
            "Crispy egg roll wrappers filled with seasoned taco meat, topped with fresh veggies and salsa.",
            "A fun fusion of Asian and Mexican flavors in a handheld taco."
        ],
        reviews: { stars: 4.9, count: 28, average: 4.9 },
        ingredients: [
            {
                category: "Filling",
                items: ["500g ground beef", "Egg roll wrappers", "Taco seasoning", "Shredded lettuce", "Diced tomatoes", "Salsa", "Onion", "Garlic", "Cumin", "Paprika"]
            },
            {
                category: "Toppings",
                items: ["Sour cream", "Avocado", "Cilantro", "Lime wedges", "Jalapenos", "Cheese", "Hot sauce"]
            },
            {
                category: "Dough",
                items: ["Flour", "Water", "Salt", "Oil for frying"]
            }
        ],
        nutrition: {
            servingSize: "2 tacos",
            calories: "450 kcal",
            items: [
                { label: "Carbs", value: "35g" },
                { label: "Protein", value: "25g" },
                { label: "Fat", value: "20g" },
                { label: "Fiber", value: "4g" },
                { label: "Sugar", value: "5g" },
                { label: "Sodium", value: "600mg" },
                { label: "Cholesterol", value: "50mg" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/cdn-cgi/image/width=480,height=99999,fit=scale-down/wp-content/uploads/Brandons-Egg-Roll-Tacos-with-sauce.jpg",
            title: "Egg Roll Tacos"
        },
        feedback: {
            title: "Rate these fusion tacos!",
            text: "Tell us how your egg roll tacos turned out."
        },
        moreRecipes: [
            {
                id: "recipe-5",
                title: "Chicken with Coconut Kale",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Chicken-with-Coconut-Kale-Sauce.jpg",
                reviews: { stars: 5, count: 44, average: 5 },
            },
            {
                id: "recipe-11",
                category: "Quick and Easy",
                title: "Boursin Appetizer With Honey and Pistachio",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Boursin-Appetizer-400x400.jpg",
                reviews: { stars: 4.9, count: 20, average: 4.9 }
            },
            {
                id: "recipe-14",
                category: "Quick and Easy",
                title: "Scallion Pancake with Egg",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Scallion-Pancake-with-Eggs-400x400.jpg",
                reviews: { stars: 4.9, count: 15, average: 4.9 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "MIKE T.", rating: 5, text: "Crispy and delicious! The fusion of flavors is amazing, and it's perfect for parties. I added extra salsa for more kick." },
            { author: "LISA R.", rating: 5, text: "Perfect party appetizer. Everyone loved the crunch and the fresh toppings. Made a big batch and they disappeared quickly." },
            { author: "TOM H.", rating: 5, text: "Love the taco twist on egg rolls. So creative! The meat was juicy, and the veggies added a nice freshness." },
            { author: "SARA K.", rating: 4, text: "Good, but added more spice. It was a bit mild for my taste, but overall a fun and easy recipe to make at home." },
            { author: "JAKE W.", rating: 5, text: "Family favorite now! Kids couldn't get enough. Will definitely make again for game nights." },
            { author: "EMILY V.", rating: 5, text: "Incredible texture and flavor. The egg roll wrapper stayed crispy even after adding toppings. Highly recommend!" },
            { author: "DAVID L.", rating: 4, text: "Tasty fusion dish. Paired well with guacamole. A bit time-consuming to assemble, but worth it." },
            { author: "RACHEL M.", rating: 5, text: "So unique and yummy. The combination of taco seasoning and egg roll is genius. Added cheese for extra gooeyness." }
        ]
    },
    {
        id: "recipe-2",
        category: "Quick and Easy",
        title: "Crispy Smashed Potato Salad",
        mainImage: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Smashed-Potato-Salad-2.jpg",
        descriptions: [
            "Golden smashed potatoes tossed in a creamy salad dressing with herbs and veggies.",
            "A crunchy twist on traditional potato salad."
        ],
        reviews: { stars: 4, count: 8, average: 4 },
        ingredients: [
            {
                category: "Potatoes",
                items: ["1kg baby potatoes", "Olive oil", "Salt", "Pepper", "Garlic powder", "Rosemary"]
            },
            {
                category: "Salad",
                items: ["Mayonnaise", "Mustard", "Celery", "Onion", "Parsley", "Dill", "Lemon juice"]
            },
            {
                category: "Add-ins",
                items: ["Bacon bits", "Chives", "Red pepper flakes", "Vinegar"]
            }
        ],
        nutrition: {
            servingSize: "200g",
            calories: "320 kcal",
            items: [
                { label: "Carbs", value: "40g" },
                { label: "Protein", value: "5g" },
                { label: "Fat", value: "15g" },
                { label: "Fiber", value: "5g" },
                { label: "Sugar", value: "3g" },
                { label: "Sodium", value: "450mg" },
                { label: "Cholesterol", value: "10mg" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/cdn-cgi/image/width=480,height=99999,fit=scale-down/wp-content/uploads/Smashed-Potato-Salad-done.jpg",
            title: "Smashed Potato Salad Recipe | The Best Side Dish for Any Occasion"
        },
        feedback: {
            title: "Rate this potato salad!",
            text: "Tell us how your smashed potatoes tasted."
        },
        moreRecipes: [
            {
                id: "recipe-5",
                title: "Chicken with Coconut Kale",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Chicken-with-Coconut-Kale-Sauce.jpg",
                reviews: { stars: 5, count: 44, average: 5 },
            },
            {
                id: "recipe-11",
                category: "Quick and Easy",
                title: "Boursin Appetizer With Honey and Pistachio",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Boursin-Appetizer-400x400.jpg",
                reviews: { stars: 4.9, count: 20, average: 4.9 }
            },
            {
                id: "recipe-14",
                category: "Quick and Easy",
                title: "Scallion Pancake with Egg",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Scallion-Pancake-with-Eggs-400x400.jpg",
                reviews: { stars: 4.9, count: 15, average: 4.9 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "EMMA L.", rating: 4, text: "Crispy and fresh! The smashed potatoes add a great texture. Paired perfectly with grilled meats." },
            { author: "DAVID P.", rating: 4, text: "Easy to prepare. Loved the herb dressing. A nice change from regular potato salad." },
            { author: "RACHEL S.", rating: 4, text: "Great for picnics. The crunch holds up well. Added bacon for extra flavor." },
            { author: "ALEX M.", rating: 3, text: "Good, but needs more dressing. It was a bit dry, but the potatoes were cooked perfectly." },
            { author: "NINA B.", rating: 4, text: "Love the crunch! So much better than mashed. Will experiment with different herbs next time." },
            { author: "JASON K.", rating: 4, text: "Refreshing side dish. The lemon juice brightens it up. Great for summer BBQs." },
            { author: "LUCY T.", rating: 4, text: "Texture is amazing. The smashed part makes it unique. Family enjoyed it a lot." },
            { author: "MARK R.", rating: 3, text: "Decent, but I prefer traditional. Still, a fun twist and easy to make." }
        ]
    },
    {
        id: "recipe-3",
        category: "Pasta",
        title: "Instant Pot Spaghetti",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Spaghetti-4.jpg",
        descriptions: [
            "Quick and easy spaghetti cooked in an Instant Pot with rich tomato sauce.",
            "A fast weeknight dinner option."
        ],
        reviews: { stars: 3, count: 30, average: 3 },
        ingredients: [
            {
                category: "Pasta",
                items: ["400g spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic", "Bell peppers"]
            },
            {
                category: "Seasonings",
                items: ["Italian herbs", "Salt", "Pepper", "Parmesan cheese", "Basil", "Oregano"]
            },
            {
                category: "Liquids",
                items: ["Beef broth", "Water", "Olive oil", "Red wine (optional)"]
            }
        ],
        nutrition: {
            servingSize: "300g",
            calories: "520 kcal",
            items: [
                { label: "Carbs", value: "65g" },
                { label: "Protein", value: "28g" },
                { label: "Fat", value: "18g" },
                { label: "Fiber", value: "6g" },
                { label: "Sugar", value: "8g" },
                { label: "Sodium", value: "700mg" },
                { label: "Cholesterol", value: "45mg" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Spaghetti-4.jpg",
            title: "Instant Pot Spaghetti - Easy Recipe!"
        },
        feedback: {
            title: "Rate this quick pasta!",
            text: "Tell us how your Instant Pot spaghetti came out."
        },
        moreRecipes: [
            {
                id: "recipe-5",
                title: "Chicken with Coconut Kale",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Chicken-with-Coconut-Kale-Sauce.jpg",
                reviews: { stars: 5, count: 44, average: 5 },
            },
            {
                id: "recipe-11",
                category: "Quick and Easy",
                title: "Boursin Appetizer With Honey and Pistachio",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Boursin-Appetizer-400x400.jpg",
                reviews: { stars: 4.9, count: 20, average: 4.9 }
            },
            {
                id: "recipe-14",
                category: "Quick and Easy",
                title: "Scallion Pancake with Egg",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Scallion-Pancake-with-Eggs-400x400.jpg",
                reviews: { stars: 4.9, count: 15, average: 4.9 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "JOHN D.", rating: 3, text: "Convenient and tasty. Saved time on a busy night. The sauce was rich, but I added more herbs." },
            { author: "ANNA F.", rating: 3, text: "Good for busy nights. Kids ate it up. A bit too saucy, but overall a solid meal." },
            { author: "PAUL G.", rating: 3, text: "Simple recipe. Easy cleanup with Instant Pot. Flavor was okay, but not extraordinary." },
            { author: "LUCY H.", rating: 2, text: "A bit bland, added spices. Needed more seasoning to make it pop. Still, quick and easy." },
            { author: "MARK I.", rating: 3, text: "Kids loved it! They didn't notice it was made in a pot. Will use again for picky eaters." },
            { author: "SOPHIA J.", rating: 3, text: "Decent weeknight option. The pasta cooked evenly. Paired well with garlic bread." },
            { author: "OLIVER K.", rating: 3, text: "Not bad, but I prefer stovetop. The Instant Pot made it faster, though." },
            { author: "ISABEL L.", rating: 4, text: "Improved with extra veggies. Added bell peppers for nutrition. Tasty and filling." }
        ]
    },
    {
        id: "recipe-4",
        category: "Quick and Easy",
        title: "Dulce De Leche Tiramisu",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Dulce-De-Leche-Tiramisu-1.jpg",
        descriptions: [
            "Layers of coffee-soaked ladyfingers with dulce de leche cream and chocolate.",
            "A decadent twist on classic tiramisu."
        ],
        reviews: { stars: 2.5, count: 29, average: 2.5 },
        ingredients: [
            {
                category: "Base",
                items: ["Ladyfingers", "Coffee", "Dulce de leche", "Mascarpone cheese", "Eggs", "Sugar"]
            },
            {
                category: "Toppings",
                items: ["Cocoa powder", "Chocolate shavings", "Whipped cream", "Almonds", "Caramel sauce"]
            },
            {
                category: "Liquor",
                items: ["Marsala wine", "Rum (optional)", "Vanilla extract"]
            }
        ],
        nutrition: {
            servingSize: "150g",
            calories: "380 kcal",
            items: [
                { label: "Carbs", value: "45g" },
                { label: "Protein", value: "8g" },
                { label: "Fat", value: "18g" },
                { label: "Fiber", value: "1g" },
                { label: "Sugar", value: "35g" },
                { label: "Sodium", value: "120mg" },
                { label: "Cholesterol", value: "80mg" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Dulce-De-Leche-Tiramisu-1.jpg",
            title: "Dulce de Leche Tiramisu Recipe"
        },
        feedback: {
            title: "Rate this sweet dessert!",
            text: "Tell us how your tiramisu turned out."
        },
        moreRecipes: [
            {
                id: "recipe-5",
                title: "Chicken with Coconut Kale",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Chicken-with-Coconut-Kale-Sauce.jpg",
                reviews: { stars: 5, count: 44, average: 5 },
            },
            {
                id: "recipe-11",
                category: "Quick and Easy",
                title: "Boursin Appetizer With Honey and Pistachio",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Boursin-Appetizer-400x400.jpg",
                reviews: { stars: 4.9, count: 20, average: 4.9 }
            },
            {
                id: "recipe-14",
                category: "Quick and Easy",
                title: "Scallion Pancake with Egg",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Scallion-Pancake-with-Eggs-400x400.jpg",
                reviews: { stars: 4.9, count: 15, average: 4.9 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "SOPHIA J.", rating: 3, text: "Rich and indulgent. The dulce de leche adds a unique sweetness. Perfect for dessert lovers." },
            { author: "OLIVER K.", rating: 2, text: "Too sweet for me. Overpowered the coffee flavor. Might reduce the dulce de leche next time." },
            { author: "ISABEL L.", rating: 3, text: "Great for special occasions. Looks fancy and tastes decadent. Guests were impressed." },
            { author: "HENRY M.", rating: 2, text: "Texture was off. Ladyfingers got too soggy. Need to adjust soaking time." },
            { author: "AVA N.", rating: 3, text: "Loved the caramel flavor. A nice twist on traditional tiramisu. Added extra chocolate." },
            { author: "BEN O.", rating: 3, text: "Sweet and creamy. The mascarpone was smooth. Good, but a bit heavy." },
            { author: "CHLOE P.", rating: 2, text: "Not my favorite. Too rich and sugary. Prefer lighter desserts." },
            { author: "ETHAN Q.", rating: 3, text: "Delicious if you like caramel. The layers were even. Will try again with less sugar." }
        ]
    },
    {
        id: "recipe-5",
        category: "Quick and Easy",
        title: "Chicken with Coconut Kale",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Chicken-with-Coconut-Kale-Sauce.jpg",
        descriptions: [
            "Tender chicken simmered in a creamy coconut sauce with wilted kale.",
            "A healthy and flavorful one-pot meal."
        ],
        reviews: { stars: 5, count: 44, average: 5 },
        ingredients: [
            {
                category: "Protein",
                items: ["500g chicken breast", "Coconut milk", "Kale", "Garlic", "Ginger", "Onion"]
            },
            {
                category: "Seasonings",
                items: ["Curry powder", "Lime juice", "Salt", "Pepper", "Turmeric", "Cumin"]
            },
            {
                category: "Veggies",
                items: ["Bell peppers", "Tomatoes", "Spinach", "Lemongrass"]
            }
        ],
        nutrition: {
            servingSize: "250g",
            calories: "420 kcal",
            items: [
                { label: "Carbs", value: "12g" },
                { label: "Protein", value: "35g" },
                { label: "Fat", value: "28g" },
                { label: "Fiber", value: "4g" },
                { label: "Sugar", value: "6g" },
                { label: "Sodium", value: "550mg" },
                { label: "Cholesterol", value: "85mg" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Chicken-with-Coconut-Kale-Sauce.jpg",
            title: "Coconut Kale Chicken Dish"
        },
        feedback: {
            title: "Rate this chicken dish!",
            text: "Tell us how your Zuppa Toscana turned out."
        },
        moreRecipes: [
            {
                id: "recipe-1",
                title: "Brandon's Egg Roll Tacos",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Brandons-Egg-Roll-Tacos-1-3.jpg",
                reviews: { stars: 4.9, count: 28, average: 4.9 },
            },
            {
                id: "recipe-2",
                category: "Quick and Easy",
                title: "Crispy Smashed Potato Salad",
                mainImage: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Smashed-Potato-Salad-2.jpg",
                reviews: { stars: 4, count: 8, average: 4 }
            },
            {
                id: "recipe-3",
                category: "Quick and Easy",
                title: "Instant Pot Spaghetti",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Spaghetti-4.jpg",
                reviews: { stars: 3, count: 30, average: 3 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "JANE D.", rating: 5, text: "Absolutely delicious! The coconut sauce is creamy and the kale adds a nice crunch. Perfect for a quick dinner." },
            { author: "MIKE S.", rating: 5, text: "Love this one-pot wonder. So flavorful and healthy. Added extra ginger for a kick." },
            { author: "LISA P.", rating: 4, text: "Tasty and easy. The chicken was tender, but I used light coconut milk to cut calories." },
            { author: "TOM R.", rating: 5, text: "Family hit! Kids loved the creamy texture. Will make again for meal prep." },
            { author: "EMILY W.", rating: 5, text: "Incredible flavor combo. The lime juice brightens it up. Highly recommend!" },
            { author: "DAVID K.", rating: 4, text: "Good, but a bit spicy. Reduced curry powder next time. Still, very satisfying." },
            { author: "RACHEL T.", rating: 5, text: "So easy and nutritious. The veggies make it a complete meal. Added spinach for extra greens." },
            { author: "ALEX M.", rating: 5, text: "One of my favorites. Creamy, spicy, and quick. Paired well with rice." }
        ]
    },
    {
        id: "recipe-6",
        category: "Quick and Easy",
        title: "Zuppa Toscana Soup",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Zuppa-Toscana-Soup-400x400.jpg",
        descriptions: [
            "Creamy Tuscan-style soup with potatoes, sausage, and kale.",
            "A cozy comfort meal perfect for cold weather."
        ],
        reviews: { stars: 3, count: 11, average: 3 },
        ingredients: [
            { category: "Main", items: ["Potatoes", "Italian sausage", "Kale", "Garlic", "Onion"] },
            { category: "Broth", items: ["Chicken broth", "Cream", "Salt", "Pepper"] }
        ],
        nutrition: {
            servingSize: "250g",
            calories: "380 kcal",
            items: [
                { label: "Carbs", value: "20g" },
                { label: "Protein", value: "18g" },
                { label: "Fat", value: "28g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Zuppa-Toscana-Soup-400x400.jpg",
            title: "How to Make Zuppa Toscana"
        },
        feedback: { title: "Rate this soup!", text: "Tell us how your Zuppa Toscana turned out." },
        moreRecipes: [
            {
                id: "recipe-1",
                title: "Brandon's Egg Roll Tacos",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Brandons-Egg-Roll-Tacos-1-3.jpg",
                reviews: { stars: 4.9, count: 28, average: 4.9 },
            },
            {
                id: "recipe-2",
                category: "Quick and Easy",
                title: "Crispy Smashed Potato Salad",
                mainImage: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Smashed-Potato-Salad-2.jpg",
                reviews: { stars: 4, count: 8, average: 4 }
            },
            {
                id: "recipe-3",
                category: "Quick and Easy",
                title: "Instant Pot Spaghetti",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Spaghetti-4.jpg",
                reviews: { stars: 3, count: 30, average: 3 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "SARAH L.", rating: 3, text: "Comforting and hearty. The sausage adds great flavor, but I used turkey sausage for health." },
            { author: "JOHN P.", rating: 3, text: "Decent soup for chilly days. Easy to make, but a bit heavy on the cream." },
            { author: "ANNA R.", rating: 4, text: "Loved the kale and potatoes. Added extra garlic for depth. Will tweak next time." },
            { author: "PAUL T.", rating: 3, text: "Good, but not my favorite. The broth was rich. Paired with bread for a full meal." },
            { author: "LUCY V.", rating: 3, text: "Simple and satisfying. Kids ate it up. Reduced salt for a lighter version." },
            { author: "MARK W.", rating: 2, text: "A bit bland. Needed more seasoning. Still, easy and filling." },
            { author: "SOPHIA X.", rating: 3, text: "Cozy classic. The cream makes it indulgent. Great for leftovers." },
            { author: "OLIVER Y.", rating: 4, text: "Improved with fresh herbs. The potatoes were perfect. A solid comfort food." }
        ]
    },
    {
        id: "recipe-7",
        category: "Quick and Easy",
        title: "Sheet Pan Breakfast Burritos",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Sheet-Pan-Breakfast-Burritos-400x400.jpg",
        descriptions: [
            "Easy sheet-pan method for cooking burrito fillings.",
            "Perfect for meal prep and busy mornings."
        ],
        reviews: { stars: 2, count: 3, average: 2 },
        ingredients: [
            { category: "Fillings", items: ["Eggs", "Potatoes", "Sausage", "Cheese"] },
            { category: "Tortillas", items: ["Large flour tortillas"] }
        ],
        nutrition: {
            servingSize: "1 burrito",
            calories: "420 kcal",
            items: [
                { label: "Carbs", value: "30g" },
                { label: "Protein", value: "20g" },
                { label: "Fat", value: "22g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Sheet-Pan-Breakfast-Burritos-400x400.jpg",
            title: "Breakfast Burrito Prep"
        },
        feedback: { title: "Rate these burritos!", text: "Tell us how your burritos turned out." },
        moreRecipes: [
            {
                id: "recipe-2",
                category: "Quick and Easy",
                title: "Crispy Smashed Potato Salad",
                mainImage: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Smashed-Potato-Salad-2.jpg",
                reviews: { stars: 4, count: 8, average: 4 }
            },
            {
                id: "recipe-9",
                category: "Quick and Easy",
                title: "Quick and Easy Crunchy Roll Bowls",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Crunch-Roll-Bowls-2-400x400.jpg",
                reviews: { stars: 4.9, count: 469, average: 4.9 }
            },
            {
                id: "recipe-10",
                category: "Quick and Easy",
                title: "Quick and Easy Marry Me Chickpeas and Orzo",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Marry-Me-Orzo-400x400.jpg",
                reviews: { stars: 4.7, count: 41, average: 4.7 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "EMMA Z.", rating: 2, text: "Okay for meal prep. The fillings were good, but tortillas got soggy." },
            { author: "DAVID A.", rating: 2, text: "Simple idea, but execution was average. Added salsa for flavor." },
            { author: "RACHEL B.", rating: 3, text: "Decent breakfast option. Easy to assemble. Used veggie sausage." },
            { author: "ALEX C.", rating: 2, text: "Not my favorite. The eggs were overcooked. Needs better timing." },
            { author: "NINA D.", rating: 2, text: "Basic burritos. Good for busy mornings, but lacked excitement." },
            { author: "JASON E.", rating: 3, text: "Functional meal prep. The cheese melted well. Added peppers next time." },
            { author: "LUCY F.", rating: 2, text: "Average. The potatoes were crispy, but overall bland." },
            { author: "MARK G.", rating: 3, text: "Quick and convenient. Family liked it for breakfast on the go." }
        ]
    },
    {
        id: "recipe-8",
        category: "Quick and Easy",
        title: "Miracle No Knead Bread",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Miracle-No-Knead-Bread-3-2-400x400.jpg",
        descriptions: [
            "Crispy artisan-style bread with no kneading required.",
            "Perfect for soups, spreads, and sandwiches."
        ],
        reviews: { stars: 4.8, count: 585, average: 4.8 },
        ingredients: [
            { category: "Dough", items: ["Flour", "Salt", "Yeast", "Water"] }
        ],
        nutrition: {
            servingSize: "1 slice",
            calories: "190 kcal",
            items: [
                { label: "Carbs", value: "36g" },
                { label: "Protein", value: "6g" },
                { label: "Fat", value: "1g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Miracle-No-Knead-Bread-3-2-400x400.jpg",
            title: "How to Make No Knead Bread"
        },
        feedback: { title: "Rate this bread!", text: "Tell us how your no-knead bread turned out." },
        moreRecipes: [
            {
                id: "recipe-1",
                title: "Brandon's Egg Roll Tacos",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Brandons-Egg-Roll-Tacos-1-3.jpg",
                reviews: { stars: 4.9, count: 28, average: 4.9 },
            },
            {
                id: "recipe-2",
                category: "Quick and Easy",
                title: "Crispy Smashed Potato Salad",
                mainImage: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Smashed-Potato-Salad-2.jpg",
                reviews: { stars: 4, count: 8, average: 4 }
            },
            {
                id: "recipe-3",
                category: "Quick and Easy",
                title: "Instant Pot Spaghetti",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Spaghetti-4.jpg",
                reviews: { stars: 3, count: 30, average: 3 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "SOPHIA H.", rating: 5, text: "Amazing crust! So easy for beginners. The bread was perfect for sandwiches." },
            { author: "OLIVER I.", rating: 5, text: "Love the no-knead method. Crispy outside, soft inside. Will bake again." },
            { author: "ISABEL J.", rating: 4, text: "Great results. Added herbs for flavor. Minimal effort for great bread." },
            { author: "HENRY K.", rating: 5, text: "Impressed! The oven method worked wonders. Family devoured it." },
            { author: "AVA L.", rating: 5, text: "Simple and delicious. The crust was golden. Paired with soup perfectly." },
            { author: "BEN M.", rating: 4, text: "Good texture. A bit dense, but easy. Used whole wheat flour." },
            { author: "CHLOE N.", rating: 5, text: "Miracle indeed! So much better than store-bought. Highly recommend." },
            { author: "ETHAN O.", rating: 4, text: "Solid recipe. The rise was good. Added seeds on top for crunch." }
        ]
    },
    {
        id: "recipe-9",
        category: "Quick and Easy",
        title: "Crunchy Roll Bowls",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Crunch-Roll-Bowls-2-400x400.jpg",
        descriptions: [
            "Crunchy rice bowls with fresh toppings and creamy sauce.",
            "A healthy take on sushi rolls."
        ],
        reviews: { stars: 4.9, count: 469, average: 4.9 },
        ingredients: [
            { category: "Base", items: ["Rice", "Avocado", "Cucumber"] },
            { category: "Crispy topping", items: ["Tempura bits", "Sauce"] }
        ],
        nutrition: {
            servingSize: "300g",
            calories: "480 kcal",
            items: [
                { label: "Carbs", value: "60g" },
                { label: "Protein", value: "15g" },
                { label: "Fat", value: "18g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Crunch-Roll-Bowls-2-400x400.jpg",
            title: "Crunch Roll Bowl Tutorial"
        },
        feedback: { title: "Rate this bowl!", text: "Tell us how your bowl turned out." },
        moreRecipes: [
            {
                id: "recipe-6",
                title: "Quick and Easy Zuppa Toscana Soup",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Zuppa-Toscana-Soup-400x400.jpg",
                reviews: { stars: 3, count: 11, average: 3 },
            },
            {
                id: "recipe-7",
                category: "Quick and Easy",
                title: "Quick and Easy Sheet Pan Breakfast Burritos",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Sheet-Pan-Breakfast-Burritos-400x400.jpg",
                reviews: { stars: 2, count: 3, average: 2 }
            },
            {
                id: "recipe-8",
                category: "Quick and Easy",
                title: "Quick and Easy Miracle No Knead Bread",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Miracle-No-Knead-Bread-3-2-400x400.jpg",
                reviews: { stars: 4.8, count: 585, average: 4.8 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "JANE P.", rating: 5, text: "Delicious and fresh! The crunch is amazing. Perfect sushi alternative." },
            { author: "MIKE Q.", rating: 5, text: "Love the toppings. So customizable. Added extra avocado." },
            { author: "LISA R.", rating: 4, text: "Tasty bowl. The sauce ties it together. Great for lunch." },
            { author: "TOM S.", rating: 5, text: "Crunchy and satisfying. Healthy yet indulgent. Will make weekly." },
            { author: "EMILY T.", rating: 5, text: "Incredible flavor. The tempura bits add fun texture. Highly recommend!" },
            { author: "DAVID U.", rating: 4, text: "Good, but sauce was a bit thick. Thinned with water next time." },
            { author: "RACHEL V.", rating: 5, text: "So easy and yummy. Fresh veggies shine. Paired with miso soup." },
        ]
    },
    {
        id: "recipe-10",
        category: "Quick and Easy",
        title: "Marry Me Chickpeas and Orzo",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Marry-Me-Orzo-400x400.jpg",
        descriptions: [
            "Creamy orzo with chickpeas in a tomato-based sauce.",
            "A vegetarian take on the viral 'Marry Me' recipe."
        ],
        reviews: { stars: 4.7, count: 41, average: 4.7 },
        ingredients: [
            { category: "Base", items: ["Orzo", "Chickpeas", "Tomatoes"] }
        ],
        nutrition: {
            servingSize: "250g",
            calories: "450 kcal",
            items: [
                { label: "Carbs", value: "55g" },
                { label: "Protein", value: "15g" },
                { label: "Fat", value: "14g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Marry-Me-Orzo-400x400.jpg",
            title: "Orzo Chickpea Recipe"
        },
        feedback: { title: "Rate this orzo dish!", text: "Tell us how yours turned out." },
        moreRecipes: [
            {
                id: "recipe-1",
                title: "Brandon's Egg Roll Tacos",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Brandons-Egg-Roll-Tacos-1-3.jpg",
                reviews: { stars: 4.9, count: 28, average: 4.9 },
            },
            {
                id: "recipe-2",
                category: "Quick and Easy",
                title: "Crispy Smashed Potato Salad",
                mainImage: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Smashed-Potato-Salad-2.jpg",
                reviews: { stars: 4, count: 8, average: 4 }
            },
            {
                id: "recipe-3",
                category: "Quick and Easy",
                title: "Instant Pot Spaghetti",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Spaghetti-4.jpg",
                reviews: { stars: 3, count: 30, average: 3 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "JANE D.", rating: 5, text: "Absolutely delicious! The chickpeas add great texture, and the sauce is creamy perfection." },
            { author: "MIKE S.", rating: 4, text: "Love this vegetarian option. Easy to make and full of flavor. Added spinach for extra greens." },
            { author: "LISA P.", rating: 5, text: "So comforting and quick. The orzo cooks perfectly. Will make again for dinner parties." }
        ]
    },
    {
        id: "recipe-11",
        category: "Quick and Easy",
        title: "Boursin Appetizer With Honey and Pistachio",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Boursin-Appetizer-400x400.jpg",
        descriptions: [
            "Creamy Boursin topped with honey and crushed pistachio.",
            "Sweet, salty, and perfect for parties."
        ],
        reviews: { stars: 4.9, count: 20, average: 4.9 },
        ingredients: [
            { category: "Main", items: ["Boursin cheese", "Honey", "Pistachios"] }
        ],
        nutrition: {
            servingSize: "100g",
            calories: "300 kcal",
            items: [
                { label: "Carbs", value: "10g" },
                { label: "Protein", value: "6g" },
                { label: "Fat", value: "26g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Boursin-Appetizer-400x400.jpg",
            title: "Easy Boursin Appetizer"
        },
        feedback: { title: "Rate this appetizer!", text: "Did you like it?" },
        moreRecipes: [
            {
                id: "recipe-6",
                title: "Quick and Easy Zuppa Toscana Soup",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Zuppa-Toscana-Soup-400x400.jpg",
                reviews: { stars: 3, count: 11, average: 3 },
            },
            {
                id: "recipe-7",
                category: "Quick and Easy",
                title: "Quick and Easy Sheet Pan Breakfast Burritos",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Sheet-Pan-Breakfast-Burritos-400x400.jpg",
                reviews: { stars: 2, count: 3, average: 2 }
            },
            {
                id: "recipe-8",
                category: "Quick and Easy",
                title: "Quick and Easy Miracle No Knead Bread",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Miracle-No-Knead-Bread-3-2-400x400.jpg",
                reviews: { stars: 4.8, count: 585, average: 4.8 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "TOM R.", rating: 5, text: "Sweet and savory heaven! The honey and pistachios make it irresistible. Perfect for gatherings." },
            { author: "EMILY W.", rating: 5, text: "So simple yet elegant. Guests raved about it. Used fresh pistachios for extra crunch." },
            { author: "DAVID K.", rating: 4, text: "Delicious combo. The cheese is creamy, and the toppings add nice contrast. A bit rich, but great." }
        ]
    },
    {
        id: "recipe-12",
        category: "Quick and Easy",
        title: "Sesame Apricot Chicken",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Sesame-Apricot-Chicken-1-2-400x400.jpg",
        descriptions: [
            "Sweet and savory chicken glazed with sesame apricot sauce.",
            "A quick and flavorful dinner option."
        ],
        reviews: { stars: 4.9, count: 16, average: 4.9 },
        ingredients: [
            { category: "Main", items: ["Chicken thighs", "Apricot jam", "Soy sauce", "Garlic"] }
        ],
        nutrition: {
            servingSize: "250g",
            calories: "500 kcal",
            items: [
                { label: "Carbs", value: "30g" },
                { label: "Protein", value: "35g" },
                { label: "Fat", value: "20g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Sesame-Apricot-Chicken-1-2-400x400.jpg",
            title: "Apricot Chicken Tutorial"
        },
        feedback: { title: "Rate this chicken!", text: "Tell us how yours turned out." },
        moreRecipes: [
            {
                id: "recipe-7",
                title: "Quick and Easy Sheet Pan Breakfast Burritos",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Sheet-Pan-Breakfast-Burritos-400x400.jpg",
                reviews: { stars: 2, count: 3, average: 2 }
            },
            {
                id: "recipe-8",
                category: "Quick and Easy",
                title: "Quick and Easy Miracle No Knead Bread",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Miracle-No-Knead-Bread-3-2-400x400.jpg",
                reviews: { stars: 4.8, count: 585, average: 4.8 }
            },
            {
                id: "recipe-9",
                category: "Quick and Easy",
                title: "Quick and Easy Crunchy Roll Bowls",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Crunch-Roll-Bowls-2-400x400.jpg",
                reviews: { stars: 4.9, count: 469, average: 4.9 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "RACHEL T.", rating: 5, text: "Amazing glaze! The apricot and sesame make it so flavorful. Chicken was juicy and tender." },
            { author: "ALEX M.", rating: 5, text: "Quick weeknight winner. Paired with rice perfectly. Added ginger for extra zing." },
            { author: "NINA B.", rating: 4, text: "Sweet and savory balance is spot on. Easy to prep. Family loved the sauce." }
        ]
    },
    {
        id: "recipe-13",
        category: "Quick and Easy",
        title: "The Best Carrot Cupcake",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Carrot-Cake-Cupcakes-with-Cream-Cheese-Frosting-400x400.jpg",
        descriptions: [
            "Moist carrot cupcakes topped with creamy cream cheese frosting.",
            "A classic dessert that's perfect for any occasion."
        ],
        reviews: { stars: 5, count: 13, average: 5 },
        ingredients: [
            { category: "Cake", items: ["Carrots", "Flour", "Sugar", "Eggs", "Cream cheese"] },
            { category: "Frosting", items: ["Butter", "Powdered sugar", "Vanilla"] }
        ],
        nutrition: {
            servingSize: "1 cupcake",
            calories: "320 kcal",
            items: [
                { label: "Carbs", value: "45g" },
                { label: "Protein", value: "4g" },
                { label: "Fat", value: "14g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Carrot-Cake-Cupcakes-with-Cream-Cheese-Frosting-400x400.jpg",
            title: "How to Make Carrot Cupcakes"
        },
        feedback: { title: "Rate these cupcakes!", text: "Tell us how your carrot cupcakes turned out." },
        moreRecipes: [
            {
                id: "recipe-10",
                title: "Quick and Easy Marry Me Chickpeas and Orzo",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Marry-Me-Orzo-400x400.jpg",
                reviews: { stars: 4.7, count: 41, average: 4.7 }
            },
            {
                id: "recipe-11",
                category: "Quick and Easy",
                title: "Quick and Easy Boursin Appetizer With Honey and Pistachio",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Boursin-Appetizer-400x400.jpg",
                reviews: { stars: 4.9, count: 20, average: 4.9 }
            },
            {
                id: "recipe-12",
                category: "Quick and Easy",
                title: "Quick and Easy Sesame Apricot Chicken",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Sesame-Apricot-Chicken-1-2-400x400.jpg",
                reviews: { stars: 4.9, count: 16, average: 4.9 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "JASON K.", rating: 5, text: "Moist and flavorful! The frosting is creamy perfection. Best carrot cupcakes ever." },
            { author: "LUCY T.", rating: 5, text: "So easy and delicious. Kids devoured them. Added walnuts for texture." },
            { author: "MARK R.", rating: 5, text: "Classic and moist. The cream cheese frosting ties it all together. Perfect for Easter." }
        ]
    },
    {
        id: "recipe-14",
        category: "Quick and Easy",
        title: "Scallion Pancake with Egg",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Scallion-Pancake-with-Eggs-400x400.jpg",
        descriptions: [
            "Crispy scallion pancakes topped with a fried egg.",
            "A savory breakfast treat with Asian-inspired flavors."
        ],
        reviews: { stars: 4.9, count: 15, average: 4.9 },
        ingredients: [
            { category: "Pancake", items: ["Flour", "Scallions", "Oil", "Salt"] },
            { category: "Topping", items: ["Eggs", "Sesame seeds"] }
        ],
        nutrition: {
            servingSize: "1 pancake",
            calories: "280 kcal",
            items: [
                { label: "Carbs", value: "30g" },
                { label: "Protein", value: "10g" },
                { label: "Fat", value: "14g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Scallion-Pancake-with-Eggs-400x400.jpg",
            title: "Scallion Pancake Tutorial"
        },
        feedback: { title: "Rate this pancake!", text: "Tell us how your scallion pancake turned out." },
        moreRecipes: [
            {
                id: "recipe-1",
                title: "Brandon's Egg Roll Tacos",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Brandons-Egg-Roll-Tacos-1-3.jpg",
                reviews: { stars: 4.9, count: 28, average: 4.9 },
            },
            {
                id: "recipe-2",
                category: "Quick and Easy",
                title: "Crispy Smashed Potato Salad",
                mainImage: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Smashed-Potato-Salad-2.jpg",
                reviews: { stars: 4, count: 8, average: 4 }
            },
            {
                id: "recipe-3",
                category: "Quick and Easy",
                title: "Instant Pot Spaghetti",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Spaghetti-4.jpg",
                reviews: { stars: 3, count: 30, average: 3 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "HENRY M.", rating: 5, text: "Crispy perfection! The egg adds richness. So easy for a quick breakfast." },
            { author: "AVA N.", rating: 4, text: "Savory and fun. Added chili flakes for spice. Great Asian-inspired dish." },
            { author: "BEN O.", rating: 5, text: "Delicious and filling. The scallions make it fresh. Will make again." }
        ]
    },
    {
        id: "recipe-15",
        category: "Quick and Easy",
        title: "Party Brownie",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Party-Brownies-with-Sprinkles-400x400.jpg",
        descriptions: [
            "Fudgy brownies loaded with colorful sprinkles.",
            "Fun and festive for celebrations and gatherings."
        ],
        reviews: { stars: 4.9, count: 17, average: 4.9 },
        ingredients: [
            { category: "Brownie", items: ["Chocolate", "Butter", "Sugar", "Eggs", "Flour"] },
            { category: "Topping", items: ["Sprinkles"] }
        ],
        nutrition: {
            servingSize: "1 brownie",
            calories: "350 kcal",
            items: [
                { label: "Carbs", value: "40g" },
                { label: "Protein", value: "5g" },
                { label: "Fat", value: "18g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Party-Brownies-with-Sprinkles-400x400.jpg",
            title: "How to Make Party Brownies"
        },
        feedback: { title: "Rate these brownies!", text: "Tell us how your party brownies turned out." },
        moreRecipes: [
            {
                id: "recipe-6",
                title: "Quick and Easy Zuppa Toscana Soup",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Zuppa-Toscana-Soup-400x400.jpg",
                reviews: { stars: 3, count: 11, average: 3 },
            },
            {
                id: "recipe-7",
                category: "Quick and Easy",
                title: "Quick and Easy Sheet Pan Breakfast Burritos",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Sheet-Pan-Breakfast-Burritos-400x400.jpg",
                reviews: { stars: 2, count: 3, average: 2 }
            },
            {
                id: "recipe-8",
                category: "Quick and Easy",
                title: "Quick and Easy Miracle No Knead Bread",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Miracle-No-Knead-Bread-3-2-400x400.jpg",
                reviews: { stars: 4.8, count: 585, average: 4.8 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "CHLOE P.", rating: 5, text: "Fudgy and fun! The sprinkles make it festive. Perfect for kids' parties." },
            { author: "ETHAN Q.", rating: 5, text: "Rich chocolate goodness. Easy to bake and decorate. Everyone loved it." },
            { author: "FIONA R.", rating: 4, text: "Delicious and moist. Added extra chocolate chips. Great for celebrations." }
        ]
    },
    {
        id: "recipe-16",
        category: "Quick and Easy",
        title: "Spicy Korean BBQ Sauce",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Mushroom-Sandwich-9-400x400.jpg",
        descriptions: [
            "Bold and spicy Korean BBQ sauce for grilling or dipping.",
            "Perfect for adding heat to meats and veggies."
        ],
        reviews: { stars: 4.9, count: 23, average: 4.9 },
        ingredients: [
            { category: "Sauce", items: ["Soy sauce", "Gochujang", "Garlic", "Ginger", "Honey"] }
        ],
        nutrition: {
            servingSize: "2 tbsp",
            calories: "50 kcal",
            items: [
                { label: "Carbs", value: "10g" },
                { label: "Protein", value: "1g" },
                { label: "Fat", value: "0g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Mushroom-Sandwich-9-400x400.jpg",
            title: "Korean BBQ Sauce Recipe"
        },
        feedback: { title: "Rate this sauce!", text: "Tell us how your Korean BBQ sauce turned out." },
        moreRecipes: [
            {
                id: "recipe-7",
                title: "Quick and Easy Sheet Pan Breakfast Burritos",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Sheet-Pan-Breakfast-Burritos-400x400.jpg",
                reviews: { stars: 2, count: 3, average: 2 }
            },
            {
                id: "recipe-8",
                category: "Quick and Easy",
                title: "Quick and Easy Miracle No Knead Bread",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Miracle-No-Knead-Bread-3-2-400x400.jpg",
                reviews: { stars: 4.8, count: 585, average: 4.8 }
            },
            {
                id: "recipe-9",
                category: "Quick and Easy",
                title: "Quick and Easy Crunchy Roll Bowls",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Crunch-Roll-Bowls-2-400x400.jpg",
                reviews: { stars: 4.9, count: 469, average: 4.9 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "GEORGE S.", rating: 5, text: "Spicy and flavorful! Perfect for BBQ. Added to chicken and it was amazing." },
            { author: "HANNAH T.", rating: 5, text: "Bold taste with great heat. Easy to make and versatile. Loved the gochujang." },
            { author: "IAN U.", rating: 4, text: "Delicious sauce. Used for dipping veggies. A bit sweet, but balanced well." }
        ]
    },
    {
        id: "recipe-17",
        category: "Quick and Easy",
        title: "Fluffy Buttermilk Pancakes",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Fried-Egg-Tacos-4-400x400.jpg",
        descriptions: [
            "Light and fluffy pancakes made with buttermilk.",
            "A classic breakfast staple that's easy to make."
        ],
        reviews: { stars: 5, count: 55, average: 5 },
        ingredients: [
            { category: "Pancake", items: ["Flour", "Buttermilk", "Eggs", "Baking powder", "Butter"] }
        ],
        nutrition: {
            servingSize: "2 pancakes",
            calories: "300 kcal",
            items: [
                { label: "Carbs", value: "40g" },
                { label: "Protein", value: "10g" },
                { label: "Fat", value: "12g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Fried-Egg-Tacos-4-400x400.jpg",
            title: "Buttermilk Pancakes Tutorial"
        },
        feedback: { title: "Rate these pancakes!", text: "Tell us how your buttermilk pancakes turned out." },
        moreRecipes: [
            {
                id: "recipe-10",
                title: "Quick and Easy Marry Me Chickpeas and Orzo",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Marry-Me-Orzo-400x400.jpg",
                reviews: { stars: 4.7, count: 41, average: 4.7 }
            },
            {
                id: "recipe-11",
                category: "Quick and Easy",
                title: "Quick and Easy Boursin Appetizer With Honey and Pistachio",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Boursin-Appetizer-400x400.jpg",
                reviews: { stars: 4.9, count: 20, average: 4.9 }
            },
            {
                id: "recipe-12",
                category: "Quick and Easy",
                title: "Quick and Easy Sesame Apricot Chicken",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Sesame-Apricot-Chicken-1-2-400x400.jpg",
                reviews: { stars: 4.9, count: 16, average: 4.9 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "JACK V.", rating: 5, text: "Fluffy and delicious! The buttermilk makes them so tender. Topped with syrup." },
            { author: "KATE W.", rating: 5, text: "Perfect pancakes. Easy recipe and they rise beautifully. Family favorite." },
            { author: "LIAM X.", rating: 5, text: "Light and airy. Added blueberries for extra flavor. So quick to whip up." }
        ]
    },
    {
        id: "recipe-18",
        category: "Quick and Easy",
        title: "Creamy Baked Orzo With Meatball",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Creamy-Baked-Orzo-Square-300x300.png",
        descriptions: [
            "Creamy orzo pasta baked with savory meatballs.",
            "Comfort food at its finest for a hearty meal."
        ],
        reviews: { stars: 4.1, count: 40, average: 4.1 },
        ingredients: [
            { category: "Pasta", items: ["Orzo", "Cream", "Cheese", "Meatballs"] },
            { category: "Seasoning", items: ["Garlic", "Herbs", "Salt"] }
        ],
        nutrition: {
            servingSize: "250g",
            calories: "450 kcal",
            items: [
                { label: "Carbs", value: "50g" },
                { label: "Protein", value: "20g" },
                { label: "Fat", value: "18g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Creamy-Baked-Orzo-Square-300x300.png",
            title: "Baked Orzo with Meatballs"
        },
        feedback: { title: "Rate this orzo dish!", text: "Tell us how your baked orzo turned out." },
        moreRecipes: [
            {
                id: "recipe-13",
                title: "Quick and Easy The Best Carrot Cupcake",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Carrot-Cake-Cupcakes-with-Cream-Cheese-Frosting-400x400.jpg",
                reviews: { stars: 5, count: 13, average: 5 }
            },
            {
                id: "recipe-14",
                category: "Quick and Easy",
                title: "Quick and Easy Scallion Pancake with Egg",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Scallion-Pancake-with-Eggs-400x400.jpg",
                reviews: { stars: 4.9, count: 15, average: 4.9 }
            },
            {
                id: "recipe-15",
                category: "Quick and Easy",
                title: "Quick and Easy Party Brownie",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Party-Brownies-with-Sprinkles-400x400.jpg",
                reviews: { stars: 4.9, count: 17, average: 4.9 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "MIA Y.", rating: 4, text: "Creamy and comforting. The meatballs add great flavor. Easy one-dish meal." },
            { author: "NOAH Z.", rating: 4, text: "Hearty and delicious. Baked perfectly. Added extra cheese on top." },
            { author: "OLIVIA A.", rating: 4, text: "Savory comfort food. The orzo is tender. Great for dinner with salad." }
        ]
    },
    {
        id: "recipe-19",
        category: "Quick and Easy",
        title: "Pumpkin Caramel Monkey Bread",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Pumpkin-Caramel-Monkey-Bread-Square-300x300.png",
        descriptions: [
            "Sweet monkey bread with pumpkin and caramel flavors.",
            "A fall-inspired treat that's pull-apart delicious."
        ],
        reviews: { stars: 4.6, count: 7, average: 4.6 },
        ingredients: [
            { category: "Dough", items: ["Flour", "Pumpkin puree", "Yeast", "Sugar"] },
            { category: "Topping", items: ["Caramel", "Cinnamon"] }
        ],
        nutrition: {
            servingSize: "1 piece",
            calories: "280 kcal",
            items: [
                { label: "Carbs", value: "45g" },
                { label: "Protein", value: "5g" },
                { label: "Fat", value: "10g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Pumpkin-Caramel-Monkey-Bread-Square-300x300.png",
            title: "Pumpkin Monkey Bread Recipe"
        },
        feedback: { title: "Rate this bread!", text: "Tell us how your pumpkin monkey bread turned out." },
        moreRecipes: [
            {
                id: "recipe-13",
                title: "The Best Carrot Cupcake",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Carrot-Cake-Cupcakes-with-Cream-Cheese-Frosting-400x400.jpg",
                reviews: { stars: 5, count: 13, average: 5 }
            },
            {
                id: "recipe-14",
                category: "Quick and Easy",
                title: "Scallion Pancake with Egg",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Scallion-Pancake-with-Eggs-400x400.jpg",
                reviews: { stars: 4.9, count: 15, average: 4.9 }
            },
            {
                id: "recipe-15",
                category: "Quick and Easy",
                title: "Party Brownie",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Party-Brownies-with-Sprinkles-400x400.jpg",
                reviews: { stars: 4.9, count: 17, average: 4.9 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "PETER B.", rating: 5, text: "Pull-apart perfection! The pumpkin and caramel are a match made in heaven. So festive." },
            { author: "QUINN C.", rating: 4, text: "Sweet and gooey. Easy to make for fall gatherings. Added extra cinnamon." },
            { author: "RILEY D.", rating: 5, text: "Delicious and fun. The caramel drizzle is amazing. Kids loved pulling it apart." }
        ]
    },
    {
        id: "recipe-20",
        category: "Quick and Easy",
        title: "Kimchi Tuna Salad Wrap",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Kimchi-Tuna-Salad-Square-300x300.png",
        descriptions: [
            "Spicy kimchi tuna salad wrapped in a tortilla.",
            "A quick and flavorful lunch or dinner option."
        ],
        reviews: { stars: 5, count: 11, average: 5 },
        ingredients: [
            { category: "Salad", items: ["Tuna", "Kimchi", "Mayo", "Green onions"] },
            { category: "Wrap", items: ["Tortillas", "Lettuce"] }
        ],
        nutrition: {
            servingSize: "1 wrap",
            calories: "350 kcal",
            items: [
                { label: "Carbs", value: "30g" },
                { label: "Protein", value: "25g" },
                { label: "Fat", value: "15g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Kimchi-Tuna-Salad-Square-300x300.png",
            title: "Kimchi Tuna Wrap Tutorial"
        },
        feedback: { title: "Rate this wrap!", text: "Tell us how your kimchi tuna wrap turned out." },
        moreRecipes: [
            {
                id: "recipe-13",
                title: "The Best Carrot Cupcake",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Carrot-Cake-Cupcakes-with-Cream-Cheese-Frosting-400x400.jpg",
                reviews: { stars: 5, count: 13, average: 5 }
            },
            {
                id: "recipe-14",
                category: "Quick and Easy",
                title: "Scallion Pancake with Egg",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Scallion-Pancake-with-Eggs-400x400.jpg",
                reviews: { stars: 4.9, count: 15, average: 4.9 }
            },
            {
                id: "recipe-15",
                category: "Quick and Easy",
                title: "Party Brownie",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Party-Brownies-with-Sprinkles-400x400.jpg",
                reviews: { stars: 4.9, count: 17, average: 4.9 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "SAM E.", rating: 5, text: "Spicy and fresh! The kimchi adds a great kick. Perfect for a quick lunch." },
            { author: "TINA F.", rating: 5, text: "Flavor explosion. Easy to assemble and so satisfying. Added avocado." },
            { author: "URIAH G.", rating: 5, text: "Delicious fusion. The tuna and kimchi work wonderfully. Will make again." }
        ]
    },
    {
        id: "recipe-21",
        category: "Quick and Easy",
        title: "Red Chile Tostadas With Eggs",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Red-Chile-Tostadas-with-Eggs-Square-300x300.png",
        descriptions: [
            "Crispy tostadas topped with red chile sauce and eggs.",
            "A spicy breakfast that's full of flavor."
        ],
        reviews: { stars: 4.9, count: 27, average: 4.9 },
        ingredients: [
            { category: "Tostada", items: ["Tortillas", "Eggs", "Red chile sauce"] },
            { category: "Toppings", items: ["Cheese", "Avocado", "Cilantro"] }
        ],
        nutrition: {
            servingSize: "1 tostada",
            calories: "320 kcal",
            items: [
                { label: "Carbs", value: "25g" },
                { label: "Protein", value: "15g" },
                { label: "Fat", value: "18g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Red-Chile-Tostadas-with-Eggs-Square-300x300.png",
            title: "Red Chile Tostadas Recipe"
        },
        feedback: { title: "Rate these tostadas!", text: "Tell us how your red chile tostadas turned out." },
        moreRecipes: [
            {
                id: "recipe-7",
                title: "Sheet Pan Breakfast Burritos",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Sheet-Pan-Breakfast-Burritos-400x400.jpg",
                reviews: { stars: 2, count: 3, average: 2 }
            },
            {
                id: "recipe-8",
                category: "Quick and Easy",
                title: "Miracle No Knead Bread",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Miracle-No-Knead-Bread-3-2-400x400.jpg",
                reviews: { stars: 4.8, count: 585, average: 4.8 }
            },
            {
                id: "recipe-9",
                category: "Quick and Easy",
                title: "Crunchy Roll Bowls",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Crunch-Roll-Bowls-2-400x400.jpg",
                reviews: { stars: 4.9, count: 469, average: 4.9 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "VICTOR H.", rating: 5, text: "Spicy and crunchy! The red chile sauce is incredible. Great breakfast option." },
            { author: "WENDY I.", rating: 5, text: "Flavorful and easy. The eggs cook perfectly on the tostada. Added cheese." },
            { author: "XANDER J.", rating: 4, text: "Delicious heat. The avocado balances the spice. Quick to prepare." }
        ]
    },
    {
        id: "recipe-22",
        category: "Quick and Easy",
        title: "Butter Chicken",
        mainImage: "https://pinchofyum.com/wp-content/uploads/butter-chicken-3-400x400.jpg",
        descriptions: [
            "Rich and creamy butter chicken with tender chicken pieces.",
            "A classic Indian dish that's comforting and delicious."
        ],
        reviews: { stars: 4.8, count: 60, average: 4.8 },
        ingredients: [
            { category: "Chicken", items: ["Chicken", "Butter", "Tomatoes", "Cream"] },
            { category: "Spices", items: ["Garlic", "Ginger", "Curry powder"] }
        ],
        nutrition: {
            servingSize: "250g",
            calories: "500 kcal",
            items: [
                { label: "Carbs", value: "15g" },
                { label: "Protein", value: "35g" },
                { label: "Fat", value: "30g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/butter-chicken-3-400x400.jpg",
            title: "Butter Chicken Tutorial"
        },
        feedback: { title: "Rate this chicken!", text: "Tell us how your butter chicken turned out." },
        moreRecipes: [
            {
                id: "recipe-10",
                title: "Marry Me Chickpeas and Orzo",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Marry-Me-Orzo-400x400.jpg",
                reviews: { stars: 4.7, count: 41, average: 4.7 }
            },
            {
                id: "recipe-11",
                category: "Quick and Easy",
                title: "Boursin Appetizer With Honey and Pistachio",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Boursin-Appetizer-400x400.jpg",
                reviews: { stars: 4.9, count: 20, average: 4.9 }
            },
            {
                id: "recipe-12",
                category: "Quick and Easy",
                title: "Sesame Apricot Chicken",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Sesame-Apricot-Chicken-1-2-400x400.jpg",
                reviews: { stars: 4.9, count: 16, average: 4.9 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "YARA K.", rating: 5, text: "Creamy and flavorful! The spices are perfect. So comforting." },
            { author: "ZANE L.", rating: 5, text: "Rich butter chicken. Tender chicken and great sauce. Served with naan." },
            { author: "AMY M.", rating: 4, text: "Delicious classic. Easy to make and full of flavor. Added extra cream." }
        ]
    },
    {
        id: "recipe-23",
        category: "Quick and Easy",
        title: "Ginger Chicken Meatball Sandos",
        mainImage: "https://pinchofyum.com/wp-content/uploads/ginger-chicken-meatball-sandos-63-400x400.jpg",
        descriptions: [
            "Juicy ginger chicken meatballs in a sandwich.",
            "A flavorful twist on classic meatballs."
        ],
        reviews: { stars: 4.8, count: 41, average: 4.8 },
        ingredients: [
            { category: "Meatballs", items: ["Ground chicken", "Ginger", "Garlic", "Soy sauce"] },
            { category: "Sandwich", items: ["Buns", "Lettuce", "Sauce"] }
        ],
        nutrition: {
            servingSize: "1 sandwich",
            calories: "400 kcal",
            items: [
                { label: "Carbs", value: "35g" },
                { label: "Protein", value: "30g" },
                { label: "Fat", value: "15g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/ginger-chicken-meatball-sandos-63-400x400.jpg",
            title: "Ginger Meatball Sandos Recipe"
        },
        feedback: { title: "Rate these sandos!", text: "Tell us how your ginger chicken sandos turned out." },
        moreRecipes: [
            {
                id: "recipe-13",
                title: "The Best Carrot Cupcake",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Carrot-Cake-Cupcakes-with-Cream-Cheese-Frosting-400x400.jpg",
                reviews: { stars: 5, count: 13, average: 5 }
            },
            {
                id: "recipe-14",
                category: "Quick and Easy",
                title: "Scallion Pancake with Egg",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Scallion-Pancake-with-Eggs-400x400.jpg",
                reviews: { stars: 4.9, count: 15, average: 4.9 }
            },
            {
                id: "recipe-15",
                category: "Quick and Easy",
                title: "Party Brownie",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Party-Brownies-with-Sprinkles-400x400.jpg",
                reviews: { stars: 4.9, count: 17, average: 4.9 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "BEN N.", rating: 5, text: "Juicy and flavorful! The ginger adds a great kick. Perfect sandwich." },
            { author: "CARA O.", rating: 5, text: "Delicious twist. Easy meatballs and great on buns. Added slaw." },
            { author: "DAVE P.", rating: 4, text: "Tasty and quick. The chicken is tender. Great for lunch." }
        ]
    },
    {
        id: "recipe-24",
        category: "Quick and Easy",
        title: "Vegetarian Shepherd's Pie",
        mainImage: "https://pinchofyum.com/wp-content/uploads/vegetarian-shepherds-pie-400x400.jpg",
        descriptions: [
            "Hearty vegetarian pie with mashed potato topping.",
            "A comforting dish packed with veggies and flavor."
        ],
        reviews: { stars: 4.8, count: 403, average: 4.8 },
        ingredients: [
            { category: "Filling", items: ["Lentils", "Carrots", "Peas", "Onions"] },
            { category: "Topping", items: ["Potatoes", "Butter", "Milk"] }
        ],
        nutrition: {
            servingSize: "300g",
            calories: "380 kcal",
            items: [
                { label: "Carbs", value: "50g" },
                { label: "Protein", value: "15g" },
                { label: "Fat", value: "12g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/vegetarian-shepherds-pie-400x400.jpg",
            title: "Vegetarian Shepherd's Pie"
        },
        feedback: { title: "Rate this pie!", text: "Tell us how your shepherd's pie turned out." },
        moreRecipes: [
            {
                id: "recipe-16",
                title: "Spicy Korean BBQ Sauce",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Mushroom-Sandwich-9-400x400.jpg",
                reviews: { stars: 4.9, count: 23, average: 4.9 }
            },
            {
                id: "recipe-17",
                category: "Quick and Easy",
                title: "Fluffy Buttermilk Pancakes",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Fried-Egg-Tacos-4-400x400.jpg",
                reviews: { stars: 5, count: 55, average: 5 }
            },
            {
                id: "recipe-18",
                category: "Quick and Easy",
                title: "Creamy Baked Orzo With Meatball",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Creamy-Baked-Orzo-Square-300x300.png",
                reviews: { stars: 4.1, count: 40, average: 4.1 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "ELLA Q.", rating: 5, text: "Hearty and delicious! The lentils make it filling. Great vegetarian option." },
            { author: "FRANK R.", rating: 5, text: "Comforting classic. Easy to make and full of veggies. Topped with cheese." },
            { author: "GINA S.", rating: 4, text: "Tasty and nutritious. The potato topping is perfect. Added herbs." }
        ]
    },
    {
        id: "recipe-25",
        category: "Quick and Easy",
        title: "Instant Pot Wild Rice Soup",
        mainImage: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Wild-Rice-Soup-3-400x400.jpg",
        descriptions: [
            "Creamy wild rice soup made quickly in an Instant Pot.",
            "A warm and nourishing meal for chilly days."
        ],
        reviews: { stars: 4.7, count: 991, average: 4.7 },
        ingredients: [
            { category: "Soup", items: ["Wild rice", "Vegetables", "Broth", "Cream"] },
            { category: "Seasoning", items: ["Garlic", "Thyme", "Salt"] }
        ],
        nutrition: {
            servingSize: "250g",
            calories: "320 kcal",
            items: [
                { label: "Carbs", value: "40g" },
                { label: "Protein", value: "10g" },
                { label: "Fat", value: "14g" }
            ]
        },
        video: {
            thumbnail: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Wild-Rice-Soup-3-400x400.jpg",
            title: "Instant Pot Rice Soup Tutorial"
        },
        feedback: { title: "Rate this soup!", text: "Tell us how your wild rice soup turned out." },
        moreRecipes: [
            {
                id: "recipe-19",
                title: "Pumpkin Caramel Monkey Bread",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Pumpkin-Caramel-Monkey-Bread-Square-300x300.png",
                reviews: { stars: 4.6, count: 7, average: 4.6 }
            },
            {
                id: "recipe-20",
                category: "Quick and Easy",
                title: "Kimchi Tuna Salad Wrap",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Kimchi-Tuna-Salad-Square-300x300.png",
                reviews: { stars: 5, count: 11, average: 5 }
            },
            {
                id: "recipe-21",
                category: "Quick and Easy",
                title: "Red Chile Tostadas With Eggs",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Red-Chile-Tostadas-with-Eggs-Square-300x300.png",
                reviews: { stars: 4.9, count: 27, average: 4.9 }
            }
        ],
        sidebarImage: "Github pfp2.jpg",
        comments: [
            { author: "HANA T.", rating: 5, text: "Creamy and comforting! The Instant Pot makes it so quick. Perfect for cold days." },
            { author: "IAN U.", rating: 4, text: "Nourishing soup. Easy to prepare and full of flavor. Added extra veggies." },
            { author: "JULIA V.", rating: 5, text: "Delicious and hearty. The wild rice adds great texture. Will make again." }
        ]
    },
    {
        id: "recipe-26",
        category: "Dinner",
        title: "Creamy Pesto Pasta",
        mainImage: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Creamy-Kale-Pasta-2.jpg",

        descriptions: [
            "Creamy pesto pasta is a rich, flavorful dish made with basil, garlic, parmesan, and cream—perfectly blending freshness and smoothness for pasta or grilled favorites.",
            "This creamy pesto originates from Italy, inspired by traditional Genovese pesto from the Liguria region, known for its aromatic basil and olive oil."
        ],

        reviews: {
            stars: 5,
            count: 127,
            average: 5
        },

        ingredients: [
            {
                category: "Main Ingredients",
                items: [
                    "1 pound favorite pasta (cooked)",
                    "2 cups fresh basil leaves (washed and packed)",
                    "2–3 cloves garlic",
                    "⅓ cup pine nuts (or cashews/walnuts)",
                    "½ cup Parmesan cheese, grated",
                    "½ cup olive oil",
                    "Salt and pepper to taste"
                ]
            },
            {
                category: "Cream Sauce",
                items: [
                    "1 cup heavy cream",
                    "2 tbsp butter",
                    "½ tsp chili flakes",
                    "¼ tsp lemon zest",
                    "2 tbsp cream cheese"
                ]
            }
        ],

        nutrition: {
            servingSize: "500g",
            calories: "734 kcal",
            items: [
                { label: "Carbohydrates", value: "73g" },
                { label: "Protein", value: "18g" },
                { label: "Fat", value: "41g" },
                { label: "Saturated Fat", value: "12g" },
                { label: "Fiber", value: "4g" },
                { label: "Sugar", value: "5g" },
                { label: "Sodium", value: "420mg" },
                { label: "Potassium", value: "312mg" }
            ]
        },

        video: {
            thumbnail: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Creamy-Kale-Pasta-2.jpg",
            title: "Creamy Pesto Pasta with Shrimp"
        },

        feedback: {
            title: "Did you love this recipe?",
            text: "I'd love if you'd leave a rating or review below! Your feedback helps others find the recipes that are fan-favorites!"
        },

        moreRecipes: [
            {
                id: "recipe-13",
                title: "The Best Carrot Cupcake",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Carrot-Cake-Cupcakes-with-Cream-Cheese-Frosting-400x400.jpg",
                reviews: { stars: 5, count: 13, average: 5 }
            },
            {
                id: "recipe-14",
                category: "Quick and Easy",
                title: "Scallion Pancake with Egg",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Scallion-Pancake-with-Eggs-400x400.jpg",
                reviews: { stars: 4.9, count: 15, average: 4.9 }
            },
            {
                id: "recipe-15",
                category: "Quick and Easy",
                title: "Party Brownie",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Party-Brownies-with-Sprinkles-400x400.jpg",
                reviews: { stars: 4.9, count: 17, average: 4.9 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            {
                author: "JOR D.",
                rating: 5,
                text: "I have never tried tofu before but this recipe might get me to do it!"
            },
            {
                author: "MARIA G.",
                rating: 5,
                text: "Absolutely loved how creamy and fresh the flavor was. Amazing!"
            },
            {
                author: "CHRIS W.",
                rating: 5,
                text: "Best pesto pasta I've ever made! The cream makes it so rich."
            },
            {
                author: "NINA K.",
                rating: 4,
                text: "Delicious but I used less cream to lighten it up a bit."
            },
            {
                author: "PAUL T.",
                rating: 5,
                text: "Restaurant quality at home. Will make this again!"
            }
        ]
    },

    // ------------------------------------------------------------------

    {
        id: "recipe-27",
        category: "Dinner",
        title: "Garlic Butter Shrimp Pasta",
        mainImage: "https://muchbutter.com/wp-content/uploads/2021/10/150-Much-Butter-Garlic-Butter-Shrimp-Pasta-2-768x1024.jpg",

        descriptions: [
            "Garlic butter shrimp pasta is a savory, aromatic dish packed with buttery garlic flavors that pair perfectly with tender shrimp.",
            "A popular Italian-inspired recipe, this dish emphasizes simple ingredients that create bold flavors in just minutes."
        ],

        reviews: { stars: 5, count: 214, average: 5 },

        ingredients: [
            {
                category: "Main Ingredients",
                items: [
                    "300g spaghetti",
                    "300g shrimp (peeled)",
                    "4 tbsp butter",
                    "5 cloves garlic, minced",
                    "½ cup pasta water",
                    "Salt and pepper to taste"
                ]
            },
            {
                category: "Garnish",
                items: ["Parsley", "Lemon slices", "Chili flakes"]
            }
        ],

        nutrition: {
            servingSize: "450g",
            calories: "620 kcal",
            items: [
                { label: "Carbohydrates", value: "68g" },
                { label: "Protein", value: "29g" },
                { label: "Fat", value: "22g" },
                { label: "Fiber", value: "3g" },
                { label: "Sugar", value: "4g" },
                { label: "Sodium", value: "510mg" }
            ]
        },

        video: {
            thumbnail: "https://muchbutter.com/wp-content/uploads/2021/10/150-Much-Butter-Garlic-Butter-Shrimp-Pasta-2-768x1024.jpg",
            title: "Garlic Butter Shrimp Step-By-Step"
        },

        feedback: {
            title: "Did you enjoy this recipe?",
            text: "Leave your rating or comment below to help others try this delicious seafood pasta!"
        },

        moreRecipes: [
            {
                id: "recipe-22",
                title: "Butter Chicken",
                mainImage: "https://pinchofyum.com/wp-content/uploads/butter-chicken-3-400x400.jpg",
                reviews: { stars: 4.8, count: 60, average: 4.8 }
            },
            {
                id: "recipe-9",
                title: "Crunchy Roll Bowls",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Crunch-Roll-Bowls-2-400x400.jpg",
                reviews: { stars: 4.9, count: 469, average: 4.9 }
            },
            {
                id: "recipe-12",
                title: "Sesame Apricot Chicken",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Sesame-Apricot-Chicken-1-2-400x400.jpg",
                reviews: { stars: 4.9, count: 16, average: 4.9 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            {
                author: "ANNE P.",
                rating: 5,
                text: "Bursting with garlic flavor! My family loved it."
            },
            {
                author: "MARCUS D.",
                rating: 5,
                text: "The shrimp was perfectly cooked and so buttery!"
            },
            {
                author: "LISA M.",
                rating: 5,
                text: "Quick weeknight dinner that tastes fancy. Love it!"
            },
            {
                author: "TONY R.",
                rating: 4,
                text: "Great recipe, added extra lemon for brightness."
            }
        ]
    },

    // ------------------------------------------------------------------

    {
        id: "recipe-28",
        category: "Dinner",
        title: "Spicy Korean Bibimbap",
        mainImage: "https://muchbutter.com/wp-content/uploads/2023/11/Bibimbap-49-768x1024.jpg",

        descriptions: [
            "Bibimbap is a colorful Korean rice bowl topped with sautéed vegetables, spicy gochujang, eggs, and meat.",
            "This dish blends textures and flavors—from crunchy veggies to savory beef—creating the perfect comfort meal."
        ],

        reviews: { stars: 5, count: 310, average: 5 },

        ingredients: [
            {
                category: "Bowl Ingredients",
                items: [
                    "2 cups cooked rice",
                    "1 carrot (julienned)",
                    "1 zucchini (sliced)",
                    "Spinach (blanched)",
                    "Bean sprouts",
                    "Fried egg"
                ]
            },
            {
                category: "Meat Marinade",
                items: [
                    "200g ground beef",
                    "2 tbsp soy sauce",
                    "1 tsp sesame oil",
                    "1 tsp sugar",
                    "1 garlic clove, minced"
                ]
            }
        ],

        nutrition: {
            servingSize: "600g",
            calories: "780 kcal",
            items: [
                { label: "Carbohydrates", value: "85g" },
                { label: "Protein", value: "32g" },
                { label: "Fat", value: "30g" },
                { label: "Fiber", value: "8g" }
            ]
        },

        video: {
            thumbnail: "https://muchbutter.com/wp-content/uploads/2023/11/Bibimbap-49-768x1024.jpg",
            title: "How to Make Bibimbap"
        },

        feedback: {
            title: "Was this recipe delicious?",
            text: "Share your experience and help Korean food lovers discover this recipe!"
        },

        moreRecipes: [
            {
                id: "recipe-16",
                title: "Spicy Korean BBQ Sauce",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Mushroom-Sandwich-9-400x400.jpg",
                reviews: { stars: 4.9, count: 23, average: 4.9 }
            },
            {
                id: "recipe-20",
                title: "Kimchi Tuna Salad Wrap",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Kimchi-Tuna-Salad-Square-300x300.png",
                reviews: { stars: 5, count: 11, average: 5 }
            },
            {
                id: "recipe-9",
                title: "Crunchy Roll Bowls",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Crunch-Roll-Bowls-2-400x400.jpg",
                reviews: { stars: 4.9, count: 469, average: 4.9 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            {
                author: "SARAH K.",
                rating: 5,
                text: "So colorful and healthy! Love all the different textures."
            },
            {
                author: "JIN L.",
                rating: 5,
                text: "Authentic Korean flavors. The gochujang is perfect!"
            },
            {
                author: "MIKE H.",
                rating: 5,
                text: "Fun to make and delicious to eat. Family favorite now!"
            }
        ]
    },

    // ------------------------------------------------------------------

    {
        id: "recipe-29",
        category: "Dinner",
        title: "Chicken Alfredo Pasta",
        mainImage: "https://www.recipetineats.com/tachyon/2017/03/One-Pot-Chicken-Alfredo-2.jpg?resize=964%2C1350&zoom=0.67",

        descriptions: [
            "Chicken alfredo pasta is a creamy Italian pasta dish made with parmesan, butter, and tender chicken breast.",
            "The luxurious sauce coats every strand, making it a comforting classic beloved around the world."
        ],

        reviews: { stars: 4, count: 92, average: 4 },

        ingredients: [
            {
                category: "Main Ingredients",
                items: [
                    "300g fettuccine",
                    "2 chicken breasts (sliced)",
                    "1 cup heavy cream",
                    "½ cup parmesan",
                    "3 tbsp butter",
                    "Salt and pepper"
                ]
            }
        ],

        nutrition: {
            servingSize: "500g",
            calories: "850 kcal",
            items: [
                { label: "Carbohydrates", value: "70g" },
                { label: "Protein", value: "40g" },
                { label: "Fat", value: "52g" }
            ]
        },

        video: {
            thumbnail: "https://www.recipetineats.com/tachyon/2017/03/One-Pot-Chicken-Alfredo-2.jpg?resize=964%2C1350&zoom=0.67",
            title: "Creamy Chicken Alfredo Tutorial"
        },

        feedback: {
            title: "Do you like this creamy classic?",
            text: "Leave your thoughts and help others discover this pasta favorite!"
        },

        moreRecipes: [
            {
                id: "recipe-16",
                title: "Spicy Korean BBQ Sauce",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Mushroom-Sandwich-9-400x400.jpg",
                reviews: { stars: 4.9, count: 23, average: 4.9 }
            },
            {
                id: "recipe-9",
                title: "Crunchy Roll Bowls",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Crunch-Roll-Bowls-2-400x400.jpg",
                reviews: { stars: 4.9, count: 469, average: 4.9 }
            },
            {
                id: "recipe-18",
                title: "Creamy Baked Orzo With Meatball",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Creamy-Baked-Orzo-Square-300x300.png",
                reviews: { stars: 4.1, count: 40, average: 4.1 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            {
                author: "BETH A.",
                rating: 4,
                text: "Classic comfort food. Rich and creamy!"
            },
            {
                author: "RYAN T.",
                rating: 4,
                text: "Good recipe, I added broccoli for veggies."
            },
            {
                author: "AMY S.",
                rating: 5,
                text: "Better than restaurant alfredo. So good!"
            }
        ]
    },

    // ------------------------------------------------------------------

    {
        id: "recipe-30",
        category: "Lunch",
        title: "Classic Beef Tacos",
        mainImage: "https://feelgoodfoodie.net/wp-content/uploads/2017/04/Ground-Beef-Tacos-9.jpg",

        descriptions: [
            "These classic beef tacos are packed with juicy, seasoned ground beef and topped with crunchy vegetables.",
            "Perfect for taco night, this recipe brings bright flavors and satisfying textures."
        ],

        reviews: { stars: 5, count: 188, average: 5 },

        ingredients: [
            {
                category: "Filling",
                items: [
                    "1 lb ground beef",
                    "1 taco seasoning packet",
                    "½ cup water",
                    "1 diced onion"
                ]
            },
            {
                category: "Toppings",
                items: ["Lettuce", "Tomatoes", "Cheese", "Sour cream"]
            }
        ],

        nutrition: {
            servingSize: "2 tacos",
            calories: "450 kcal",
            items: [
                { label: "Carbs", value: "40g" },
                { label: "Protein", value: "22g" },
                { label: "Fat", value: "22g" }
            ]
        },

        video: {
            thumbnail: "https://feelgoodfoodie.net/wp-content/uploads/2017/04/Ground-Beef-Tacos-9.jpg",
            title: "Beef Taco Step-by-Step Video"
        },

        feedback: {
            title: "Taco night approved?",
            text: "Rate the recipe so others can enjoy it too!"
        },

        moreRecipes: [
            {
                id: "recipe-18",
                title: "Creamy Baked Orzo With Meatball",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Creamy-Baked-Orzo-Square-300x300.png",
                reviews: { stars: 4.1, count: 40, average: 4.1 }
            },
            {
                id: "recipe-21",
                title: "Red Chile Tostadas With Eggs",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Red-Chile-Tostadas-with-Eggs-Square-300x300.png",
                reviews: { stars: 4.9, count: 27, average: 4.9 }
            },
            {
                id: "recipe-7",
                title: "Sheet Pan Breakfast Burritos",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Sheet-Pan-Breakfast-Burritos-400x400.jpg",
                reviews: { stars: 2, count: 3, average: 2 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            {
                author: "CARLOS M.",
                rating: 5,
                text: "Easy and delicious! Kids loved these tacos."
            },
            {
                author: "JEN P.",
                rating: 5,
                text: "Perfect taco night recipe. So flavorful!"
            },
            {
                author: "DAVE K.",
                rating: 5,
                text: "Simple seasoning but tastes amazing. Will make again!"
            }
        ]
    },

    {
        id: "recipe-31",
        category: "Dinner",
        title: "Lemon Herb Roasted Chicken",
        mainImage: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Lemon herb roasted chicken is a fragrant dish infused with garlic, rosemary, thyme, and citrus.",
            "This classic recipe highlights simple ingredients that produce rich and comforting flavors."
        ],

        reviews: { stars: 5, count: 201, average: 5 },

        ingredients: [
            {
                category: "Chicken",
                items: [
                    "1 whole chicken",
                    "3 tbsp olive oil",
                    "1 lemon (halved)",
                    "4 garlic cloves"
                ]
            },
            {
                category: "Herbs",
                items: ["Rosemary", "Thyme", "Parsley", "Salt & Pepper"]
            }
        ],

        nutrition: {
            servingSize: "350g",
            calories: "520 kcal",
            items: [
                { label: "Carbohydrates", value: "5g" },
                { label: "Protein", value: "45g" },
                { label: "Fat", value: "34g" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
            title: "Perfect Lemon Chicken Roast Guide"
        },

        feedback: {
            title: "Rate this classic roast!",
            text: "Your comments help others try this hearty favorite."
        },

        moreRecipes: [
            {
                id: "recipe-21",
                title: "Red Chile Tostadas With Eggs",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Red-Chile-Tostadas-with-Eggs-Square-300x300.png",
                reviews: { stars: 4.9, count: 27, average: 4.9 }
            },
            {
                id: "recipe-22",
                title: "Butter Chicken",
                mainImage: "https://pinchofyum.com/wp-content/uploads/butter-chicken-3-400x400.jpg",
                reviews: { stars: 4.8, count: 60, average: 4.8 }
            },
            {
                id: "recipe-12",
                title: "Sesame Apricot Chicken",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Sesame-Apricot-Chicken-1-2-400x400.jpg",
                reviews: { stars: 4.9, count: 16, average: 4.9 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "KYLE M.", rating: 5, text: "Super juicy! Lemon flavor was perfect." },
            { author: "TRISH O.", rating: 5, text: "Simple and delicious—my new Sunday dish." },
            { author: "LOUIE F.", rating: 4, text: "Great but needed more herbs for me." },
            { author: "JESS A.", rating: 5, text: "Crispy outside, tender inside. Amazing!" },
            { author: "MIGUEL R.", rating: 5, text: "My family loved it. Easy to follow recipe!" }
        ]
    },

    // ------------------------------------------------------------------

    {
        id: "recipe-32",
        category: "Soup",
        title: "Creamy Mushroom Soup",
        mainImage: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "This creamy mushroom soup blends earthy mushrooms with butter, garlic, and cream for a smooth comforting bowl.",
            "A classic European-style soup perfect for cold rainy days."
        ],

        reviews: { stars: 4, count: 140, average: 4 },

        ingredients: [
            {
                category: "Main Ingredients",
                items: [
                    "300g mushrooms (sliced)",
                    "1 onion (minced)",
                    "3 tbsp butter",
                    "2 cups broth",
                    "1 cup cream"
                ]
            }
        ],

        nutrition: {
            servingSize: "300g",
            calories: "390 kcal",
            items: [
                { label: "Carbohydrates", value: "18g" },
                { label: "Protein", value: "9g" },
                { label: "Fat", value: "32g" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
            title: "Creamy Mushroom Soup Tutorial"
        },

        feedback: {
            title: "Did this warm you up?",
            text: "Drop a review below!"
        },

        moreRecipes: [
            {
                id: "recipe-6",
                title: "Zuppa Toscana Soup",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Zuppa-Toscana-Soup-400x400.jpg",
                reviews: { stars: 3, count: 11, average: 3 }
            },
            {
                id: "recipe-25",
                title: "Instant Pot Wild Rice Soup",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Wild-Rice-Soup-3-400x400.jpg",
                reviews: { stars: 4.7, count: 991, average: 4.7 }
            },
            {
                id: "recipe-8",
                title: "Miracle No Knead Bread",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Miracle-No-Knead-Bread-3-2-400x400.jpg",
                reviews: { stars: 4.8, count: 585, average: 4.8 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "ANA L.", rating: 5, text: "Extra creamy! Perfect for rainy weather." },
            { author: "RON P.", rating: 4, text: "Good flavor but I added more garlic." },
            { author: "MICHA M.", rating: 5, text: "My kids actually loved this!" },
            { author: "ELAI B.", rating: 4, text: "Smooth and rich—paired great with bread." },
            { author: "DREW S.", rating: 5, text: "Restaurant quality soup." }
        ]
    },

    // ------------------------------------------------------------------

    {
        id: "recipe-33",
        category: "Dinner",
        title: "Sweet & Sour Pork",
        mainImage: "https://www.allrecipes.com/thmb/GxjZBbXdRr_j5qJ8E4gNMk9HSKM=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-31144-sweet-and-sour-pork-iii-DDMFS-4x3-8e0f9fce11294e33a1f136d7eeb477a9.jpg",

        descriptions: [
            "Sweet and sour pork features crispy fried pork tossed in a glossy pineapple-vinegar sauce.",
            "A Chinese favorite known for its balance of tangy, savory, and sweet notes."
        ],

        reviews: { stars: 5, count: 260, average: 5 },

        ingredients: [
            {
                category: "Pork",
                items: ["500g pork", "Cornstarch", "Salt", "Pepper", "Oil for frying"]
            },
            {
                category: "Sauce",
                items: ["Vinegar", "Ketchup", "Sugar", "Pineapple chunks"]
            }
        ],

        nutrition: {
            servingSize: "450g",
            calories: "680 kcal",
            items: [
                { label: "Carbs", value: "55g" },
                { label: "Protein", value: "28g" },
                { label: "Fat", value: "32g" }
            ]
        },

        video: {
            thumbnail: "https://www.allrecipes.com/thmb/GxjZBbXdRr_j5qJ8E4gNMk9HSKM=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-31144-sweet-and-sour-pork-iii-DDMFS-4x3-8e0f9fce11294e33a1f136d7eeb477a9.jpg",
            title: "How to Make Sweet & Sour Pork"
        },

        feedback: {
            title: "A takeout classic!",
            text: "Your review helps others try it!"
        },

        moreRecipes: [
            {
                id: "recipe-6",
                title: "Zuppa Toscana Soup",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Zuppa-Toscana-Soup-400x400.jpg",
                reviews: { stars: 3, count: 11, average: 3 }
            },
            {
                id: "recipe-22",
                title: "Butter Chicken",
                mainImage: "https://pinchofyum.com/wp-content/uploads/butter-chicken-3-400x400.jpg",
                reviews: { stars: 4.8, count: 60, average: 4.8 }
            },
            {
                id: "recipe-23",
                title: "Ginger Chicken Meatball Sandos",
                mainImage: "https://pinchofyum.com/wp-content/uploads/ginger-chicken-meatball-sandos-63-400x400.jpg",
                reviews: { stars: 4.8, count: 41, average: 4.8 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "KEN R.", rating: 5, text: "Crispy and saucy—perfect!" },
            { author: "GLEN S.", rating: 5, text: "Just like restaurant quality." },
            { author: "MARY F.", rating: 5, text: "My family devoured this!" },
            { author: "TINA H.", rating: 4, text: "A bit sweet but still delicious." },
            { author: "JONEL P.", rating: 5, text: "Easy to follow recipe!" }
        ]
    },


    {
        id: "recipe-34",
        category: "Vegetarian",
        title: "Spinach and Ricotta Cannelloni",
        mainImage: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Cannelloni tubes filled with creamy spinach and ricotta mixture, baked in marinara sauce with cheese.",
            "This Italian classic is a vegetarian crowd-pleaser that's perfect for dinner parties."
        ],

        reviews: { stars: 5, count: 287, average: 5 },

        ingredients: [
            {
                category: "Filling",
                items: [
                    "12 cannelloni tubes",
                    "2 cups ricotta cheese",
                    "2 cups spinach (cooked and chopped)",
                    "1 cup mozzarella (shredded)",
                    "½ cup Parmesan (grated)",
                    "1 egg",
                    "Nutmeg, salt, pepper"
                ]
            },
            {
                category: "Sauce",
                items: [
                    "3 cups marinara sauce",
                    "1 cup mozzarella for topping",
                    "Fresh basil leaves"
                ]
            }
        ],

        nutrition: {
            servingSize: "3 cannelloni",
            calories: "580 kcal",
            items: [
                { label: "Carbohydrates", value: "54g" },
                { label: "Protein", value: "32g" },
                { label: "Fat", value: "24g" },
                { label: "Fiber", value: "5g" },
                { label: "Sugar", value: "8g" },
                { label: "Sodium", value: "920mg" },
                { label: "Calcium", value: "620mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
            title: "Spinach Ricotta Cannelloni Tutorial"
        },

        feedback: {
            title: "Love this Italian dish?",
            text: "Leave your rating to help others try this recipe!"
        },

        moreRecipes: [
            {
                id: "recipe-56",
                title: "Eggplant Parmesan",
                mainImage: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?auto=format&fit=crop&w=400&q=80",
                reviews: { stars: 5, count: 467, average: 5 }
            },
            {
                id: "recipe-49",
                title: "Moroccan Chickpea Tagine",
                mainImage: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 312, average: 5 }
            },
            {
                id: "recipe-42",
                title: "Mediterranean Stuffed Bell Peppers",
                mainImage: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 178, average: 5 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "ANGELA M.", rating: 5, text: "So creamy and flavorful! Even meat-eaters loved this dish." },
            { author: "MARIO G.", rating: 5, text: "Authentic Italian taste. The spinach and ricotta combo is perfect." },
            { author: "DONNA P.", rating: 5, text: "Made this for a dinner party and everyone asked for the recipe!" }
        ]
    },

    // ------------------------------------------------------------------

    {
        id: "recipe-35",
        category: "Healthy",
        title: "Cauliflower Rice Stir Fry",
        mainImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Low-carb cauliflower rice stir-fried with colorful vegetables, scrambled eggs, and soy sauce.",
            "This healthy alternative to fried rice is packed with nutrients and flavor."
        ],

        reviews: { stars: 4, count: 164, average: 4 },

        ingredients: [
            {
                category: "Cauliflower Rice",
                items: [
                    "1 head cauliflower (riced)",
                    "2 eggs (beaten)",
                    "1 cup mixed vegetables (carrots, peas, corn)",
                    "3 green onions (sliced)",
                    "2 garlic cloves, minced",
                    "1 tbsp ginger, minced"
                ]
            },
            {
                category: "Sauce",
                items: [
                    "2 tbsp soy sauce",
                    "1 tbsp sesame oil",
                    "1 tsp rice vinegar",
                    "Red pepper flakes"
                ]
            }
        ],

        nutrition: {
            servingSize: "2 cups",
            calories: "220 kcal",
            items: [
                { label: "Carbohydrates", value: "18g" },
                { label: "Protein", value: "12g" },
                { label: "Fat", value: "12g" },
                { label: "Fiber", value: "6g" },
                { label: "Sugar", value: "6g" },
                { label: "Sodium", value: "620mg" },
                { label: "Vitamin C", value: "85mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
            title: "Cauliflower Fried Rice Recipe"
        },

        feedback: {
            title: "Enjoyed this healthy swap?",
            text: "Rate this low-carb recipe and help others eat healthier!"
        },

        moreRecipes: [
            {
                id: "recipe-50",
                title: "Zucchini Noodle Primavera",
                mainImage: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 289, average: 5 }
            },
            {
                id: "recipe-57",
                title: "Quinoa Power Bowl",
                mainImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 381, average: 5 }
            },
            {
                id: "recipe-37",
                title: "Asian Chicken Lettuce Wraps",
                mainImage: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 213, average: 5 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "TRACY L.", rating: 5, text: "Great low-carb option! Doesn't taste like you're missing rice at all." },
            { author: "JEFF B.", rating: 4, text: "Really good but I added extra soy sauce for more flavor. Very filling!" },
            { author: "MELISSA R.", rating: 5, text: "Perfect for meal prep. Stays fresh and delicious all week!" }
        ]
    },

    // ------------------------------------------------------------------

    {
        id: "recipe-36",
        category: "Instant Pot",
        title: "Pressure Cooker Butter Chicken",
        mainImage: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Creamy Indian butter chicken made effortlessly in the Instant Pot with tender chunks in rich tomato sauce.",
            "This authentic curry is ready in 30 minutes with all the complex flavors of traditional butter chicken."
        ],

        reviews: { stars: 5, count: 389, average: 5 },

        ingredients: [
            {
                category: "Chicken Marinade",
                items: [
                    "2 lbs chicken thighs (cubed)",
                    "1 cup yogurt",
                    "2 tbsp lemon juice",
                    "2 tsp garam masala",
                    "1 tsp turmeric",
                    "Salt and pepper"
                ]
            },
            {
                category: "Sauce",
                items: [
                    "2 tbsp butter",
                    "1 onion (diced)",
                    "4 garlic cloves, minced",
                    "1 tbsp ginger, minced",
                    "1 can crushed tomatoes",
                    "1 cup heavy cream",
                    "2 tsp garam masala",
                    "1 tsp paprika",
                    "½ tsp cayenne pepper"
                ]
            },
            {
                category: "Serving",
                items: [
                    "Fresh cilantro",
                    "Basmati rice",
                    "Naan bread"
                ]
            }
        ],

        nutrition: {
            servingSize: "1.5 cups",
            calories: "520 kcal",
            items: [
                { label: "Protein", value: "36g" },
                { label: "Fat", value: "32g" },
                { label: "Carbohydrates", value: "22g" },
                { label: "Fiber", value: "4g" },
                { label: "Sugar", value: "10g" },
                { label: "Sodium", value: "680mg" },
                { label: "Iron", value: "3mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            title: "Instant Pot Butter Chicken"
        },

        feedback: {
            title: "Love this Indian classic?",
            text: "Share your review and help others make perfect butter chicken!"
        },

        moreRecipes: [
            {
                id: "recipe-58",
                title: "Instant Pot Chicken Noodle Soup",
                mainImage: "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 542, average: 5 }
            },
            {
                id: "recipe-51",
                title: "Instant Pot Pulled Pork",
                mainImage: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 478, average: 5 }
            },
            {
                id: "recipe-25",
                title: "Instant Pot Wild Rice Soup",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Wild-Rice-Soup-3-400x400.jpg",
                reviews: { stars: 4.7, count: 991, average: 4.7 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "PRIYA S.", rating: 5, text: "Tastes exactly like restaurant butter chicken! The Instant Pot makes it so easy." },
            { author: "JAMES K.", rating: 5, text: "Rich and creamy with amazing depth of flavor. Best butter chicken recipe I've tried!" },
            { author: "SARAH M.", rating: 5, text: "My family requests this weekly now. The sauce is absolutely divine!" }
        ]
    },

    // ------------------------------------------------------------------

    {
        id: "recipe-37",
        category: "Lunch",
        title: "Asian Chicken Lettuce Wraps",
        mainImage: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Fresh and light lettuce wraps filled with savory ground chicken, water chestnuts, and Asian-inspired sauce.",
            "This quick lunch option is healthy, low-carb, and bursting with flavor in every bite."
        ],

        reviews: { stars: 5, count: 213, average: 5 },

        ingredients: [
            {
                category: "Filling",
                items: [
                    "1 lb ground chicken",
                    "1 can water chestnuts (diced)",
                    "3 green onions (sliced)",
                    "2 garlic cloves, minced",
                    "1 tbsp ginger, minced",
                    "1 carrot (shredded)"
                ]
            },
            {
                category: "Sauce",
                items: [
                    "3 tbsp hoisin sauce",
                    "2 tbsp soy sauce",
                    "1 tbsp rice vinegar",
                    "1 tsp sesame oil",
                    "1 tsp Sriracha"
                ]
            },
            {
                category: "Wraps",
                items: [
                    "Butter lettuce leaves",
                    "Crispy wonton strips",
                    "Sesame seeds"
                ]
            }
        ],

        nutrition: {
            servingSize: "3 wraps",
            calories: "280 kcal",
            items: [
                { label: "Protein", value: "26g" },
                { label: "Fat", value: "12g" },
                { label: "Carbohydrates", value: "18g" },
                { label: "Fiber", value: "3g" },
                { label: "Sugar", value: "8g" },
                { label: "Sodium", value: "720mg" },
                { label: "Vitamin A", value: "120% DV" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
            title: "Easy Chicken Lettuce Wraps"
        },

        feedback: {
            title: "Enjoyed these wraps?",
            text: "Leave a review and help others discover this healthy lunch!"
        },

        moreRecipes: [
            {
                id: "recipe-52",
                title: "Greek Chicken Gyro Bowl",
                mainImage: "https://i0.wp.com/www.everylastbite.com/wp-content/uploads/2017/02/gyrobowl-9-scaled.jpg?resize=1024%2C1536&ssl=1",
                reviews: { stars: 5, count: 356, average: 5 }
            },
            {
                id: "recipe-43",
                title: "Grilled Chicken Buddha Bowl",
                mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 412, average: 5 }
            },
            {
                id: "recipe-59",
                title: "BBQ Chicken Quesadillas",
                mainImage: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 312, average: 5 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "JESSICA W.", rating: 5, text: "So fresh and flavorful! Perfect for a light lunch that doesn't leave you sluggish." },
            { author: "ALEX T.", rating: 5, text: "The sauce is addictive! I make extra just to drizzle on top." },
            { author: "MONICA R.", rating: 5, text: "Great for meal prep. The filling stays delicious in the fridge for days!" }
        ]
    },

    // ------------------------------------------------------------------

    {
        id: "recipe-38",
        category: "Desserts",
        title: "New York Cheesecake",
        mainImage: "https://www.onceuponachef.com/images/2017/12/cheesecake-760x882.jpg",

        descriptions: [
            "Classic New York-style cheesecake with a dense, creamy texture on a buttery graham cracker crust.",
            "This iconic dessert is rich, smooth, and topped with your choice of fresh berries or fruit compote."
        ],

        reviews: { stars: 5, count: 456, average: 5 },

        ingredients: [
            {
                category: "Crust",
                items: [
                    "2 cups graham cracker crumbs",
                    "½ cup butter (melted)",
                    "¼ cup sugar"
                ]
            },
            {
                category: "Filling",
                items: [
                    "32 oz cream cheese (room temp)",
                    "1 cup sugar",
                    "4 eggs",
                    "⅓ cup sour cream",
                    "2 tsp vanilla extract",
                    "¼ cup flour"
                ]
            },
            {
                category: "Topping",
                items: [
                    "Fresh strawberries",
                    "Blueberries",
                    "Whipped cream"
                ]
            }
        ],

        nutrition: {
            servingSize: "1 slice",
            calories: "450 kcal",
            items: [
                { label: "Carbohydrates", value: "38g" },
                { label: "Protein", value: "8g" },
                { label: "Fat", value: "30g" },
                { label: "Saturated Fat", value: "18g" },
                { label: "Sugar", value: "28g" },
                { label: "Sodium", value: "340mg" },
                { label: "Cholesterol", value: "165mg" }
            ]
        },

        video: {
            thumbnail: "https://www.onceuponachef.com/images/2017/12/cheesecake-760x882.jpg",
            title: "Perfect New York Cheesecake Recipe"
        },

        feedback: {
            title: "Love this classic dessert?",
            text: "Rate this cheesecake and share your baking success!"
        },

        moreRecipes: [
            {
                id: "recipe-53",
                title: "Classic Tiramisu",
                mainImage: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 512, average: 5 }
            },
            {
                id: "recipe-60",
                title: "Strawberry Shortcake",
                mainImage: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 421, average: 5 }
            },
            {
                id: "recipe-46",
                title: "Molten Chocolate Lava Cake",
                mainImage: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 389, average: 5 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "PATRICIA N.", rating: 5, text: "Absolutely perfect! Dense, creamy, and not too sweet. Worth every calorie!" },
            { author: "ROBERT H.", rating: 5, text: "Made this for Thanksgiving and it was the star of the dessert table!" },
            { author: "CLAIRE D.", rating: 5, text: "The texture is incredible! Followed the water bath method and it came out flawless." }
        ]
    },

    // ------------------------------------------------------------------

    {
        id: "recipe-39",
        category: "Soup",
        title: "Thai Coconut Curry Soup",
        mainImage: "https://damndelicious.net/wp-content/uploads/2018/04/241218_DD_thai-red-curry-noodle-soup_584edit-760x1140.jpg.webp",

        descriptions: [
            "Creamy Thai coconut soup with red curry paste, vegetables, and your choice of chicken or tofu.",
            "This aromatic soup balances spicy, sweet, and savory flavors in a comforting bowl."
        ],

        reviews: { stars: 5, count: 298, average: 5 },

        ingredients: [
            {
                category: "Soup Base",
                items: [
                    "1 can coconut milk",
                    "2 cups chicken broth",
                    "2 tbsp red curry paste",
                    "1 lb chicken breast (sliced)",
                    "1 bell pepper (sliced)",
                    "1 cup mushrooms (sliced)",
                    "1 cup bamboo shoots"
                ]
            },
            {
                category: "Aromatics",
                items: [
                    "2 tbsp fish sauce",
                    "1 tbsp lime juice",
                    "1 tbsp brown sugar",
                    "3 kaffir lime leaves",
                    "2 stalks lemongrass",
                    "Fresh Thai basil"
                ]
            },
            {
                category: "Garnish",
                items: [
                    "Fresh cilantro",
                    "Lime wedges",
                    "Red chili slices",
                    "Bean sprouts"
                ]
            }
        ],

        nutrition: {
            servingSize: "2 cups",
            calories: "380 kcal",
            items: [
                { label: "Protein", value: "28g" },
                { label: "Fat", value: "22g" },
                { label: "Carbohydrates", value: "18g" },
                { label: "Fiber", value: "3g" },
                { label: "Sugar", value: "8g" },
                { label: "Sodium", value: "890mg" },
                { label: "Vitamin C", value: "45mg" }
            ]
        },

        video: {
            thumbnail: "https://damndelicious.net/wp-content/uploads/2018/04/241218_DD_thai-red-curry-noodle-soup_584edit-760x1140.jpg.webp",
            title: "Thai Coconut Curry Soup Tutorial"
        },

        feedback: {
            title: "Enjoyed this Thai classic?",
            text: "Share your thoughts and help others try this flavorful soup!"
        },

        moreRecipes: [
            {
                id: "recipe-54",
                title: "Minestrone Soup",
                mainImage: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 423, average: 5 }
            },
            {
                id: "recipe-47",
                title: "French Onion Soup",
                mainImage: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 298, average: 5 }
            },
            {
                id: "recipe-25",
                title: "Instant Pot Wild Rice Soup",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Wild-Rice-Soup-3-400x400.jpg",
                reviews: { stars: 4.7, count: 991, average: 4.7 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "MAYA P.", rating: 5, text: "The perfect balance of flavors! Spicy, creamy, and so aromatic." },
            { author: "ETHAN L.", rating: 5, text: "Better than any Thai restaurant I've been to. The lemongrass is key!" },
            { author: "OLIVIA K.", rating: 5, text: "Made this with tofu for a vegetarian version and it was incredible!" }
        ]
    },

    // ------------------------------------------------------------------

    {
        id: "recipe-40",
        category: "Dinner",
        title: "Pan-Seared Pork Chops with Apple Sauce",
        mainImage: "https://leitesculinaria.com/wp-content/uploads/2021/05/pork-chops-apple-sauce.jpg",

        descriptions: [
            "Juicy pan-seared pork chops with a golden crust, served with homemade apple sauce and roasted vegetables.",
            "This classic dinner combines savory and sweet flavors for a satisfying meal."
        ],

        reviews: { stars: 5, count: 267, average: 5 },

        ingredients: [
            {
                category: "Pork Chops",
                items: [
                    "4 bone-in pork chops (1 inch thick)",
                    "2 tbsp olive oil",
                    "2 garlic cloves, minced",
                    "1 tsp paprika",
                    "1 tsp thyme",
                    "Salt and pepper"
                ]
            },
            {
                category: "Apple Sauce",
                items: [
                    "3 apples (peeled and diced)",
                    "¼ cup water",
                    "2 tbsp butter",
                    "2 tbsp brown sugar",
                    "½ tsp cinnamon",
                    "Pinch of nutmeg"
                ]
            },
            {
                category: "Sides",
                items: [
                    "Roasted Brussels sprouts",
                    "Mashed potatoes",
                    "Fresh thyme"
                ]
            }
        ],

        nutrition: {
            servingSize: "1 pork chop with sauce",
            calories: "480 kcal",
            items: [
                { label: "Protein", value: "42g" },
                { label: "Fat", value: "24g" },
                { label: "Carbohydrates", value: "26g" },
                { label: "Fiber", value: "4g" },
                { label: "Sugar", value: "18g" },
                { label: "Sodium", value: "420mg" },
                { label: "Iron", value: "2mg" }
            ]
        },

        video: {
            thumbnail: "https://leitesculinaria.com/wp-content/uploads/2021/05/pork-chops-apple-sauce.jpg",
            title: "Perfect Pan-Seared Pork Chops"
        },

        feedback: {
            title: "Rate this pork chop dinner!",
            text: "Help others make this delicious meal!"
        },

        moreRecipes: [
            {
                id: "recipe-55",
                title: "Beef Stroganoff",
                mainImage: "https://images.unsplash.com/photo-1600289031464-74d374b64991?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 398, average: 5 }
            },
            {
                id: "recipe-48",
                title: "Crispy Skin Sea Bass",
                mainImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 267, average: 5 }
            },
            {
                id: "recipe-41",
                title: "Honey Glazed Salmon",
                mainImage: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 342, average: 5 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            {
                author: "JOR D.",
                rating: 5,
                text: "I have never tried tofu before but this recipe might get me to do it!"
            },
            {
                author: "MARIA G.",
                rating: 5,
                text: "Absolutely loved how creamy and fresh the flavor was. Amazing!"
            }
        ]
    },

    {
        id: "recipe-41",
        category: "Dinner",
        title: "Honey Glazed Salmon",
        mainImage: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Tender salmon fillets glazed with honey, soy sauce, and garlic, baked to perfection.",
            "This quick dinner option is healthy, flavorful, and ready in under 30 minutes."
        ],

        reviews: { stars: 5, count: 342, average: 5 },

        ingredients: [
            {
                category: "Salmon",
                items: [
                    "4 salmon fillets",
                    "3 tbsp honey",
                    "2 tbsp soy sauce",
                    "2 garlic cloves, minced",
                    "1 tbsp olive oil",
                    "1 tsp ginger, grated",
                    "Sesame seeds",
                    "Green onions"
                ]
            },
            {
                category: "Sides",
                items: ["Steamed broccoli", "Jasmine rice", "Lemon wedges"]
            }
        ],

        nutrition: {
            servingSize: "1 fillet",
            calories: "380 kcal",
            items: [
                { label: "Protein", value: "34g" },
                { label: "Fat", value: "18g" },
                { label: "Carbohydrates", value: "20g" },
                { label: "Fiber", value: "1g" },
                { label: "Sugar", value: "16g" },
                { label: "Sodium", value: "520mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=800&q=80",
            title: "Honey Glazed Salmon Recipe"
        },

        feedback: {
            title: "Love this salmon dish?",
            text: "Rate this recipe and share your cooking experience!"
        },

        moreRecipes: [
            {
                id: "recipe-27",
                title: "Garlic Butter Shrimp Pasta",
                mainImage: "https://muchbutter.com/wp-content/uploads/2021/10/150-Much-Butter-Garlic-Butter-Shrimp-Pasta-2-768x1024.jpg",
                reviews: { stars: 5, count: 214, average: 5 }
            },
            {
                id: "recipe-31",
                title: "Lemon Herb Roasted Chicken",
                mainImage: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 201, average: 5 }
            },
            {
                id: "recipe-22",
                title: "Butter Chicken",
                mainImage: "https://pinchofyum.com/wp-content/uploads/butter-chicken-3-400x400.jpg",
                reviews: { stars: 4.8, count: 60, average: 4.8 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "KAREN M.", rating: 5, text: "The glaze is incredible! Sweet and savory perfection." },
            { author: "STEVE R.", rating: 5, text: "So easy and delicious. My go-to salmon recipe now!" },
            { author: "AMY L.", rating: 5, text: "Even my kids who don't like fish loved this!" }
        ]
    },

    {
        id: "recipe-42",
        category: "Vegetarian",
        title: "Mediterranean Stuffed Bell Peppers",
        mainImage: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Colorful bell peppers stuffed with quinoa, feta cheese, olives, and Mediterranean vegetables.",
            "A nutritious vegetarian meal that's as beautiful as it is delicious."
        ],

        reviews: { stars: 5, count: 178, average: 5 },

        ingredients: [
            {
                category: "Peppers",
                items: [
                    "6 bell peppers (mixed colors)",
                    "2 cups cooked quinoa",
                    "1 cup feta cheese, crumbled",
                    "1 cup cherry tomatoes, halved",
                    "Â½ cup kalamata olives, sliced",
                    "Â½ cup red onion, diced",
                    "2 garlic cloves, minced"
                ]
            },
            {
                category: "Seasonings",
                items: [
                    "2 tbsp olive oil",
                    "1 tsp dried oregano",
                    "1 tsp basil",
                    "Salt and pepper",
                    "Fresh parsley"
                ]
            },
            {
                category: "Toppings",
                items: ["Pumpkin seeds", "Sesame seeds"]
            }
        ],

        nutrition: {
            servingSize: "1 stuffed pepper",
            calories: "280 kcal",
            items: [
                { label: "Protein", value: "12g" },
                { label: "Fat", value: "14g" },
                { label: "Carbohydrates", value: "32g" },
                { label: "Fiber", value: "6g" },
                { label: "Sugar", value: "8g" },
                { label: "Sodium", value: "480mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
            title: "Stuffed Bell Peppers Tutorial"
        },

        feedback: {
            title: "Enjoyed these peppers?",
            text: "Leave a review and help others try this Mediterranean delight!"
        },

        moreRecipes: [
            {
                id: "recipe-34",
                title: "Spinach and Ricotta Cannelloni",
                mainImage: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 287, average: 5 }
            },
            {
                id: "recipe-24",
                title: "Vegetarian Shepherd's Pie",
                mainImage: "https://pinchofyum.com/wp-content/uploads/vegetarian-shepherds-pie-400x400.jpg",
                reviews: { stars: 4.8, count: 403, average: 4.8 }
            },
            {
                id: "recipe-10",
                title: "Marry Me Chickpeas and Orzo",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Marry-Me-Orzo-400x400.jpg",
                reviews: { stars: 4.7, count: 41, average: 4.7 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "DIANA P.", rating: 5, text: "So colorful and packed with flavor! Great for meal prep too." },
            { author: "FRANK G.", rating: 5, text: "The feta and olives make this dish amazing. Love it!" },
            { author: "LAURA B.", rating: 5, text: "Even my meat-loving husband asks for this regularly!" }
        ]
    },

    {
        id: "recipe-43",
        category: "Healthy",
        title: "Grilled Chicken Buddha Bowl",
        mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Nutritious bowl with grilled chicken, quinoa, avocado, and colorful vegetables drizzled with tahini dressing.",
            "A balanced meal packed with protein, healthy fats, and fiber."
        ],

        reviews: { stars: 5, count: 412, average: 5 },

        ingredients: [
            {
                category: "Bowl Components",
                items: [
                    "2 chicken breasts (grilled and sliced)",
                    "1 cup cooked quinoa",
                    "1 avocado, sliced",
                    "1 cup chickpeas, roasted",
                    "1 cup mixed greens",
                    "1 cucumber, sliced",
                    "1 carrot, shredded",
                    "Â½ cup red cabbage, shredded"
                ]
            },
            {
                category: "Tahini Dressing",
                items: [
                    "3 tbsp tahini",
                    "2 tbsp lemon juice",
                    "1 garlic clove, minced",
                    "2 tbsp water",
                    "Salt and pepper"
                ]
            }
        ],

        nutrition: {
            servingSize: "1 bowl",
            calories: "520 kcal",
            items: [
                { label: "Protein", value: "18g" },
                { label: "Fat", value: "22g" },
                { label: "Carbohydrates", value: "68g" },
                { label: "Fiber", value: "16g" },
                { label: "Sugar", value: "10g" },
                { label: "Sodium", value: "280mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            title: "Quinoa Bowl Meal Prep"
        },

        feedback: {
            title: "Love this power bowl?",
            text: "Rate this nutritious recipe!"
        },

        moreRecipes: [
            {
                id: "recipe-50",
                title: "Zucchini Noodle Primavera",
                mainImage: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 289, average: 5 }
            },
            {
                id: "recipe-43",
                title: "Grilled Chicken Buddha Bowl",
                mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 412, average: 5 }
            },
            {
                id: "recipe-35",
                title: "Cauliflower Rice Stir Fry",
                mainImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 4, count: 164, average: 4 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "MELISSA K.", rating: 5, text: "So filling and nutritious! Perfect lunch option." },
            { author: "BRIAN T.", rating: 5, text: "Love the roasted chickpeas. Great texture combination!" },
            { author: "ASHLEY M.", rating: 5, text: "The tahini dressing is addictive! Make extra!" }
        ]
    },
    {
        id: "recipe-44",
        category: "Instant Pot",
        title: "Instant Pot Beef Stew",
        mainImage: "https://www.wellplated.com/wp-content/uploads/2018/10/Instant-Pot-Beef-Stew-recipe.jpg",

        descriptions: [
            "Hearty beef stew with tender chunks of beef, potatoes, and carrots in a rich gravy.",
            "The Instant Pot makes this comfort food classic in just 35 minutes."
        ],

        reviews: { stars: 5, count: 523, average: 5 },

        ingredients: [
            {
                category: "Stew",
                items: [
                    "2 lbs beef chuck, cubed",
                    "4 potatoes, cubed",
                    "3 carrots, sliced",
                    "1 onion, diced",
                    "3 garlic cloves, minced",
                    "3 cups beef broth",
                    "2 tbsp tomato paste",
                    "1 cup frozen peas"
                ]
            },
            {
                category: "Seasonings",
                items: [
                    "2 tbsp flour",
                    "2 bay leaves",
                    "1 tsp thyme",
                    "1 tsp rosemary",
                    "Salt and pepper",
                    "2 tbsp Worcestershire sauce"
                ]
            }
        ],

        nutrition: {
            servingSize: "2 cups",
            calories: "420 kcal",
            items: [
                { label: "Protein", value: "36g" },
                { label: "Fat", value: "18g" },
                { label: "Carbohydrates", value: "32g" },
                { label: "Fiber", value: "5g" },
                { label: "Sugar", value: "6g" },
                { label: "Sodium", value: "720mg" }
            ]
        },

        video: {
            thumbnail: "https://www.wellplated.com/wp-content/uploads/2018/10/Instant-Pot-Beef-Stew-recipe.jpg",
            title: "Instant Pot Beef Stew Recipe"
        },

        feedback: {
            title: "Rate this comforting stew!",
            text: "Help others discover this pressure cooker favorite!"
        },

        moreRecipes: [
            {
                id: "recipe-36",
                title: "Pressure Cooker Butter Chicken",
                mainImage: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 389, average: 5 }
            },
            {
                id: "recipe-25",
                title: "Instant Pot Wild Rice Soup",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Wild-Rice-Soup-3-400x400.jpg",
                reviews: { stars: 4.7, count: 991, average: 4.7 }
            },
            {
                id: "recipe-3",
                title: "Instant Pot Spaghetti",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Spaghetti-4.jpg",
                reviews: { stars: 3, count: 30, average: 3 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "THOMAS W.", rating: 5, text: "The beef is so tender! Better than slow cooker and way faster." },
            { author: "SANDRA J.", rating: 5, text: "Perfect comfort food. The gravy is rich and flavorful." },
            { author: "GREG P.", rating: 5, text: "My new winter favorite. Easy and absolutely delicious!" }
        ]
    },

    {
        id: "recipe-45",
        category: "Lunch",
        title: "Caprese Panini",
        mainImage: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Grilled Italian sandwich with fresh mozzarella, tomatoes, basil, and balsamic glaze on ciabatta bread.",
            "A quick lunch that brings the flavors of Italy to your kitchen."
        ],

        reviews: { stars: 5, count: 234, average: 5 },

        ingredients: [
            {
                category: "Sandwich",
                items: [
                    "4 ciabatta rolls",
                    "8 oz fresh mozzarella, sliced",
                    "2 large tomatoes, sliced",
                    "Fresh basil leaves",
                    "2 tbsp balsamic glaze",
                    "2 tbsp olive oil",
                    "Salt and pepper"
                ]
            },
            {
                category: "Optional",
                items: ["Pesto", "Prosciutto", "Arugula"]
            }
        ],

        nutrition: {
            servingSize: "1 panini",
            calories: "420 kcal",
            items: [
                { label: "Protein", value: "18g" },
                { label: "Fat", value: "20g" },
                { label: "Carbohydrates", value: "42g" },
                { label: "Fiber", value: "3g" },
                { label: "Sugar", value: "6g" },
                { label: "Sodium", value: "620mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
            title: "Perfect Caprese Panini"
        },

        feedback: {
            title: "Enjoyed this Italian classic?",
            text: "Rate this panini and share your lunch experience!"
        },

        moreRecipes: [
            {
                id: "recipe-37",
                title: "Asian Chicken Lettuce Wraps",
                mainImage: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 213, average: 5 }
            },
            {
                id: "recipe-3",
                title: "Instant Pot Spaghetti",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Spaghetti-4.jpg",
                reviews: { stars: 3, count: 30, average: 3 }
            },
            {
                id: "recipe-20",
                title: "Kimchi Tuna Salad Wrap",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Kimchi-Tuna-Salad-Square-300x300.png",
                reviews: { stars: 5, count: 11, average: 5 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "ANGELA R.", rating: 5, text: "Simple but so flavorful! The balsamic makes it special." },
            { author: "CHRIS D.", rating: 5, text: "My favorite lunch sandwich. Fresh and delicious!" },
            { author: "RACHEL N.", rating: 5, text: "Used a panini press and it came out perfect!" }
        ]
    },

    {
        id: "recipe-46",
        category: "Desserts",
        title: "Molten Chocolate Lava Cake",
        mainImage: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Individual chocolate cakes with a gooey molten center that flows out when you cut into them.",
            "An impressive dessert that's surprisingly easy to make at home."
        ],

        reviews: { stars: 5, count: 389, average: 5 },

        ingredients: [
            {
                category: "Cake",
                items: [
                    "6 oz dark chocolate",
                    "Â½ cup butter",
                    "2 eggs",
                    "2 egg yolks",
                    "Â¼ cup sugar",
                    "2 tbsp flour",
                    "Pinch of salt"
                ]
            },
            {
                category: "Serving",
                items: [
                    "Vanilla ice cream",
                    "Fresh berries",
                    "Powdered sugar",
                    "Mint leaves"
                ]
            }
        ],

        nutrition: {
            servingSize: "1 cake",
            calories: "420 kcal",
            items: [
                { label: "Carbohydrates", value: "36g" },
                { label: "Protein", value: "8g" },
                { label: "Fat", value: "28g" },
                { label: "Sugar", value: "26g" },
                { label: "Sodium", value: "180mg" },
                { label: "Cholesterol", value: "245mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
            title: "Lava Cake Tutorial"
        },

        feedback: {
            title: "Love this decadent dessert?",
            text: "Share your review and baking success!"
        },

        moreRecipes: [
            {
                id: "recipe-16",
                title: "Spicy Korean BBQ Sauce",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Mushroom-Sandwich-9-400x400.jpg",
                reviews: { stars: 4.9, count: 23, average: 4.9 }
            },
            {
                id: "recipe-17",
                category: "Quick and Easy",
                title: "Fluffy Buttermilk Pancakes",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Fried-Egg-Tacos-4-400x400.jpg",
                reviews: { stars: 5, count: 55, average: 5 }
            },
            {
                id: "recipe-18",
                category: "Quick and Easy",
                title: "Creamy Baked Orzo With Meatball",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Creamy-Baked-Orzo-Square-300x300.png",
                reviews: { stars: 4.1, count: 40, average: 4.1 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "SOPHIA C.", rating: 5, text: "Restaurant quality! The center is perfectly molten." },
            { author: "DANIEL M.", rating: 5, text: "Made these for date night and they were a hit!" },
            { author: "EMMA K.", rating: 5, text: "Easier than expected and absolutely delicious!" }
        ]
    },

    {
        id: "recipe-47",
        category: "Soup",
        title: "French Onion Soup",
        mainImage: "https://cdn.loveandlemons.com/wp-content/uploads/2019/12/french-onion-soup-recipe-580x826.jpg",

        descriptions: [
            "Classic French soup with caramelized onions, beef broth, and melted Gruyère cheese on top.",
            "A rich and savory soup perfect for cold evenings."
        ],

        reviews: { stars: 5, count: 298, average: 5 },

        ingredients: [
            {
                category: "Soup",
                items: [
                    "4 large onions, thinly sliced",
                    "3 tbsp butter",
                    "6 cups beef broth",
                    "1 cup dry white wine",
                    "2 bay leaves",
                    "1 tsp thyme",
                    "Salt and pepper"
                ]
            },
            {
                category: "Topping",
                items: [
                    "Baguette slices",
                    "2 cups Gruyère cheese, grated",
                    "Fresh thyme"
                ]
            }
        ],

        nutrition: {
            servingSize: "1 bowl",
            calories: "380 kcal",
            items: [
                { label: "Protein", value: "18g" },
                { label: "Fat", value: "20g" },
                { label: "Carbohydrates", value: "32g" },
                { label: "Fiber", value: "4g" },
                { label: "Sugar", value: "10g" },
                { label: "Sodium", value: "980mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
            title: "French Onion Soup Recipe"
        },

        feedback: {
            title: "Enjoyed this French classic?",
            text: "Leave a review and help others try this comforting soup!"
        },

        moreRecipes: [
            {
                id: "recipe-39",
                title: "Thai Coconut Curry Soup",
                mainImage: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 298, average: 5 }
            },
            {
                id: "recipe-32",
                title: "Creamy Mushroom Soup",
                mainImage: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 4, count: 140, average: 4 }
            },
            {
                id: "recipe-6",
                title: "Zuppa Toscana Soup",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Zuppa-Toscana-Soup-400x400.jpg",
                reviews: { stars: 3, count: 11, average: 3 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "PIERRE L.", rating: 5, text: "Authentic French flavor! The caramelized onions are key." },
            { author: "MARIE D.", rating: 5, text: "The cheese topping is amazing. Pure comfort in a bowl." },
            { author: "LUCAS B.", rating: 5, text: "Takes time but worth every minute. Restaurant quality!" }
        ]
    },

    {
        id: "recipe-48",
        category: "Dinner",
        title: "Crispy Skin Sea Bass",
        mainImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Pan-seared sea bass with ultra-crispy skin, served with lemon butter sauce and asparagus.",
            "An elegant restaurant-quality dish you can make at home."
        ],

        reviews: { stars: 5, count: 267, average: 5 },

        ingredients: [
            {
                category: "Fish",
                items: [
                    "4 sea bass fillets, skin-on",
                    "2 tbsp olive oil",
                    "Salt and pepper",
                    "1 lemon, sliced"
                ]
            },
            {
                category: "Lemon Butter Sauce",
                items: [
                    "3 tbsp butter",
                    "2 tbsp lemon juice",
                    "1 garlic clove, minced",
                    "Fresh parsley",
                    "Capers"
                ]
            },
            {
                category: "Sides",
                items: ["Asparagus", "Roasted potatoes"]
            }
        ],

        nutrition: {
            servingSize: "1 fillet",
            calories: "340 kcal",
            items: [
                { label: "Protein", value: "32g" },
                { label: "Fat", value: "22g" },
                { label: "Carbohydrates", value: "4g" },
                { label: "Fiber", value: "1g" },
                { label: "Sugar", value: "1g" },
                { label: "Sodium", value: "420mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            title: "Perfect Crispy Skin Sea Bass"
        },

        feedback: {
            title: "Rate this elegant fish dish!",
            text: "Share your cooking experience with this recipe!"
        },

        moreRecipes: [
            {
                id: "recipe-16",
                title: "Spicy Korean BBQ Sauce",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Mushroom-Sandwich-9-400x400.jpg",
                reviews: { stars: 4.9, count: 23, average: 4.9 }
            },
            {
                id: "recipe-17",
                category: "Quick and Easy",
                title: "Fluffy Buttermilk Pancakes",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Fried-Egg-Tacos-4-400x400.jpg",
                reviews: { stars: 5, count: 55, average: 5 }
            },
            {
                id: "recipe-18",
                category: "Quick and Easy",
                title: "Creamy Baked Orzo With Meatball",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Creamy-Baked-Orzo-Square-300x300.png",
                reviews: { stars: 4.1, count: 40, average: 4.1 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "JULIAN R.", rating: 5, text: "The skin is perfectly crispy! Technique is everything." },
            { author: "VICTORIA S.", rating: 5, text: "Impressed my dinner guests. Looks and tastes amazing!" },
            { author: "MARTIN F.", rating: 5, text: "Lemon butter sauce is perfection. Will make again!" }
        ]
    },

    {
        id: "recipe-49",
        category: "Vegetarian",
        title: "Moroccan Chickpea Tagine",
        mainImage: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Aromatic North African stew with chickpeas, vegetables, and warming spices served over couscous.",
            "A flavorful vegetarian dish that's both hearty and exotic."
        ],

        reviews: { stars: 5, count: 312, average: 5 },

        ingredients: [
            {
                category: "Tagine",
                items: [
                    "2 cans chickpeas, drained",
                    "2 sweet potatoes, cubed",
                    "1 eggplant, cubed",
                    "1 bell pepper, diced",
                    "1 can diced tomatoes",
                    "1 onion, diced",
                    "3 garlic cloves, minced",
                    "2 cups vegetable broth"
                ]
            },
            {
                category: "Spices",
                items: [
                    "2 tsp cumin",
                    "2 tsp paprika",
                    "1 tsp cinnamon",
                    "1 tsp turmeric",
                    "Â½ tsp cayenne",
                    "Salt and pepper"
                ]
            },
            {
                category: "Serving",
                items: ["Couscous", "Fresh cilantro", "Lemon wedges", "Almonds"]
            }
        ],

        nutrition: {
            servingSize: "2 cups",
            calories: "380 kcal",
            items: [
                { label: "Protein", value: "14g" },
                { label: "Fat", value: "8g" },
                { label: "Carbohydrates", value: "68g" },
                { label: "Fiber", value: "14g" },
                { label: "Sugar", value: "16g" },
                { label: "Sodium", value: "520mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            title: "Moroccan Tagine Recipe"
        },

        feedback: {
            title: "Love these exotic flavors?",
            text: "Rate this Moroccan classic and share your experience!"
        },

        moreRecipes: [
            {
                id: "recipe-42",
                title: "Mediterranean Stuffed Bell Peppers",
                mainImage: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 178, average: 5 }
            },
            {
                id: "recipe-34",
                title: "Spinach and Ricotta Cannelloni",
                mainImage: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 287, average: 5 }
            },
            {
                id: "recipe-24",
                title: "Vegetarian Shepherd's Pie",
                mainImage: "https://pinchofyum.com/wp-content/uploads/vegetarian-shepherds-pie-400x400.jpg",
                reviews: { stars: 4.8, count: 403, average: 4.8 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "FATIMA K.", rating: 5, text: "Authentic Moroccan taste! The spice blend is perfect." },
            { author: "AARON M.", rating: 5, text: "So flavorful and filling. Love this vegetarian option!" },
            { author: "YASMIN H.", rating: 5, text: "The sweet potatoes and chickpeas work wonderfully together!" }
        ]
    },

    {
        id: "recipe-50",
        category: "Healthy",
        title: "Zucchini Noodle Primavera",
        mainImage: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Light and fresh zoodles tossed with seasonal vegetables in a garlic white wine sauce.",
            "A low-carb pasta alternative that's vibrant and delicious."
        ],

        reviews: { stars: 5, count: 289, average: 5 },

        ingredients: [
            {
                category: "Zoodles",
                items: [
                    "4 large zucchinis, spiralized",
                    "1 cup cherry tomatoes, halved",
                    "1 bell pepper, sliced",
                    "1 cup broccoli florets",
                    "Â½ cup snap peas",
                    "3 garlic cloves, minced"
                ]
            },
            {
                category: "Sauce",
                items: [
                    "3 tbsp olive oil",
                    "Â¼ cup white wine",
                    "Â¼ cup Parmesan, grated",
                    "1 lemon, juiced",
                    "Fresh basil",
                    "Red pepper flakes"
                ]
            }
        ],

        nutrition: {
            servingSize: "2 cups",
            calories: "220 kcal",
            items: [
                { label: "Protein", value: "10g" },
                { label: "Fat", value: "14g" },
                { label: "Carbohydrates", value: "18g" },
                { label: "Fiber", value: "6g" },
                { label: "Sugar", value: "10g" },
                { label: "Sodium", value: "280mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=800&q=80",
            title: "Zoodle Primavera Tutorial"
        },

        feedback: {
            title: "Love this healthy pasta swap?",
            text: "Share your review and inspire healthy eating!"
        },

        moreRecipes: [
            {
                id: "recipe-43",
                title: "Grilled Chicken Buddha Bowl",
                mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 412, average: 5 }
            },
            {
                id: "recipe-35",
                title: "Cauliflower Rice Stir Fry",
                mainImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 4, count: 164, average: 4 }
            },
            {
                id: "recipe-37",
                title: "Asian Chicken Lettuce Wraps",
                mainImage: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 213, average: 5 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "BRITTANY P.", rating: 5, text: "Don't even miss regular pasta! So fresh and light." },
            { author: "DEREK W.", rating: 5, text: "Great way to eat more veggies. The sauce is delicious!" },
            { author: "AMANDA T.", rating: 5, text: "Perfect for summer. Light yet satisfying!" }
        ]
    },

    {
        id: "recipe-51",
        category: "Instant Pot",
        title: "Instant Pot Pulled Pork",
        mainImage: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Tender, juicy pulled pork made in the Instant Pot with BBQ sauce in just over an hour.",
            "Perfect for sandwiches, tacos, or served over rice."
        ],

        reviews: { stars: 5, count: 478, average: 5 },

        ingredients: [
            {
                category: "Pork",
                items: [
                    "3 lbs pork shoulder",
                    "1 cup BBQ sauce",
                    "Â½ cup chicken broth",
                    "1 onion, sliced",
                    "4 garlic cloves, minced"
                ]
            },
            {
                category: "Spice Rub",
                items: [
                    "2 tbsp brown sugar",
                    "1 tbsp paprika",
                    "1 tbsp chili powder",
                    "1 tsp cumin",
                    "Salt and pepper"
                ]
            },
            {
                category: "Serving",
                items: ["Burger buns", "Coleslaw", "Pickles"]
            }
        ],

        nutrition: {
            servingSize: "4 oz",
            calories: "420 kcal",
            items: [
                { label: "Protein", value: "38g" },
                { label: "Fat", value: "24g" },
                { label: "Carbohydrates", value: "12g" },
                { label: "Fiber", value: "1g" },
                { label: "Sugar", value: "9g" },
                { label: "Sodium", value: "680mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
            title: "Instant Pot Pulled Pork"
        },

        feedback: {
            title: "Enjoyed this BBQ favorite?",
            text: "Rate this recipe and help others make perfect pulled pork!"
        },

        moreRecipes: [
            {
                id: "recipe-16",
                title: "Spicy Korean BBQ Sauce",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Mushroom-Sandwich-9-400x400.jpg",
                reviews: { stars: 4.9, count: 23, average: 4.9 }
            },
            {
                id: "recipe-17",
                category: "Quick and Easy",
                title: "Fluffy Buttermilk Pancakes",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Fried-Egg-Tacos-4-400x400.jpg",
                reviews: { stars: 5, count: 55, average: 5 }
            },
            {
                id: "recipe-18",
                category: "Quick and Easy",
                title: "Creamy Baked Orzo With Meatball",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Creamy-Baked-Orzo-Square-300x300.png",
                reviews: { stars: 4.1, count: 40, average: 4.1 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "MIKE B.", rating: 5, text: "Falls apart perfectly! So tender and flavorful." },
            { author: "CASEY R.", rating: 5, text: "Made sandwiches for a party. Everyone loved them!" },
            { author: "TONY G.", rating: 5, text: "Better than slow cooker and so much faster!" }
        ]
    },

    {
        id: "recipe-52",
        category: "Lunch",
        title: "Greek Chicken Gyro Bowl",
        mainImage: "https://i0.wp.com/www.everylastbite.com/wp-content/uploads/2017/02/gyrobowl-9-scaled.jpg?resize=1024%2C1536&ssl=1",

        descriptions: [
            "Marinated chicken with tzatziki sauce, tomatoes, cucumbers, feta, and olives over rice.",
            "All the flavors of a gyro in a convenient bowl format."
        ],

        reviews: { stars: 5, count: 356, average: 5 },

        ingredients: [
            {
                category: "Chicken",
                items: [
                    "2 chicken breasts",
                    "3 tbsp olive oil",
                    "2 tbsp lemon juice",
                    "2 tsp oregano",
                    "1 tsp garlic powder",
                    "Salt and pepper"
                ]
            },
            {
                category: "Tzatziki",
                items: [
                    "1 cup Greek yogurt",
                    "Â½ cucumber, grated",
                    "2 garlic cloves, minced",
                    "1 tbsp dill",
                    "1 tbsp lemon juice"
                ]
            },
            {
                category: "Bowl",
                items: [
                    "Rice or quinoa",
                    "Cherry tomatoes",
                    "Cucumber",
                    "Red onion",
                    "Feta cheese",
                    "Kalamata olives"
                ]
            }
        ],

        nutrition: {
            servingSize: "1 bowl",
            calories: "520 kcal",
            items: [
                { label: "Protein", value: "42g" },
                { label: "Fat", value: "18g" },
                { label: "Carbohydrates", value: "48g" },
                { label: "Fiber", value: "6g" },
                { label: "Sugar", value: "8g" },
                { label: "Sodium", value: "720mg" }
            ]
        },

        video: {
            thumbnail: "https://i0.wp.com/www.everylastbite.com/wp-content/uploads/2017/02/gyrobowl-9-scaled.jpg?resize=1024%2C1536&ssl=1",
            title: "Greek Gyro Bowl Recipe"
        },

        feedback: {
            title: "Love this Greek bowl?",
            text: "Share your review and inspire others!"
        },

        moreRecipes: [
            {
                id: "recipe-45",
                title: "Caprese Panini",
                mainImage: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 234, average: 5 }
            },
            {
                id: "recipe-43",
                title: "Grilled Chicken Buddha Bowl",
                mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 412, average: 5 }
            },
            {
                id: "recipe-37",
                title: "Asian Chicken Lettuce Wraps",
                mainImage: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 213, average: 5 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "SOPHIA V.", rating: 5, text: "The tzatziki is amazing! Fresh and flavorful bowl." },
            { author: "NICK P.", rating: 5, text: "Better than any gyro shop. Love making this for lunch!" },
            { author: "ELENA R.", rating: 5, text: "Authentic Greek flavors. The marinade is perfect!" }
        ]
    },

    {
        id: "recipe-53",
        category: "Desserts",
        title: "Classic Tiramisu",
        mainImage: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Authentic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
            "A no-bake classic that's elegant and absolutely delicious."
        ],

        reviews: { stars: 5, count: 512, average: 5 },

        ingredients: [
            {
                category: "Cream",
                items: [
                    "6 egg yolks",
                    "¾ cup sugar",
                    "16 oz mascarpone cheese",
                    "1½ cups heavy cream",
                    "1 tsp vanilla extract"
                ]
            },
            {
                category: "Assembly",
                items: [
                    "2 cups strong espresso, cooled",
                    "3 tbsp coffee liqueur",
                    "40 ladyfinger cookies",
                    "Cocoa powder for dusting"
                ]
            }
        ],

        nutrition: {
            servingSize: "1 slice",
            calories: "380 kcal",
            items: [
                { label: "Carbohydrates", value: "32g" },
                { label: "Protein", value: "8g" },
                { label: "Fat", value: "26g" },
                { label: "Sugar", value: "22g" },
                { label: "Sodium", value: "120mg" },
                { label: "Cholesterol", value: "195mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
            title: "Authentic Tiramisu Recipe"
        },

        feedback: {
            title: "Rate this Italian classic!",
            text: "Share your tiramisu experience!"
        },

        moreRecipes: [
            {
                id: "recipe-45",
                title: "Caprese Panini",
                mainImage: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 234, average: 5 }
            },
            {
                id: "recipe-43",
                title: "Grilled Chicken Buddha Bowl",
                mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 412, average: 5 }
            },
            {
                id: "recipe-37",
                title: "Asian Chicken Lettuce Wraps",
                mainImage: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 213, average: 5 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "MYRRHTHEL F.", rating: 5, text: "It's perfect, like me!" },
            { author: "MARCO R.", rating: 5, text: "My nonna would approve! Authentic and delicious." },
            { author: "HANNAH G.", rating: 5, text: "Best tiramisu I've ever had. Worth the effort!" }
        ]
    },

    {
        id: "recipe-54",
        category: "Soup",
        title: "Minestrone Soup",
        mainImage: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Hearty Italian vegetable soup with beans, pasta, and a tomato base.",
            "A comforting soup packed with vegetables and flavor."
        ],

        reviews: { stars: 5, count: 423, average: 5 },

        ingredients: [
            {
                category: "Soup Base",
                items: [
                    "2 tbsp olive oil",
                    "1 onion, diced",
                    "2 carrots, diced",
                    "2 celery stalks, diced",
                    "3 garlic cloves, minced",
                    "1 can diced tomatoes",
                    "6 cups vegetable broth"
                ]
            },
            {
                category: "Vegetables & Beans",
                items: [
                    "1 zucchini, diced",
                    "1 cup green beans",
                    "1 can cannellini beans",
                    "1 can kidney beans",
                    "2 cups spinach",
                    "¾ cup small pasta"
                ]
            },
            {
                category: "Seasonings",
                items: [
                    "2 tsp Italian seasoning",
                    "1 bay leaf",
                    "Salt and pepper",
                    "Parmesan cheese",
                    "Fresh basil"
                ]
            }
        ],

        nutrition: {
            servingSize: "2 cups",
            calories: "280 kcal",
            items: [
                { label: "Protein", value: "12g" },
                { label: "Fat", value: "6g" },
                { label: "Carbohydrates", value: "48g" },
                { label: "Fiber", value: "10g" },
                { label: "Sugar", value: "8g" },
                { label: "Sodium", value: "720mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
            title: "Classic Minestrone Recipe"
        },

        feedback: {
            title: "Enjoyed this Italian soup?",
            text: "Leave your review and help others!"
        },

        moreRecipes: [
            {
                id: "recipe-47",
                title: "French Onion Soup",
                mainImage: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 298, average: 5 }
            },
            {
                id: "recipe-39",
                title: "Thai Coconut Curry Soup",
                mainImage: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 298, average: 5 }
            },
            {
                id: "recipe-25",
                title: "Instant Pot Wild Rice Soup",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Wild-Rice-Soup-3-400x400.jpg",
                reviews: { stars: 4.7, count: 991, average: 4.7 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "ROSA P.", rating: 5, text: "Perfect comfort soup! So many vegetables and flavors." },
            { author: "CARLOS M.", rating: 5, text: "Tastes even better the next day. Great for meal prep!" },
            { author: "JULIA K.", rating: 5, text: "Healthy and satisfying. My favorite vegetable soup!" }
        ]
    },

    {
        id: "recipe-55",
        category: "Dinner",
        title: "Beef Stroganoff",
        mainImage: "https://images.unsplash.com/photo-1600289031464-74d374b64991?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Tender beef strips in a creamy mushroom sauce served over egg noodles.",
            "A classic Russian dish that's rich, comforting, and family-friendly."
        ],

        reviews: { stars: 5, count: 398, average: 5 },

        ingredients: [
            {
                category: "Beef",
                items: [
                    "1.5 lbs beef sirloin, sliced",
                    "2 tbsp butter",
                    "1 onion, diced",
                    "3 cups mushrooms, sliced",
                    "3 garlic cloves, minced"
                ]
            },
            {
                category: "Sauce",
                items: [
                    "2 cups beef broth",
                    "1 cup sour cream",
                    "2 tbsp flour",
                    "2 tbsp Dijon mustard",
                    "1 tbsp Worcestershire sauce",
                    "Salt and pepper"
                ]
            },
            {
                category: "Serving",
                items: ["Egg noodles", "Fresh parsley", "Paprika"]
            }
        ],

        nutrition: {
            servingSize: "1.5 cups",
            calories: "520 kcal",
            items: [
                { label: "Protein", value: "38g" },
                { label: "Fat", value: "28g" },
                { label: "Carbohydrates", value: "32g" },
                { label: "Fiber", value: "3g" },
                { label: "Sugar", value: "5g" },
                { label: "Sodium", value: "680mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1600289031464-74d374b64991?auto=format&fit=crop&w=800&q=80",
            title: "Beef Stroganoff Recipe"
        },

        feedback: {
            title: "Love this classic dish?",
            text: "Rate this recipe and share with others!"
        },

        moreRecipes: [
            {
                id: "recipe-16",
                title: "Spicy Korean BBQ Sauce",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Mushroom-Sandwich-9-400x400.jpg",
                reviews: { stars: 4.9, count: 23, average: 4.9 }
            },
            {
                id: "recipe-17",
                category: "Quick and Easy",
                title: "Fluffy Buttermilk Pancakes",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Fried-Egg-Tacos-4-400x400.jpg",
                reviews: { stars: 5, count: 55, average: 5 }
            },
            {
                id: "recipe-18",
                category: "Quick and Easy",
                title: "Creamy Baked Orzo With Meatball",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Creamy-Baked-Orzo-Square-300x300.png",
                reviews: { stars: 4.1, count: 40, average: 4.1 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "DMITRI V.", rating: 5, text: "Authentic taste! My grandmother's recipe was similar." },
            { author: "STEPHANIE L.", rating: 5, text: "The sauce is incredibly creamy. Family loved it!" },
            { author: "RICHARD P.", rating: 5, text: "Tender beef and perfect mushroom flavor. Will make again!" }
        ]
    },

    {
        id: "recipe-56",
        category: "Vegetarian",
        title: "Eggplant Parmesan",
        mainImage: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Breaded eggplant slices layered with marinara sauce and melted mozzarella cheese.",
            "A classic Italian dish that's hearty enough to satisfy any appetite."
        ],

        reviews: { stars: 5, count: 467, average: 5 },

        ingredients: [
            {
                category: "Eggplant",
                items: [
                    "2 large eggplants, sliced",
                    "2 eggs, beaten",
                    "2 cups breadcrumbs",
                    "1 cup Parmesan, grated",
                    "1 tsp Italian seasoning",
                    "Salt and pepper"
                ]
            },
            {
                category: "Assembly",
                items: [
                    "3 cups marinara sauce",
                    "2 cups mozzarella, shredded",
                    "Fresh basil",
                    "Olive oil for frying"
                ]
            }
        ],

        nutrition: {
            servingSize: "1 serving",
            calories: "480 kcal",
            items: [
                { label: "Protein", value: "24g" },
                { label: "Fat", value: "26g" },
                { label: "Carbohydrates", value: "42g" },
                { label: "Fiber", value: "8g" },
                { label: "Sugar", value: "12g" },
                { label: "Sodium", value: "920mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?auto=format&fit=crop&w=800&q=80",
            title: "Eggplant Parmesan Tutorial"
        },

        feedback: {
            title: "Rate this Italian favorite!",
            text: "Share your eggplant parm experience!"
        },

        moreRecipes: [
            {
                id: "recipe-49",
                title: "Moroccan Chickpea Tagine",
                mainImage: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 312, average: 5 }
            },
            {
                id: "recipe-42",
                title: "Mediterranean Stuffed Bell Peppers",
                mainImage: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 178, average: 5 }
            },
            {
                id: "recipe-34",
                title: "Spinach and Ricotta Cannelloni",
                mainImage: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 287, average: 5 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "MARIA F.", rating: 5, text: "Better than any restaurant! The layers are perfect." },
            { author: "ANTHONY G.", rating: 5, text: "Even my kids who hate eggplant loved this!" },
            { author: "CARMEN R.", rating: 5, text: "Crispy coating and gooey cheese. Heaven!" }
        ]
    },

    {
        id: "recipe-57",
        category: "Healthy",
        title: "Quinoa Power Bowl",
        mainImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Nutrient-packed bowl with quinoa, roasted vegetables, chickpeas, and lemon tahini dressing.",
            "A complete meal with plant-based protein and vibrant colors."
        ],

        reviews: { stars: 5, count: 381, average: 5 },

        ingredients: [
            {
                category: "Bowl",
                items: [
                    "1 cup quinoa, cooked",
                    "1 sweet potato, cubed and roasted",
                    "1 cup broccoli, roasted",
                    "1 cup chickpeas, roasted",
                    "1 avocado, sliced",
                    "Â½ cup red cabbage, shredded",
                    "2 cups mixed greens"
                ]
            },
            {
                category: "Lemon Tahini Dressing",
                items: [
                    "3 tbsp tahini",
                    "2 tbsp lemon juice",
                    "1 garlic clove",
                    "2 tbsp water",
                    "1 tsp maple syrup",
                    "Salt and pepper"
                ]
            },
            {
                category: "Toppings",
                items: ["Pumpkin seeds", "Sesame seeds"]
            }
        ],

        nutrition: {
            servingSize: "1 bowl",
            calories: "520 kcal",
            items: [
                { label: "Protein", value: "18g" },
                { label: "Fat", value: "22g" },
                { label: "Carbohydrates", value: "68g" },
                { label: "Fiber", value: "16g" },
                { label: "Sugar", value: "10g" },
                { label: "Sodium", value: "280mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
            title: "Quinoa Bowl Meal Prep"
        },

        feedback: {
            title: "Love this power bowl?",
            text: "Rate this nutritious recipe!"
        },

        moreRecipes: [
            {
                id: "recipe-50",
                title: "Zucchini Noodle Primavera",
                mainImage: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 289, average: 5 }
            },
            {
                id: "recipe-43",
                title: "Grilled Chicken Buddha Bowl",
                mainImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 412, average: 5 }
            },
            {
                id: "recipe-35",
                title: "Cauliflower Rice Stir Fry",
                mainImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 4, count: 164, average: 4 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "MELISSA K.", rating: 5, text: "So filling and nutritious! Perfect lunch option." },
            { author: "BRIAN T.", rating: 5, text: "Love the roasted chickpeas. Great texture combination!" },
            { author: "ASHLEY M.", rating: 5, text: "The tahini dressing is addictive! Make extra!" }
        ]
    },

    {
        id: "recipe-58",
        category: "Instant Pot",
        title: "Instant Pot Chicken Noodle Soup",
        mainImage: "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Classic comfort soup with tender chicken, vegetables, and noodles made quickly in the Instant Pot.",
            "Perfect for cold days or when you're feeling under the weather."
        ],

        reviews: { stars: 5, count: 542, average: 5 },

        ingredients: [
            {
                category: "Soup",
                items: [
                    "1.5 lbs chicken breasts",
                    "6 cups chicken broth",
                    "3 carrots, sliced",
                    "3 celery stalks, diced",
                    "1 onion, diced",
                    "3 garlic cloves, minced",
                    "2 cups egg noodles"
                ]
            },
            {
                category: "Seasonings",
                items: [
                    "2 bay leaves",
                    "1 tsp thyme",
                    "1 tsp parsley",
                    "Salt and pepper",
                    "Fresh dill"
                ]
            }
        ],

        nutrition: {
            servingSize: "2 cups",
            calories: "280 kcal",
            items: [
                { label: "Protein", value: "28g" },
                { label: "Fat", value: "6g" },
                { label: "Carbohydrates", value: "32g" },
                { label: "Fiber", value: "3g" },
                { label: "Sugar", value: "4g" },
                { label: "Sodium", value: "820mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?auto=format&fit=crop&w=800&q=80",
            title: "Instant Pot Chicken Soup"
        },

        feedback: {
            title: "Love this comfort soup?",
            text: "Share your review and warm someone's heart!"
        },

        moreRecipes: [
            {
                id: "recipe-16",
                title: "Spicy Korean BBQ Sauce",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Mushroom-Sandwich-9-400x400.jpg",
                reviews: { stars: 4.9, count: 23, average: 4.9 }
            },
            {
                id: "recipe-17",
                category: "Quick and Easy",
                title: "Fluffy Buttermilk Pancakes",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Fried-Egg-Tacos-4-400x400.jpg",
                reviews: { stars: 5, count: 55, average: 5 }
            },
            {
                id: "recipe-18",
                category: "Quick and Easy",
                title: "Creamy Baked Orzo With Meatball",
                mainImage: "https://pinchofyum.com/wp-content/uploads/Creamy-Baked-Orzo-Square-300x300.png",
                reviews: { stars: 4.1, count: 40, average: 4.1 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "NANCY W.", rating: 5, text: "Just like grandma's but in 30 minutes! Amazing." },
            { author: "KEVIN R.", rating: 5, text: "The chicken is so tender. Best soup ever!" },
            { author: "CHRISTINE D.", rating: 5, text: "Made this when I had a cold. Felt better immediately!" }
        ]
    },

    {
        id: "recipe-59",
        category: "Lunch",
        title: "BBQ Chicken Quesadillas",
        mainImage: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Crispy tortillas filled with BBQ chicken, cheese, red onions, and cilantro.",
            "A quick and satisfying lunch that's packed with flavor."
        ],

        reviews: { stars: 5, count: 312, average: 5 },

        ingredients: [
            {
                category: "Filling",
                items: [
                    "2 cups cooked chicken, shredded",
                    "Â¾ cup BBQ sauce",
                    "2 cups cheddar cheese, shredded",
                    "Â½ red onion, thinly sliced",
                    "Â¼ cup cilantro, chopped",
                    "4 large flour tortillas"
                ]
            },
            {
                category: "Serving",
                items: [
                    "Sour cream",
                    "Guacamole",
                    "Salsa",
                    "Lime wedges"
                ]
            }
        ],

        nutrition: {
            servingSize: "1 quesadilla",
            calories: "520 kcal",
            items: [
                { label: "Protein", value: "32g" },
                { label: "Fat", value: "24g" },
                { label: "Carbohydrates", value: "42g" },
                { label: "Fiber", value: "3g" },
                { label: "Sugar", value: "12g" },
                { label: "Sodium", value: "920mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=800&q=80",
            title: "BBQ Chicken Quesadilla Recipe"
        },

        feedback: {
            title: "Rate these quesadillas!",
            text: "Share your quesadilla experience!"
        },

        moreRecipes: [
            {
                id: "recipe-53",
                title: "Classic Tiramisu",
                mainImage: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 512, average: 5 }
            },
            {
                id: "recipe-46",
                title: "Molten Chocolate Lava Cake",
                mainImage: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 389, average: 5 }
            },
            {
                id: "recipe-38",
                title: "New York Cheesecake",
                mainImage: "https://www.onceuponachef.com/images/2017/12/cheesecake-760x882.jpg",
                reviews: { stars: 5, count: 456, average: 5 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "TYLER J.", rating: 5, text: "The BBQ and cheese combo is perfect! So easy to make." },
            { author: "WHITNEY P.", rating: 5, text: "Kids love these! Made them for lunch all week." },
            { author: "BRANDON M.", rating: 5, text: "Crispy outside, gooey inside. Perfect quesadilla!" }
        ]
    },

    {
        id: "recipe-60",
        category: "Desserts",
        title: "Strawberry Shortcake",
        mainImage: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",

        descriptions: [
            "Fluffy biscuits layered with fresh strawberries and whipped cream.",
            "A classic summer dessert that's light, fresh, and absolutely delicious."
        ],

        reviews: { stars: 5, count: 421, average: 5 },

        ingredients: [
            {
                category: "Biscuits",
                items: [
                    "2 cups flour",
                    "Â½ cup sugar",
                    "1 tbsp baking powder",
                    "Â½ tsp salt",
                    "Â½ cup butter, cold",
                    "¾ cup heavy cream",
                    "1 tsp vanilla"
                ]
            },
            {
                category: "Filling",
                items: [
                    "2 lbs strawberries, sliced",
                    "Â¼ cup sugar",
                    "2 cups heavy cream",
                    "2 tbsp powdered sugar",
                    "1 tsp vanilla extract"
                ]
            }
        ],

        nutrition: {
            servingSize: "1 serving",
            calories: "420 kcal",
            items: [
                { label: "Carbohydrates", value: "48g" },
                { label: "Protein", value: "5g" },
                { label: "Fat", value: "24g" },
                { label: "Sugar", value: "28g" },
                { label: "Sodium", value: "320mg" },
                { label: "Vitamin C", value: "89mg" }
            ]
        },

        video: {
            thumbnail: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80",
            title: "Homemade Strawberry Shortcake"
        },

        feedback: {
            title: "Love this summer dessert?",
            text: "Rate this classic recipe and share the love!"
        },

        moreRecipes: [
            {
                id: "recipe-53",
                title: "Classic Tiramisu",
                mainImage: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 512, average: 5 }
            },
            {
                id: "recipe-46",
                title: "Molten Chocolate Lava Cake",
                mainImage: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
                reviews: { stars: 5, count: 389, average: 5 }
            },
            {
                id: "recipe-38",
                title: "New York Cheesecake",
                mainImage: "https://www.onceuponachef.com/images/2017/12/cheesecake-760x882.jpg",
                reviews: { stars: 5, count: 456, average: 5 }
            }
        ],

        sidebarImage: "Github pfp2.jpg",

        comments: [
            { author: "GRACE H.", rating: 5, text: "Perfect summer dessert! The biscuits are so fluffy." },
            { author: "WILLIAM C.", rating: 5, text: "Fresh strawberries make all the difference. Delicious!" },
            { author: "OLIVIA T.", rating: 5, text: "Made this for 4th of July. Everyone loved it!" }
        ]
    },

];

//updated