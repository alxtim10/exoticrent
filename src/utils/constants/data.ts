export interface CarsProps {
  image: string;
  id: string;
  name: string;
  vehicle_type: string;
  engine_type: string;
  displacement: string;
  power: string;
  transmission: string;
  torque: string;
  otr_price: number;
  daily_price: number;
  daily_overtime_price: number;
  hourly_price: number;
  category_id: number;
  top_speed: number;
  seat_capacity: number;
  engine_fuel_type: string;
}

export interface CategoryProps {
  id: number | null,
  category: string
}

export const listCategory: CategoryProps[] = [
  {
    id: null,
    category: 'All'
  },
  {
    id: 0,
    category: 'City Car'
  },
  {
    id: 1,
    category: 'Luxury Car'
  },
  {
    id: 2,
    category: 'Sport Car'
  }
]

export const car: CarsProps[] = [
  {
    image: '/cars/bmw-m4.jpg',
    id: '1',
    name: 'BMW M4 2024',
    vehicle_type: 'front-engine, rear-wheel-drive, 4-passenger, 2-door coupe',
    engine_type: '3.0 L S55 twin-turbo I6',
    engine_fuel_type: 'Petrol',
    displacement: '183 in3, 2993 cm3',
    power: '473 hp @ 6250 rpm',
    transmission: '6-speed manual',
    torque: '406 lb-ft @ 2650 rpm',
    top_speed: 290,
    seat_capacity: 4,
    otr_price: 2000000000,
    daily_price: 5000000,
    daily_overtime_price: 2000000,
    hourly_price: 200000,
    category_id: 2
  },
  {
    image: '/cars/benz-gclass.jpg',
    id: '2',
    name: 'Mercedes AMG G-Class 63 2024',
    vehicle_type: 'front-engine, rear-wheel-drive, 4-passenger, 2-door coupe',
    engine_type: '4.0-litre V8 biturbo',
    engine_fuel_type: 'Petrol',
    displacement: '183 in3, 2993 cm3',
    power: '473 hp @ 6250 rpm',
    transmission: '6-speed manual',
    torque: '406 lb-ft @ 2650 rpm',
    top_speed: 220,
    seat_capacity: 5,
    otr_price: 6500000000,
    daily_price: 13000000,
    daily_overtime_price: 3000000,
    hourly_price: 500000,
    category_id: 1
  },
  {
    image: '/cars/lamborghini-huracan.jpg',
    id: '3',
    name: 'Lamborghini Huracán 2024',
    vehicle_type: 'front-engine, rear-wheel-drive, 4-passenger, 2-door coupe',
    engine_type: '5.2 L odd-firing V10',
    engine_fuel_type: 'Petrol',
    displacement: '183 in3, 2993 cm3',
    power: '473 hp @ 6250 rpm',
    transmission: '6-speed manual',
    torque: '406 lb-ft @ 2650 rpm',
    top_speed: 325,
    seat_capacity: 2,
    otr_price: 9000000000,
    daily_price: 18000000,
    daily_overtime_price: 9000000,
    hourly_price: 750000,
    category_id: 2
  },
  {
    image: '/cars/toyota-landcruiser.jpeg',
    id: '4',
    name: 'Toyota Land Cruiser 2024',
    vehicle_type: 'front-engine, rear-wheel-drive, 4-passenger, 2-door coupe',
    engine_type: 'Turbo 4-cylinder hybrid',
    engine_fuel_type: 'hybrid',
    displacement: '183 in3, 2993 cm3',
    power: '473 hp @ 6250 rpm',
    transmission: '6-speed manual',
    torque: '406 lb-ft @ 2650 rpm',
    top_speed: 190,
    seat_capacity: 7,
    otr_price: 2500000000,
    daily_price: 5000000,
    daily_overtime_price: 2500000,
    hourly_price: 200000,
    category_id: 1
  },
  {
    image: '/cars/honda-typer.jpg',
    id: '5',
    name: 'Honda Civic Type R 2024',
    vehicle_type: 'front-engine, rear-wheel-drive, 4-passenger, 2-door coupe',
    engine_type: '2.0 L K20C1 turbocharged I4',
    engine_fuel_type: 'Petrol',
    displacement: '183 in3, 2993 cm3',
    power: '473 hp @ 6250 rpm',
    transmission: '6-speed manual',
    torque: '406 lb-ft @ 2650 rpm',
    top_speed: 275,
    seat_capacity: 4,
    otr_price: 1500000000,
    daily_price: 3000000,
    daily_overtime_price: 1500000,
    hourly_price: 150000,
    category_id: 0
  }
];


export const navbarTabs = [
  {
    label: "Home",
    description: "Exotic Rent, home of luxury cars",
    link: "home",
  },
  {
    label: "Rent",
    description: "Rent luxury cars with the best quality",
    link: "rent",
  },
  {
    label: "Pricing",
    description: "Subscribe exotic rent membership",
    link: "pricing",
  },
  {
    label: "Login",
    description: "Login to your account ",
    link: "signin",
  },
];
