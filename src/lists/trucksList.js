import cargovan from '../components/images/trucks/cargovan.png';
import pickup from '../components/images/trucks/pickup.png';
import pickuprack from '../components/images/trucks/pickuprack.png';
import pickuplift from '../components/images/trucks/pickuplift.png';
import tenfoot from '../components/images/trucks/tenfoot.png';
import fifteenfoot from '../components/images/trucks/fifteenfoot.png';
import fifteenfootlift from '../components/images/trucks/fifteenfootlift.png';
import twentytwofoot from '../components/images/trucks/twentytwofoot.png';
import twentysixfoot from '../components/images/trucks/twentysixfoot.png';
import twelvefootfb from '../components/images/trucks/twelvefootfb.png';
import sixteenfootfb from '../components/images/trucks/sixteenfootfb.png';
import twentyfourfootfb from '../components/images/trucks/twentyfourfootfb.png';
import oneyard from '../components/images/trucks/oneyard.png';
import threeyard from '../components/images/trucks/threeyard.png';
import fiveyard from '../components/images/trucks/fiveyard.png';
import fivedebris from '../components/images/trucks/fivedebris.png';
import eightdebris from '../components/images/trucks/eightdebris.png';



const TruckList = [
    
    {
        title: "Cargo Van",
        type: 'Cargo',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.79",
        descriptionShort: "A great rental option for a small job. This is the perfect choice to move a little furniture or a small load. The cargo van is an inexpensive option if you are looking for a covered vehicle.",
        descriptionLong: "Cargo vans are a great option when you’re looking to haul small to medium sized furniture items without having to worry about the weather changing on you all of a sudden. Our vans are 9’ long and nearly 6’ wide, giving you just enough space to haul up to a queen-sized mattress and box spring. Vans seat up to two and rent for only $20 per time period and just $0.79 per mile. The cargo vans tend to book out on the weekends, so it’s always best to give us a call and book one of these ahead of time.",
        image: cargovan,
        specifications : [
            {spec: "Interior: 9'L x 5'6\"W x 4' 4.5\"T"},
            {spec: "Wheel Wells: 52\" Between"},
            {spec: "Overall: 17'8\"L x 6'W x 6'8\"T"},
            {spec: "Door Opening: 4'T x 4'6\"W"},
            {spec: "Loading Height: 25.5\"H"},
            {spec: "Large Enough For Queen Mattress & Box Spring (No pillow Top"},
            {spec: "Cargo Limit: 3000LBS"}
        ],
        similar: [
            {truck: 4},
            {truck: 1}
        ],
        filterType: [ '', 'def', 'van','cargo'],
        filterMaterial: ['', 'def']
    },

    {
        title: "Pickup",
        type: 'Pickup',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        image: pickup,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {truck: 3},
            {truck: 2},
            {truck: 14}
        ],
        filterType: [ '', 'def', 'pu'],
        filterMaterial: ['', 'def', 'sod', 'dirt']
    },

    {
        title: "Pickup W/ Ladder Rack",
        type: 'Pick Up',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        image: pickuprack,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {truck: 15},
            {truck: 16}
        ],
        filterType: [ '', 'def'],
        filterMaterial: ['', 'def']
    },

    {
        title: "Pickup W/ Liftgate",
        type: 'Pick Up',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        image: pickuplift,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {truck: 15},
            {truck: 16}
        ],
        filterType: [ '', 'def'],
        filterMaterial: ['', 'def']
    },

    {
        title: "10' Box Truck",
        type: 'Cargo',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        image: tenfoot,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {truck: 15},
            {truck: 16}
        ],
        filterType: [ '', 'def'],
        filterMaterial: ['', 'def']
    },

    {
        title: "15' Box Truck",
        type: 'Cargo',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        image: fifteenfoot,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {truck: 15},
            {truck: 16}
        ],
        filterType: [ '', 'def'],
        filterMaterial: ['', 'def']
    },

    {
        title: "15' Box Truck W/ Liftgate",
        type: 'Cargo',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        image: fifteenfootlift,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {truck: 15},
            {truck: 16}
        ],
        filterType: [ '', 'def'],
        filterMaterial: ['', 'def']
    },

    {
        title: "22' Box Truck",
        type: 'Cargo',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        image: twentytwofoot,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {truck: 15},
            {truck: 16}
        ],
        filterType: [ '', 'def'],
        filterMaterial: ['', 'def']
    },

    {
        title: "26' Box Truck",
        type: 'Cargo',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        image: twentysixfoot,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {truck: 15},
            {truck: 16}
        ],
        filterType: [ '', 'def'],
        filterMaterial: ['', 'def']
    },

    {
        title: "12' Flatbed",
        type: 'FlatBed',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "",
        image: twelvefootfb,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {truck: 15},
            {truck: 16}
        ],
        filterType: [ '', 'def', 'fb'],
        filterMaterial: ['', 'def']
    },

    {
        title: "16' Flatbed",
        type: 'FlatBed',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "",
        image: sixteenfootfb,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {truck: 15},
            {truck: 16}
        ],
        filterType: [ '', 'def', 'fb'],
        filterMaterial: ['', 'def']
    },

    {
        title: "24' Flatbed",
        type: 'FlatBed',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "",
        image: twentyfourfootfb,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {truck: 15},
            {truck: 16}
        ],
        filterType: [ '', 'def', 'fb'],
        filterMaterial: ['', 'def']
    },

    {
        title: "5000 lbs Debris Dump",
        type: 'Debris Dump',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "",
        image: fivedebris,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {truck: 15},
            {truck: 16}
        ],
        filterType: [ '', 'def'],
        filterMaterial: ['', 'def']
    },

    {
        title: "8000 lbs Debris Dump",
        type: 'DebrisDump',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "",
        image: eightdebris,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {truck: 15},
            {truck: 16}
        ],
        filterType: [ '', 'def'],
        filterMaterial: ['', 'def', 'con-debris']
    },

    {
        title: "1 Yard Dump ",
        type: 'Dump Truck',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "",
        image: oneyard,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {truck: 15},
            {truck: 16}
        ],
        filterType: [ '', 'def'],
        filterMaterial: ['', 'def']
    },

    {
        title: "3 Yard Dump",
        type: 'Dump Truck',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "The 3 yard dump trucks are fantastic for either picking up new material or hauling out old material. Whether it be dirt, rock, concrete, the three yard dump truck will make quick work of big projects.",
        image: threeyard,
        specifications : [
            {spec: "3 Yard Dirt Carrying Capacity"},
            {spec: "2.5 Yards of Sand, Gravel, or Broken Concrete"},
            {spec: "Dump: Electric"},
            {spec: "Transmission: Automatic"},
            {spec: "Max Payload: 8000 LBS"},
            {spec: "Outer Dimensions: 8'W 18'L 7'2\"T"},
            {spec: "Bed Dimensions: 8'W 12'L 2'D"},
            {spec: "Seats: 3"},
        ],
        similar: [
            {truck: 14},
            {truck: 16}
        ],
        filterType: [ '', 'def'],
        filterMaterial: ['', 'def']
    },

    {
        title: "5 Yard Dump",
        type: 'Dump Truck',
        dayRate: "20",
        weekRate: "100",
        monthRate: "400",
        mileRate: "0.49",
        description: "",
        image: fiveyard,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {truck: 15},
            {truck: 14}
        ],
        filterType: [ '', 'def'],
        filterMaterial: ['', 'def']
    },

]

export default TruckList