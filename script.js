// Create etch a sketch program which trails transitioned colors on div boxes in grid
//
const container = document.getElementById('grid-holder-border')
const btn = document.querySelector('button')

// Button listener should store prompt of number in var
// Set square sides equal to canvas / prompt
// Make dom element and set width and height


function btnListener() {
    var prompted = prompt("Please select your canvas width in squares")
    prompted = ++prompted
    var length = (700/prompted)
    for (i = 0; i < (prompted * prompted); i++) {
        var grid = document.createElement('div')
        grid.classList.add('gridChild')
        grid.style.width = `${length}px`
        grid.style.height = `${length}px`
        container.appendChild(grid)
        grid.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black'
        })
    }
}

btn.addEventListener('click', btnListener)

