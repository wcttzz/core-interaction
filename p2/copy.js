

let collectedItemsCount = 0;
const collectedItems = new Set();
document.addEventListener('DOMContentLoaded', function() {
    const items = [
        { name: "Sammy (The Student Card)", description: "The key to unlocking knowledge, always ready with a bright smile and a wink to open new doors for learning adventures.", imageUrl: "../images/c1.png", backgroundColor: "#D3E6F4" },
        { name: "Lippie (The Lip Protectant)", description: "A guardian of smiles, she envelopes lips in a comforting shield, whispering secrets of hydration with a soft, radiant smile.", imageUrl: "../images/c2.png", backgroundColor: "#FBD4DB"  },
        { name: "Archie (The AirPods)", description: "With a sleek design and a knack for tunes, he dances through life, syncing rhythm and comfort with every beat.", imageUrl: "../images/c3.png",backgroundColor: "#D3E6F4"  },
        { name: "Peptii (The Peptide Lip Treatment)", description: "She rejuvenates and plumps, casting a spell of softness and vitality over every smile she touches.", imageUrl: "../images/c4.png",backgroundColor:"#D3E6F4"  },
        { name: "Clorette (The Cuticle Oil)", description: "A nurturing whisper for fingertips, she glides on with a promise of strength and shine, nurturing nails with her gentle touch.", imageUrl: "../images/c5.png",backgroundColor:"#D3E6F4" },
        { name: "WallyWoo (The Wet Wipes)", description: "The swift cleaner-upper, he's always at the ready to tackle messes with a refreshing zest and a can-do attitude.", imageUrl: "../images/c6.png",backgroundColor:"#D3E6F4" },
        { name: "Paisley (The Pads)", description: "Gentle and reliable, she offers comfort and protection on the days you need it most, with a whisper of care and a soft embrace.", imageUrl: "../images/c7.png",backgroundColor:"#FBD4DB" },
        { name: "Booboo (The Bandaid)", description: "The little hero of healing, always on standby to patch up scrapes with a comforting smile and a promise of care.", imageUrl: "../images/c8.png",backgroundColor:"#D3E6F4" },
        { name: "Ayee (The Eyedrops)", description: "The guardian of gleaming gazes, offering a splash of refreshment and the gift of clear vision with every soothing drop.", imageUrl: "../images/c9.png",backgroundColor:"#D3E6F4" },
        { name: "Lollilol (The Lollipop)", description: "A swirl of sweetness on a stick, she dances on taste buds with a burst of joy and a colorful, sugary smile.", imageUrl: "../images/c10.png",backgroundColor:"#FFF2C4" },
        { name: "Ollie (The Ointment)", description: "The robust restorer, charging into battle against discomfort with a powerful shield of healing, ready to mend and fortify with relentless vigor.", imageUrl: "../images/c11.png",backgroundColor:"#D3E6F4" },
        { name: "Baxter (The Lip Balm):", description: "The protector of smiles, locking in moisture with a cool, refreshing swipe and a hint of invincible cheer.", imageUrl: "../images/c12.png",backgroundColor:"#D3E6F4" },
        { name: "Fioner (The Nail Filer)", description: "The shaper of dreams, smoothing edges and crafting perfection with precision and a dash of flair.", imageUrl: "../images/c13.png",backgroundColor:"#D3E6F4" },
        { name: "Colada (The Cotton Swabs)", description: "The detailer extraordinaire, diving into tight spaces with the finesse of a master, leaving behind only cleanliness and clarity.", imageUrl: "../images/c14.png",backgroundColor:"#D3E6F4" },
        { name: "Benedict (The Bone Filer)", description: "The sculptor of precision, smoothing and shaping with expertise, ensuring every detail is perfected with a steady, assured touch.", imageUrl: "../images/c15.png",backgroundColor:"#D3E6F4" },
        { name: "Hazelighter (The Highlighters)", description: "The illuminator of ideas, casting a glow on key insights with her vibrant hues and a flicker of brilliance.", imageUrl: "../images/c16.png",backgroundColor:"#FFF2C4" },
        { name: "FiniLini (The Fine Liner)", description: "The precision storyteller, drawing the finest lines with unwavering accuracy and a touch of artistic flair.", imageUrl: "../images/c17.png",backgroundColor:"#D3E6F4" },
        { name: "Ernie Earnest (The Eraser)", description: "The mistake magician, vanishing errors with a rub and a smile, leaving behind a clean slate for new beginnings.", imageUrl: "../images/c18.png",backgroundColor:"#FBD4DB" },
        { name: "Percy Almost Jackson (The Mechanical Pencil)", description: "The reliable creator, always ready to sketch dreams into reality with a click and a whisper of graphite.", imageUrl: "../images/c19.png",backgroundColor:"#D3E6F4" },
        { name: "Peter and Piper (The Erasers)", description: "The one-legged detail dynamo siblings are inseparable, they work together to expertly navigate and eliminate the smallest of mistakes with pinpoint accuracy.", imageUrl: "../images/c20.png",backgroundColor:"FBD4DB" },
        { name: "Mellowmarsh (The Pocket Mirror)", description: "The little lookout, offering a quick peek and honest reflections, snug in your pocket for those just-in-case moments with a glint of clarity.", imageUrl: "../images/c21.png",backgroundColor:"#B9B9D5" },
        { name: "Claratata (The Claw Clip)", description: "The stylish keeper of locks, gracefully securing hair with a snap and a firm hold, ready to transform any look with a touch of elegance.", imageUrl: "../images/c22.png",backgroundColor:"#FBD4DB" },
        { name: "Megatron (The Metro Card)", description: "The little devil navigator, unlocking the city's rhythm with a swipe and a beep, keeping pace with the heartbeat of the streets.", imageUrl: "../images/c23.png",backgroundColor:"#B9B9D5" },
        { name: "Randmii (The Random Cards)", description: "The wildcard of the deck, always surprising with unexpected uses and quirky encounters, turning the ordinary into adventures with a flick of unpredictability.", imageUrl: "../images/c24.png",backgroundColor:"#FBD4DB" },
        { name: "Debter (The Debit Card)", description: "The sleek spender, sliding through transactions with a swift and secure touch, making every purchase a breeze.", imageUrl: "../images/c25.png",backgroundColor:"#FBD4DB" },
        { name: "Reggie (The Receipts)", description: "The keeper of transactions, tallying up life's little purchases with a whisper of paper and a trace of ink, holding memories of moments spent.", imageUrl: "../images/c26.png",backgroundColor:"#D3E6F4" },
        { name: "Maximist (The Movie Tickets)", description: "The ticket to tales untold, beckoning with the allure of popcorn-scented adventures and the flicker of stories yet to unfold under the silver screen.", imageUrl: "../images/c27.png",backgroundColor:"#B9B9D5" },
        { name: "Driveria (The Driver's License)", description: "The emblem of freedom, granting the keys to explore the open road with a photo that never does justice and a oneway to adventure in your wallet.", imageUrl: "../images/c28.png",backgroundColor:"#D3E6F4" },
        { name: "Colleta (The Spare Change)", description: "The jingling storyteller of pockets, each flip a tale of chance and exchange, a small metal guardian of buying power and wishes in fountains.", imageUrl: "../images/c29.png",backgroundColor:"#D3E6F4" },
        { name: "Debra (The Card Deck)", description: "The versatile entertainer, shuffling through games and magic with a flick of the wrist, weaving tales of chance, skill, and perhaps a little playful competition.", imageUrl: "../images/c30.png",backgroundColor:"#D3E6F4" },
        { name: "Silvatoire (The Sticky Notes)", description: "The colorful reminders of fleeting thoughts, sticking to surfaces with gentle determination, whispering messages of tasks and inspirations.", imageUrl: "../images/c31.png",backgroundColor:"#D3E6F4" },
        { name: "Jumbob (The Jumbo Card Deck)", description: "Brother of Debra, the grand storyteller of oversized tales, dealing out fun in large doses with every giant shuffle and playful hand, making every game a big adventure.", imageUrl: "../images/c32.png",backgroundColor:"#D3E6F4" },
        { name: "Pickle (The Passport)", description: "The well-traveled booklet, chronicling escapades and encounters across continents, a silent witness to the wanderlust etched in its pages.", imageUrl: "../images/c33.png",backgroundColor:"#D3E6F4" },
        { name: "Sparklie (The Hourglass)", description: "The timeless guardian of moments, gracefully marking the passage of time with a cascade of bubbles, a symbol of fleeting beauty in stillness and flow.", imageUrl: "../images/c34.png",backgroundColor:"#FFF2C4" },
        { name: "Hancrea (The Hand Cream)", description: "The tired guardian of diligent hands, quietly battling the day's toll with a soothing touch, whispering tales of restoration in the moon's soft glow.", imageUrl: "../images/c35.png",backgroundColor:"#FBD4DB" },
        { name: "Hannibal (The Horror Book)", description: "Where shadows linger on each page, and whispers trail your fingertips, a tome that beckons with the thrill of the unknown and the chill of the night's embrace.", imageUrl: "../images/c36.png",backgroundColor:"#D3E6F4" },
        { name: "Whimy (The Weekly Planner)", description: "A vibrant orchestrator of days, splashing color across the week with spirited reminders and lively doodles, dancing through appointments and adventures with a spark of joy.", imageUrl: "../images/c37.png",backgroundColor:"#FBD4DB" },
        { name: "Rizzer (The Bag of Rice)", description: "A quiet companion in solitude, its grains a soft murmur of comfort in the bowl of the lonely, offering solace with each spoonful, a reminder of shared meals missed.", imageUrl: "../images/c38.png",backgroundColor:"#B9B9D5" },
        { name: "Totorol (The Toilet Paper)", description: "The unsung hero of daily routines, rolling out a path of cleanliness with a soft touch and a whisper of practicality, ever ready for life's call.", imageUrl: "../images/c39.png",backgroundColor:"#B9B9D5" },
        { name: "Caroline (The Controller)", description: "The conduit of virtual adventures, resting in palms with buttons and joysticks that leap to life, bridging worlds with every press and pivot.", imageUrl: "../images/c40.png",backgroundColor:"#FBD4DB" },
    ];      

    document.querySelector('.button').addEventListener('click', function() {
     
        const image = document.querySelector('.image');
        image.classList.add('shake');

        document.getElementById('itemDisplay').style.display = 'none';
    

        setTimeout(() => {
            image.classList.remove('shake');

            
            const selectedItemIndex = Math.floor(Math.random() * items.length);
            const selectedItem = items[selectedItemIndex];
        
            // Check if the item has not been collected before
            if (!collectedItems.has(selectedItemIndex)) {
                collectedItems.add(selectedItemIndex);
                collectedItemsCount++;
                document.getElementById('collectionCounter').innerText = `${collectedItemsCount}/40`;
                
                // Save to localStorage for persistence
                localStorage.setItem('collectedItems', JSON.stringify(Array.from(collectedItems)));
                localStorage.setItem('collectedItemsCount', collectedItemsCount.toString());
            }
    
            document.getElementById('itemImage').src = selectedItem.imageUrl;
            document.getElementById('itemName').textContent = selectedItem.name;
            document.getElementById('itemDescription').textContent = selectedItem.description;
            document.getElementById('itemDisplay').style.backgroundColor = selectedItem.backgroundColor;
    
            // Make itemDisplay visible again and update its contents
            document.getElementById('itemDisplay').style.display = 'block';
            const itemDisplayRect = document.getElementById('itemDisplay').getBoundingClientRect();
    
            // Then, add stars around it
            createStars(itemDisplayRect);
    
            document.getElementById('itemDisplay').classList.add('fade-in');
            setTimeout(() => {
                document.getElementById('itemDisplay').classList.remove('fade-in');
            }, 500); // Ensure this matches the duration of the fade-in animation
        }, 820); // This waits for the shake animation to complete
    });
    function createStars(rect) {
        const colors = ['#FBD4DB', '#D3E6F4', '#BCE2D5', '#B9B9D5', '#F9E398'];
    
        for (let i = 0; i < 100; i++) { // Creating 100 stars for a dramatic effect
            const star = document.createElement('div');
            star.className = 'star';
            document.body.appendChild(star);
    
            const colorIndex = Math.floor(Math.random() * colors.length);
            star.style.backgroundColor = colors[colorIndex];
    
            // Setting initial position to the center of the itemDisplay box
            const initialLeft = rect.left + rect.width / 2 - 5; // Center horizontally
            const initialTop = rect.top + rect.height / 2 - 5; // Center vertically
    
            star.style.left = `${initialLeft}px`;
            star.style.top = `${initialTop}px`;
    
            // Decrease the range for xEnd and yEnd for a more confined spread
            const xEnd = (Math.random() - 0.5) * (window.innerWidth); // Adjusted range
            const yEnd = (Math.random() - 0.5) * (window.innerHeight); // Adjusted range
    
            const duration = Math.random() * 1000 + 500; // Duration between 0.5 to 1.5 seconds
    
            star.animate([
                { transform: 'translate(0, 0)', opacity: 1 },
                { transform: `translate(${xEnd}px, ${yEnd}px)`, opacity: 0 }
            ], {
                duration: duration,
                easing: 'ease-out',
                fill: 'forwards'
            }).onfinish = () => star.remove();
        }
    }    
    document.querySelector('.button').addEventListener('mouseenter', function(e) {
        const button = e.target;
        const buttonRect = button.getBoundingClientRect();
    
        const intervalId = setInterval(() => {
            for (let i = 0; i < 5; i++) {
                const dollarBill = document.createElement('img');
                dollarBill.className = 'dollar-bill';
                dollarBill.src = '../images/money.png'; // Update the path to your dollar bill image
                document.body.appendChild(dollarBill);
    
                // Position the dollar bill over the button
                dollarBill.style.left = `${buttonRect.left + buttonRect.width / 2 - dollarBill.offsetWidth / 2}px`;
                dollarBill.style.top = `${buttonRect.top + buttonRect.height / 2 - dollarBill.offsetHeight / 2}px`;
    
                // Generate wider random trajectory for the dollar bills
                const xEnd = (Math.random() * 400 - 200); 
                const yEnd = (Math.random() * 400 - 200);
                const duration = Math.random() * 1000 + 500;
    
                dollarBill.animate([
                    { transform: 'translate(0, 0)', opacity: 1 },
                    { transform: `translate(${xEnd}px, ${yEnd}px)`, opacity: 0 }
                ], {
                    duration: duration,
                    easing: 'ease-out',
                    fill: 'forwards'
                }).onfinish = () => dollarBill.remove();
            }
        }, 100);
    
        button.addEventListener('mouseleave', () => {
            clearInterval(intervalId);
        }, { once: true });
    });
    
    
    
      });


const items = [
    { 
        id: 1, 
        title: "Sammy", 
        image: "../images/c1.png", 
        category: "common", 
        bgColor: "#D3E6F4", 
        description:"The key to unlocking knowledge, always ready with a bright smile and a wink to open new doors for learning adventures.",
        caption:"(The Student Card)"
     },

    { 
        id: 2, 
        title: "Lippie", 
        image: "../images/c2.png", 
        category: "rare", 
        bgColor: "#FBD4DB", 
        description: "A guardian of smiles, she envelopes lips in a comforting shield, whispering secrets of hydration with a soft, radiant smile.", 
        caption: "(The Lip Protectant)"
    },

    { 
        id: 3, 
        title: "Archie", 
        image: "../images/c3.png", 
        category: "common", 
        bgColor: "#D3E6F4",
        description: "With a sleek design and a knack for tunes, he dances through life, syncing rhythm and comfort with every beat.",
        caption:"(The AirPods)",
    },

    { 
        id: 4, 
        title: "Peptii", 
        image: "../images/c4.png", 
        category: "common", 
        bgColor: "#D3E6F4",
        description: "She rejuvenates and plumps, casting a spell of softness and vitality over every smile she touches.",
        caption:"(The Peptide Lip Treatment)",

    },

    { 
        id: 5, 
        title: "Clorette", 
        category: "common", 
        image: "../images/c5.png",
        bgColor:"#D3E6F4",
        description: "A nurturing whisper for fingertips, she glides on with a promise of strength and shine, nurturing nails with her gentle touch.",
        caption:"(The Cuticle Oil)", 
    },

    { 
        id: 6, 
        title: "WallyWoo",  
        category: "common",
        image: "../images/c6.png",
        bgColor:"#D3E6F4",
        description: "The swift cleaner-upper, he's always at the ready to tackle messes with a refreshing zest and a can-do attitude.",
        caption:"(The Wet Wipes)",
     },

    { 
        id: 7, 
        title: "Paisley",
         category: "rare",
         image: "../images/c7.png",
         bgColor:"#FBD4DB",
         description: "Gentle and reliable, she offers comfort and protection on the days you need it most, with a whisper of care and a soft embrace.",
         caption:"(The Pads)",
         },
         
    { 
        id: 8,
        title: "Booboo",  
        category: "common", 
        image: "../images/c8.png",
        bgColor:"#D3E6F4",
        description: "The little hero of healing, always on standby to patch up scrapes with a comforting smile and a promise of care.",
        caption:"(The Bandaid)",
     },

    { 
        id: 9, 
        title: "Ayee", 
        category: "common", 
        image: "../images/c9.png",
        bgColor:"#D3E6F4",
        description: "The guardian of gleaming gazes, offering a splash of refreshment and the gift of clear vision with every soothing drop.",
        caption:"(The Eyedrops)",
     },

    { 
        id: 10, 
        title: "Lollilol",  
        category: "legendary",
        image: "../images/c10.png",
        bgColor:"#FFF2C4",
        description: "A swirl of sweetness on a stick, she dances on taste buds with a burst of joy and a colorful, sugary smile.",
        caption:"(The Lollipop)",
     },

    { 
        id: 11, 
        title: "Ollie",  
        category: "common",
        image: "../images/c11.png",
        bgColor:"#D3E6F4",
        description: "The robust restorer, charging into battle against discomfort with a powerful shield of healing, ready to mend and fortify with relentless vigor.",
        caption:"(The Ointment)",
     },

    { 
        id: 12, 
        title: "Baxter:",  
        category: "common",
        image: "../images/c12.png",
        bgColor:"#D3E6F4",
        description: "The protector of smiles, locking in moisture with a cool, refreshing swipe and a hint of invincible cheer.",
        caption:"(The Lip Balm)",
     },

    { 
        id: 13, 
        title: "Fioner", 
        category: "common",
        image: "../images/c13.png",
        bgColor:"#D3E6F4",
        description: "The shaper of dreams, smoothing edges and crafting perfection with precision and a dash of flair.",
        caption:"(The Nail Filer)",
    },

    { 
        id: 14, 
        title: "Colada",  
        category: "common",
        image: "../images/c14.png",
        bgColor:"#D3E6F4",
        description: "The detailer extraordinaire, diving into tight spaces with the finesse of a master, leaving behind only cleanliness and clarity.",
        caption:"(The Cotton Swabs)",
     },

    { 
        id: 15, 
        title: "Benedict",  
        category: "common",
        image: "../images/c15.png",
        bgColor:"#D3E6F4",
        description: "The sculptor of precision, smoothing and shaping with expertise, ensuring every detail is perfected with a steady, assured touch.",
        caption:" (The Bone Filer)",
     },

    { 
        id: 16, 
        title: "Hazelighter", 
        category: "legendary",
        image: "../images/c16.png",
        bgColor:"#FFF2C4",
        description: "The illuminator of ideas, casting a glow on key insights with her vibrant hues and a flicker of brilliance.",
        caption:"(The Highlighters)",
     },

    { 
        id: 17,
        title: "FiniLini",  
        category: "common",
        image: "../images/c17.png",
        bgColor:"#D3E6F4",
        description: "The precision storyteller, drawing the finest lines with unwavering accuracy and a touch of artistic flair.",
        caption:"(The Fine Liner)",
     },

    { 
        id: 18, 
        title: "Ernie Earnest",  
        category: "rare",
        image: "../images/c18.png",
        bgColor:"#FBD4DB",
        description: "The mistake magician, vanishing errors with a rub and a smile, leaving behind a clean slate for new beginnings.",
        caption:"(The Eraser)",
     },

    { 
        id: 19, 
        title: "Percy Almost Jackson",  
        category: "common",
        image: "../images/c19.png",
        bgColor:"#D3E6F4",
        description: "The reliable creator, always ready to sketch dreams into reality with a click and a whisper of graphite.",
        caption:"(The Mechanical Pencil)",
     },

    { 
        id: 20, 
        title: "Peter and Piper",  
        category: "rare",
        image: "../images/c20.png", 
        bgColor: "#FBD4DB",
        description: "The one-legged detail dynamo siblings are inseparable, they work together to expertly navigate and eliminate the smallest of mistakes with pinpoint accuracy and a graceful swipe.",
        caption:"(The Precision Erasers)",
    },

    { 
        id: 21, 
        title: "Mellowmarsh", 
        category: "epic",
        image: "../images/c21.png",
        bgColor:"#B9B9D5",
        description: "The little lookout, offering a quick peek and honest reflections, snug in your pocket for those just-in-case moments with a glint of clarity.",
        caption:"(The Pocket Mirror)",
         },
         
    { 
        id: 22, 
        title: "Claratata",  
        category: "rare",
        image: "../images/c22.png",
        bgColor:"#FBD4DB",
        description: "The stylish keeper of locks, gracefully securing hair with a snap and a firm hold, ready to transform any look with a touch of elegance.",
        caption:"(The Claw Clip)",
     },

    { 
        id: 23, 
        title: "Megatron",  
        category: "epic",
        image: "../images/c23.png",
        bgColor:"#B9B9D5",
        description: "The little devil navigator, unlocking the city's rhythm with a swipe and a beep, keeping pace with the heartbeat of the streets.",
        caption:"(The Metro Card)",
     },

    { 
        id: 24, 
        title: "Randmii", 
        category: "rare",
        image: "../images/c24.png",
        bgColor:"#FBD4DB",
        description: "The wildcard of the deck, always surprising with unexpected uses and quirky encounters, turning the ordinary into adventures with a flick of unpredictability.",
        caption:"The Random Cards",
    },

    { 
        id: 25, 
        title: "Debter", 
        category: "rare",
        image: "../images/c25.png",
        bgColor:"#FBD4DB",
        description: "The sleek spender, sliding through transactions with a swift and secure touch, making every purchase a breeze.",
        caption:"The Debit Card)",
    },

    { 
        id: 26, 
        title: "Reggie", 
        category: "common",
        image: "../images/c26.png",
        bgColor:"#D3E6F4",
        description: "The keeper of transactions, tallying up life's little purchases with a whisper of paper and a trace of ink, holding memories of moments spent.",
        caption:"(The Receipts)",
     },

    { 
        id: 27, 
        title: "Maximist",  
        category: "epic",
        image: "../images/c27.png",
        bgColor:"#B9B9D5",
        description: "The ticket to tales untold, beckoning with the allure of popcorn-scented adventures and the flicker of stories yet to unfold under the silver screen.",
        caption:"(The Movie Tickets)",
     },

    { 
        id: 28, 
        title: "Driveria",  
        category: "common",
        image: "../images/c28.png",
        bgColor:"#D3E6F4",
        description: "The emblem of freedom, granting the keys to explore the open road with a photo that never does justice and a oneway to adventure in your wallet.",
        caption:"(The Driver's License)", 
    },

    { 
        id: 29, 
        title: "Colleta", 
        category: "common",
        image: "../images/c29.png",
        bgColor:"#D3E6F4",
        description: "The jingling storyteller of pockets, each flip a tale of chance and exchange, a small metal guardian of buying power and wishes in fountains.",
        caption:"(The Spare Change)",
     },

    { 
        id: 30, 
        title: "Debra", 
        category: "common",
        image: "../images/c30.png",
        bgColor:"#D3E6F4",
        description: "The versatile entertainer, shuffling through games and magic with a flick of the wrist, weaving tales of chance, skill, and perhaps a little playful competition.",
        caption:"(The Card Deck)",
     },

    { 
        id: 31,
         title: "Silvatoire ",  
         category: "common",
         image: "../images/c31.png",
         bgColor:"#D3E6F4",
         description: "The colorful reminders of fleeting thoughts, sticking to surfaces with gentle determination, whispering messages of tasks and inspirations.",
         caption:"(The Sticky Notes)",
         },

    { 
        id: 32, 
        title: "Jumbob ", 
        category: "common",
        image: "../images/c32.png",
        bgColor:"#D3E6F4",
        description: "Brother of Debra, the grand storyteller of oversized tales, dealing out fun in large doses with every giant shuffle and playful hand, making every game a big adventure.",
        caption:"(The Jumbo Card Deck)",
     },

    { 
        id: 33,
        title: "Pickle ", 
        category: "common",
        image: "../images/c33.png",
        bgColor:"#D3E6F4",
        description: "The well-traveled booklet, chronicling escapades and encounters across continents, a silent witness to the wanderlust etched in its pages.",
        caption:"(The Passport)",
     },

    { 
        id: 34, 
        title: "Sparklie",  
        category: "legendary",
        image: "../images/c34.png",
        bgColor:"#FFF2C4",
        description: "The timeless guardian of moments, gracefully marking the passage of time with a cascade of bubbles, a symbol of fleeting beauty in stillness and flow.",
        caption:"(The Hourglass)",
     },

    { 
        id: 35, 
        title: "Hancrea ",  
        category: "rare",
        image: "../images/c35.png",
        bgColor:"#FBD4DB",
        description: "The tired guardian of diligent hands, quietly battling the day's toll with a soothing touch, whispering tales of restoration in the moon's soft glow.",
        caption:"(The Hand Cream)",
     },

    { 
        id: 36, 
        title: "Hannibal", 
        category: "common",
        image: "../images/c36.png",
        bgColor:"#D3E6F4",
        description: "Where shadows linger on each page, and whispers trail your fingertips, a tome that beckons with the thrill of the unknown and the chill of the night's embrace.",
        caption:"(The Horror Book)",
     },

    { 
        id: 37, 
        title: "Whimy",  
        category: "rare",
        image: "../images/c37.png",
        bgColor:"#FBD4DB",
        description: "A vibrant orchestrator of days, splashing color across the week with spirited reminders and lively doodles, dancing through appointments and adventures with a spark of joy.",
        caption:"(The Weekly Planner)",
     },

    { 
        id: 38, 
        title: "Rizzer ",  
        category: "epic",
        image: "../images/c38.png",
        bgColor:"#B9B9D5",
        description: "A quiet companion in solitude, its grains a soft murmur of comfort in the bowl of the lonely, offering solace with each spoonful, a reminder of shared meals missed.",
        caption:"(The Bag of Rice)",
     },

    { 
        id: 39, 
        title: "Totorol ",  
        category: "epic",
        image: "../images/c39.png"
        ,bgColor:"#B9B9D5",
        description: "The unsung hero of daily routines, rolling out a path of cleanliness with a soft touch and a whisper of practicality, ever ready for life's call.",
        caption:"(The Toilet Paper)",
     },

    { 
        id: 40, 
        title: "Caroline", 
        category: "rare",
        image: "../images/c40.png",
        bgColor:"#FBD4DB",
        description: "The conduit of virtual adventures, resting in palms with buttons and joysticks that leap to life, bridging worlds with every press and pivot.",
        caption:"(The Controller)",
     },

];
function createItemElement(item) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = item.bgColor;

    const front = document.createElement('div');
    front.classList.add('front');
    front.innerHTML = `
        <h3 class="title">${item.title}</h3>
        <img src="${item.image}" alt="${item.title}" style="max-width: 100%; height: auto;">
    `;

    const back = document.createElement('div');
    back.classList.add('back');
    // Use item.caption for the header/caption
    back.innerHTML = `
        <h2 class="item-caption">${item.caption}</h2>
        <p class="item-description">${item.description}</p> 
    `;

    box.appendChild(front);
    box.appendChild(back);

    box.addEventListener('click', () => {
        box.classList.toggle('is-flipped');
    });

    return box;
}




function displayItems() {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';
    

    const collectedItemsArray = Array.from(collectedItems);
    collectedItemsArray.forEach(index => {
        const item = items[index];
        const itemElement = createItemElement(item);
        gridContainer.appendChild(itemElement);
    });
}
displayItems();

document.querySelector('.button').addEventListener('click', function() {
    const image = document.querySelector('.image');
        image.classList.add('shake');

        document.getElementById('itemDisplay').style.display = 'none';
    

        setTimeout(() => {
            image.classList.remove('shake');

            
            const selectedItemIndex = Math.floor(Math.random() * items.length);
            const selectedItem = items[selectedItemIndex];
        
            // Check if the item has not been collected before
            if (!collectedItems.has(selectedItemIndex)) {
                collectedItems.add(selectedItemIndex);
                collectedItemsCount++;
                document.getElementById('collectionCounter').innerText = `${collectedItemsCount}/40`;
                
                // Save to localStorage for persistence
                localStorage.setItem('collectedItems', JSON.stringify(Array.from(collectedItems)));
                localStorage.setItem('collectedItemsCount', collectedItemsCount.toString());
            }
    
            document.getElementById('itemImage').src = selectedItem.imageUrl;
            document.getElementById('itemName').textContent = selectedItem.name;
            document.getElementById('itemDescription').textContent = selectedItem.description;
            document.getElementById('itemDisplay').style.backgroundColor = selectedItem.backgroundColor;
    
            // Make itemDisplay visible again and update its contents
            document.getElementById('itemDisplay').style.display = 'block';
            const itemDisplayRect = document.getElementById('itemDisplay').getBoundingClientRect();
    
            // Then, add stars around it
            createStars(itemDisplayRect);
    
            document.getElementById('itemDisplay').classList.add('fade-in');
            setTimeout(() => {
                document.getElementById('itemDisplay').classList.remove('fade-in');
            }, 500); // Ensure this matches the duration of the fade-in animation
        }, 820); // This waits for the shake animation to complete
    displayItems(); // Refresh the items displayed in the collection
});

function filterItems(filter) {
displayItems(filter);
}


displayItems();



      