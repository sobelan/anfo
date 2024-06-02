import images from "./images";
import {FaFileAlt, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt} from "react-icons/fa";
import {AiOutlineReload} from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { IoStorefrontSharp } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { GiLaptop } from "react-icons/gi";



const gradient = "url(#white-gradient)" ;

const services = [
    {
        id: 1,
        icon: <IoGameControllerOutline />,
        title: "Kids Game Zone",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 2,
        icon: <CgGym />,
        title: "Gymnasium",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 3,
        icon: <IoStorefrontSharp />,
        title: "Supermarket",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 4, 
        icon: <IoRestaurantOutline />,
        title: "Restaurants",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 5,
        icon: <GiClothes  />,
        title: "Clothing Shops",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 6,
        icon: <GiLaptop  />,
        title: "Electronics Stores",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    }
];

const about = [
    {
        id: 7,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor"
    }
]

const qualities = [
    {
        id: 8,
        icon: <FaFileAlt color = "white" />,
        title: "Ideas & Plans",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
    },
    {
        id: 9,
        icon: <AiOutlineReload style = {{ fill: gradient }}  />,
        title: "Prompt Strategies",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
    }
];

const features = [
    {
        id: 10,
        title: "Digital Marketing",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 11,
        title: "Trade Shows",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 12,
        title: "Branding",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 13,
        title: "Content Creation",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    }, 
    {
        id: 14,
        title: "Graphic Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 15,
        title: "Media Buying",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    }
];

const portfolio = [
    {
        id: 16,
        title: "Queens Hypermarket",
        text: "13 min (5.9 km) drive. ",
        image: images.portfolio_img_1,
    },
    {
        id: 17,
        title: "Kuriftu Resort African Village",
        text: "10 min (3.2 km) drive.",
        image: images.portfolio_img_2,
    },
    {
        id: 18,
        title: "Lebawi International Academy ",
        text: "13 min (6 km) drive. ",
        image: images.portfolio_img_3,
    }
];

const testimonials = [
    {
        id: 19,
        name: "Sultan Mohammed",
        text: "CEO & Owner",
        image: images.customer_img_1,
    },
    {
        id: 20,
        name: "Amir Sultan",
        text: "COO",
        image: images.customer_img_2,
    },
    {
        id: 21,
        name: "Ayisha",
        text: "Executive Director",
        image: images.customer_img_3,
    },
    {
        id: 22,
        name: "Muna",
        text: "HR Manager",
        image: images.customer_img_4,
    },
    {
        id: 23,
        name: "Abdullahi",
        text: "Finance Manager",
        image: images.customer_img_5,
    },
    {
        id: 24,
        name: "Mrs. X",
        text: "Accountant",
        image: images.customer_img_6,
    }
];

const listings = [
    {
        id: 19,
        name: "Type A: 60 sq.m.",
        text: "1 bedroom/ 1 toilet",
        image: images.listing_img_2,
    },
    {
        id: 20,
        name: "Type B: 100 sq.m.",
        text: "2 bedroom/ 1 toilet/ 1 maid's room",
        image: images.listing_img_4,
    },
    {
        id: 21,
        name: "Type C: 200 sq.m.",
        text: "3 bedroom/ 2 toilets/ 1 maid's room",
        image: images.listing_img_2,
    }
   
];

const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt color = "white"  />,
        info: "+251944101519",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen color = "white" />,
        info: "sobelan@gmail.com",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt color = "white" />,
        info: "Sobelan Buisness Center 6th floor, Mehal Merkato, Addis Ababa",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    }
]

const sections = {services, about, qualities, features, portfolio, testimonials, listings, contact};

export default sections;