[Jap App](https://james-bonaguro.github.io/Japan.html)

Japan 2026 Family Dashboard

🔗 Live Site

[LINK GOES HERE ONCE GENERATED] (e.g., https://www.google.com/search?q=https://yourusername.github.io/japan-trip)

🚀 How to Launch This (First Time Setup)

You have split the code into 3 clean files: index.html, styles.css, and script.js.

Create Repo: Go to GitHub.com and create a new Public repository (e.g., japan-2026).

Upload: Click Add file > Upload files.

Drag & Drop: Drag index.html, styles.css, and script.js into the box. Commit changes.

Activate Website:

Go to Settings (tab at the top).

Click Pages (sidebar on the left).

Under Build and deployment > Branch, select main (or master) / /(root).

Click Save.

Wait: In about 60 seconds, a link will appear at the top of that page. That is your App URL.

🛠️ How to Update the Itinerary

You only need to edit one file: script.js.

1. To Change a Status (e.g., "Need to Book" -> "Confirmed")

Open script.js in GitHub (click the Pencil icon).

Find the event in the ITINERARY_DATA list.

Change status: STATUS.TO_BOOK to status: STATUS.CONFIRMED.

2. To Add a New Event

Copy and paste this block into the events array for the correct day:

{ 
    time: '7:00 PM', 
    title: 'New Dinner Spot', 
    type: 'utensils', // Options: plane, train, hotel, utensils, shopping-bag, beer, map-pin
    squad: [SQUADS.ALL], // Options: SQUADS.ALL, SQUADS.BROTHERS, SQUADS.PARENTS_AMG, etc.
    status: STATUS.TO_BOOK, 
    details: 'Notes go here.', 
    location: 'Shinjuku' 
},


3. Squad Keys (Who sees what?)

SQUADS.ALL = Everyone sees it.

SQUADS.PARENTS_AMG = Ron, Sheila, Anne Marie.

SQUADS.BROTHERS = Big Jim, Little Mike.

SQUADS.PATRICIA = Patricia (Marathon view).

SQUADS.MT = MT.

📱 Offline Use

If the internet is spotty in Japan:

Open the website on your phone while you have WiFi.

Keep the tab open.

The data is loaded into the browser, so it will mostly work even if you lose signal (external links/maps won't work, but the timeline will).
