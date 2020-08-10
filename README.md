# fast-astar

fast-astar is an implementation of a* algorithm using javascript. Small and fast.

# Use
Install fast-astar using npm or introduce Grid.js and Astar.js on the page

**Install:**
```bash
npm install fast-astar --save
```

**Use:**
```javascript
import {Grid,Astar} from "fast-astar";

// Create a grid
let grid = new Grid({
        col:11,                  // col
        row:7,                   // row
        render:function(){       // Optional, this method is triggered when the grid point changes
            // console.log(this);
        }
    });

// Add obstacles to the grid
[[5,2],[5,3],[5,4]].forEach(item => {
    grid.set(item,'value',1);    // Values greater than 0 are obstacles
});

// Pass the grid as a parameter to the Astar object
let astar = new Astar(grid),
    path = astar.search(
        [2,3],                   // start
        [8,3],                   // end
        {                        // option
            rightAngle:false,    // default:false,Allow diagonal
            optimalResult:true   // default:true,In a few cases, the speed is slightly slower
        }
    );

console.log('Result',path);      // [[2,3],[3,2],[4,1],[5,1],[6,1],[7,2],[8,3]]
```


# Demo
- [https://sbfkcel.github.io/fast-astar](https://sbfkcel.github.io/fast-astar)

# Related
- [wiki](http://wikipedia.moesalih.com/A*_search_algorithm)
- [achieve](https://www.gamedev.net/articles/programming/artificial-intelligence/a-pathfinding-for-beginners-r2003/)


# License
MIT
