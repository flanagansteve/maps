Made with [QGIS](https://qgis.org/)

I used this map to decide how valuable a foldable bike might be in my life. The main reason I was interested in a folding bike was to take it easily on the subway or bus or train, and bike from a station - I had a hunch this could give me near 100% access to MetroWest, all without a car.

Turns out, I was right!

This is everywhere I could go using all three systems:

![bikemap_screenshot](./bikemap_screenshot.png)

This is everywhere I could go only using the high-frequency systems - buses and subways:

![subway_and_bus_screenshot](./subway_and_bus_screenshot.png)

And this is where I can go using only the subway:

![subway_screenshot](./subway_screenshot.png)

TODO:

1. Add ferry stops + radius around them
2. Add the [12 RTAs in Mass](https://www.mass.gov/info-details/public-transportation-in-massachusetts#regional-transit-authorities-), or at least the major ones (Worcester, MeVa and Pioneer Valley Authority)
3. If I do (2), I am pretty sure I can get to Springfield - I can take the [Worcester RTA](https://wrtamain.wpengine.com/routes-schedules/) to Brookfield, then bike <10 miles to the [Pioneer Valley stop in Ware](https://www.arcgis.com/apps/mapviewer/index.html?webmap=02d27b4a3f4b4dfcb5c4a36087eac30a). Getting to Springfield unlocks the Hartford line, which then unlocks the MTA, and can get me into a fourth, fifth, and sixth state, and includes NYC!!!
4. Permit >10mi trips if there are protected bike lanes - I am pretty sure there is a nice one that can maybe also get me from Worcester to Springfield
5. Arguably add Peter Pan buses? Though I'm not sure if they'd let me take on a folding bike
6. Arguably add Amtrak? You can bring on a bike, but its less frequent & more expensive, so not really in the spirit of answering the question "What trips can I do with a folding bike + public transit, for similar time and cost to a car"

This was really fun. The MBTA does a great job posting usable GIS layers to play with, and QGIS was easy to learn - I got to tackle challenges like handling the overlap of my bike-zone radii or filtering the TRAIN_NODES to only include the "real" commuter rail ones (plus cape flyer - I love the cape flyer). Let me know if you have requests or idea to improve this!
