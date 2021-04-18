import kx008 from '../components/images/Equipment/kx008.png';
import u17 from '../components/images/Equipment/u17.png';
import kx71 from '../components/images/Equipment/kx71.png';
import kx040 from '../components/images/Equipment/kx040.png';
import pt30 from '../components/images/Equipment/pt30.png';
import s130 from '../components/images/Equipment/s130.png';



const EquipmentList = [
    
    {
        title: "Kubota KX008-3",
        type: 'Excavator',
        dayRate: "150",
        weekRate: "600",
        monthRate: "1200",
        description: "The 3 yard dump trucks are fantastic for either picking up new material or hauling out old material. Whether it be dirt, rock, concrete, the three yard dump truck will make quick work of big projects.",
        image: kx008,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {equipment: 1},
            {equipment: 2},
            {equipment: 3}
        ]
    },

    {
        title: "Kubota U17",
        type: 'Excavator',
        dayRate: "175",
        weekRate: "700",
        monthRate: "1400",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        image: u17,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {equipment: 0},
            {equipment: 2},
            {equipment: 3}
        ]
    },

    {
        title: "Kubota KX71-3",
        type: 'Excavator',
        dayRate: "225",
        weekRate: "900",
        monthRate: "1800",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        image: kx71,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {equipment: 3},
            {equipment: 1},
            {equipment: 0}
        ]
    },

    {
        title: "Kubota KX040-4",
        type: 'Excavator',
        dayRate: "300",
        weekRate: "1200",
        monthRate: "2400",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        image: kx040,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {equipment: 2},
            {equipment: 1},
            {equipment: 0}
        ]
    },

    {
        title: "Terex PT-30",
        type: 'Specialty Skidsteer',
        dayRate: "200",
        weekRate: "800",
        monthRate: "1600",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        image: pt30,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {equipment: 5}
        ]
    },

    {
        title: "Bobact S130",
        type: 'Skidsteer',
        dayRate: "175",
        weekRate: "700",
        monthRate: "1400",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        image: s130,
        specifications : [
            {spec: "pickles"},
            {spec: "dog"}
        ],
        similar: [
            {equipment: 4}
        ]
    }
]

export default EquipmentList