export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'medicine' | 'equipment' | 'wellness' | 'first-aid' | 'vitamins' | 'personal-care';
    image: string;
    rating: number;
    reviewCount: number;
    inStock: boolean;
    fastDelivery: boolean;
    specifications?: { [key: string]: string };
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Paracetamol 500mg',
        description: 'Pain reliever and fever reducer. Effective for headaches, muscle aches, and cold symptoms.',
        price: 5.00,
        category: 'medicine',
        image: 'https://placehold.co/400x400/0047D1/FFFFFF?text=Paracetamol',
        rating: 4.5,
        reviewCount: 1247,
        inStock: true,
        fastDelivery: true,
        specifications: {
            'Active Ingredient': 'Paracetamol 500mg',
            'Form': 'Tablet',
            'Pack Size': '100 tablets',
            'Manufacturer': 'PharmaCare Inc.'
        }
    },
    {
        id: '2',
        name: 'Amoxicillin 250mg',
        description: 'Antibiotic for bacterial infections. Prescription required.',
        price: 12.50,
        category: 'medicine',
        image: 'https://placehold.co/400x400/0047D1/FFFFFF?text=Amoxicillin',
        rating: 4.7,
        reviewCount: 892,
        inStock: true,
        fastDelivery: true,
        specifications: {
            'Active Ingredient': 'Amoxicillin 250mg',
            'Form': 'Capsule',
            'Pack Size': '30 capsules',
            'Prescription': 'Required'
        }
    },
    {
        id: '3',
        name: 'Digital Thermometer',
        description: 'Accurate body temperature measurement with fast reading time.',
        price: 25.00,
        category: 'equipment',
        image: 'https://placehold.co/400x400/0A9D0E/FFFFFF?text=Thermometer',
        rating: 4.3,
        reviewCount: 2156,
        inStock: true,
        fastDelivery: true,
        specifications: {
            'Type': 'Digital',
            'Reading Time': '10 seconds',
            'Memory': 'Last reading',
            'Battery': 'Included'
        }
    },
    {
        id: '4',
        name: 'Blood Pressure Monitor',
        description: 'Automatic upper arm blood pressure monitor with large display.',
        price: 45.00,
        category: 'equipment',
        image: 'https://placehold.co/400x400/0A9D0E/FFFFFF?text=BP+Monitor',
        rating: 4.6,
        reviewCount: 1543,
        inStock: true,
        fastDelivery: false,
        specifications: {
            'Type': 'Automatic',
            'Cuff Size': 'Standard (22-42cm)',
            'Memory': '60 readings',
            'Display': 'Large LCD'
        }
    },
    {
        id: '5',
        name: 'Vitamin C 1000mg',
        description: 'Immune system support supplement with bioflavonoids.',
        price: 8.00,
        category: 'vitamins',
        image: 'https://placehold.co/400x400/FF8C00/FFFFFF?text=Vitamin+C',
        rating: 4.4,
        reviewCount: 3421,
        inStock: true,
        fastDelivery: true,
        specifications: {
            'Dosage': '1000mg per tablet',
            'Form': 'Tablet',
            'Pack Size': '60 tablets',
            'Vegan': 'Yes'
        }
    },
    {
        id: '6',
        name: 'Surgical Mask (Box of 50)',
        description: '3-ply disposable protective masks with elastic ear loops.',
        price: 15.00,
        category: 'equipment',
        image: 'https://placehold.co/400x400/0A9D0E/FFFFFF?text=Masks',
        rating: 4.2,
        reviewCount: 5678,
        inStock: true,
        fastDelivery: true,
        specifications: {
            'Type': '3-ply',
            'Quantity': '50 masks',
            'Material': 'Non-woven fabric',
            'Certification': 'CE Certified'
        }
    },
    {
        id: '7',
        name: 'First Aid Kit Complete',
        description: 'Comprehensive first aid kit with 120 essential medical supplies.',
        price: 35.00,
        category: 'first-aid',
        image: 'https://placehold.co/400x400/DC143C/FFFFFF?text=First+Aid',
        rating: 4.8,
        reviewCount: 987,
        inStock: true,
        fastDelivery: true,
        specifications: {
            'Items': '120 pieces',
            'Case': 'Portable hard case',
            'Includes': 'Bandages, antiseptics, tools',
            'Ideal For': 'Home, car, travel'
        }
    },
    {
        id: '8',
        name: 'Omega-3 Fish Oil 1000mg',
        description: 'High-quality fish oil supplement for heart and brain health.',
        price: 18.00,
        category: 'vitamins',
        image: 'https://placehold.co/400x400/FF8C00/FFFFFF?text=Omega+3',
        rating: 4.5,
        reviewCount: 2134,
        inStock: true,
        fastDelivery: false,
        specifications: {
            'EPA/DHA': '300mg/200mg',
            'Form': 'Softgel',
            'Pack Size': '100 softgels',
            'Purity': 'Molecularly distilled'
        }
    },
    {
        id: '9',
        name: 'Hand Sanitizer 500ml',
        description: '70% alcohol-based hand sanitizer gel with moisturizers.',
        price: 7.50,
        category: 'personal-care',
        image: 'https://placehold.co/400x400/4169E1/FFFFFF?text=Sanitizer',
        rating: 4.3,
        reviewCount: 4521,
        inStock: true,
        fastDelivery: true,
        specifications: {
            'Alcohol Content': '70%',
            'Volume': '500ml',
            'Type': 'Gel',
            'Fragrance': 'Unscented'
        }
    },
    {
        id: '10',
        name: 'Pulse Oximeter',
        description: 'Fingertip pulse oximeter for measuring oxygen saturation and heart rate.',
        price: 28.00,
        category: 'equipment',
        image: 'https://placehold.co/400x400/0A9D0E/FFFFFF?text=Oximeter',
        rating: 4.6,
        reviewCount: 1876,
        inStock: true,
        fastDelivery: true,
        specifications: {
            'Type': 'Fingertip',
            'Display': 'OLED',
            'Accuracy': '±2%',
            'Battery': 'AAA (included)'
        }
    },
    {
        id: '11',
        name: 'Multivitamin Daily Complex',
        description: 'Complete daily multivitamin with 23 essential vitamins and minerals.',
        price: 22.00,
        category: 'vitamins',
        image: 'https://placehold.co/400x400/FF8C00/FFFFFF?text=Multivitamin',
        rating: 4.4,
        reviewCount: 2987,
        inStock: true,
        fastDelivery: true,
        specifications: {
            'Vitamins': '23 nutrients',
            'Form': 'Tablet',
            'Pack Size': '90 tablets',
            'Gender': 'Unisex'
        }
    },
    {
        id: '12',
        name: 'Ibuprofen 400mg',
        description: 'Anti-inflammatory pain relief for muscle pain, arthritis, and fever.',
        price: 6.50,
        category: 'medicine',
        image: 'https://placehold.co/400x400/0047D1/FFFFFF?text=Ibuprofen',
        rating: 4.5,
        reviewCount: 1654,
        inStock: true,
        fastDelivery: true,
        specifications: {
            'Active Ingredient': 'Ibuprofen 400mg',
            'Form': 'Tablet',
            'Pack Size': '50 tablets',
            'Type': 'Anti-inflammatory'
        }
    },
];
