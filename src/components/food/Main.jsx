import React from 'react';

const foodCategories = [
	{
		key: 'main',
		title: 'Main Menu',
		desc: 'A selection of our most popular main dishes, all vegetarian and homemade.',
		items: [
			{
				subKey: 'Tiffin Items',
				list: [
					'Idli', 'Mini Idli', 'Medu Vada', 'Pongal', 'Upma', 'Semiya Upma',
					'Dosas (Plain, Ghee, Masala, Rava etc)', 'Poori', 'Channa Bhatura', 'Uthapam',
					'Adai', 'Appam', 'Idiyappam', 'Pav Bhaji', 'Bombay Sandwich', 'Avocado Sandwich',
					'Bread Upma', 'Poha', 'Khichadi', 'Sabudhana Khichadi', 'Noodles', 'Dhokla'
				]
			},
			{
				subKey: 'Rice Items',
				list: [
					'Plain Rice', 'Veg Pulao Rice', 'Lemon Rice', 'Tamarind Rice', 'Coriander Rice',
					'Jeera Rice', 'Curd Rice', 'Carrot Rice', 'Capsicum Rice', 'Vangibath', 'Vegetable Briyani'
				]
			},
			{
				subKey: 'Curry Items',
				list: [
					'Dal Makhani', 'Tadka Dhal', 'Channa Dhal', 'Paneer Butter Masala', 'Channa Masala',
					'Aloo Gobi', 'Aloo Mutter', 'Palak Paneer', 'Spinach Curry', 'Sambhar', 'Kootu',
					'Avial', 'Vethakozumbu', 'Rasam', 'Mysore Rasam', 'Potato Curry', 'Cabbage Curry',
					'Pepper Subji', 'Beans Poriyal', 'Bhindi Fry', 'Sweet Potato Fry', 'Baingan Ka Bhartha',
					'Pumpkin Subji', 'Beans & Carrot Poriyal', 'Vazhakkai Poriyal', 'Mooli Curry / Sambhar',
					'Beetroot Poriyal', 'Drumstick Sambhar', 'Rajma', 'Parupu Usili', 'Veg Kootu',
					'Cabbage Kootu', 'Morekozhumbu / Khadi'
				]
			},
			{
				subKey: 'Roti Items',
				list: [
					'Chappatis', 'Selection of Paratha’s (Aloo, Gobi, Onion etc)'
				]
			},
			{
				subKey: 'Side Items',
				list: [
					'Pappads', 'Variety of Pickles', 'Podis', 'Chutneys', 'Raitha'
				]
			}
		],
	},
	{
		key: 'sweets',
		title: 'Sweets',
		desc: 'Traditional Indian sweets, perfect for any celebration.',
		items: [
			{ name: 'Gulab Jamun', desc: 'Delicious & soft to melt in your mouth' },
			{ name: 'Rasamalai', desc: 'Sweet dumplings made from cottage cheese and milk' },
			{ name: 'Mysorepak', desc: 'Rich, luxurious fudge made with ghee to indulge your cravings' },
			{ name: 'Khaju Khatli', desc: 'Smooth & thin cashew Nut fudge' },
			{ name: 'Boondhi Ladoo', desc: 'Traditional Indian sweet to complement your meal' },
			{ name: 'Rava Ladoo', desc: 'Delicious & aromatic sweet made to melt in your mouth' },
			{ name: 'Athirasam', desc: 'Delicious, crispy & irresistible classic delight' },
			{ name: 'Peda', desc: 'Soft milk fudge flavoured with cardamom' },
		],
	},
	{
		key: 'savouries',
		title: 'Savouries',
		desc: 'Crispy, spicy, and savory snacks for every occasion.',
		items: [
			{ name: 'Murukku', desc: 'Crunchy snack made of rice flour' },
			{ name: 'Mullu Murukku', desc: 'Crunchy & attractive snack made of rice flour' },
			{ name: 'Mixture', desc: 'Crispy, Crunchy & spicy snack' },
			{ name: 'Kara Sevai', desc: 'Traditional Indian snack made of gram flour' },
			{ name: 'Kara Boondhi', desc: 'Crunchy & attractive snack made of gram flour' },
			{ name: 'Thattai', desc: 'Crispy snack made rice flour' },
		],
	},
	{
		key: 'spices',
		title: 'Spices',
		desc: 'Homemade spice blends and accompaniments to elevate your meal.',
		items: [
			{ name: 'Sambhar Powder', desc: 'Authentic home made sambhar powder' },
			{ name: 'Rasam Powder', desc: 'Authentic home made rasam powder' },
			{ name: 'Pickles', desc: 'Home made pickles to indulge your cravings' },
			{ name: 'Chutneys', desc: 'Home made chutneys to complement your meal' },
		],
	},
];

function FoodCategoryCards({ selected, setSelected }) {
	return (
		<div className="flex flex-col sm:flex-row gap-0 sm:gap-6 justify-center items-center my-8">
			{foodCategories.map((cat) => (
				<button
					key={cat.key}
					className={`btn-gold flex-1 rounded-xl min-w-[180px] max-w-xs shadow transition-all duration-200 font-montserrat text-xl font-bold text-center hover:scale-105 focus:scale-105 ${
						selected === cat.key ? 'ring-2 ring-[var(--gold-primary)]' : ''
					}`}
					style={{ borderColor: selected === cat.key ? 'var(--gold-primary)' : '#e5e7eb' }}
					onClick={() => setSelected(cat.key)}
				>
					{cat.title}
				</button>
			))}
		</div>
	);
}

function FoodItemsGrid({ categoryKey }) {
	const cat = foodCategories.find((c) => c.key === categoryKey);
	if (!cat) return null;
	// Special rendering for 'main' category with sub-keys
	if (cat.key === 'main') {
		return (
			<div className="w-full px-2 sm:px-4 md:px-8 mb-12">
				<div className="text-center mb-4 text-lg text-black font-montserrat font-semibold">{cat.desc}</div>
				<div className="flex flex-col gap-8">
					{cat.items.map((section) => (
						<div key={section.subKey}>
							<div className="text-xl font-bold font-montserrat mb-3 text-[var(--gold-primary)] text-center">{section.subKey}</div>
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
								{section.list.map((item) => (
									<div key={item} className="border-2 border-[var(--gold-primary)] rounded-xl p-3 bg-white shadow text-center text-base font-fira text-black">
										{item}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
	// Default rendering for other categories
	return (
		<div className="w-full px-2 sm:px-4 md:px-8 mb-12">
			<div className="text-center mb-4 text-lg text-black font-montserrat font-semibold">{cat.desc}</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{cat.items.map((item) => (
					<div
						key={item.name}
						className="border-2 border-[var(--gold-primary)] rounded-xl p-6 bg-white shadow flex flex-col items-center text-center"
					>
						<div className="text-lg font-bold font-montserrat mb-2 text-[var(--gold-primary)]">{item.name}</div>
						<div className="text-base text-black font-fira">{item.desc}</div>
					</div>
				))}
			</div>
		</div>
	);
}

const Main = () => {
	const [selected, setSelected] = React.useState('main');
	return (
		<section className="w-full max-w-6xl mx-auto px-4 py-16">
			<h2 className="text-3xl md:text-4xl font-bold mb-8 text-black font-montserrat text-center">
				Our Food Selection
			</h2>
			<div className="text-center text-lg text-gray-800 font-fira mb-8">
				<p>
					Discover our range of authentic vegetarian Indian dishes, sweets, and savouries. Please contact us for
					custom menus and pricing.
				</p>
				<p className="block sm:hidden text-center font-bold text-lg text-gray-800 font-fira mt-6">
					Scroll down to see our menu items based on the category selected
				</p>
			</div>
			<FoodCategoryCards selected={selected} setSelected={setSelected} />
			<FoodItemsGrid categoryKey={selected} />
		</section>
	);
};

export default Main;
