'use strict';
const fs = require('fs');
const src = fs.readFileSync('/Users/zoomzoom/workspace/india-avenue-gr/js/chatbot.js', 'utf8');

// Extract from KB through end of getResponse
const kbStart = src.indexOf('const KB =');
// Find the closing brace of getResponse
const grIdx = src.indexOf('function getResponse(userText)');
const afterGR = src.slice(grIdx);
// Count braces to find end of getResponse
let depth = 0, grEnd = grIdx;
for (let i = 0; i < afterGR.length; i++) {
  if (afterGR[i] === '{') depth++;
  else if (afterGR[i] === '}') { depth--; if (depth === 0) { grEnd = grIdx + i + 1; break; } }
}
const coreSrc = src.slice(kbStart, grEnd);

// Eval returns object with all needed functions (const KB accessible within same eval scope)
const fns = eval(`(function(){
  ${coreSrc}
  return { KB, kwRegex, lev, kbVocab, fuzzyCorrect, classify, isGreeting, isThanks, getResponse };
})()`);

const { KB, classify, isGreeting, isThanks, getResponse } = fns;
function cat(q) { return classify(q); }

// ─── Test Cases ────────────────────────────────────────────────────────────
const TESTS = [
  // ── HOURS ────────────────────────────────────────────────────────────────
  { q: "What are your hours?",                             expect: "hours" },
  { q: "When do you open?",                                expect: "hours" },
  { q: "When do you close?",                               expect: "hours" },
  { q: "Are you open on Sunday?",                          expect: "hours" },
  { q: "Are you open on weekends?",                        expect: "hours" },
  { q: "What time do you open?",                           expect: "hours" },
  { q: "What time do you close?",                          expect: "hours" },
  { q: "Are you open for lunch?",                          expect: "hours" },
  { q: "Are you open for dinner?",                         expect: "hours" },
  { q: "How late are you open?",                           expect: "hours" },
  { q: "Are you open today?",                              expect: "hours" },
  { q: "What are the opening times?",                      expect: "hours" },
  { q: "What are the closing times?",                      expect: "hours" },
  { q: "Are you open Monday?",                             expect: "hours" },
  { q: "Are you open on Saturday?",                        expect: "hours" },
  { q: "What are your weekend hours?",                     expect: "hours" },
  { q: "What are your weekday hours?",                     expect: "hours" },
  { q: "Do you open for lunch on weekends?",               expect: "hours" },
  { q: "What time does lunch start?",                      expect: "hours" },
  { q: "What time does dinner start?",                     expect: "hours" },
  { q: "When is last seating?",                            expect: "hours" },
  { q: "Is there a last seating time?",                    expect: "hours" },
  { q: "Are you open tomorrow?",                           expect: "hours" },
  { q: "Are you closed on Monday?",                        expect: "hours" },
  { q: "What are your kitchen hours?",                     expect: "hours" },
  { q: "When are you open?",                               expect: "hours" },

  // ── LOCATION ─────────────────────────────────────────────────────────────
  { q: "Where are you located?",                           expect: "location" },
  { q: "What is your address?",                            expect: "location" },
  { q: "How do I get there?",                              expect: "location" },
  { q: "Where is India Avenue?",                           expect: "location" },
  { q: "Is there parking nearby?",                         expect: "location" },
  { q: "How do I get to you?",                             expect: "location" },
  { q: "I need directions",                                expect: "location" },
  { q: "Are you near the train station?",                  expect: "location" },
  { q: "How close are you to Greenwich Station?",          expect: "location" },
  { q: "Can I park there?",                                expect: "location" },
  { q: "Is there free parking?",                           expect: "location" },
  { q: "What exit off I-95?",                              expect: "location" },
  { q: "How do I get there from New York?",                expect: "location" },
  { q: "Is there a parking lot?",                          expect: "location" },
  { q: "Is there street parking?",                         expect: "location" },
  { q: "How do I navigate to you?",                        expect: "location" },
  { q: "What is the address of India Avenue?",             expect: "location" },
  { q: "Where are you on Railroad Avenue?",                expect: "location" },
  { q: "How do I find you?",                               expect: "location" },
  { q: "Are you in Greenwich CT?",                         expect: "location" },
  { q: "Public parking nearby?",                           expect: "location" },
  { q: "How do I drive there?",                            expect: "location" },
  { q: "Can I walk from Greenwich station?",               expect: "location" },
  { q: "How far is it from downtown Greenwich?",           expect: "location" },
  { q: "How do I get in touch?",                           expect: "contact" },

  // ── LUNCH ────────────────────────────────────────────────────────────────
  { q: "Do you have a lunch special?",                     expect: "lunch" },
  { q: "What are the lunch specials?",                     expect: "lunch" },
  { q: "How much is lunch?",                               expect: "lunch" },
  { q: "What's on the lunch menu?",                        expect: "lunch" },
  { q: "Is lunch available today?",                        expect: "lunch" },
  { q: "Do you serve lunch?",                              expect: "lunch" },
  { q: "What do you have for lunch?",                      expect: "lunch" },
  { q: "What's for lunch?",                                expect: "lunch" },
  { q: "Do you have a lunch deal?",                        expect: "lunch" },
  { q: "Do you have Kathi Rolls?",                         expect: "lunch" },
  { q: "How much is the vegetarian lunch?",                expect: "lunch" },
  { q: "How much is the chicken lunch?",                   expect: "lunch" },
  { q: "How much is the lamb lunch?",                      expect: "lunch" },
  { q: "Tell me about the lunch options",                  expect: "lunch" },
  { q: "Is lunch served on weekdays only?",                expect: "lunch" },
  { q: "What are the daily specials?",                     expect: "lunch" },
  { q: "Do you have a lunch buffet?",                      expect: "lunch" },
  { q: "When is lunch on today?",                          expect: "lunch" },

  // ── DINNER ───────────────────────────────────────────────────────────────
  { q: "What is on the dinner menu?",                      expect: "dinner" },
  { q: "Do you serve dinner?",                             expect: "dinner" },
  { q: "What are the dinner options?",                     expect: "dinner" },
  { q: "What is the evening menu?",                        expect: "dinner" },
  { q: "What's for dinner tonight?",                       expect: "dinner" },
  { q: "How much is dinner?",                              expect: "dinner" },
  { q: "What dinner dishes do you have?",                  expect: "dinner" },
  { q: "What do you serve for dinner?",                    expect: "dinner" },
  { q: "Is there a full dinner menu?",                     expect: "dinner" },
  { q: "Tell me about dinner",                             expect: "dinner" },
  { q: "What is the night menu like?",                     expect: "dinner" },
  { q: "Are dinner only dishes available?",                expect: "dinner" },
  { q: "What time does the evening meal start?",           expect: "dinner" },
  { q: "Dinner specials?",                                 expect: "dinner" },

  // ── MENU ─────────────────────────────────────────────────────────────────
  { q: "Can I see your menu?",                             expect: "menu" },
  { q: "What kind of food do you serve?",                  expect: "menu" },
  { q: "What cuisine is this?",                            expect: "menu" },
  { q: "Do you have Tikka Masala?",                        expect: "menu" },
  { q: "Do you have Butter Chicken?",                      expect: "menu" },
  { q: "Do you have Biryani?",                             expect: "menu" },
  { q: "Do you have Naan?",                                expect: "menu" },
  { q: "What are your most popular dishes?",               expect: "menu" },
  { q: "What should I order?",                             expect: "menu" },
  { q: "What are the house favorites?",                    expect: "menu" },
  { q: "Do you serve North Indian food?",                  expect: "menu" },
  { q: "Do you serve South Indian food?",                  expect: "menu" },
  { q: "What starters do you have?",                       expect: "menu" },
  { q: "Do you have desserts?",                            expect: "menu" },
  { q: "What desserts do you have?",                       expect: "menu" },
  { q: "Do you have Gulab Jamun?",                         expect: "menu" },
  { q: "What breads do you have?",                         expect: "menu" },
  { q: "Do you have Garlic Naan?",                         expect: "menu" },
  { q: "Is the food authentic?",                           expect: "menu" },
  { q: "Do you have Indo-Chinese food?",                   expect: "menu" },
  { q: "What appetizers are there?",                       expect: "menu" },
  { q: "What soups do you have?",                          expect: "menu" },
  { q: "What curries do you serve?",                       expect: "menu" },

  // ── RESERVATIONS ─────────────────────────────────────────────────────────
  { q: "Can I make a reservation?",                        expect: "reservations" },
  { q: "Do I need a reservation?",                         expect: "reservations" },
  { q: "How do I reserve a table?",                        expect: "reservations" },
  { q: "Can I book a table?",                              expect: "reservations" },
  { q: "Do you take walk-ins?",                            expect: "reservations" },
  { q: "Can I just show up?",                              expect: "reservations" },
  { q: "Do you take bookings?",                            expect: "reservations" },
  { q: "How do I book a table?",                           expect: "reservations" },
  { q: "Can I come without a reservation?",                expect: "reservations" },
  { q: "How long is the wait?",                            expect: "reservations" },
  { q: "Will there be a wait?",                            expect: "reservations" },
  { q: "Is it busy tonight?",                              expect: "reservations" },
  { q: "Can I book for a large group?",                    expect: "reservations" },
  { q: "How do I make a reservation?",                     expect: "reservations" },
  { q: "Do you have table availability?",                  expect: "reservations" },
  { q: "Table for 4 tonight",                              expect: "reservations" },
  { q: "Table for two please",                             expect: "reservations" },
  { q: "Do you have seating available?",                   expect: "reservations" },
  { q: "Can I just turn up?",                              expect: "reservations" },
  { q: "How to reserve a table?",                          expect: "reservations" },

  // ── ORDERING ─────────────────────────────────────────────────────────────
  { q: "Can I order online?",                              expect: "ordering" },
  { q: "Do you have online ordering?",                     expect: "ordering" },
  { q: "How do I order online?",                           expect: "ordering" },
  { q: "Do you do takeout?",                               expect: "ordering" },
  { q: "Can I pick up my order?",                          expect: "ordering" },
  { q: "Do you deliver?",                                  expect: "ordering" },
  { q: "Is there delivery?",                               expect: "ordering" },
  { q: "Can I get delivery?",                              expect: "ordering" },
  { q: "Do you have takeaway?",                            expect: "ordering" },
  { q: "How do I place an order?",                         expect: "ordering" },
  { q: "Can I order ahead?",                               expect: "ordering" },
  { q: "Do you use Toast for online orders?",              expect: "ordering" },
  { q: "Are you on DoorDash?",                             expect: "ordering" },
  { q: "Are you on GrubHub?",                              expect: "ordering" },
  { q: "Can I do carry out?",                              expect: "ordering" },
  { q: "Can I order for collection?",                      expect: "ordering" },
  { q: "Can I order food to go?",                          expect: "ordering" },

  // ── VEGETARIAN ────────────────────────────────────────────────────────────
  { q: "Do you have vegetarian options?",                  expect: "vegetarian" },
  { q: "Are there vegan options?",                         expect: "vegetarian" },
  { q: "I am vegetarian, what can I eat?",                 expect: "vegetarian" },
  { q: "Is there a vegetarian menu?",                      expect: "vegetarian" },
  { q: "Do you have good veggie dishes?",                  expect: "vegetarian" },
  { q: "Can vegans eat here?",                             expect: "vegetarian" },
  { q: "Is the food suitable for vegetarians?",            expect: "vegetarian" },
  { q: "How many vegetarian dishes do you have?",          expect: "vegetarian" },
  { q: "Do you have Saag Paneer?",                         expect: "vegetarian" },
  { q: "Do you have Chana Masala?",                        expect: "vegetarian" },
  { q: "Do you have Malai Kofta?",                         expect: "vegetarian" },
  { q: "What vegan options do you have?",                  expect: "vegetarian" },
  { q: "Are there plant-based dishes?",                    expect: "vegetarian" },
  { q: "Good for vegetarians?",                            expect: "vegetarian" },
  { q: "What are your veg options?",                       expect: "vegetarian" },
  { q: "Any veg options?",                                 expect: "vegetarian" },
  { q: "I don't eat meat, what can I have?",               expect: "vegetarian" },
  { q: "Are you vegetarian friendly?",                     expect: "vegetarian" },

  // ── SPICE ─────────────────────────────────────────────────────────────────
  { q: "How spicy is the food?",                           expect: "spice" },
  { q: "Is the food spicy?",                               expect: "spice" },
  { q: "Can I get it mild?",                               expect: "spice" },
  { q: "Can I choose my spice level?",                     expect: "spice" },
  { q: "Can you make it less spicy?",                      expect: "spice" },
  { q: "I like it very spicy",                             expect: "spice" },
  { q: "What spice levels do you offer?",                  expect: "spice" },
  { q: "Can you adjust the spice?",                        expect: "spice" },
  { q: "Is Vindaloo very spicy?",                          expect: "spice" },
  { q: "Make it extra spicy please",                       expect: "spice" },
  { q: "Can I get no spice?",                              expect: "spice" },
  { q: "What heat levels do you have?",                    expect: "spice" },
  { q: "Can you tone down the heat?",                      expect: "spice" },
  { q: "I like mild food",                                 expect: "spice" },
  { q: "Can you reduce the spice?",                        expect: "spice" },

  // ── DIETARY ──────────────────────────────────────────────────────────────
  { q: "Do you have gluten free options?",                 expect: "dietary" },
  { q: "Is there anything gluten free?",                   expect: "dietary" },
  { q: "I have a nut allergy",                             expect: "dietary" },
  { q: "Can you cater for allergies?",                     expect: "dietary" },
  { q: "I am celiac, is it safe?",                         expect: "dietary" },
  { q: "I have dietary restrictions",                      expect: "dietary" },
  { q: "Is the food halal?",                               expect: "dietary" },
  { q: "Can you accommodate my allergy?",                  expect: "dietary" },
  { q: "Do you have allergen information?",                expect: "dietary" },
  { q: "I am lactose intolerant",                          expect: "dietary" },
  { q: "What is gluten free on the menu?",                 expect: "dietary" },
  { q: "I am allergic to shellfish",                       expect: "dietary" },
  { q: "I have a peanut allergy",                          expect: "dietary" },
  { q: "Is there wheat free food?",                        expect: "dietary" },

  // ── CATERING ─────────────────────────────────────────────────────────────
  { q: "Do you do catering?",                              expect: "catering" },
  { q: "Can you cater my event?",                          expect: "catering" },
  { q: "Do you cater for corporate events?",               expect: "catering" },
  { q: "Can you cater a birthday party?",                  expect: "catering" },
  { q: "Do you do private dining?",                        expect: "catering" },
  { q: "Do you offer catering?",                           expect: "catering" },
  { q: "How much does catering cost?",                     expect: "catering" },
  { q: "Can I book a private event?",                      expect: "catering" },
  { q: "We're having a wedding, can you cater?",           expect: "catering" },
  { q: "Can you do office lunch catering?",                expect: "catering" },
  { q: "Do you cater for large groups?",                   expect: "catering" },
  { q: "Can I hire the restaurant for a private party?",   expect: "catering" },
  { q: "Do you host events?",                              expect: "catering" },
  { q: "Food for a corporate party?",                      expect: "catering" },

  // ── DRINKS ───────────────────────────────────────────────────────────────
  { q: "What drinks do you have?",                         expect: "drinks" },
  { q: "Do you have a bar?",                               expect: "drinks" },
  { q: "Do you serve alcohol?",                            expect: "drinks" },
  { q: "What beer do you have?",                           expect: "drinks" },
  { q: "What wine do you have?",                           expect: "drinks" },
  { q: "What cocktails do you serve?",                     expect: "drinks" },
  { q: "Do you have Kingfisher beer?",                     expect: "drinks" },
  { q: "Do you have Mango Lassi?",                         expect: "drinks" },
  { q: "Can I bring my own wine?",                         expect: "drinks" },
  { q: "What is the corkage fee?",                         expect: "drinks" },
  { q: "Do you have non-alcoholic drinks?",                expect: "drinks" },
  { q: "What is on the drinks menu?",                      expect: "drinks" },
  { q: "Do you have chai?",                                expect: "drinks" },
  { q: "What soft drinks do you have?",                    expect: "drinks" },
  { q: "Do you have Taj Mahal beer?",                      expect: "drinks" },
  { q: "What cocktails are on the menu?",                  expect: "drinks" },
  { q: "Is there a wine list?",                            expect: "drinks" },
  { q: "Can I bring my own bottle?",                       expect: "drinks" },

  // ── KIDS ─────────────────────────────────────────────────────────────────
  { q: "Do you have a kids menu?",                         expect: "kids" },
  { q: "Is it family friendly?",                           expect: "kids" },
  { q: "Can I bring my kids?",                             expect: "kids" },
  { q: "What do you have for children?",                   expect: "kids" },
  { q: "Is it good for families?",                         expect: "kids" },
  { q: "Do you have kids food?",                           expect: "kids" },
  { q: "What can my child eat?",                           expect: "kids" },
  { q: "Do you have chicken nuggets?",                     expect: "kids" },
  { q: "Are children allowed?",                            expect: "kids" },
  { q: "Is the restaurant child friendly?",                expect: "kids" },
  { q: "What kids options are there?",                     expect: "kids" },
  { q: "We're bringing toddlers",                          expect: "kids" },
  { q: "Is it suitable for children?",                     expect: "kids" },

  // ── ABOUT ─────────────────────────────────────────────────────────────────
  { q: "Tell me about India Avenue",                       expect: "about" },
  { q: "What is India Avenue?",                            expect: "about" },
  { q: "What's the restaurant like?",                      expect: "about" },
  { q: "What makes you special?",                          expect: "about" },
  { q: "What is unique about you?",                        expect: "about" },
  { q: "What is your rating?",                             expect: "about" },
  { q: "What are your reviews like?",                      expect: "about" },
  { q: "What is the atmosphere like?",                     expect: "about" },
  { q: "Is there an open kitchen?",                        expect: "about" },
  { q: "Can I see the kitchen?",                           expect: "about" },
  { q: "What is the glass tandoor kitchen?",               expect: "about" },
  { q: "What is the decor like?",                          expect: "about" },
  { q: "Are you the best Indian restaurant in Greenwich?", expect: "about" },
  { q: "How is India Avenue rated?",                       expect: "about" },
  { q: "Are you on TripAdvisor?",                          expect: "about" },
  { q: "What is your Google rating?",                      expect: "about" },
  { q: "Tell me about the chefs",                          expect: "about" },
  { q: "Is the food traditional?",                         expect: "about" },
  { q: "Is it a fine dining restaurant?",                  expect: "about" },

  // ── CONTACT ───────────────────────────────────────────────────────────────
  { q: "How do I contact you?",                            expect: "contact" },
  { q: "What is your phone number?",                       expect: "contact" },
  { q: "Can I call you?",                                  expect: "contact" },
  { q: "How do I reach you?",                              expect: "contact" },
  { q: "What is your email?",                              expect: "contact" },
  { q: "Do you have Instagram?",                           expect: "contact" },
  { q: "How do I speak to someone?",                       expect: "contact" },
  { q: "Can I talk to a human?",                           expect: "contact" },
  { q: "What is the contact information?",                 expect: "contact" },
  { q: "How to reach India Avenue?",                       expect: "contact" },
  { q: "Can I speak to a real person?",                    expect: "contact" },
  { q: "What is your telephone number?",                   expect: "contact" },
  { q: "Do you have social media?",                        expect: "contact" },
  { q: "Where can I follow you?",                          expect: "contact" },

  // ── FUZZY TYPO TESTS ──────────────────────────────────────────────────────
  { q: "Wdgere are you located?",                          expect: "location" },
  { q: "Waht are your hourse?",                            expect: "hours" },
  { q: "Do you have vegiterian options?",                  expect: "vegetarian" },
  { q: "Do you take reservashions?",                       expect: "reservations" },
  { q: "I want to order onlien",                           expect: "ordering" },
  { q: "Can you cater a birhday party?",                   expect: "catering" },
  { q: "Do you have chikken nuggets?",                     expect: "kids" },
  { q: "Whats on the dinnre menu?",                        expect: "dinner" },
  { q: "How spicey is the food?",                          expect: "spice" },
  { q: "Where is you're resturant?",                       expect: "location" },

  // ── GREETINGS ─────────────────────────────────────────────────────────────
  { q: "Hi",                                               expect: "greeting" },
  { q: "Hello",                                            expect: "greeting" },
  { q: "Hey there",                                        expect: "greeting" },
  { q: "Namaste",                                          expect: "greeting" },
  { q: "Good morning",                                     expect: "greeting" },

  // ── THANKS ────────────────────────────────────────────────────────────────
  { q: "Thanks",                                           expect: "thanks" },
  { q: "Thank you so much",                                expect: "thanks" },
  { q: "Perfect, thanks!",                                 expect: "thanks" },
  { q: "That's very helpful",                              expect: "thanks" },
  { q: "Brilliant, cheers",                                expect: "thanks" },
];

// ─── Runner ────────────────────────────────────────────────────────────────
let pass = 0, fail = 0;
const failures = [];

for (const t of TESTS) {
  let result;
  if (t.expect === 'greeting') {
    result = isGreeting(t.q) ? 'greeting' : (cat(t.q) || 'null');
  } else if (t.expect === 'thanks') {
    result = isThanks(t.q) ? 'thanks' : (cat(t.q) || 'null');
  } else {
    result = cat(t.q);
  }

  if (result === t.expect) {
    pass++;
  } else {
    fail++;
    failures.push({ q: t.q, expect: t.expect, got: result });
  }
}

console.log(`\n========================================`);
console.log(`India Avenue Chatbot — Test Results`);
console.log(`========================================`);
console.log(`✅ Passed: ${pass}`);
console.log(`❌ Failed: ${fail}`);
console.log(`Total:     ${pass + fail}`);
if (failures.length > 0) {
  console.log(`\n─── Failures ───────────────────────────`);
  for (const f of failures) {
    console.log(`  Q: "${f.q}"`);
    console.log(`     Expected: ${f.expect} | Got: ${f.got}`);
  }
}
console.log(`========================================\n`);
