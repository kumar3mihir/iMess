import React from 'react';

const MessMenu = () => {
    const menuItems = [
        {
            day: 'Monday',
            breakfast: 'Poha, Upma, Chutney',
            lunch: 'Rice, Dal Makhani, Kadai Paneer, Roti',
            snacks: 'Chips, Samosa',
            dinner: 'Veg Pulao, Raita, Papad',
        },
        {
            day: 'Tuesday',
            breakfast: 'Paratha, Aloo Gobi, Pickle',
            lunch: 'Rice, Kadhi Pakora, Bhindi Fry, Roti',
            snacks: 'Banana, Toast',
            dinner: 'Mutton Curry, Rice, Raita',
        },
        {
            day: 'Wednesday',
            breakfast: 'Oats, Milk, Fruits',
            lunch: 'Rice, Chana Masala, Gobi Manchurian, Roti',
            snacks: 'Yogurt, Cookies',
            dinner: 'Fish Fry, Rice, Salad',
        },
        {
            day: 'Thursday',
            breakfast: 'Puri, Sabzi, Chutney',
            lunch: 'Rice, Rajma Masala, Aloo Matar, Roti',
            snacks: 'Fruits, Nuts',
            dinner: 'Chicken Tikka Masala, Roti, Raita',
        },
        {
            day: 'Friday',
            breakfast: 'Bread Omelette, Toast, Jam',
            lunch: 'Biryani (Veg/Non-Veg), Raita',
            snacks: 'Samosa, Chaat',
            dinner: 'Special Dish (e.g., Pasta, Noodles)',
        },
        {
            day: 'Saturday',
            breakfast: 'Waffles, Syrup, Fruits',
            lunch: 'Rice, Chana Masala, Gobi Manchurian, Roti',
            snacks: 'Ice Cream, Cake',
            dinner: 'Pizza/Dessert (e.g., Kheer)',
        },
        {
            day: 'Sunday',
            breakfast: 'Dosa, Idli, Sambar, Chutney',
            lunch: 'Rice, Dal, Chole, Sabzi, Roti',
            snacks: 'Fruits, Biscuits',
            dinner: 'Chicken Biryani, Raita, Salad',
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <table className="table-fixed w-full border border-gray-200 rounded-lg">
                <thead>
                    <tr className="bg-gray-100 text-gray-700">
                        <th className="px-4 py-2 text-left" style={{ backgroundColor: '#7460ee', color: 'white' }}>Day</th>
                        <th className="px-4 py-2 text-left" style={{ backgroundColor: '#7460ee', color: 'white' }}>Breakfast</th>
                        <th className="px-4 py-2 text-left" style={{ backgroundColor: '#7460ee', color: 'white' }}>Lunch</th>
                        <th className="px-4 py-2 text-left" style={{ backgroundColor: '#7460ee', color: 'white' }}>Snacks</th>
                        <th className="px-4 py-2 text-left" style={{ backgroundColor: '#7460ee', color: 'white' }}>Dinner</th>
                    </tr>
                </thead>
                <tbody>
                    {menuItems.map((item, index) => (
                        <tr key={item.day} className={`border-b border-gray-200 ${index === 0 ? 'bg-primary' : 'bg-teal'}`}>
                            <td className="px-4 py-2 text-left">{item.day}</td>
                            <td className="px-4 py-2 text-left">{item.breakfast}</td>
                            <td className="px-4 py-2 text-left">{item.lunch}</td>
                            <td className="px-4 py-2 text-left">{item.snacks}</td>
                            <td className="px-4 py-2 text-left">{item.dinner}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MessMenu;
