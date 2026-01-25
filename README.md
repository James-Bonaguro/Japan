🇯🇵 Japan 2026 Family Dashboard

A unified, mobile-friendly itinerary dashboard for the 2026 family trip to Tokyo, Hiroshima, Kyoto, and Osaka.

🔗 Live Link

[[Insert your GitHub Pages Link Here](https://james-bonaguro.github.io/Broker/Japan.html)

📱 How to Use

Open the Link on your phone.

Select your Squad at the top (e.g., "Parents", "The Bros", "Patricia") to filter the view.

Scroll to see the timeline, reservations, and flight info.

Offline Mode: If you save the page or keep the tab open, it will largely work offline (though map links/external images need data).

🛠️ For the "Admin" (Big Jim)

This is a Single-File Application. There is no database and no backend server.

How to Update the Itinerary:

Open JapanDashboard.html in any text editor (VS Code, Notepad++, etc.).

Scroll down to the script section where you see const ITINERARY_DATA.

Edit the text directly.

Status: Change status: STATUS.TO_BOOK to status: STATUS.CONFIRMED.

Details: Update times, booking numbers, or notes.

Save the file and push to GitHub. The website updates automatically.

Squad Keys:

SQUADS.ALL: Everyone

SQUADS.PARENTS_AMG: Ron, Sheila, Anne Marie

SQUADS.BROTHERS: Big Jim, Little Mike

SQUADS.PATRICIA: Patricia (Marathoner)

SQUADS.MT: MT

🧰 Tech Stack

HTML5: Structure

Tailwind CSS (CDN): Styling

Lucide Icons: Visuals

Vanilla JS: Logic (No React build step required)
