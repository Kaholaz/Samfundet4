import random

from samfundet.models import Menu, MenuItem, FoodCategory, FoodPreference
from root.utils.samfundet_random import words

preferences = [
    ("Vegetar", "Vegetarian"),
    ("Uten alkohol", "Non-alcoholic"),
    ("Uten ananas", "Without pineapple"),
]

menu_template = {
    ('Middag', 'Dinner'): [
        ('Pølse', 'Sausage'),
        ('Burger', 'Burger'),
        ('Suppe', 'Soup')
    ],
    ('Drikke', 'Drinks'): [
        ('Brus', 'Soda'),
        ('Øl', 'Beer'),
        ('Vin', 'Wine'),
        ('White Russian', 'White Russian'),
    ],
    ('Dessert', 'Dessert'): [
        ('Vaniljeis', 'Vanilla Icecream'),
        ('Belgisk Vaffel', 'Belgian Waffle'),
    ],
}


def seed():
    Menu.objects.all().delete()
    MenuItem.objects.all().delete()
    FoodCategory.objects.all().delete()
    FoodPreference.objects.all().delete()

    # Create food preferences
    prefs = [
        FoodPreference.objects.create(
            name_no=p_name[0],
            name_en=p_name[1],
        )
        for p_name in preferences
    ]
    yield 10, f"Created {len(preferences)} food preferences"

    # Create menu categories
    menu_items = []
    for i, cat_name in enumerate(menu_template):
        category = FoodCategory.objects.create(
            name_no=cat_name[0],
            name_en=cat_name[1],
            order=i
        )

        # Menu items
        for j, it_name in enumerate(menu_template[cat_name]):
            base_price = random.randint(15, 150)
            item = MenuItem.objects.create(
                name_no=it_name[0],
                name_en=it_name[1],
                description_no=words(10),
                description_en=words(10),
                food_category=category,
                price=base_price,
                price_member=int(base_price * 0.8)
            )
            item.food_preferences.add(*random.sample(
                prefs, random.randint(0, 3)
            ))
            menu_items.append(item)

        # Estimate seeding progress (80% to create items + 10% from earlier)
        progress = 10 + (i / len(menu_template.keys())) * 80
        yield progress, f"Created menu items for '{cat_name[0]}'"

    # Create menu
    menu = Menu.objects.create(
        name_no="Frø-meny",
        name_en="Seed menu",
        description_no=words(10),
        description_en=words(10),
    )
    menu.menu_items.add(*menu_items)

    yield 100, f"Created {Menu.objects.all().count()} menu and {MenuItem.objects.all().count()} menu items"
