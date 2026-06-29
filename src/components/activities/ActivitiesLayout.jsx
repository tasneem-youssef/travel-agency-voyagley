import fourdayTour from "../../images/4-day tour.avif";
import disneyLand from "../../images/disnyLand.jpg";
import GreekTheater from "../../images/Ancient Greek Theater.avif";
import BuckinghamPalace from "../../images/Buckingham Palace.jpg";
import TajMahal from "../../images/Taj Mahal tour.avif";
import CookingClass from "../../images/cooking class.avif";
import SubPageHeader from "../subPageHeader.jsx";
import ActivityDetailContent from "./ActivityDetailContent.jsx";
import { useParams } from "react-router-dom";

export const ActivitiesData = {
    activity1: {
        image: fourdayTour,
        title: "4-Day Istanbul Tour",
        location: "Istanbul, Turkey",
        category: "City Tour",
        duration: "4 Days",
        groupSize: 15,
        availableSpots: 7,
        price: "$890",
        description: `Immerse yourself in the extraordinary fusion of East and West that defines Istanbul — a city that has served as the capital of three great empires: Roman, Byzantine, and Ottoman. This curated four-day experience takes you across the Bosphorus Strait between two continents, through the grandest mosques and palaces ever built, and deep into the labyrinthine bazaars where the scents of saffron and rosewater have filled the air for centuries. Your expert local guide will reveal the hidden courtyards, secret cisterns, and layered histories that most visitors never find, transforming Istanbul from a destination into a discovery.`,
        included: [
            "Early-morning guided tour of Hagia Sophia and the Blue Mosque",
            "Topkapi Palace treasury and imperial harem full access",
            "Bosphorus strait sunset cruise between Europe and Asia",
            "Grand Bazaar treasure hunt with a specialist local guide",
            "Traditional meze dinner in a family-run meyhane in Beyoğlu",
            "All transfers between attractions and airport pickup",
        ],
    },
    activity2: {
        image: disneyLand,
        title: "Disneyland Paris Ticket",
        location: "Paris, France",
        category: "Family Experience",
        duration: "1 Day",
        groupSize: 20,
        availableSpots: 12,
        price: "$120",
        description: `Experience the magic of Disneyland Paris — Europe's most visited theme park, nestled just 35 kilometres east of the Eiffel Tower in the Marne-la-Vallée resort. With two parks, Walt Disney Studios and the original Disneyland Park, over 50 attractions span the spectrum from heart-pounding roller coasters to enchanting fairy-tale castles. The iconic Sleeping Beauty Castle rises as the centrepiece of the magic kingdom, while parades, fireworks, and live shows transform the park into a spectacle unlike anything else in Europe. Whether you're discovering the wonder with children or rediscovering childhood yourself, one day here creates memories that last a lifetime.`,
        included: [
            "Skip-the-line access to both Disneyland Park and Walt Disney Studios",
            "Character meet-and-greet priority booking",
            "Illuminations fireworks show evening entry",
            "Complimentary park map and digital guide app",
            "Return transfers from central Paris included",
            "Flexible date change policy up to 48 hours before visit",
        ],
    },
    activity3: {
        image: GreekTheater,
        title: "Ancient Greek Theater Performance",
        location: "Athens, Greece",
        category: "Cultural Experience",
        duration: "3 Hours",
        groupSize: 30,
        availableSpots: 4,
        price: "$95",
        description: `Step into one of the most extraordinary theatrical settings on earth — an ancient open-air theatre carved into rock millennia ago, where Athenians once gathered to witness the premieres of works by Sophocles, Euripides, and Aristophanes under the same stars visible tonight. This curated cultural evening combines an expert lecture on the origins of Greek drama with a live performance of a classical work, staged by a company of professional Greek actors in authentic period costume. The experience culminates as the Acropolis is illuminated above the theatre, creating a backdrop that no modern stage designer could ever replicate.`,
        included: [
            "Reserved front-section seating at the ancient theatre",
            "Pre-show 45-minute lecture by a classical drama scholar",
            "Live performance of a Sophocles or Euripides classic",
            "Printed programme with full translation and notes",
            "Post-show guided walk through the Plaka district by night",
            "Welcome glass of Greek wine or freshly squeezed citrus juice",
        ],
    },
    activity4: {
        image: BuckinghamPalace,
        title: "Buckingham Palace Experience",
        location: "London, UK",
        category: "Historical Tour",
        duration: "Half Day",
        groupSize: 12,
        availableSpots: 8,
        price: "$140",
        description: `Go beyond the famous gates with this exclusive half-day experience at Buckingham Palace, the official London residence and administrative headquarters of the British monarch. While the State Rooms are open to the public only during summer, this curated experience secures priority access alongside an expert royal historian who unpacks the palace's layered story — from its origins as Buckingham House in 1703 to the dazzling ceremonial home of the Royal Family it is today. Watch the Changing of the Guard ceremony from a prime vantage position, then explore the surrounding Royal Parks with a guide who knows every story hidden beneath the manicured lawns.`,
        included: [
            "Priority access to Buckingham Palace State Rooms (seasonal)",
            "Expert royal historian as dedicated guide throughout",
            "Prime-position Changing of the Guard viewing",
            "St. James's Park and Green Park guided royal history walk",
            "Official Palace souvenir programme and audio guide",
            "Complimentary afternoon tea at a nearby royal warrant holder",
        ],
    },
    activity5: {
        image: TajMahal,
        title: "Taj Mahal Sunrise Tour",
        location: "Agra, India",
        category: "Heritage Tour",
        duration: "5 Hours",
        groupSize: 10,
        availableSpots: 3,
        price: "$180",
        description: `There are moments in travel that divide life into before and after — and watching the sun rise over the Taj Mahal is emphatically one of them. This expertly guided dawn experience grants you access to the monument before the daily crowds arrive, in the precious early minutes when the white Makrana marble shifts from pale rose through amber to pure ivory as the sun ascends. Your Mughal history specialist will walk you through Shah Jahan's extraordinary story of grief and devotion, decoding the Persian inscriptions, the mathematical symmetry of the gardens, and the 28 varieties of inlaid semi-precious stone that make every panel a masterwork. Afterwards, visit the less-visited Mehtab Bagh (Moonlight Garden) for the reverse view across the Yamuna River.`,
        included: [
            "Dawn entry ticket before general public opening",
            "Dedicated Mughal history specialist guide",
            "Mehtab Bagh (Moonlight Garden) sunset return visit",
            "Agra Fort guided tour with priority access",
            "Traditional Awadhi breakfast at a heritage haveli",
            "All entrance fees, taxes, and round-trip Agra hotel transfers",
        ],
    },
    activity6: {
        image: CookingClass,
        title: "Pasta & Tiramisu Cooking Class",
        location: "Rome, Italy",
        category: "Culinary Experience",
        duration: "4 Hours",
        groupSize: 8,
        availableSpots: 5,
        price: "$110",
        description: `In the heart of Trastevere — Rome's most characterful neighbourhood of cobbled lanes and ivy-draped terraces — a fifth-generation Roman chef opens the doors of her family kitchen to share the secrets that no restaurant will tell you. This intimate four-hour culinary workshop begins with a guided morning market visit to source seasonal ingredients, before moving to the kitchen where you'll hand-roll fresh egg pasta, craft three traditional Roman sauces, and assemble the most authentic tiramisu outside a Roman nonna's dining room. You will eat your creations at a long table with fellow travellers over a glass of local Frascati, leaving with recipes, technique, and a new understanding of why Romans consider their cuisine an art form.`,
        included: [
            "Morning market visit with the chef to source ingredients",
            "Hands-on pasta making: tagliatelle, cacio e pepe and carbonara",
            "Classic Roman tiramisu preparation from scratch",
            "Sit-down lunch with your creations and Frascati wine pairings",
            "Printed recipe booklet to take home",
            "Small group of maximum 8 guests for a fully personalised experience",
        ],
    },
};

const ActivitiesLayout = () => {
    const { activityId } = useParams();
    const currentActivity = ActivitiesData[activityId];

    return (
        <>
            {currentActivity && (
                <SubPageHeader
                    imagePath={currentActivity.image}
                    title={currentActivity.title}
                    subtitle={currentActivity.location}
                />
            )}
            <ActivityDetailContent activity={currentActivity} />
        </>
    );
};

export default ActivitiesLayout;
