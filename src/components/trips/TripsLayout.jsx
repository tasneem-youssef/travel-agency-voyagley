import Rome from "../../images/rome.jpg";
import milan from "../../images/milan.jpg";
import liverpool from "../../images/liverpool.jpg";
import london from "../../images/london.jpg";
import Athens from "../../images/athens.jpg";
import paris from "../../images/paris.jpg";
import TAJMAHAL from "../../images/Taj Mahal.jpg";
import HagiaSophia from "../../images/Hagia Sophia .webp";
import SubPageHeader from "../subPageHeader.jsx";
import TripDetailContent from "./TripDetailContent";
import { useParams } from "react-router-dom";

const TripsData = {
    trip1: {
        image: Rome,
        title: "Villa Borghese",
        subtitle: "Rome, Italy",
        history: `Rome, the Eternal City, has been a crossroads of civilisations for over 2,700 years. Founded in 753 BC along the banks of the Tiber, it grew from a small Latin settlement into the heart of one of history's greatest empires. The Villa Borghese gardens were commissioned in the early 17th century by Cardinal Scipione Borghese, nephew of Pope Paul V, and stand today as Rome's most celebrated public park. Strolling its shaded avenues you walk past baroque fountains, a neoclassical temple, and the famous Galleria Borghese — home to masterworks by Bernini, Caravaggio and Raphael that define the golden age of Italian art.`,
        highlights: [
            "Guided tour of the Galleria Borghese with a private art historian",
            "Sunset walk along the Pincian Hill terrace overlooking Piazza del Popolo",
            "Evening wine tasting at a historic Roman enoteca in Trastevere",
            "Day trip to the Colosseum, Roman Forum & Palatine Hill",
            "Authentic cooking class: handmade pasta & tiramisu",
        ],
        leader: "Marco Ferretti",
        date: "September 14, 2025",
        duration: "7 Days / 6 Nights",
        availableSpots: 4,
        price: "$2,490",
    },
    trip2: {
        image: Athens,
        title: "Parthenon",
        subtitle: "Athens, Greece",
        history: `Athens is the cradle of Western civilisation — a city that gave the world democracy, philosophy, theatre, and the Olympic Games. At its heart stands the Acropolis, a rocky hilltop crowned by the Parthenon, a Doric temple dedicated to the goddess Athena and completed in 432 BC under Pericles. Constructed from gleaming Pentelic marble with extraordinary mathematical precision, the Parthenon has survived invasions, earthquakes, and centuries of transformation — from a Christian church to an Ottoman mosque — before becoming the defining symbol of Greece and human achievement that we admire today.`,
        highlights: [
            "Early-access sunrise visit to the Acropolis before crowds arrive",
            "Expert-led tour of the Acropolis Museum with restoration insights",
            "Street food walk through the Monastiraki bazaar",
            "Day cruise to the Saronic Islands: Aegina, Poros & Hydra",
            "Traditional meze dinner in a family-run taverna in Plaka",
        ],
        leader: "Elena Papadopoulos",
        date: "October 3, 2025",
        duration: "6 Days / 5 Nights",
        availableSpots: 8,
        price: "$1,950",
    },
    trip3: {
        image: london,
        title: "Tower Bridge",
        subtitle: "London, UK",
        history: `London stretches across two millennia of recorded history, from its Roman founding as Londinium in 43 AD to its current status as a global metropolis of nearly nine million people. Tower Bridge — perhaps London's most recognisable silhouette — was built between 1886 and 1894 to relieve congestion on London Bridge while allowing tall ships to pass into the Pool of London. Its twin Gothic towers and high-level walkways conceal a sophisticated Victorian hydraulic system originally powered by steam. Today the bridge opens roughly 800 times a year, a spectacular feat of engineering that never loses its drama.`,
        highlights: [
            "Behind-the-scenes Tower Bridge Engine Rooms tour",
            "Yeoman Warder 'Beefeater' guided tour of the Tower of London",
            "Thames riverboat journey past Greenwich and Canary Wharf",
            "Afternoon tea at a historic Mayfair hotel",
            "Evening West End theatre show in the heart of the city",
        ],
        leader: "James Hartley",
        date: "November 8, 2025",
        duration: "5 Days / 4 Nights",
        availableSpots: 12,
        price: "$1,780",
    },
    trip4: {
        image: milan,
        title: "Milan Cathedral",
        subtitle: "Milan, Italy",
        history: `Milan's Duomo di Milano is one of the largest Gothic cathedrals on earth, a soaring forest of 3,400 statues, 135 marble spires, and 52 giant columns. Construction began in 1386 under Gian Galeazzo Visconti and continued for nearly six centuries, finally declared complete only in 1965. The rooftop terrace, accessible by lift or on foot, delivers a panorama over the city and — on clear winter days — the snow-capped peaks of the Alps. Beyond the cathedral, Milan is Italy's design and fashion capital, home to Leonardo's Last Supper, La Scala opera house, and the world's most celebrated runway shows.`,
        highlights: [
            "Rooftop Duomo walk among gothic spires at golden hour",
            "Reserved-ticket visit to Leonardo da Vinci's The Last Supper",
            "Guided tour of the Brera art quarter and Pinacoteca di Brera",
            "Private aperitivo session with a Milanese mixologist",
            "Shopping tour in the Quadrilatero della Moda fashion district",
        ],
        leader: "Sofia Conti",
        date: "October 18, 2025",
        duration: "5 Days / 4 Nights",
        availableSpots: 6,
        price: "$2,150",
    },
    trip5: {
        image: TAJMAHAL,
        title: "Taj Mahal",
        subtitle: "Agra, India",
        history: `The Taj Mahal rises from the banks of the Yamuna River as the world's most eloquent monument to love. Mughal Emperor Shah Jahan commissioned it in 1632 as a mausoleum for his beloved wife Mumtaz Mahal, who died giving birth to their fourteenth child. Twenty thousand artisans laboured for twenty-two years, inlaying white Makrana marble with twenty-eight varieties of semi-precious stone in floral patterns so intricate they seem to breathe. Recognised as a UNESCO World Heritage Site and one of the New Seven Wonders of the World, the Taj Mahal shifts from rose-pink at dawn to ivory-white at noon to gold at sunset — each hour a different masterpiece.`,
        highlights: [
            "Dawn entry to the Taj Mahal before general opening — mist & soft light",
            "Expert Mughal history lecture within the mausoleum gardens",
            "Agra Fort exploration including Diwan-i-Khas and Pearl Mosque",
            "Mehtab Bagh (Moonlight Garden) sunset view across the Yamuna",
            "Traditional Agra cuisine cooking class: biryani and kulfi",
        ],
        leader: "Priya Sharma",
        date: "January 22, 2026",
        duration: "8 Days / 7 Nights",
        availableSpots: 5,
        price: "$2,890",
    },
    trip6: {
        image: liverpool,
        title: "Royal Liver",
        subtitle: "Liverpool, UK",
        history: `Liverpool's waterfront is a UNESCO World Heritage Site — a compact stretch of Victorian and Edwardian grandeur known as the Three Graces. At its centre stands the Royal Liver Building (1910–11), one of the first in the world built from reinforced concrete. Its two Liver Birds — mythical cormorants clutching seaweed — perch atop clock towers whose faces are larger than Big Ben's, watching over the city and the sea. Liverpool grew wealthy as one of Britain's great transatlantic ports, later becoming the birthplace of The Beatles and a vibrant hub of art, music, and football culture that draws millions of visitors every year.`,
        highlights: [
            "Royal Liver Building rooftop tour with panoramic Mersey views",
            "Immersive Beatles Story museum at the Albert Dock",
            "Guided walk through the Georgian Quarter and Liverpool Cathedral",
            "Ferry across the Mersey with live guide commentary",
            "Anfield Stadium behind-the-scenes tour (match-day availability)",
        ],
        leader: "Oliver Bennett",
        date: "September 27, 2025",
        duration: "4 Days / 3 Nights",
        availableSpots: 10,
        price: "$1,340",
    },
    trip7: {
        image: paris,
        title: "Eiffel Tower",
        subtitle: "Paris, France",
        history: `Paris has held court as the world's cultural capital for centuries — a city that shaped Enlightenment thought, impressionist painting, haute cuisine, and modern fashion in equal measure. The Eiffel Tower was built as the entrance arch for the 1889 World's Fair, celebrating the centenary of the French Revolution. Its designer Gustave Eiffel assembled 18,038 pieces of puddled iron with 2.5 million rivets in just over two years. Considered an eyesore at its opening, it swiftly became the most visited paid monument on earth. Today, seen from the Trocadéro at dusk as the light show begins, it remains simply the most romantic spectacle in the world.`,
        highlights: [
            "Skip-the-line summit access to the Eiffel Tower at dusk",
            "Private Seine dinner cruise with sommelier-paired French wines",
            "Louvre Museum highlights tour: Mona Lisa, Venus de Milo, Winged Victory",
            "Montmartre art walk ending at Sacré-Cœur at sunrise",
            "Day trip to the Palace of Versailles and its Grand Trianon",
        ],
        leader: "Isabelle Dupont",
        date: "October 10, 2025",
        duration: "7 Days / 6 Nights",
        availableSpots: 9,
        price: "$2,620",
    },
    trip8: {
        image: HagiaSophia,
        title: "Hagia Sophia",
        subtitle: "Istanbul, Turkey",
        history: `Hagia Sophia — the Church of Holy Wisdom — stands as one of the greatest architectural achievements in human history. Commissioned by Byzantine Emperor Justinian I and completed in 537 AD, its vast dome appeared to contemporaries to float miraculously on a ring of light, as if suspended from the heavens by a golden chain. For nearly a thousand years it was the world's largest cathedral; after the Ottoman conquest of 1453, Sultan Mehmed II converted it to a mosque, adding minarets and calligraphic medallions that give it its dual identity today. Istanbul itself straddles two continents, bridging Europe and Asia across the Bosphorus in a city of incomparable depth and flavour.`,
        highlights: [
            "Early-morning guided tour of Hagia Sophia before daily crowds",
            "Blue Mosque interior visit and peaceful courtyard meditation",
            "Topkapi Palace treasury and imperial harem exploration",
            "Bosphorus strait sunset cruise between two continents",
            "Grand Bazaar spice and ceramics treasure hunt with a local guide",
        ],
        leader: "Kemal Yıldız",
        date: "November 21, 2025",
        duration: "6 Days / 5 Nights",
        availableSpots: 3,
        price: "$2,080",
    },
};

const TripsLayout = () => {
    const { tripId } = useParams();
    const currentTrip = TripsData[tripId];

    return (
        <>
            {currentTrip && (
                <SubPageHeader
                    imagePath={currentTrip.image}
                    title={currentTrip.title}
                    subtitle={currentTrip.subtitle}
                />
            )}
            <TripDetailContent trip={currentTrip} />
        </>
    );
};

export default TripsLayout;
