document.addEventListener('DOMContentLoaded', function () {
    const rows = 3;
    const cols = 3;

    const theaterSeats = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => 'O')
    );

    displaySeatingChart();

    function displaySeatingChart() {
        const seatingChartElement = document.getElementById('seatingChart');
        seatingChartElement.innerHTML = '';

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const seatStatus = theaterSeats[i][j];
                const seatElement = document.createElement('div');
                seatElement.className = `seat ${seatStatus === 'O' ? 'available' : 'booked'}`;
                seatElement.textContent = String.fromCharCode(65 + i) + (j + 1);
                seatElement.onclick = () => bookSeat(i, j);
                seatingChartElement.appendChild(seatElement);
            }
        }
    }

    function bookSeat(row, col) {
        if (theaterSeats[row][col] === 'O') {
            theaterSeats[row][col] = 'X';
            displaySeatingChart();
            alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} booked successfully!`);
        } else {
            alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is already booked.`);
        }
    }

    function selectRandomSeat() {
        const availableSeats = [];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (theaterSeats[i][j] === 'O') {
                    availableSeats.push({ row: i, col: j });
                }
            }
        }

        if (availableSeats.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableSeats.length);
            const randomSeat = availableSeats[randomIndex];
            bookSeat(randomSeat.row, randomSeat.col);
        } else {
            alert('All seats are taken.');
        }
    }
});
