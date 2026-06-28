import britain from "../../images/britain.jpg";
import france from "../../images/france.jpg";
import greece from "../../images/greece.jpg";
import india from "../../images/india.jpg";
import italy from "../../images/italy.jpg";
import turkey from "../../images/turkey.jpg";
import SubPageHeader from "../subPageHeader.jsx";
import DestinationDetailContent from "./DestinationDetailContent.jsx";
import { useParams } from "react-router-dom";

const DestinationsData = {
    destination1: {
        image: britain,
        name: "United Kingdom",
        country: "United Kingdom",
        region: "Northern Europe",
        bestTime: "May – September",
        knownFor: "History, Culture, Royal Heritage",
        flightTime: "Varies by origin",
        startingPrice: "$1,200",
        overview: `The United Kingdom is a sovereign nation of extraordinary layered history, comprising England, Scotland, Wales, and Northern Ireland across an archipelago of islands off the north-western coast of continental Europe. From the Roman walls of Chester to the medieval grandeur of Edinburgh Castle, from Shakespeare's Stratford-upon-Avon to the cutting-edge galleries of Tate Modern, Britain contains more history per square mile than almost any other nation on earth. Its landscapes shift from the white chalk cliffs of Dover to the purple heather moorlands of the Scottish Highlands — a country that in its compact geography encompasses an astonishing diversity of character, accent, tradition, and natural beauty that rewards explorers at every turn.`,
        attractions: [
            "Tower of London and Tower Bridge — a millennium of royal history",
            "Stonehenge — prehistoric wonder on Salisbury Plain",
            "Edinburgh Castle commanding the Royal Mile in Scotland",
            "Cotswolds villages: Bourton-on-the-Water, Bibury, and Castle Combe",
            "Buckingham Palace and the Changing of the Guard ceremony",
            "The Lake District — Wordsworth's landscape of mountains and mirror lakes",
        ],
    },
    destination2: {
        image: france,
        name: "France",
        country: "France",
        region: "Western Europe",
        bestTime: "April – June, September – October",
        knownFor: "Cuisine, Art, Fashion, History",
        flightTime: "Varies by origin",
        startingPrice: "$1,350",
        overview: `France has shaped Western civilisation in ways few nations can claim — a country that gave the world the Enlightenment, Impressionist painting, haute cuisine, the Cannes Film Festival, and the language of diplomacy itself. Its landscapes range from the volcanic peaks of the Massif Central to the lavender fields of Provence, from the Atlantic vineyards of Bordeaux to the sun-scorched Côte d'Azur. Paris alone — with its boulevards, cafés, world-class museums, and the eternal silhouette of the Eiffel Tower at dusk — is regarded by millions as the world's most beautiful city. Beyond Paris, France unfolds as a country of remarkable regional identities: the Loire Valley's fairy-tale châteaux, Normandy's D-Day beaches, Alsace's half-timbered wine villages, and the sun-drenched Riviera coast.`,
        attractions: [
            "Eiffel Tower — the world's most visited paid monument",
            "Louvre Museum: Mona Lisa, Venus de Milo, Winged Victory",
            "Palace of Versailles and its Hall of Mirrors",
            "Mont Saint-Michel — the tidal island abbey in Normandy",
            "Loire Valley châteaux: Chambord, Chenonceau, Amboise",
            "D-Day beaches of Normandy and the American Cemetery at Colleville",
        ],
    },
    destination3: {
        image: greece,
        name: "Greece",
        country: "Greece",
        region: "Southern Europe / Mediterranean",
        bestTime: "May – October",
        knownFor: "Ancient History, Islands, Mediterranean Cuisine",
        flightTime: "Varies by origin",
        startingPrice: "$950",
        overview: `Greece is the cradle of Western civilisation — a nation that gifted the world democracy, philosophy, the Olympic Games, theatre, and the foundations of mathematics and science in the centuries when Athens stood as the world's greatest intellectual capital. Today, the ruins of that golden age rise from the hilltops and plains across a country of incomparable natural beauty: 6,000 islands scattered across the azure Aegean and Ionian Seas, volcanic coastlines of dramatic black and white pebbled beaches, the blue-domed churches of Santorini silhouetted against the setting sun, and medieval fortified cities where Byzantine emperors once held court. Greece is simultaneously ancient and vibrantly alive — a culture of passionate hospitality, extraordinary food, and an unshakeable pride in a heritage that shaped the entire world.`,
        attractions: [
            "Acropolis and the Parthenon — the defining symbol of human achievement",
            "Santorini caldera — the world's most photogenic sunset from Oia",
            "Mykonos old town — whitewashed alleyways and windmill-topped hills",
            "Delphi — sacred oracle site of the ancient world on Mount Parnassus",
            "Meteora — Byzantine monasteries perched atop vertical rock pillars",
            "Olympia — birthplace of the ancient Olympic Games",
        ],
    },
    destination4: {
        image: india,
        name: "India",
        country: "India",
        region: "South Asia",
        bestTime: "October – March",
        knownFor: "Ancient Heritage, Spiritual Culture, Spices",
        flightTime: "Varies by origin",
        startingPrice: "$1,100",
        overview: `India is a civilisation as much as a country — a land of extraordinary antiquity, overwhelming sensory richness, and a spiritual depth that has attracted seekers, traders, and explorers since the dawn of history. The world's largest democracy stretches from the snow-capped peaks of the Himalayas in the north to the tropical backwaters of Kerala in the south, encompassing deserts, rainforests, ancient temple cities, and the Ganges floodplains that have sustained human life for ten thousand years. The Mughal emperors built some of the world's most beautiful monuments — including the incomparable Taj Mahal — while Hindu, Buddhist, Jain, and Sikh traditions have left a landscape studded with temples, stupas, and sacred rivers. India does not merely visit the senses; it transforms them entirely.`,
        attractions: [
            "Taj Mahal at dawn — the world's most eloquent monument to love",
            "Varanasi ghats on the Ganges — one of the world's oldest living cities",
            "Jaipur's Amber Fort and City Palace in the Pink City of Rajasthan",
            "Agra Fort: Mughal imperial power in red sandstone",
            "Kerala backwaters by traditional houseboat through Alleppey",
            "Hampi — the ruined city of the Vijayanagara Empire among bouldered landscapes",
        ],
    },
    destination5: {
        image: italy,
        name: "Italy",
        country: "Italy",
        region: "Southern Europe / Mediterranean",
        bestTime: "April – June, September – October",
        knownFor: "Art, Architecture, Cuisine, Fashion",
        flightTime: "Varies by origin",
        startingPrice: "$1,150",
        overview: `Italy is the world's greatest open-air museum — a boot-shaped peninsula of forty million works of art, where every hill town, every Roman ruin, every Renaissance piazza and candlelit trattoria tells a story that has shaped Western culture for three millennia. The Roman Empire built its roads, aqueducts, and amphitheatres across three continents; the Renaissance transformed painting, sculpture, and architecture from Florence and Rome; and today the Italian genius for beauty survives in its cuisine, fashion, opera, cinema, and the daily art form of the passeggiata. From the canals of Venice to the ruins of Pompeii, from the Amalfi Coast's vertiginous clifftop villages to the trulli of Alberobello and the bronzed vineyards of Tuscany, Italy offers an inexhaustible richness that rewards every return visit with something new.`,
        attractions: [
            "Rome: Colosseum, Roman Forum, Sistine Chapel and Vatican Museums",
            "Venice: Grand Canal, St Mark's Basilica and the gondola-threaded sestieri",
            "Florence: Uffizi Gallery, Michelangelo's David and the Duomo",
            "Amalfi Coast: Positano, Ravello and the Path of the Gods clifftop trail",
            "Pompeii and Herculaneum — cities frozen in time by Vesuvius",
            "Cinque Terre — five fishing villages clinging to Ligurian cliffside",
        ],
    },
    destination6: {
        image: turkey,
        name: "Turkey",
        country: "Turkey",
        region: "Eurasia (Europe & Asia)",
        bestTime: "April – May, September – November",
        knownFor: "Byzantine & Ottoman History, Cuisine, Landscapes",
        flightTime: "Varies by origin",
        startingPrice: "$880",
        overview: `Turkey is the world's most extraordinary crossroads — a transcontinental nation straddling Europe and Asia across the Bosphorus Strait, where the minarets of Ottoman mosques rise alongside Byzantine church domes and Roman amphitheatres in a landscape that has hosted civilisation continuously for ten thousand years. Istanbul alone is one of the greatest cities on earth: a metropolis of sixteen million where the Grand Bazaar has traded for five centuries, where Hagia Sophia has stood for nearly fifteen hundred years, and where the evening call to prayer echoes across the Golden Horn as the sun sinks below the horizon. Beyond Istanbul lies an equally extraordinary country: the moonscape of Cappadocia with its fairy chimneys and cave churches, the ancient ruins of Ephesus, the turquoise coastline of the Aegean and Mediterranean, and the thermal terraces of Pamukkale.`,
        attractions: [
            "Hagia Sophia — one of history's greatest architectural achievements",
            "Topkapi Palace — heart of the Ottoman Empire for four centuries",
            "Cappadocia: hot air balloons over fairy chimneys at sunrise",
            "Ephesus — the best-preserved ancient city in the Mediterranean",
            "Pamukkale thermal terraces — white calcium cascades over ancient Hierapolis",
            "Grand Bazaar: 4,000 shops in 61 covered streets since 1461",
        ],
    },
};

const DestinationsLayout = () => {
    const { destinationId } = useParams();
    const currentDestination = DestinationsData[destinationId];

    return (
        <>
            {currentDestination && (
                <SubPageHeader
                    imagePath={currentDestination.image}
                    title={currentDestination.name}
                    subtitle={currentDestination.country}
                />
            )}
            <DestinationDetailContent destination={currentDestination} />
        </>
    );
};

export default DestinationsLayout;
