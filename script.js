// Create etch a sketch program which trails transitioned colors on div boxes in grid
//
// Create and append 16 divs in a 4x4 grid using JS

const container = document.querySelector('div')
console.log("Container: " + container)


for (i = 0; i < 16; i++) {
    const grid = document.createElement('div')
    grid.classList.add('grid')
    container.appendChild(grid)
    console.log(i)
}

// Using JS cause divs to change color when moused over slowly transitioning back
// and leaving a trail behind the mouse

grids = document.querySelectorAll('.grid')
console.log(grids)
grids.forEach(item => {
    item.addEventListener('mouseover', grid => {
        item.style.backgroundColor = 'blue'
    })
})
