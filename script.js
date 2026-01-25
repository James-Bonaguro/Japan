// --- CONFIGURATION & DATA ---

const SQUADS = {
    ALL: 'All',
    PARENTS_AMG: 'Parents & AMG',
    BROTHERS: 'The Bros',
    PATRICIA: 'Patron (Patricia)',
    MT: 'MT'
};

const STATUS = {
    CONFIRMED: { label: 'Confirmed', icon: 'check-circle-2', color: 'text-green-700 bg-green-50 border-green-200' },
    TO_BOOK: { label: 'Book Now', icon: 'alert-circle', color: 'text-amber-700 bg-amber-50 border-amber-200 border-dashed border-2' },
    OPTION: { label: 'Idea', icon: 'help-circle', color: 'text-blue-700 bg-blue-50 border-blue-200 border-dashed border-2' },
};

const CITIES = {
    TOKYO: { name: 'Tokyo', color: 'bg-red-100 text-red-800' },
    HIROSHIMA: { name: 'Hiroshima', color: 'bg-orange-100 text-orange-800' },
    KYOTO: { name: 'Kyoto', color: 'bg-purple-100 text-purple-800' },
    OSAKA: { name: 'Osaka', color: 'bg-blue-100 text-blue-800' },
};

// EDIT THIS ARRAY TO UPDATE THE APP
const ITINERARY_DATA = [
    {
        date: '2026-02-24',
        displayDate: 'Tue, Feb 24 (Early)',
        city: CITIES.TOKYO,
        events: [
            { time: 'Afternoon', title: 'Parents & AMG Arrival', type: 'plane', squad: [SQUADS.PARENTS_AMG], status: STATUS.CONFIRMED, details: 'Ron, Sheila, AMG land early. Check into hotel.', location: 'Tokyo' },
            { time: 'Evening', title: 'Relaxed Dinner', type: 'utensils', squad: [SQUADS.PARENTS_AMG], status: STATUS.OPTION, details: 'Easy dinner near hotel. Rest up.', location: 'Shinjuku' },
        ]
    },
    {
        date: '2026-02-26',
        displayDate: 'Thu, Feb 26',
        city: CITIES.TOKYO,
        events: [
            { time: '3:00 PM', title: 'Arrival: HND (Patricia/Bros/MT)', type: 'plane', squad: [SQUADS.PATRICIA, SQUADS.BROTHERS, SQUADS.MT], status: STATUS.CONFIRMED, details: 'The rest of the crew lands. Meet at hotel.', location: 'Haneda -> Shinjuku' },
            { time: '4:00 PM', title: 'Regroup: Hotel Groove Shinjuku', type: 'hotel', squad: [SQUADS.ALL], status: STATUS.CONFIRMED, details: 'Basecamp for everyone. Parents welcome the kids.', link: 'https://www.panpacific.com/en/hotels-and-resorts/hotel-groove-shinjuku.html', location: 'Kabukicho' },
            { time: '7:00 PM', title: 'Dinner: Omoide Yokocho', type: 'utensils', squad: [SQUADS.BROTHERS, SQUADS.MT, SQUADS.PATRICIA], status: STATUS.OPTION, details: 'Yakitori Alley. Casual start for the new arrivals.', location: 'Shinjuku' },
            { time: '7:00 PM', title: 'Dinner: Hotel / Easy Meal', type: 'utensils', squad: [SQUADS.PARENTS_AMG], status: STATUS.OPTION, details: 'Dinner with anyone too tired for Yakitori.', location: 'Shinjuku' },
        ]
    },
    {
        date: '2026-02-27',
        displayDate: 'Fri, Feb 27',
        city: CITIES.TOKYO,
        events: [
            { time: '10:00 AM', title: 'teamLab Borderless', type: 'map-pin', squad: [SQUADS.ALL], status: STATUS.TO_BOOK, details: 'Digital Art Museum. CRITICAL BOOKING.', location: 'Azabudai Hills' },
            { time: '1:00 PM', title: 'Lunch: Ginza Kagari', type: 'utensils', squad: [SQUADS.ALL], status: STATUS.OPTION, details: 'Chicken Paitan Ramen. Expect a line.', location: 'Ginza' },
            { time: '3:00 PM', title: 'Shibuya Sky (Sunset)', type: 'map-pin', squad: [SQUADS.ALL], status: STATUS.TO_BOOK, details: 'Best view of crossing. Book 30 days prior.', location: 'Shibuya' },
            { time: '7:30 PM', title: 'Dinner: Nishiazabu Gonpachi', type: 'utensils', squad: [SQUADS.ALL], status: STATUS.CONFIRMED, details: 'Kill Bill Restaurant. Reservation for 12 confirmed.', location: 'Nishiazabu' },
            { time: '10:00 PM', title: 'Golden Gai Bar Hop', type: 'beer', squad: [SQUADS.BROTHERS, SQUADS.MT], status: STATUS.OPTION, details: 'Tiny bars, cash only. The Bros + MT mission.', location: 'Shinjuku' },
        ]
    },
    {
        date: '2026-02-28',
        displayDate: 'Sat, Feb 28',
        city: CITIES.TOKYO,
        events: [
            { time: '9:00 AM', title: 'Marathon Expo (Bib Pickup)', type: 'map-pin', squad: [SQUADS.PATRICIA, SQUADS.ALL], status: STATUS.CONFIRMED, details: 'Patricia MUST go. Others can join for hype.', location: 'Odaiba' },
            { time: '12:00 PM', title: 'Sumo Wrestling (Practice)', type: 'map-pin', squad: [SQUADS.BROTHERS], status: STATUS.OPTION, details: 'Jim & Mike mission. Check Arashio stable.', location: 'Ryogoku' },
            { time: '12:00 PM', title: 'Shopping: Vintage / Luxury', type: 'shopping-bag', squad: [SQUADS.PARENTS_AMG, SQUADS.MT], status: STATUS.OPTION, details: 'Amore Vintage hunting.', location: 'Omotesando' },
            { time: '6:00 PM', title: 'Pre-Race Carb Load', type: 'utensils', squad: [SQUADS.ALL], status: STATUS.TO_BOOK, details: 'Pasta or Rice. Early dinner for Patricia.', location: 'Shinjuku' },
            { time: '9:00 PM', title: 'Lights Out', type: 'hotel', squad: [SQUADS.PATRICIA], status: STATUS.CONFIRMED, details: 'Rest mode for the runner.', location: 'Hotel' },
        ]
    },
    {
        date: '2026-03-01',
        displayDate: 'Sun, Mar 1',
        city: CITIES.TOKYO,
        events: [
            { time: '9:10 AM', title: 'TOKYO MARATHON START', type: 'map-pin', squad: [SQUADS.ALL], status: STATUS.CONFIRMED, details: 'Cheer Zones: 10km, Half, Finish. App tracking required.', location: 'Tokyo' },
            { time: '6:00 PM', title: 'Celebration Dinner: Yakiniku', type: 'utensils', squad: [SQUADS.ALL], status: STATUS.TO_BOOK, details: 'Grilled meat feast. All Squads.', location: 'Shinjuku' },
        ]
    },
    {
        date: '2026-03-02',
        displayDate: 'Mon, Mar 2',
        city: CITIES.HIROSHIMA,
        events: [
            { time: 'Morning', title: 'Shinkansen -> Hiroshima', type: 'train', squad: [SQUADS.ALL], status: STATUS.TO_BOOK, details: 'Entire group moves. ~4 hours. Bento boxes on train.', location: 'Tokyo -> Hiroshima' },
            { time: '2:00 PM', title: 'Check-in: Hilton Hiroshima', type: 'hotel', squad: [SQUADS.ALL], status: STATUS.CONFIRMED, details: 'Rooms reserved.', location: 'Hiroshima' },
            { time: '3:30 PM', title: 'Peace Memorial Museum', type: 'map-pin', squad: [SQUADS.ALL], status: STATUS.OPTION, details: 'Heavy but essential.', location: 'Hiroshima' },
            { time: '7:00 PM', title: 'Okonomiyaki Dinner', type: 'utensils', squad: [SQUADS.ALL], status: STATUS.OPTION, details: 'Hiroshima style (with noodles). Nagata-ya.', location: 'Hiroshima' },
        ]
    },
    {
        date: '2026-03-03',
        displayDate: 'Tue, Mar 3',
        city: CITIES.KYOTO,
        events: [
            { time: '9:00 AM', title: 'Miyajima Island', type: 'map-pin', squad: [SQUADS.ALL], status: STATUS.OPTION, details: 'Ferry ride. Deer. Floating Torii Gate.', location: 'Miyajima' },
            { time: '3:00 PM', title: 'Train -> Kyoto', type: 'train', squad: [SQUADS.ALL], status: STATUS.TO_BOOK, details: '~1.5 hrs to Kyoto.', location: 'Hiroshima -> Kyoto' },
            { time: '5:00 PM', title: 'Check-in: Kyoto Hotel', type: 'hotel', squad: [SQUADS.ALL], status: STATUS.TO_BOOK, details: 'Hotel Kanra? Need to finalize.', location: 'Kyoto' },
        ]
    },
    {
        date: '2026-03-04',
        displayDate: 'Wed, Mar 4',
        city: CITIES.KYOTO,
        events: [
            { time: '8:00 AM', title: 'Fushimi Inari (Red Gates)', type: 'map-pin', squad: [SQUADS.ALL], status: STATUS.OPTION, details: 'Early hike. Great photo ops.', location: 'Kyoto' },
            { time: '1:00 PM', title: 'Nishiki Market', type: 'utensils', squad: [SQUADS.ALL], status: STATUS.OPTION, details: 'Street food lunch.', location: 'Kyoto' },
            { time: 'Evening', title: 'Kobe Beef Dinner', type: 'utensils', squad: [SQUADS.ALL], status: STATUS.TO_BOOK, details: 'Itoh Dining (Nobu recommended).', location: 'Kyoto' },
        ]
    },
    {
        date: '2026-03-05',
        displayDate: 'Thu, Mar 5',
        city: CITIES.KYOTO,
        events: [
            { time: '8:00 AM', title: 'Arashiyama Bamboo Grove', type: 'map-pin', squad: [SQUADS.ALL], status: STATUS.OPTION, details: 'Bamboo forest walk. % Arabica Coffee.', location: 'Arashiyama' },
            { time: 'Afternoon', title: 'Free Time / Shopping', type: 'shopping-bag', squad: [SQUADS.PARENTS_AMG], status: STATUS.OPTION, details: 'Teramachi street or relax.', location: 'Kyoto' },
        ]
    },
    {
        date: '2026-03-06',
        displayDate: 'Fri, Mar 6',
        city: CITIES.OSAKA,
        events: [
            { time: 'Morning', title: 'The SPLIT: Kids -> Osaka', type: 'train', squad: [SQUADS.BROTHERS, SQUADS.MT, SQUADS.PATRICIA], status: STATUS.OPTION, details: 'The "Kids" head to Osaka. ~30 mins.', location: 'Kyoto -> Osaka' },
            { time: 'Morning', title: 'The SPLIT: Parents Stay', type: 'map-pin', squad: [SQUADS.PARENTS_AMG], status: STATUS.TO_BOOK, details: 'Relax in Kyoto or head back to Tokyo early.', location: 'Kyoto/Tokyo' },
            { time: '1:00 PM', title: 'Vintage Shopping / Americamura', type: 'shopping-bag', squad: [SQUADS.BROTHERS, SQUADS.MT, SQUADS.PATRICIA], status: STATUS.OPTION, details: 'Cool streetwear/vintage area.', location: 'Osaka' },
            { time: '7:00 PM', title: 'Dotonbori Night Life', type: 'beer', squad: [SQUADS.BROTHERS, SQUADS.MT, SQUADS.PATRICIA], status: STATUS.OPTION, details: 'Glico Man sign, Takoyaki, Drinks.', location: 'Namba' },
        ]
    },
    {
        date: '2026-03-07',
        displayDate: 'Sat, Mar 7',
        city: CITIES.OSAKA,
        events: [
            { time: 'Day', title: 'Universal Studios?', type: 'map-pin', squad: [SQUADS.BROTHERS, SQUADS.MT, SQUADS.PATRICIA], status: STATUS.TO_BOOK, details: 'Nintendo World? Needs big lead time.', location: 'Osaka' },
            { time: 'Day', title: 'Free Day', type: 'map-pin', squad: [SQUADS.PARENTS_AMG], status: STATUS.OPTION, details: 'Leisure day.', location: 'Tokyo/Kyoto' },
        ]
    },
    {
        date: '2026-03-08',
        displayDate: 'Sun, Mar 8',
        city: CITIES.TOKYO,
        events: [
            { time: 'Morning', title: 'Regroup in Tokyo', type: 'train', squad: [SQUADS.ALL], status: STATUS.TO_BOOK, details: 'Everyone heads to airport.', location: 'Tokyo' },
            { time: 'Afternoon', title: 'Flight Home', type: 'plane', squad: [SQUADS.ALL], status: STATUS.CONFIRMED, details: 'Sad times. Go home.', location: 'NRT/HND -> ORD' },
        ]
    }
];

// --- APP LOGIC ---

let activeSquad = SQUADS.ALL;

function renderSquadButtons() {
    const container = document.getElementById('squad-selector');
    container.innerHTML = '';
    
    Object.values(SQUADS).forEach(squad => {
        const btn = document.createElement('button');
        const isActive = activeSquad === squad;
        
        btn.className = `whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm border cursor-pointer ${
            isActive 
            ? 'bg-white text-red-700 border-white transform scale-105' 
            : 'bg-red-800/40 text-red-50 border-transparent hover:bg-red-700/50'
        }`;
        btn.textContent = squad;
        btn.onclick = () => {
            activeSquad = squad;
            renderSquadButtons();
            renderTimeline();
        };
        container.appendChild(btn);
    });
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = '';

    ITINERARY_DATA.forEach(day => {
        // Filter events
        const visibleEvents = day.events.filter(e => 
            e.squad.includes(SQUADS.ALL) || e.squad.includes(activeSquad)
        );

        if (visibleEvents.length === 0) return;

        // Create Day Wrapper
        const dayDiv = document.createElement('div');
        dayDiv.className = 'mb-6 last:mb-20';

        // Date Header
        dayDiv.innerHTML = `
            <div class="sticky top-0 z-10 px-5 py-3 border-b border-stone-200 bg-stone-50/95 backdrop-blur-sm flex justify-between items-center shadow-sm">
                <h2 class="font-bold text-stone-800 text-lg">${day.displayDate}</h2>
                <span class="text-[10px] uppercase tracking-wider px-2 py-1 rounded font-bold ${day.city.color}">
                    ${day.city.name}
                </span>
            </div>
        `;

        // Events Container
        const eventsContainer = document.createElement('div');
        eventsContainer.className = 'px-5 pt-4 space-y-4';

        visibleEvents.forEach((event, idx) => {
            const isLast = idx === visibleEvents.length - 1;
            const status = event.status || {};
            
            const card = document.createElement('div');
            card.className = `relative p-4 bg-white rounded-xl shadow-sm border transition-all hover:shadow-md ${
                status === STATUS.TO_BOOK ? 'border-amber-300 ring-1 ring-amber-100' : 'border-stone-100'
            }`;

            // Connector Line
            const line = !isLast ? `<div class="absolute left-[19px] top-12 bottom-[-24px] w-0.5 bg-stone-100 -z-10"></div>` : '';

            // Status Badge HTML
            const statusBadge = status ? `
                <div class="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wide font-bold border ${status.color}">
                    <i data-lucide="${status.icon}" class="w-3 h-3"></i>
                    ${status.label}
                </div>
            ` : '';

            // Link HTML
            const linkBtn = event.link ? `
                 <a href="${event.link}" target="_blank" rel="noopener noreferrer" class="text-xs text-blue-600 font-bold hover:underline flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
                    Info <i data-lucide="chevron-right" class="w-3 h-3"></i>
                  </a>
            ` : '';

            card.innerHTML = `
                ${line}
                <div class="flex justify-between items-start mb-2">
                    <div class="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase tracking-wider bg-stone-50 px-2 py-1 rounded-md">
                       <i data-lucide="${event.type}" class="w-4 h-4"></i>
                       ${event.time}
                    </div>
                    ${statusBadge}
                </div>
                
                <h3 class="font-bold text-stone-800 text-base leading-tight mb-1.5">${event.title}</h3>
                
                <p class="text-sm text-stone-600 mb-3 leading-relaxed">
                    ${event.details}
                </p>

                <div class="flex items-center justify-between pt-3 border-t border-stone-50">
                    <div class="flex items-center gap-1.5 text-xs font-medium text-stone-400">
                        <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                        ${event.location}
                    </div>
                    ${linkBtn}
                </div>
            `;
            eventsContainer.appendChild(card);
        });

        dayDiv.appendChild(eventsContainer);
        container.appendChild(dayDiv);
    });

    // Re-initialize icons for new content
    lucide.createIcons();
}

// Initialize App
renderSquadButtons();
renderTimeline();
