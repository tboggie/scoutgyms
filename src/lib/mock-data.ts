export const MOCK_GYMS = [
 { id: '1', slug: 'iron-temple', name: 'Iron Temple', address: '123 Main St, Beverly Hills, CA 90210', distance: 0.8, rating: 4.8, reviewCount: 312, monthlyPrice: 39, joinFee: 0, contractLength: 'None', is24hr: true, hasPool: false, hasSauna: true, parking: true, classCount: 12, corporateRate: 29, lat: 34.0736, lng: -118.4004, amenities: ['Free weights', 'Machines', 'Cardio', 'Sauna', 'Showers', 'Lockers'], classes: ['HIIT', 'Yoga', 'Spinning', 'Boxing'], hours: { weekday: '24/7', weekend: '24/7' }, peakHours: [7,8,17,18,19] },
 { id: '2', slug: 'fitlife-247', name: 'FitLife 24/7', address: '456 Sunset Blvd, Los Angeles, CA 90028', distance: 1.2, rating: 4.2, reviewCount: 187, monthlyPrice: 29, joinFee: 49, contractLength: '12 months', is24hr: true, hasPool: false, hasSauna: false, parking: true, classCount: 8, corporateRate: 22, lat: 34.0983, lng: -118.3268, amenities: ['Free weights', 'Machines', 'Cardio', 'Showers', 'Lockers'], classes: ['HIIT', 'Yoga', 'CrossFit'], hours: { weekday: '24/7', weekend: '24/7' }, peakHours: [6,7,17,18] },
 { id: '3', slug: 'peak-athletics', name: 'Peak Athletics', address: '789 Wilshire Blvd, Santa Monica, CA 90401', distance: 2.1, rating: 4.9, reviewCount: 98, monthlyPrice: 59, joinFee: 0, contractLength: 'None', is24hr: false, hasPool: true, hasSauna: true, parking: true, classCount: 20, corporateRate: 45, lat: 34.0195, lng: -118.4912, amenities: ['Free weights', 'Machines', 'Cardio', 'Pool', 'Sauna', 'Basketball', 'Showers', 'Lockers', 'Towel service'], classes: ['HIIT', 'Yoga', 'Spinning', 'Boxing', 'Pilates', 'Swimming'], hours: { weekday: '5am - 11pm', weekend: '6am - 9pm' }, peakHours: [7,8,9,17,18,19] },
 { id: '4', slug: 'flex-factory', name: 'Flex Factory', address: '321 Venice Blvd, Venice, CA 90291', distance: 3.5, rating: 4.5, reviewCount: 245, monthlyPrice: 35, joinFee: 25, contractLength: '6 months', is24hr: false, hasPool: false, hasSauna: false, parking: false, classCount: 15, corporateRate: 28, lat: 33.9925, lng: -118.4614, amenities: ['Free weights', 'Machines', 'Cardio', 'Functional training', 'Showers'], classes: ['CrossFit', 'HIIT', 'Boxing', 'Strength'], hours: { weekday: '5am - 10pm', weekend: '7am - 8pm' }, peakHours: [6,7,17,18] },
 { id: '5', slug: 'zen-fitness', name: 'Zen Fitness', address: '555 Ocean Ave, Santa Monica, CA 90402', distance: 2.8, rating: 4.7, reviewCount: 156, monthlyPrice: 49, joinFee: 0, contractLength: 'None', is24hr: false, hasPool: true, hasSauna: true, parking: true, classCount: 25, corporateRate: 38, lat: 34.0259, lng: -118.5057, amenities: ['Free weights', 'Machines', 'Cardio', 'Pool', 'Sauna', 'Spa', 'Yoga studio', 'Showers', 'Lockers'], classes: ['Yoga', 'Pilates', 'Meditation', 'Barre', 'Swimming', 'HIIT'], hours: { weekday: '5am - 10pm', weekend: '6am - 9pm' }, peakHours: [8,9,10,17,18] },
 { id: '6', slug: 'muscle-lab', name: 'Muscle Lab', address: '888 La Brea Ave, Los Angeles, CA 90036', distance: 4.2, rating: 4.6, reviewCount: 203, monthlyPrice: 45, joinFee: 0, contractLength: 'None', is24hr: true, hasPool: false, hasSauna: true, parking: true, classCount: 10, corporateRate: 35, lat: 34.0622, lng: -118.3437, amenities: ['Free weights', 'Powerlifting', 'Machines', 'Cardio', 'Sauna', 'Showers'], classes: ['Powerlifting', 'Strength', 'HIIT', 'Bodybuilding'], hours: { weekday: '24/7', weekend: '24/7' }, peakHours: [7,8,16,17,18,19] },
];

export const MOCK_REVIEWS = [
 { id: '1', gymId: '1', userName: 'Jake M.', rating: 5, body: 'Best gym in the area. Equipment is always clean and well-maintained. Staff is friendly and the 24/7 access is a game changer for my schedule.', date: '2026-08-10', verified: true },
 { id: '2', gymId: '1', userName: 'Sarah K.', rating: 4, body: 'Great equipment selection. Gets crowded during peak hours 5-7pm but otherwise excellent. The sauna is a nice bonus.', date: '2026-08-05', verified: true },
 { id: '3', gymId: '1', userName: 'Mike R.', rating: 5, body: 'Switched from FitLife and never looked back. Worth every penny. The free weights area is massive and never have to wait for a rack.', date: '2026-07-28', verified: true },
 { id: '4', gymId: '2', userName: 'Alex T.', rating: 4, body: 'Good value for money. Basic but has everything you need. The 12-month contract is a bit annoying though.', date: '2026-08-12', verified: true },
 { id: '5', gymId: '3', userName: 'Rachel P.', rating: 5, body: 'The pool is amazing. Classes are top notch and the instructors really know their stuff. Premium price but premium experience.', date: '2026-08-08', verified: true },
];

export const MOCK_CORPORATE_STATS = {
 activeMembers: 342,
 utilisationRate: 73,
 visitsThisMonth: 1247,
 costPerMember: 18.40,
 totalSeats: 468,
 monthlySpend: 7524,
 pendingInvites: 12,
 topGyms: [
 { name: 'Iron Temple', members: 87 },
 { name: 'FitLife 24/7', members: 64 },
 { name: 'Peak Athletics', members: 52 },
 { name: 'Zen Fitness', members: 41 },
 ],
 monthlyVisits: [890, 920, 980, 1050, 1100, 1180, 1220, 1247],
 months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
};

export const MOCK_EMPLOYEES = [
 { id: '1', name: 'Sarah Chen', email: 'sarah.chen@acmecorp.com', gym: 'Iron Temple', status: 'active', joinedAt: '2026-02-15', visits: 18 },
 { id: '2', name: 'Mike Patel', email: 'mike.patel@acmecorp.com', gym: 'FitLife 24/7', status: 'active', joinedAt: '2026-03-01', visits: 14 },
 { id: '3', name: 'Alex Jones', email: 'alex.jones@acmecorp.com', gym: null, status: 'pending', joinedAt: null, visits: 0 },
 { id: '4', name: 'Lisa Wang', email: 'lisa.wang@acmecorp.com', gym: 'Peak Athletics', status: 'active', joinedAt: '2026-01-20', visits: 22 },
 { id: '5', name: 'David Kim', email: 'david.kim@acmecorp.com', gym: 'Iron Temple', status: 'active', joinedAt: '2026-04-10', visits: 11 },
 { id: '6', name: 'Emma Brown', email: 'emma.brown@acmecorp.com', gym: 'Zen Fitness', status: 'active', joinedAt: '2026-05-05', visits: 16 },
 { id: '7', name: 'James Wilson', email: 'james.wilson@acmecorp.com', gym: null, status: 'invited', joinedAt: null, visits: 0 },
 { id: '8', name: 'Nina Rodriguez', email: 'nina.r@acmecorp.com', gym: 'Flex Factory', status: 'active', joinedAt: '2026-03-20', visits: 9 },
];

export const MOCK_REFERRALS = [
 { id: '1', refereeName: 'Sarah J.', gym: 'Iron Temple', status: 'paid', amount: 15, date: '2026-08-01' },
 { id: '2', refereeName: 'Mike P.', gym: 'FitLife 24/7', status: 'paid', amount: 12, date: '2026-08-05' },
 { id: '3', refereeName: 'Alex K.', gym: 'Peak Athletics', status: 'pending', amount: 25, date: '2026-08-15' },
 { id: '4', refereeName: 'Lisa W.', gym: 'Iron Temple', status: 'recurring', amount: 5, date: '2026-08-01' },
];

export const MOCK_INVOICES = [
 { id: '1', period: 'August 2026', amount: 7524, status: 'pending', date: '2026-08-01' },
 { id: '2', period: 'July 2026', amount: 7308, status: 'paid', date: '2026-07-01' },
 { id: '3', period: 'June 2026', amount: 6952, status: 'paid', date: '2026-06-01' },
 { id: '4', period: 'May 2026', amount: 6720, status: 'paid', date: '2026-05-01' },
];
