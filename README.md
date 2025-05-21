## Solkalkylator Lead Capture

Ett enkelt Next.js (App router) projekt med en kalkyl där användaren kan uppskatta sina 
besparingar på elkostnader genom installation av solpaneler. 
Avslutas med ett formulär där användaren kan skicka in sina uppgifter för vidare konsultation. 

## Setup instructions 

1. Klona projektet - git clone 

2. Gå till projektmappen - cd /solar-quote-calender

3. Installera beroenden - npm install 

4. Starta utvecklingsservern - npm run dev

5. Öppna i webbläsaren -  http://localhost:3000

## Implementation Choices

1. Byggt med Next.js App router. Möjliggör skalbar projektstruktur.     

2. react-hook-form för formulär hantering. 

3. Kalkylatorns logik är separerad från UI i en hook - useCalculator().

4. Återanvändbara komponenter

5. Ett mock API med localstorage är implementerat för att spara användares uppgifter. 

6. CSS-moduler för styling. 


