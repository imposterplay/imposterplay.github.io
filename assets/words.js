// Original, hand-curated prompts. Columns: word | hint | undercover word.
const packs = {
  food: { name: 'Food & drink', icon: '🍋', color: 'yellow', rows: `Pizza|A shared slice|Flatbread
Sushi|Rolled up|Dumpling
Pancake|A slow morning|Waffle
Popcorn|A dark room|Nachos
Lemonade|A summer afternoon|Iced tea
Chocolate|A little reward|Caramel
Burger|Layers|Sandwich
Ice cream|Melting fast|Frozen yogurt
Croissant|Flaky|Bagel
Spaghetti|A tangled plate|Noodles
Watermelon|A picnic|Cantaloupe
Coffee|A morning ritual|Tea
Honey|A busy maker|Maple syrup
Taco|Folded|Burrito
Soup|A warm bowl|Stew
Cheesecake|A celebration|Brownie
Avocado|A stone inside|Olive
Pretzel|A twist|Breadstick
Milkshake|A thick straw|Smoothie
Garlic|A strong impression|Onion
Mango|A tropical mess|Peach
Omelette|A folded breakfast|Scrambled eggs
Marshmallow|Around the fire|Candy floss
Mustard|A sharp yellow|Ketchup` },
  everyday: { name: 'Everyday things', icon: '🪴', color: 'green', rows: `Umbrella|Just in case|Raincoat
Pillow|A soft landing|Cushion
Toothbrush|Twice a day|Floss
Backpack|On your shoulders|Suitcase
Headphones|Your own little world|Speaker
Mirror|A familiar face|Camera
Key|A little access|Password
Sunglasses|A bright afternoon|Sunhat
Notebook|A fresh page|Diary
Candle|A small glow|Lantern
Alarm clock|An unpopular sound|Doorbell
Blanket|A cosy evening|Duvet
Scissors|Two moving parts|Knife
Wallet|Pocket-sized|Purse
Plant pot|A little home|Vase
Remote control|From the sofa|Game controller
Laundry basket|A growing collection|Shopping basket
Stapler|Keeping things together|Paper clip
Water bottle|Take a sip|Thermos
Calendar|Making plans|Planner
Elevator|Between floors|Escalator
Vacuum cleaner|A noisy helper|Broom
Postcard|A small hello|Letter
Doormat|The first welcome|Carpet` },
  places: { name: 'Out & about', icon: '🏝️', color: 'blue', rows: `Airport|A long goodbye|Train station
Beach|Something in your shoes|Desert
Library|Keep it down|Bookshop
Cinema|A very big screen|Theatre
Museum|Look but do not touch|Art gallery
Zoo|An unusual neighbourhood|Aquarium
Bakery|An early start|Cafe
Hospital|Waiting rooms|Clinic
Mountain|A long way up|Hill
Island|A watery border|Peninsula
Supermarket|A long list|Market
School|A familiar bell|University
Swimming pool|A blue rectangle|Water park
Camping site|A temporary home|Cabin
Amusement park|A dizzy day|Carnival
Restaurant|Someone else cooks|Canteen
Castle|Old walls|Palace
Garden|A little green|Park
Space station|Far from home|Satellite
Subway|Below the city|Tram
Lighthouse|A coastal guide|Watchtower
Waterfall|A loud drop|Fountain
Stadium|A shared cheer|Arena
Farm|An early morning|Orchard` },
  animals: { name: 'Wild things', icon: '🦩', color: 'pink', rows: `Penguin|Dressed for dinner|Puffin
Elephant|An excellent memory|Rhino
Giraffe|A different view|Camel
Octopus|A lot to handle|Squid
Butterfly|A big change|Moth
Owl|After dark|Eagle
Shark|Below the surface|Dolphin
Cat|On its own terms|Dog
Rabbit|A little hop|Hare
Fox|A clever visitor|Wolf
Turtle|A portable roof|Snail
Flamingo|A balancing act|Crane
Bee|A busy afternoon|Wasp
Panda|A very particular lunch|Koala
Hedgehog|An awkward hug|Porcupine
Jellyfish|Go with the flow|Starfish
Otter|Floating around|Beaver
Crocodile|A patient smile|Alligator
Parrot|Something sounds familiar|Toucan
Kangaroo|Extra luggage|Wallaby
Seahorse|A curious silhouette|Sea dragon
Chameleon|A new look|Gecko
Peacock|Making an entrance|Turkey
Squirrel|Saving for later|Chipmunk` },
  fun: { name: 'Good times', icon: '🪩', color: 'purple', rows: `Karaoke|Your time to shine|Open mic
Birthday|Another candle|Anniversary
Camping|Under the stars|Glamping
Bowling|A rolling start|Skittles
Chess|Think ahead|Checkers
Football|A team effort|Rugby
Skateboard|Four little wheels|Roller skates
Magic trick|Watch closely|Optical illusion
Picnic|A meal with a view|Barbecue
Road trip|Are we there yet|Train journey
Snowman|A temporary friend|Sandcastle
Treasure hunt|Follow the clues|Escape room
Fireworks|Look up|Light show
Yoga|Take a breath|Pilates
Disco|A shiny ceiling|Concert
Surfing|Perfect timing|Paddleboarding
Painting|A blank beginning|Drawing
Origami|A few careful folds|Paper craft
Puzzle|Piece by piece|Riddle
Hide and seek|Ready or not|Tag
Movie night|Pick something good|Game night
Roller coaster|Hold on tight|Ferris wheel
Drumming|Keep the beat|Beatboxing
Gardening|A little patience|Flower arranging` },
  tricky: { name: 'Brain teasers', icon: '🧠', color: 'orange', rows: `Déjà vu|A familiar feeling|Nostalgia
Gravity|Down to earth|Magnetism
Rumour|Pass it on|Secret
Luck|No guarantees|Chance
Silence|An unusual sound|Stillness
Time travel|A different when|Teleportation
Shadow|Always nearby|Reflection
Dream|A strange story|Daydream
Patience|Worth the wait|Perseverance
Surprise|Did not see it coming|Suspense
Invisible|Hiding in plain sight|Transparent
Paradox|Think again|Contradiction
Echo|Back at you|Reverb
Memory|A little time capsule|Imagination
Tradition|Again and again|Routine
Confidence|You have got this|Courage
Coincidence|What are the odds|Destiny
Horizon|Almost within reach|Skyline
Infinity|Keep going|Eternity
Curiosity|One more question|Wonder
Sarcasm|A different meaning|Irony
Teamwork|Better together|Cooperation
Symmetry|Both sides|Balance
Mystery|Something is missing|Enigma` }
};
export const categories = Object.entries(packs).map(([id,p])=>({id,name:p.name,icon:p.icon,color:p.color}));
export const words = Object.entries(packs).flatMap(([category,p])=>p.rows.split('\n').map((row,index)=>{
  const [word,hint,decoy] = row.split('|');
  return {id:`${category}-${index}`,category,word,hint,decoy};
}));
