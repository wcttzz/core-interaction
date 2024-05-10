document.addEventListener('DOMContentLoaded', function() {
    const mainGrid = document.getElementById('grid-container');
    const enterButton = document.getElementById('enterButton');
    const overlay = document.getElementById('overlay');

  
    enterButton.addEventListener('click', function() {
        overlay.classList.add('fade-out'); 
        setTimeout(function() {
            overlay.style.display = 'none'; 
        }, 600); 
    });

    const darkColors = [
        ['#E3DAEE', '#EBD9EC', '#EEE3DF', '#DEECEB', '#E0E6D6'],
    ['#FCD5CE', '#F8EDEB', '#F9DCC4', '#FEC89A', '#FFB5A7'],
    ['#AAC9CE', '#B6B4C2', '#C9BBCB', '#E5C1CD', '#F3DBCF'],
    ['#EDEAE5', '#F3F3EA', '#DDDFD1', '#9BA986', '#EDDCAE'],
    ['#F0F0F0', '#ECE4E1', '#F1DFCB', '#BDB5B3', '#D2DFFE'],
    ['#EDE9E8', '#DBD2CF', '#9DB6CF', '#B6CADE', '#D4E4ED'],
    ['#E1DAD3', '#E4C9B6', '#D7A49A', '#AFB29F', '#D7E7F2'],
    ['#FFF5EE', '#E2C1BE', '#CFDBD0', '#CAC7B7', '#E6D9B7'],
    ['#EDE9E3', '#E7D7C9', '#D4B2A7', '#CDC6C3', '#DFCAC0'],
    ];
    const lightColors = [
        ['#CD6932', '#44426E', '#776483', '#B19EAD', '#292643'], 
    ['#FB6D10', '#EB3E1B', '#2E2E41', '#4D3347', '#86112E'], 
    ['#632A00', '#EE932A', '#74C58D', '#549227', '#012C00'],
    ['#947839', '#751102', '#E78332', '#EFB20C', '#326569'],
    ['#B85C48', '#692D21', '#80221E', '#AD7C59', '#A69580'],
    ['#EE4540', '#C72C41', '#801336', '#510A32', '#2D142C'],
    ['#370C5B', '#833551', '#9F4949', '#B96F5B', '#250C35'],
    ['#580019', '#8F032A', '#5F7429', '#B69D36', '#E4C75F'],
    ['#321E25', '#663845', '#884E5E', '#C06378', '#9B2A43'],
    ];
    const colorSets = [lightColors, darkColors];
    let currentColorSetIndex = 0; 

    function getRandomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    
    function initializeGridColors() {
        const now = new Date();
        const currentHour = now.getHours();
        const isAM = currentHour < 12;
        const currentColors = isAM ? lightColors : darkColors;
        const colorSet = currentColors[currentColorSetIndex];

        document.querySelectorAll('.inner-cell').forEach(innerCell => {
            const flipper = innerCell.querySelector('.flipper');
            const back = flipper.querySelector('.back');
            const front = flipper.querySelector('.front');
            const color = getRandomColor(colorSet);
            back.style.backgroundColor = color;
            front.style.backgroundColor = color;
        });

        currentColorSetIndex = (currentColorSetIndex + 1) % currentColors.length;
    }


    for (let i = 0; i < 12; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        const innerGrid = document.createElement('div');
        innerGrid.className = 'inner-grid';

        for (let j = 0; j < 60; j++) {
            const innerCell = document.createElement('div');
            innerCell.className = 'inner-cell';
            const flipper = document.createElement('div');
            flipper.className = 'flipper';
            const front = document.createElement('div');
            front.className = 'front';
            const back = document.createElement('div');
            back.className = 'back';

            flipper.appendChild(front);
            flipper.appendChild(back);
            innerCell.appendChild(flipper);
            innerGrid.appendChild(innerCell);
        }
        cell.appendChild(innerGrid);
        mainGrid.appendChild(cell);
    }

    initializeGridColors();

    let lastMinuteUpdated = -1;

    function updateClock() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const isAM = currentHour < 12;

        if (currentMinute !== lastMinuteUpdated) {
            lastMinuteUpdated = currentMinute;
            const currentColors = isAM ? lightColors : darkColors;
            const colorSet = currentColors[currentColorSetIndex];

            document.querySelectorAll('.inner-cell').forEach(innerCell => {
                const flipper = innerCell.querySelector('.flipper');
                const back = flipper.querySelector('.back');
                back.style.backgroundColor = getRandomColor(colorSet);

                setTimeout(() => {
                    innerCell.classList.add('flipped');
                    setTimeout(() => {
                        const front = flipper.querySelector('.front');
                        front.style.backgroundColor = back.style.backgroundColor;
                        innerCell.classList.remove('flipped');
                    }, 600);
                }, Math.random() * 60000); 
            });

            currentColorSetIndex = (currentColorSetIndex + 1) % currentColors.length;
        }

        document.querySelectorAll('.glow').forEach(cell => cell.classList.remove('glow'));
        const currentHourIndex = (currentHour % 12) === 0 ? 11 : (currentHour % 12) - 1;
        const currentHourCells = mainGrid.children[currentHourIndex];
        const currentMinuteCells = currentHourCells.querySelector('.inner-grid').children;
        currentMinuteCells[currentMinute].classList.add('glow');
    }

    setInterval(updateClock, 1000);
});
