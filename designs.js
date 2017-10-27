// hide global scope .. or we can use document . ready jquery method but not required ...
(() => {
    // Only one variable canvas
    let Canvas = $("#pixel_canvas");
    const SizePicker = document.getElementById('sizePicker');

    SizePicker.addEventListener('submit', (e) => {
        // when submit button is clicked grab the width and height the customer has chosen and call the makegrid function
        e.preventDefault();
        const width = $("#input_width").val();
        const height = $("#input_height").val();

        makeGrid(width, height);

    });

    Canvas.click((e) => {
        // when user clicks on a box the box background color changes to what he has chosen from the color picker..
        let color = $('#colorPicker').val();
        $(e.target).css("background-color", color);
    });
    Canvas.dblclick((e) => {
        // to undo the changes when double clicked
        $(e.target).css("background-color", "#fff");
    });

    function makeGrid(width, height) {
        let grid = '';
        // it makes a grid using to for loops one for row and other for column..
        for (let i = 0; i < height; i++) {
            grid += "<tr>";
            for (let j = 0; j < width; j++) {
                grid += "<td></td>";
            }
            grid += "</tr>";
        }
        Canvas.html(grid);
        // append column to page or use html method
        Canvas.css("background-color", "#ffffff");
        // make sure the boxes are visible
    }
})();
