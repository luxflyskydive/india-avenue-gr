(function () {
  'use strict';

  // ─── Knowledge Base ────────────────────────────────────────────────────────
  const KB = {

    // ── HOURS ────────────────────────────────────────────────────────────────
    hours: {
      keywords: [
        'hour', 'hours', 'open', 'opening', 'close', 'closing', 'closed',
        'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
        'weekend', 'weekday',
        'are you open', 'when do you open', 'when do you close',
        'what time do you open', 'what time do you close', 'open on weekends',
        'open on sundays', 'open today', 'what days', 'which days',
        'when are you open', 'do you open on', 'opening time', 'closing time',
        'lunch hours', 'dinner hours', 'lunch time', 'dinner time',
        'are you open for lunch', 'are you open for dinner',
        'how late are you open', 'how early do you open',
        'last seating', 'kitchen hours', 'do you close early',
        'what time does lunch start', 'what time does dinner start',
        'do you open for lunch on weekends', 'weekend lunch hours'
      ],
      response: () => `**India Avenue Hours** 🕐\n\n**Lunch:**\n📅 **Mon – Fri:** 11:30 AM – 2:30 PM\n📅 **Sat – Sun:** 12:00 PM – 3:00 PM\n\n**Dinner:**\n📅 **Every Day:** 5:00 PM – 10:00 PM\n\n⏰ Last seating is **30 minutes before close**. Kitchen closes at posted times.\n\n📞 +1 (203) 717-1567 | 🛵 [Order Online](https://order.toasttab.com/online/india-avenue-249-railroad-avenue)`
    },

    // ── LOCATION / DIRECTIONS ────────────────────────────────────────────────
    location: {
      keywords: [
        'address', 'location', 'find you', 'get there', 'directions',
        'navigate', 'railroad', 'greenwich', 'connecticut', 'parking', 'park',
        'train', 'metro north', 'bus', 'transit', 'i-95', 'merritt',
        'parkway', 'highway', 'exit', 'arch street', 'downtown',
        'how far', 'how do i get to you', 'how do i get there',
        'where are you', 'where are you located', 'where is india avenue',
        'find india avenue', 'close to', 'near', 'nearby',
        'by car', 'by train', 'by foot', 'walking', 'drive',
        'is there parking', 'free parking', 'parking available', 'can i park',
        'street parking', 'public parking', 'parking lot',
        'greenwich train station', 'greenwich station',
        'from new york', 'from nyc', 'from stamford', 'from the city',
        'how close', 'distance', 'neighborhood', 'railroad ave', 'railroad avenue',
        'where is', 'where are', 'where is the restaurant', 'where is your restaurant',
        'your restaurant'
      ],
      response: () => `**India Avenue Location** 📍\n\n🏠 **249 Railroad Ave, Greenwich, CT 06830**\n\n🚗 **By Car:** I-95 Exit 3, or Merritt Parkway Exit 31. We're in downtown Greenwich on Railroad Ave.\n\n🅿️ **Parking:** Street parking on Railroad Ave + **Arch Street public lot** (1 min walk). Convenient!\n\n🚆 **By Train:** **5-min walk** from Greenwich Station (Metro-North New Haven Line). Head south on Greenwich Ave, right on Railroad Ave.\n\n🚶 **On Foot:** From Greenwich Avenue, head east on Railroad Ave — look for our warm lighting and the glow of the tandoor kitchen.\n\n📞 +1 (203) 717-1567`
    },

    // ── LUNCH SPECIALS ───────────────────────────────────────────────────────
    lunch: {
      keywords: [
        'lunch', 'lunch special', 'lunch specials', 'lunch menu', 'lunch price',
        'lunch prices', 'lunch deal', 'lunch deals', 'lunch offer',
        'midday', 'noon', 'daytime', 'weekday meal',
        'how much is lunch', 'what is for lunch', 'what is on the lunch menu',
        'lunch today', 'what do you have for lunch', 'lunch options',
        'is lunch available', 'do you serve lunch',
        'weekday lunch', 'daily special', 'daily specials',
        'whats for lunch', 'kathi roll', 'kathi rolls',
        'how much for lunch', 'lunch cost', 'lunch served',
        'vegetarian lunch', 'chicken lunch', 'lamb lunch', 'seafood lunch',
        'lunch buffet', 'lunchtime', 'lunch today',
        'what time is lunch', 'when is lunch', 'is lunch on today',
        'tell me about the lunch', 'tell me about lunch'
      ],
      response: () => `**Lunch Specials** 🍛 — *Mon–Fri, 11:30 AM – 2:30 PM*\n*(Sat–Sun: 12–3 PM — full dinner menu available)*\n\n🥗 **Vegetarian — $13.95**\nSaag Paneer · Chana Masala · Aloo Gobi · Dal Tandoor Pasha · Kadai Veg · Kadai Paneer · Tadka Dal · Gobi Manchurian · Hakka Noodle\n\n🍗 **Chicken — $14.95**\nTikka Masala · Chettinad · Vindaloo · Kadai Chicken · Curry · Manchurian\n\n🐑 **Lamb — $15.95**\nRogan Josh · Saag · Vindaloo · Tikka Masala\n\n🦐 **Seafood — from $17.95**\nShrimp Kabab Masala ($17.95) · Allepey Fish Curry — chef's mango curry with coconut milk ($19.95)\n\n🌯 **Kathi Rolls — from $12.95**\nPaneer · Veg · Chicken · Lamb — in light wheat or roasted flatbread\n\nAll curries served with rice and naan. Same care as dinner! 😊`
    },

    // ── DINNER ───────────────────────────────────────────────────────────────
    dinner: {
      keywords: [
        'dinner', 'dinner menu', 'dinner price', 'dinner prices',
        'evening', 'tonight', 'evening meal', 'what is for dinner',
        'do you serve dinner', 'dinner options', 'dinner specials',
        'what time is dinner', 'when does dinner start',
        'dinner served', 'evening menu', 'dinner tonight',
        'what do you serve for dinner', 'full dinner menu',
        'dinner only', 'dinner dishes', 'night menu',
        'tell me about dinner', 'evening meal', 'evening meal start',
        'what time does the evening meal start'
      ],
      response: () => `**Dinner at India Avenue** 🌙 — *Nightly from 5:00 PM*\n\n**Entrées:**\n🥗 Vegetarian: **$15.95–$19.00** (18 dishes!)\n🍗 Chicken: **$20.95** (Tikka Masala · Butter Chicken · Vindaloo · Korma · Chettinad · Madras & more)\n🐑 Lamb: **$23.95** (Rogan Josh · Saag · Pepper Fry · Pasanda · Korma & more)\n🦐 Seafood: **$25.95–$27.95** (Shrimp Madras · Shrimp Vindaloo · Allepey Fish Curry)\n\n🔥 **Tandoor Specialties: $17.95–$34.95**\nLamb Chops ($34.95) · Mixed Grill ($32.95) · Tandoori Salmon ($24.95) · Seekh Kabab ($20.95) · Tandoori Shrimp ($25.95)\n\n🥘 Also: Soups · Chaat · Dosa · Indo-Chinese · Biryani ($16.95) · Fresh Breads · Desserts\n\n🛵 [Order Online](https://order.toasttab.com/online/india-avenue-249-railroad-avenue) | 📞 +1 (203) 717-1567`
    },

    // ── MENU / GENERAL FOOD ──────────────────────────────────────────────────
    menu: {
      keywords: [
        'menu', 'food', 'dishes', 'dish', 'cuisine', 'indian food',
        'what do you serve', 'what kind of food', 'what type of food',
        'what do you have', 'what is on the menu', 'show me the menu',
        'full menu', 'indian cuisine', 'what can i eat',
        'tikka masala', 'butter chicken', 'biryani', 'samosa', 'naan',
        'curry', 'curries', 'tandoori', 'korma', 'vindaloo', 'saag',
        'paneer', 'dal', 'dosa', 'chaat', 'roti', 'paratha',
        'rogan josh', 'masala', 'kebab', 'kabab', 'rice', 'basmati',
        'north indian', 'south indian', 'indo chinese', 'indo-chinese',
        'chicken tikka', 'lamb chops', 'shrimp', 'salmon', 'fish curry',
        'what is popular', 'best dishes', 'house favorite', 'signature dish',
        'must try', 'what should i order', 'appetizer', 'appetizers',
        'starter', 'starters', 'soup', 'salad', 'dessert', 'desserts',
        'sides', 'bread', 'breads', 'what food do you have',
        'what are your most popular dishes', 'recommended dishes',
        'gulab jamun', 'kulfi', 'kheer', 'rasmalai', 'gajar halwa',
        'mango lassi', 'garlic naan', 'onion bhaji', 'malai kofta',
        'do you have biryani', 'do you have dosa', 'do you have naan'
      ],
      response: () => `**India Avenue Menu** 🍽️\n\nWe serve **authentic North & South Indian cuisine** — a full, carefully curated menu.\n\n🌟 **House Favorites:**\n- Chicken Tikka Masala — $20.95\n- Butter Chicken — $20.95\n- Lamb Rogan Josh — $23.95 *(Kashmiri style, shallots & yogurt)*\n- Saag Paneer — $17.95\n- Garlic Naan — $5.25\n\n**Menu Sections:**\nSoup & Salad · Chaat Corner · Appetizers · Dosa Stand · Indo-Chinese · Vegetarian Entrées · Chicken · Lamb · Seafood · Tandoor · Rice & Biryani · Breads · Desserts · Beer, Wine & Cocktails\n\nAsk me about any section, or ask what to order! 😊`
    },

    // ── RESERVATIONS ─────────────────────────────────────────────────────────
    reservations: {
      keywords: [
        'reservation', 'reservations', 'reserve', 'book a table', 'reserve a table',
        'table for', 'can i book', 'make a reservation', 'get a table',
        'walk-in', 'walk-ins', 'walk in', 'do i need a reservation',
        'can i just show up', 'can i just turn up', 'can i come without a reservation',
        'do you take reservations', 'how do i book a table',
        'how do i make a reservation', 'book for a group', 'large group reservation',
        'party of', 'seats', 'seating', 'wait time', 'waitlist',
        'how long is the wait', 'do i need to book', 'table availability',
        'is it busy', 'will there be a wait', 'busy tonight',
        'do you take bookings', 'how to reserve', 'how to book'
      ],
      response: () => `**Reservations at India Avenue** 🍽️\n\nWe recommend calling ahead, especially for **weekend dinners** and **groups of 4 or more**.\n\n📞 **Reserve by phone:** +1 (203) 717-1567\n\n🚶 **Walk-ins are always welcome** — though wait times may apply on busy nights, particularly Friday and Saturday evenings.\n\nFor **large parties or special occasions**, calling ahead guarantees we have everything ready for you! 😊`
    },

    // ── ONLINE ORDERING / TAKEOUT ─────────────────────────────────────────────
    ordering: {
      keywords: [
        'order', 'ordering', 'online order', 'online ordering', 'takeout',
        'take out', 'take-out', 'pickup', 'pick up', 'to go', 'delivery',
        'deliver', 'can i order online', 'how do i order', 'order ahead',
        'order online', 'toast', 'toasttab', 'grubhub', 'doordash',
        'ubereats', 'seamless', 'order food', 'take away', 'takeaway',
        'carry out', 'can i pick up', 'phone order', 'how to order',
        'place an order', 'order now', 'ready for pickup',
        'do you deliver', 'is there delivery', 'can i get delivery',
        'can i order for pickup', 'order for collection'
      ],
      response: () => `**Order Online from India Avenue** 🛵\n\nWe use **Toast** for online ordering — easy, fast, and ready when you arrive!\n\n🖥️ **[Order Here via Toast](https://order.toasttab.com/online/india-avenue-249-railroad-avenue)**\n\n✅ Order ahead for **pickup** at your convenience.\n📞 Or call us: **+1 (203) 717-1567**\n\n*We do not currently offer delivery through third-party apps — pickup only.*`
    },

    // ── VEGETARIAN / VEGAN ───────────────────────────────────────────────────
    vegetarian: {
      keywords: [
        'vegetarian', 'vegan', 'veggie', 'plant-based', 'plant based',
        'no meat', 'meat free', 'meatless', 'without meat', 'dairy free',
        'vegetarian options', 'vegan options', 'is there vegetarian',
        'do you have vegetarian', 'veggie options', 'veggie dishes',
        'saag paneer', 'chana masala', 'malai kofta', 'kadai paneer',
        'shahi paneer', 'mutter paneer', 'baingan bharta', 'bhindi',
        'avial', 'navaratna korma', 'tofu', 'chana saag', 'aloo gobi',
        'do you have vegan', 'is the food vegan', 'can vegans eat here',
        'strictly vegetarian', 'vegetarian friendly', 'veg menu',
        'veg options', 'veg dishes', 'what vegetarian options',
        'vegetarian dishes', 'good for vegetarians', 'any veg options',
        'i am vegetarian', 'i am a vegetarian', 'i am vegetarian what can i eat',
        'vegetarian menu', 'vegetarians', 'suitable for vegetarians',
        'plant based dishes', 'plant-based dishes', 'do you have malai kofta',
        'dont eat meat', 'do not eat meat', 'eat meat'
      ],
      response: () => `**Vegetarian & Vegan at India Avenue** 🌿\n\nWe have an **outstanding vegetarian selection** — one of the things we're most proud of!\n\n**Vegetarian Dinner Entrées ($15.95–$19.00):**\nSaag Paneer · Chana Saag · Malai Kofta · Shahi Paneer · Kadai Paneer · Mutter Paneer · Baingan Bharta · Aamchur Bhindi · Navaratna Korma · Tadka Dal · Dal Tandoor Pasha · Avial · Kadai Veg · Mutter Gobi · Paneer Tikka Masala · Tofu Saag · Vegetable Tikka Masala\n\n🌱 **Vegan options** available — dishes marked **GF/V** on the menu.\n\n**Lunch Specials** also include a full veg selection at $13.95!\n\nAsk your server — we'll happily clarify what's vegan-friendly! 😊`
    },

    // ── SPICE LEVELS ─────────────────────────────────────────────────────────
    spice: {
      keywords: [
        'spicy', 'spice', 'spice level', 'spice levels', 'heat', 'hot',
        'mild', 'medium', 'how spicy', 'is it spicy', 'not spicy',
        'very spicy', 'extra spicy', 'too spicy', 'can you make it mild',
        'can you make it less spicy', 'can you adjust the spice',
        'can i choose how spicy', 'chili', 'chilli', 'vindaloo spice',
        'which dish is spicy', 'spice preference', 'no spice',
        'does it come spicy', 'is the food spicy', 'level of spice',
        'can you tone down the spice', 'i like it mild', 'mild food', 'i like mild', 'i like it hot',
        'make it spicy', 'reduce the spice', 'no heat', 'very mild',
        'spice options', 'heat level', 'adjust heat', 'how hot is it'
      ],
      response: () => `**Spice Levels at India Avenue** 🌶️\n\nWe cook to **your preference** — just tell your server!\n\n🟢 **Mild** — aromatic and flavourful, no heat\n🟡 **Medium** — a gentle warmth with full flavour\n🔴 **Hot** — the full, traditional heat\n\n*"We never use spice as a shortcut — every level is made with the same care."*\n\n**Naturally hotter dishes:** Vindaloo · Chettinad · Madras · Rasam Soup\n**Milder crowd-pleasers:** Butter Chicken · Chicken Korma · Navaratna Korma · Malai Kofta\n\nJust tell your server when you order — adjustments are no problem at all! 😊`
    },

    // ── DIETARY / ALLERGIES / GLUTEN ─────────────────────────────────────────
    dietary: {
      keywords: [
        'allergy', 'allergies', 'allergen', 'allergens', 'dietary restriction',
        'dietary restrictions', 'dietary needs', 'special diet', 'food intolerance',
        'intolerance', 'safe for allergies', 'accommodation', 'dietary accommodation',
        'i have an allergy', 'i am allergic', 'nutritional information',
        'can you accommodate', 'do you accommodate', 'accommodate my allergy',
        'do you mark allergens', 'allergen information',
        'gluten', 'gluten free', 'gluten-free', 'gluten intolerant', 'gluten intolerance',
        'celiac', 'coeliac', 'wheat free', 'wheat allergy', 'wheat intolerant',
        'do you have gluten free', 'is anything gluten free', 'is it gluten free',
        'what is gluten free on the menu', 'gluten free options',
        'nut allergy', 'peanut allergy', 'tree nut', 'sesame', 'sesame allergy',
        'dairy', 'dairy free', 'dairy-free', 'dairy allergy', 'lactose',
        'lactose intolerant', 'lactose intolerance', 'no dairy', 'milk allergy',
        'soy allergy', 'egg allergy', 'shellfish allergy', 'fish allergy',
        'kosher', 'i am kosher', 'i keep kosher', 'kosher food', 'kosher diet',
        'is the food kosher', 'is it kosher', 'kosher restaurant', 'kosher certified',
        'do you have kosher food', 'kosher options', 'kosher what can i eat',
        'i am kosher what can i eat', 'keeping kosher', 'kashrut', 'strictly kosher',
        'im kosher', 'im kosher what can i eat', 'i keep kosher what can i eat',
        'halal', 'i am muslim', 'i am halal', 'halal food', 'halal diet',
        'is the food halal', 'is it halal', 'halal restaurant', 'halal certified',
        'halal options', 'halal what can i eat', 'halal meat',
        'do you have halal food', 'no pork', 'avoid pork', 'pork free',
        'i am muslim what can i eat',
        'jain', 'jain diet', 'jain food', 'i am jain', 'jain vegetarian',
        'no root vegetables', 'jain options', 'strictly jain',
        'i am hindu', 'hindu diet', 'no beef', 'beef free', 'do you serve beef',
        'cater for allergies', 'can you cater for allergies', 'do you cater for allergies',
        'pork', 'serve pork', 'do you serve pork', 'is there pork', 'pork on the menu',
        'beef', 'serve beef', 'is there beef', 'beef on the menu', 'beef free',
        'dont eat beef', 'do not eat beef', 'i dont eat beef',
        'root vegetables', 'avoid root vegetables', 'no root vegetables',
        'jain what can i eat', 'i am jain what can i eat',
        'i observe kashrut', 'observe kashrut', 'observe'
      ],
      response: () => `**Dietary Information at India Avenue** 🌿\n\nWe want every guest to eat well and feel comfortable. Here is honest guidance for common dietary needs:\n\n🔵 **Kosher**\nWe are **not kosher-certified**. For different levels of kashrut observance:\n- *Avoiding pork & shellfish only* — our chicken, lamb, and vegetarian dishes work well\n- *Meat-dairy separation* — most curries are either meat-based or dairy-based, and we can prepare dishes **dairy-free on request**\n- *Strict rabbinical kashrut* — we cannot guarantee halachic compliance; please call us: **+1 (203) 717-1567**\n\n🕌 **Halal**\nWe are **not halal-certified** and our kitchen handles non-halal meats. Guests avoiding pork enjoy our **vegetarian and seafood dishes** freely. For stricter halal observance, please call ahead: **+1 (203) 717-1567**\n\n🌿 **Jain Diet**\nWe offer a wide **vegetarian selection** and can try to accommodate Jain preferences (no meat, no root vegetables). Please mention it when ordering or call ahead so the kitchen can prepare accordingly.\n\n🐄 **Hindu Diet / No Beef**\nWe do **not serve beef** at India Avenue — it is not on our menu. We serve lamb, chicken, seafood, and an extensive vegetarian selection.\n\n🌾 **Gluten-Free**\nMany dishes are marked **GF** on our menu. Indian cuisine has many naturally gluten-free options (rice, lentils, most curries). Please inform your server — our kitchen is not a dedicated gluten-free facility.\n\n🥛 **Dairy-Free / Lactose Intolerant**\nMany dishes are naturally dairy-free. Dishes with paneer, cream, or butter can often be adjusted — just ask your server.\n\n🥜 **Nut & Other Allergies**\nPlease inform your server of any allergy when you arrive. We take all allergies seriously — our kitchen is not allergen-free, so for severe allergies please call before visiting.\n\n📞 For any specific concern, call us before visiting: **+1 (203) 717-1567** — we will walk through the menu with you.`
    },

    // ── CATERING / PRIVATE EVENTS ─────────────────────────────────────────────
    catering: {
      keywords: [
        'catering', 'cater', 'catered', 'private event', 'private dining',
        'private party', 'event', 'events', 'corporate', 'corporate lunch',
        'corporate event', 'corporate catering', 'office lunch', 'office catering',
        'business lunch', 'birthday party', 'birthday dinner', 'celebration',
        'special event', 'special occasion', 'wedding', 'party food',
        'can you cater', 'do you cater', 'do you do catering',
        'group catering', 'large event', 'bulk order', 'big order',
        'food for a party', 'food for an event', 'do you host events',
        'private hire', 'hire the restaurant', 'custom menu', 'custom quote',
        'how much does catering cost', 'catering prices', 'catering enquiry',
        'book a private event', 'can i book a private event',
        'food for a party', 'food for a corporate', 'food for an event'
      ],
      response: () => `**Catering & Private Events** 🎉\n\nYes — we cater events of **all sizes**!\n\nWe cover:\n🏢 Corporate lunches & office catering\n🎂 Birthday dinners & celebrations\n💍 Weddings & special occasions\n🤝 Any gathering where great food matters\n\nWe put together something **tailored to your event** — menu, quantity, timing.\n\n📞 **Call:** +1 (203) 717-1567\n✉️ **Email:** via our [contact page](https://www.indiaavenuegr.com/contact.php)\n\nWe respond quickly and love making events special! 🌟`
    },

    // ── DRINKS / BEVERAGES ───────────────────────────────────────────────────
    drinks: {
      keywords: [
        'drink', 'drinks', 'beverage', 'beverages', 'alcohol', 'alcoholic',
        'beer', 'wine', 'cocktail', 'cocktails', 'spirits', 'whiskey', 'vodka',
        'gin', 'rum', 'tequila', 'cognac', 'martini', 'margarita', 'mojito',
        'lassi', 'mango lassi', 'sweet lassi', 'salted lassi', 'chai', 'tea',
        'coffee', 'juice', 'soft drink', 'soda', 'sparkling',
        'non alcoholic', 'non-alcoholic', 'kingfisher', 'taj mahal',
        'rupee ipa', 'rupee lager', 'stella artois', 'lychee martini',
        'bengal tiger', 'bombay dream', 'cooch behar', 'cosmopolitan',
        'what drinks', 'what beer', 'what wine', 'bar', 'bar menu',
        'can i get a drink', 'do you serve alcohol', 'do you have a bar',
        'do you have wine', 'do you have beer', 'what cocktails',
        'byob', 'bring your own wine', 'corkage', 'bring wine',
        'bring my own bottle', 'is there a bar', 'drinks menu',
        'do you have cocktails', 'beer selection', 'wine list'
      ],
      response: () => `**Drinks at India Avenue** 🍹\n\n🍺 **Beer:** Kingfisher ($7) · Stella Artois ($7) · Rupee IPA ($8) · Rupee Lager ($8) · Taj Mahal 22oz ($11)\n\n🍷 **Wine:** Glasses from **$12** · Bottles from **$41**\n*(Pinot Grigio · Sauvignon Blanc · Chardonnay · Pinot Noir · Cabernet · Malbec · Rosé · Sparkling)*\n\n🍸 **Cocktails — $14.95:**\nLychee Martini · The Bengal Tiger · Bombay Dream · Love Martini · Cooch Behar · Cosmopolitan · Mojito · Margarita · Manhattan · Gin & Tonic\n\n🥛 **Non-Alcoholic:**\nMango Lassi ($5.95) · Sweet Lassi ($5.50) · Salted Lassi ($5.50) · Chai ($3.75) · Madras Coffee ($3.95) · Juices · Sodas\n\n🍾 **BYOB:** Corkage fee **$25** per bottle. Full spirits menu also available!`
    },

    // ── KIDS ─────────────────────────────────────────────────────────────────
    kids: {
      keywords: [
        'kid', 'kids', 'child', 'children', 'young', 'toddler', 'toddlers',
        'family', 'family friendly', 'families', 'kids menu', 'children menu',
        'kids meal', 'kids food', 'is there a kids menu', 'do you have a kids menu',
        'what can kids eat', 'what do you have for kids',
        'is it family friendly', 'my child', 'my kids', 'my son', 'my daughter',
        'chicken nuggets', 'nuggets', 'french fries', 'kids fries',
        'kids friendly', 'child friendly', 'good for kids', 'bring kids',
        'suitable for children', 'children allowed', 'can i bring my kids',
        'do you have kids food', 'kids options',
        'what do you have for children', 'what can children eat'
      ],
      response: () => `**Kids at India Avenue** 👨‍👩‍👧\n\nWe're a **family-friendly restaurant** and love welcoming families!\n\n**Kids Menu:**\n🍗 K-Chicken Nuggets — **$7.95**\n🍟 K-French Fries — **$5.95**\n\nThe wider menu also has plenty that children love — **Butter Chicken**, **Garlic Naan**, and **Basmati Rice** are always popular with younger guests! Spice is always adjustable to mild.\n\n📞 Bringing the family? Call ahead and we'll have a great table ready: **+1 (203) 717-1567** 😊`
    },

    // ── ABOUT / STORY / KITCHEN ──────────────────────────────────────────────
    about: {
      keywords: [
        'about', 'story', 'history', 'who are you', 'what is india avenue',
        'tell me about', 'restaurant', 'ambiance', 'ambience', 'atmosphere',
        'decor', 'setting', 'dining room', 'interior', 'kitchen',
        'glass kitchen', 'tandoor kitchen', 'clay oven', 'glass panelled',
        'chef', 'chefs', 'owner', 'owners', 'who is the chef',
        'how long have you been open', 'when did you open', 'established',
        'how old is the restaurant', 'new restaurant',
        'indian restaurant greenwich', 'fine dining', 'authentic',
        'traditional', 'tripadvisor', 'google rating', 'rating', 'reviews',
        'what is india avenue like', 'describe the restaurant',
        'what makes you special', 'what is unique about you',
        'naan baked', 'clay oven', 'north indian', 'south indian', 'subcontinent',
        'watch the kitchen', 'open kitchen', 'visible kitchen',
        'best indian restaurant', 'greenwich indian',
        'rated', 'is the food traditional', 'traditional food',
        'how is india avenue rated'
      ],
      response: () => `**About India Avenue** ✨\n\nIndia Avenue is Greenwich's premier Indian restaurant — a culinary journey through the finest flavours of the subcontinent.\n\n🏛️ **The Ambiance:** Inspired by the regal courts of India — majestic paintings, warm ornaments, and an atmosphere as rich as the food itself.\n\n🔥 **The Glass Tandoor Kitchen:** One of our signature features — **visible from every seat in the dining room**. Watch your naan being pulled from the clay oven, your kebabs come off the skewer, your curry assembled with care. Dinner and a show.\n\n👨‍🍳 **The Chefs:** Hand-picked by the owner. Masters of blending fragrant spices from across the subcontinent, crafted for the North American palate.\n\n⭐ **Rated 4.5 on TripAdvisor · 4.4 on Google · #14 of 111 restaurants in Greenwich**\n\n📍 249 Railroad Ave, Greenwich, CT`
    },

    // ── CONTACT ──────────────────────────────────────────────────────────────
    contact: {
      keywords: [
        'contact', 'phone', 'call', 'email', 'reach', 'get in touch',
        'how do i contact', 'how do i reach you', 'speak to someone',
        'talk to someone', 'customer service', 'help', 'enquiry', 'inquiry',
        'phone number', 'telephone', 'what is your number',
        'what is your phone number', 'what is your email',
        'can i call you', 'how to contact', 'how to reach',
        'instagram', 'social media', 'follow you',
        'contact details', 'contact info', 'speak to a person',
        'talk to a human', 'speak to a human', 'speak to a real person',
        'how do i get in touch', 'how do you get in touch'
      ],
      response: () => `**Contact India Avenue** 📞\n\n📞 **Phone:** +1 (203) 717-1567\n🏠 **Address:** 249 Railroad Ave, Greenwich, CT 06830\n📸 **Instagram:** Follow us for daily specials & behind-the-scenes kitchen content!\n\n**Best ways to reach us:**\n- 📞 **Call** — best for reservations and same-day requests\n- ✉️ **Email** — for catering, feedback, or general enquiries\n- 🚶 **Walk in** — always welcome!\n\n⏰ We're here:\nMon–Fri: 11:30 AM–2:30 PM & 5–10 PM\nSat–Sun: 12–3 PM & 5–10 PM`
    },

  };

  // ─── Word-boundary regex ────────────────────────────────────────────────────
  function kwRegex(kw) {
    const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp('(?:^|[\\s,.!?\'"-])' + escaped + '(?:[\\s,.!?\'"-]|$)', 'i');
  }

  // ─── Damerau-Levenshtein (handles transpositions like yaer→year) ─────────────
  function lev(a, b) {
    const m = a.length, n = b.length;
    if (m === 0) return n;
    if (n === 0) return m;
    const dp = Array.from({length: m + 1}, (_, i) => Array.from({length: n + 1}, (_, j) => j === 0 ? i : 0));
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = a[i-1] === b[j-1] ? 0 : 1;
        dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + cost);
        if (i > 1 && j > 1 && a[i-1] === b[j-2] && a[i-2] === b[j-1])
          dp[i][j] = Math.min(dp[i][j], dp[i-2][j-2] + cost);
      }
    }
    return dp[m][n];
  }

  // Build vocabulary from all KB keywords (3+ char words)
  const kbVocab = (() => {
    const seen = new Set();
    for (const d of Object.values(KB))
      for (const kw of d.keywords)
        kw.split(/\s+/).forEach(w => { if (w.length >= 3) seen.add(w.toLowerCase()); });
    return [...seen];
  })();

  // Fuzzy-correct typos in user input before classifying
  function fuzzyCorrect(text) {
    return text.replace(/[a-zA-Z]{4,}/g, word => {
      const w = word.toLowerCase();
      if (kbVocab.includes(w)) return word;
      const maxDist = w.length <= 5 ? 1 : 2;
      let best = null, bestDist = maxDist + 1;
      for (const v of kbVocab) {
        if (Math.abs(v.length - w.length) > maxDist) continue;
        const d = lev(w, v);
        if (d < bestDist || (d === bestDist && best !== null && v.length > best.length)) {
          bestDist = d; best = v;
        }
      }
      return best !== null ? best : word;
    });
  }

  // ─── Classifier ─────────────────────────────────────────────────────────────
  function classify(text) {
    const lower = fuzzyCorrect(text).toLowerCase().replace(/[,;]/g, ' ').replace(/\s+/g, ' ').trim();
    let bestCategory = null, bestScore = 0;
    for (const [cat, data] of Object.entries(KB)) {
      let score = 0;
      for (const kw of data.keywords) {
        if (kwRegex(kw).test(lower)) {
          const wc = kw.split(' ').length;
          score += wc * wc;
        }
      }
      if (score > bestScore) { bestScore = score; bestCategory = cat; }
    }
    return bestScore > 0 ? bestCategory : null;
  }

  // ─── Greeting / thanks ───────────────────────────────────────────────────────
  function isGreeting(text) {
    return /^(hi|hello|hey|hiya|howdy|yo|sup|greetings?|good morning|good afternoon|good evening|namaste|salaam)(\s+(there|everyone|guys|all|friend|folks))?[\s!.?,]*$/i.test(text.trim());
  }

  function isThanks(text) {
    return /\b(thanks?|thank you|cheers|perfect|great|awesome|brilliant|amazing|wonderful|super|helpful|got it|perfect)\b/i.test(text) &&
      text.trim().split(/\s+/).length < 10;
  }

  // ─── Formatter ───────────────────────────────────────────────────────────────
  function formatResponse(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\n/g, '<br>');
  }

  // ─── Main response getter ────────────────────────────────────────────────────
  function getResponse(userText) {
    const t = userText.trim();
    if (!t) return null;
    if (isGreeting(t)) return formatResponse(`**Namaste! Welcome to India Avenue!** 🙏\n\nI'm here to help with anything you need — hours, menu, reservations, directions, and more.\n\nWhat can I help you with? 😊`);
    if (isThanks(t)) return formatResponse(`You're very welcome! Hope to see you at India Avenue soon. 🍛✨`);
    const cat = classify(t);
    if (cat && KB[cat]) return formatResponse(KB[cat].response());
    return formatResponse(`I'm India Avenue's chatbot, so I can only help with questions about the restaurant! 🍛\n\nTry asking about:\n📅 **Hours** · 📍 **Location & Parking** · 🍛 **Lunch Specials** · 🌙 **Dinner Menu**\n🌿 **Vegetarian & Vegan** · 🌶️ **Spice Levels** · 🔵 **Kosher / Halal / Jain**\n🍽️ **Reservations** · 🛵 **Online Ordering** · 🎉 **Catering** · 🍹 **Drinks** · 👨‍👩‍👧 **Kids Menu**\n\nOr call us directly: **+1 (203) 717-1567** 😊`);
  }



  // ─── Styles ──────────────────────────────────────────────────────────────────
  const STYLES = `
    /* ── Toggle button ─────────────────────────────────────────── */
    #ia-chat-toggle {
      position: fixed; bottom: 24px; right: 24px; z-index: 9999;
      width: 60px; height: 60px; border-radius: 50%; border: none; cursor: pointer;
      background: linear-gradient(135deg, #c8831a 0%, #e6a020 100%);
      box-shadow: 0 4px 20px rgba(200,131,26,0.5);
      display: flex; align-items: center; justify-content: center;
      transition: transform 0.2s, box-shadow 0.2s;
      touch-action: manipulation; -webkit-tap-highlight-color: transparent;
    }
    #ia-chat-toggle:hover { transform: scale(1.08); box-shadow: 0 6px 26px rgba(200,131,26,0.65); }
    #ia-chat-toggle svg { pointer-events: none; }

    /* ── Attention bubble ────────────────────────────────────────── */
    #ia-chat-bubble {
      position: fixed; bottom: 96px; right: 16px; z-index: 9998;
      background: #fff; color: #1a1008;
      padding: 9px 15px; border-radius: 18px 18px 4px 18px;
      font-size: 13px; font-weight: 600; line-height: 1.3;
      box-shadow: 0 4px 18px rgba(0,0,0,0.18);
      white-space: nowrap; cursor: pointer;
      animation: ia-bubble-in 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards;
      -webkit-tap-highlight-color: transparent;
    }
    #ia-chat-bubble::after {
      content: ''; position: absolute; bottom: -7px; right: 20px;
      width: 0; height: 0;
      border-left: 7px solid transparent;
      border-right: 4px solid transparent;
      border-top: 8px solid #fff;
    }
    @keyframes ia-bubble-in {
      from { opacity: 0; transform: translateY(14px) scale(0.9); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    .ia-bubble-out {
      animation: ia-bubble-out 0.25s ease forwards !important;
    }
    @keyframes ia-bubble-out {
      to { opacity: 0; transform: translateY(8px) scale(0.92); }
    }

    /* ── Chat window ─────────────────────────────────────────────── */
    #ia-chat-window {
      position: fixed; bottom: 96px; right: 24px; z-index: 9998;
      width: 360px; max-width: calc(100vw - 48px);
      background: #1a1008; border-radius: 18px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.6);
      display: flex; flex-direction: column; overflow: hidden;
      transform: scale(0.85) translateY(20px); transform-origin: bottom right;
      opacity: 0; pointer-events: none;
      transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s;
    }
    #ia-chat-window.ia-open {
      transform: scale(1) translateY(0); opacity: 1; pointer-events: all;
    }

    /* ── Header ──────────────────────────────────────────────────── */
    #ia-chat-header {
      background: linear-gradient(135deg, #c8831a 0%, #e6a020 100%);
      padding: 14px 18px; display: flex; align-items: center; gap: 12px;
      flex-shrink: 0;
    }
    #ia-chat-header .ia-logo {
      width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.2);
      display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;
    }
    #ia-chat-header .ia-title { flex: 1; min-width: 0; }
    #ia-chat-header .ia-title strong { display: block; color: #fff; font-size: 15px; font-weight: 700; }
    #ia-chat-header .ia-title span { color: rgba(255,255,255,0.85); font-size: 12px; }
    #ia-chat-close {
      background: none; border: none; cursor: pointer; color: #fff; opacity: 0.8;
      font-size: 22px; line-height: 1; padding: 6px 8px; border-radius: 6px;
      transition: opacity 0.15s; flex-shrink: 0;
      touch-action: manipulation; -webkit-tap-highlight-color: transparent;
      min-width: 36px; min-height: 36px; display: flex; align-items: center; justify-content: center;
    }
    #ia-chat-close:hover { opacity: 1; }

    /* ── Messages ────────────────────────────────────────────────── */
    #ia-chat-messages {
      flex: 1; overflow-y: auto; padding: 16px 14px; display: flex;
      flex-direction: column; gap: 10px; max-height: 340px;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior-y: contain;
      scrollbar-width: thin; scrollbar-color: #c8831a #1a1008;
    }
    #ia-chat-messages::-webkit-scrollbar { width: 4px; }
    #ia-chat-messages::-webkit-scrollbar-track { background: transparent; }
    #ia-chat-messages::-webkit-scrollbar-thumb { background: #c8831a; border-radius: 2px; }
    .ia-msg {
      max-width: 88%; padding: 10px 13px; border-radius: 14px;
      font-size: 13.5px; line-height: 1.55; word-break: break-word;
    }
    .ia-msg a { color: #e6a020; }
    .ia-msg-bot {
      background: #2a1c08; color: #f5e6cc; border-radius: 14px 14px 14px 4px;
      align-self: flex-start;
    }
    .ia-msg-user {
      background: linear-gradient(135deg, #c8831a, #e6a020);
      color: #fff; border-radius: 14px 14px 4px 14px; align-self: flex-end;
    }
    .ia-typing {
      display: flex; gap: 5px; align-items: center;
      background: #2a1c08; padding: 12px 16px; border-radius: 14px 14px 14px 4px;
      align-self: flex-start; width: fit-content;
    }
    .ia-typing span {
      width: 7px; height: 7px; border-radius: 50%; background: #c8831a;
      animation: ia-bounce 1.2s infinite ease-in-out;
    }
    .ia-typing span:nth-child(2) { animation-delay: 0.2s; }
    .ia-typing span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes ia-bounce {
      0%, 80%, 100% { transform: scale(0.7); opacity: 0.5; }
      40% { transform: scale(1); opacity: 1; }
    }

    /* ── Input row ───────────────────────────────────────────────── */
    #ia-chat-input-row {
      display: flex; align-items: flex-end; gap: 8px;
      padding: 10px 12px; background: #220e00;
      border-top: 1px solid #3a2008; flex-shrink: 0;
    }
    #ia-chat-input {
      flex: 1; background: #2a1c08; border: 1px solid #5a3a10; border-radius: 10px;
      color: #f5e6cc;
      /* 16px prevents iOS Safari auto-zoom on focus */
      font-size: 16px;
      padding: 8px 12px; resize: none;
      outline: none; font-family: inherit; line-height: 1.4; max-height: 100px;
      scrollbar-width: thin;
      /* Prevent iOS elastic scroll inside textarea */
      overscroll-behavior: none;
    }
    #ia-chat-input::placeholder { color: #7a5a30; font-size: 14px; }
    #ia-chat-input:focus { border-color: #c8831a; }
    #ia-chat-send {
      flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; border: none;
      background: linear-gradient(135deg, #c8831a, #e6a020); cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: transform 0.15s, box-shadow 0.15s;
      box-shadow: 0 2px 8px rgba(200,131,26,0.4);
      touch-action: manipulation; -webkit-tap-highlight-color: transparent;
    }
    #ia-chat-send:hover { transform: scale(1.1); box-shadow: 0 4px 14px rgba(200,131,26,0.6); }
    #ia-chat-send svg { pointer-events: none; }

    /* ── Touch devices: slide-up only (no scale = no Safari zoom) ─ */
    @media (hover: none) and (pointer: coarse) {
      #ia-chat-window {
        transform: translateY(24px);
        transition: transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.22s;
      }
      #ia-chat-window.ia-open { transform: translateY(0); }
      #ia-chat-window, #ia-chat-toggle, #ia-chat-bubble { touch-action: pan-x pan-y; }
    }

    /* ── Mobile: full-width, taller, avoid home indicator ───────── */
    @media (max-width: 520px) {
      #ia-chat-window {
        right: 8px;
        width: calc(100vw - 16px);
        max-width: calc(100vw - 16px);
        border-radius: 16px;
      }
      #ia-chat-toggle { right: 16px; }
      #ia-chat-bubble { right: 12px; font-size: 12.5px; padding: 8px 13px; }
      #ia-chat-messages { max-height: min(50dvh, 300px); }
      .ia-msg { font-size: 14px; }
    }

    /* ── Safe-area insets (iPhone notch / home indicator) ───────── */
    @supports (bottom: env(safe-area-inset-bottom)) {
      #ia-chat-toggle {
        bottom: calc(20px + env(safe-area-inset-bottom));
        right:  calc(20px + env(safe-area-inset-right));
      }
      #ia-chat-window {
        bottom: calc(92px + env(safe-area-inset-bottom));
        right:  calc(20px + env(safe-area-inset-right));
      }
      #ia-chat-bubble {
        bottom: calc(90px + env(safe-area-inset-bottom));
        right:  calc(16px + env(safe-area-inset-right));
      }
    }
    @supports (bottom: env(safe-area-inset-bottom)) and (max-width: 520px) {
      #ia-chat-toggle { right: calc(12px + env(safe-area-inset-right)); }
      #ia-chat-window { right: calc(8px  + env(safe-area-inset-right)); }
    }
  `;

  // ─── DOM ─────────────────────────────────────────────────────────────────────
  function buildUI() {
    const styleEl = document.createElement('style');
    styleEl.textContent = STYLES;
    document.head.appendChild(styleEl);

    // Toggle button
    const toggle = document.createElement('button');
    toggle.id = 'ia-chat-toggle';
    toggle.setAttribute('aria-label', 'Open India Avenue chat');
    toggle.innerHTML = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
    document.body.appendChild(toggle);

    // Chat window
    const win = document.createElement('div');
    win.id = 'ia-chat-window';
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-label', 'India Avenue chat assistant');
    win.innerHTML = `
      <div id="ia-chat-header">
        <div class="ia-logo">🍛</div>
        <div class="ia-title">
          <strong>India Avenue</strong>
          <span>Ask me anything!</span>
        </div>
        <button id="ia-chat-close" aria-label="Close chat">✕</button>
      </div>
      <div id="ia-chat-messages" role="log" aria-live="polite"></div>
      <div id="ia-chat-input-row">
        <textarea id="ia-chat-input" rows="1" placeholder="Ask about hours, menu, reservations…" aria-label="Your message"></textarea>
        <button id="ia-chat-send" aria-label="Send message">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    `;
    document.body.appendChild(win);
  }

  // ─── Logic ───────────────────────────────────────────────────────────────────
  function initChat() {
    buildUI();
    const toggle  = document.getElementById('ia-chat-toggle');
    const win     = document.getElementById('ia-chat-window');
    const closeBtn= document.getElementById('ia-chat-close');
    const input   = document.getElementById('ia-chat-input');
    const send    = document.getElementById('ia-chat-send');
    const log     = document.getElementById('ia-chat-messages');
    let isOpen    = false;
    let greeted   = false;

    function dismissBubble() {
      const b = document.getElementById('ia-chat-bubble');
      if (!b) return;
      b.classList.add('ia-bubble-out');
      setTimeout(() => b && b.parentNode && b.parentNode.removeChild(b), 260);
    }

    // Touch detection: prevents Safari auto-zoom on focus
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    // iOS scroll lock: prevents page drift while chat is open
    let _lockedScrollY = 0;
    function lockBodyScroll() {
      _lockedScrollY = window.scrollY;
      document.body.style.cssText += ';position:fixed;top:-' + _lockedScrollY + 'px;width:100%;overflow-y:scroll';
    }
    function unlockBodyScroll() {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      window.scrollTo(0, _lockedScrollY);
    }

    function openChat() {
      isOpen = true;
      dismissBubble();
      win.classList.add('ia-open');
      toggle.setAttribute('aria-label', 'Close India Avenue chat');
      toggle.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
      if (!greeted) { greeted = true; addBotMsg(getResponse('hello')); }
      if (isTouch) {
        lockBodyScroll(); // no input.focus() — prevents Safari zoom
      } else {
        setTimeout(() => { try { input.focus(); } catch(e){} }, 280);
      }
    }

    function closeChat() {
      isOpen = false;
      win.classList.remove('ia-open');
      toggle.setAttribute('aria-label', 'Open India Avenue chat');
      toggle.innerHTML = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
      if (isTouch) unlockBodyScroll();
    }

    toggle.addEventListener('click', () => isOpen ? closeChat() : openChat());
    closeBtn.addEventListener('click', closeChat);

    // ── Attention bubble ─────────────────────────────────────────────
    const bubble = document.createElement('div');
    bubble.id = 'ia-chat-bubble';
    bubble.innerHTML = '💬 Have a question? Ask here!';
    bubble.setAttribute('role', 'button');
    bubble.setAttribute('aria-label', 'Open chat assistant');
    document.body.appendChild(bubble);
    bubble.addEventListener('click', () => { dismissBubble(); openChat(); });

    // Auto-dismiss bubble after 9 seconds
    const bubbleTimeout = setTimeout(() => dismissBubble(), 9000);
    bubble.addEventListener('click', () => clearTimeout(bubbleTimeout));

    // ── iOS/Safari keyboard: resize window when virtual keyboard appears ──
    if (window.visualViewport) {
      const onVVResize = () => {
        if (!isOpen) return;
        const vvH = window.visualViewport.height;
        const gap  = 16; // small gap above keyboard
        const headerH = 70, inputRowH = 64;
        const maxMsgs = Math.max(120, vvH - headerH - inputRowH - gap);
        document.getElementById('ia-chat-messages').style.maxHeight = maxMsgs + 'px';
        // Scroll messages to bottom so latest message stays visible
        log.scrollTop = log.scrollHeight;
      };
      window.visualViewport.addEventListener('resize', onVVResize);
      window.visualViewport.addEventListener('scroll', onVVResize);
    }

    function appendMsg(html, cls) {
      const div = document.createElement('div');
      div.className = `ia-msg ${cls}`;
      div.innerHTML = html;
      log.appendChild(div);
      log.scrollTop = log.scrollHeight;
      return div;
    }

    function addBotMsg(html) { appendMsg(html, 'ia-msg-bot'); }
    function addUserMsg(txt) { appendMsg(escHtml(txt), 'ia-msg-user'); }
    function escHtml(s) {
      return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }

    function sendMessage() {
      const text = input.value.trim();
      if (!text) return;
      addUserMsg(text);
      input.value = '';
      input.style.height = 'auto';

      // Typing indicator
      const typing = document.createElement('div');
      typing.className = 'ia-typing';
      typing.innerHTML = '<span></span><span></span><span></span>';
      log.appendChild(typing);
      log.scrollTop = log.scrollHeight;

      setTimeout(() => {
        typing.remove();
        const reply = getResponse(text);
        addBotMsg(reply || `I didn't quite catch that! You can ask me about our hours, menu, reservations, directions, and more. Or call us at <strong>+1 (203) 717-1567</strong> 😊`);
      }, 650 + Math.random() * 350);
    }

    send.addEventListener('click', sendMessage);
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
    });
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 100) + 'px';
    });

    // Escape key closes chat
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && isOpen) closeChat();
    });
  }

  // ─── Boot ─────────────────────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChat);
  } else {
    initChat();
  }

})();
