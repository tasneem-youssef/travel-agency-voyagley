import TheSavoy from "../../images/The Savoy.webp";
import lemeurice from "../../images/Le Meurice Hotel.jpg";
import AthenaHotel from "../../images/Hotel Grande Bretagne.png";
import DoubleTree from "../../images/Double tree.avif";
import RomeHotel from "../../images/Hotel Hassler Roma.jpg";
import TurkeyHotel from "../../images/turkey hotel.jfif";
import SubPageHeader from "../subPageHeader.jsx";
import HotelDetailContent from "./HotelDetailContent.jsx";
import { useParams } from "react-router-dom";

const HotelsData = {
    hotel1: {
        image: TheSavoy,
        name: "The Savoy",
        location: "London, UK",
        stars: 5,
        category: "Luxury Heritage Hotel",
        wifi: true,
        pool: true,
        pricePerNight: "$620",
        description: `The Savoy is one of London's most iconic landmarks, opening its doors in 1889 as the first luxury hotel in Britain. Commissioned by impresario Richard D'Oyly Carte, it rose beside the Thames on the Strand and swiftly became the playground of royalty, artists, and celebrities — from Oscar Wilde and Claude Monet to Frank Sinatra and Marilyn Monroe. Its art deco and Edwardian interiors, meticulous restoration in 2010, and legendary afternoon tea in the Thames Foyer make it the gold standard of London hospitality. The hotel's courtyard remains the only road in Britain where traffic drives on the right.`,
        amenities: [
            "Private butler service for every suite",
            "Afternoon tea in the iconic Thames Foyer",
            "Savoy Health Club with indoor pool & spa",
            "Michelin-starred Simpson's in the Strand dining",
            "Complimentary Thames-view room upgrades (subject to availability)",
        ],
    },
    hotel2: {
        image: lemeurice,
        name: "Le Meurice",
        location: "Paris, France",
        stars: 5,
        category: "Palace Hotel",
        wifi: true,
        pool: false,
        pricePerNight: "$980",
        description: `Le Meurice stands as the jewel of Parisian palace hotels, gracing the Rue de Rivoli since 1835, directly opposite the Tuileries Garden. Its breathtaking Belle Époque salons — restored under the vision of designer Philippe Starck — are adorned with Venetian mirrors, gilded mouldings, and marble columns that evoke the Hall of Mirrors at Versailles. Napoleon III's favourite suite, the Dal Room where Salvador Dalí lived for decades, and three-Michelin-starred cuisine by Alain Ducasse make Le Meurice an experience beyond accommodation — it is a living monument to French art de vivre.`,
        amenities: [
            "Three-Michelin-star dining by Alain Ducasse",
            "Valmont Spa with personalised skin treatments",
            "Concierge access to exclusive Paris experiences",
            "Art collection curated by Philippe Starck",
            "Complimentary Tuileries Garden views from Terrace suites",
        ],
    },
    hotel3: {
        image: AthenaHotel,
        name: "Hotel Grande Bretagne",
        location: "Athens, Greece",
        stars: 5,
        category: "Luxury Historic Hotel",
        wifi: true,
        pool: true,
        pricePerNight: "$490",
        description: `Standing in the heart of Athens' Syntagma Square since 1874, the Grande Bretagne has hosted kings, prime ministers, Churchill, and the Kennedys. Its neoclassical façade gazes directly toward the Acropolis and the Hellenic Parliament, making it the most storied address in Greece. The hotel's rooftop pool and restaurant offer arguably the finest view of the Parthenon of any establishment on earth, while the Alexander the Great Presidential Suite stretches over 800 square metres of marble, silk, and antiquity — a suite fit for its namesake. Every detail whispers of Greece's golden age.`,
        amenities: [
            "Rooftop pool with panoramic Acropolis views",
            "GB Spa with hammam and signature olive oil treatments",
            "Gourmet dining at GB Roof Garden Restaurant",
            "Syntagma Square access steps from the entrance",
            "Private guided Acropolis tour at sunrise",
        ],
    },
    hotel4: {
        image: DoubleTree,
        name: "DoubleTree by Hilton",
        location: "Agra, India",
        stars: 4,
        category: "Contemporary Luxury Hotel",
        wifi: true,
        pool: true,
        pricePerNight: "$220",
        description: `Nestled on the East Gate Road directly opposite the world's most celebrated monument to love, the DoubleTree by Hilton Agra offers rooms with direct Taj Mahal views that few hotels on earth can rival. The hotel combines Hilton's signature warm welcome — a freshly baked chocolate chip cookie on arrival — with Mughal-inspired architecture, terracotta accents, and lush courtyards that echo the gardens of the Taj. Its rooftop restaurant delivers an unforgettable dining experience as the iconic white dome glows golden at sunset, transforming dinner into something close to magic.`,
        amenities: [
            "Rooftop restaurant with live Taj Mahal views",
            "Outdoor pool surrounded by Mughal garden landscape",
            "Authentic Mughlai cuisine at Shamiana Restaurant",
            "Hilton signature chocolate chip cookie welcome",
            "Curated Taj Mahal sunrise tour packages",
        ],
    },
    hotel5: {
        image: RomeHotel,
        name: "Hotel Hassler Roma",
        location: "Rome, Italy",
        stars: 5,
        category: "Grand Luxury Hotel",
        wifi: true,
        pool: false,
        pricePerNight: "$750",
        description: `Perched at the summit of the Spanish Steps since 1893, the Hassler Roma commands one of the most privileged addresses in all of Italy. Its penthouse suite looks down upon 138 travertine steps to the Piazza di Spagna below, while across the rooftops the dome of St. Peter's and the seven hills of Rome unfold in every direction. For generations it has been the Roman sanctuary of royalty, Hollywood legends, and heads of state — Gregory Peck, Audrey Hepburn, and Elizabeth Taylor all called it home. Today the Hassler blends timeless Roman grandeur with the warmth of a family-owned palace now in its fourth generation.`,
        amenities: [
            "Panoramic rooftop Imàgo restaurant with Michelin star",
            "Private chauffeur service in classic Italian automobiles",
            "In-room spa treatments by Bamford Haybarn Spa",
            "Exclusive Spanish Steps access and guided art walks",
            "Personal shopper service in the Via Condotti fashion district",
        ],
    },
    hotel6: {
        image: TurkeyHotel,
        name: "Çırağan Palace Kempinski",
        location: "Istanbul, Turkey",
        stars: 5,
        category: "Ottoman Palace Hotel",
        wifi: true,
        pool: true,
        pricePerNight: "$560",
        description: `The Çırağan Palace Kempinski is the only Ottoman imperial palace converted into a luxury hotel on the banks of the Bosphorus Strait. Built for Sultan Abdülaziz in 1874 and later used as the Ottoman parliament, its intricate marble façade rises directly from the water between two continents. The outdoor infinity pool — set against the shimmering Bosphorus with the Asian shore glimmering on the horizon — is frequently ranked among the most beautiful hotel pools in the world. To sleep here is to sleep within a fragment of empire, where centuries of Ottoman grandeur are woven into every carved column and gilded ceiling.`,
        amenities: [
            "Bosphorus-edge infinity pool between two continents",
            "Tugra Ottoman restaurant, one of Istanbul's finest",
            "Çırağan Spa with traditional hammam rituals",
            "Private Bosphorus yacht charter from the hotel jetty",
            "Dedicated concierge for palace and museum tours",
        ],
    },
};

const HotelsLayout = () => {
    const { hotelId } = useParams();
    const currentHotel = HotelsData[hotelId];

    return (
        <>
            {currentHotel && (
                <SubPageHeader
                    imagePath={currentHotel.image}
                    title={currentHotel.name}
                    subtitle={currentHotel.location}
                />
            )}
            <HotelDetailContent hotel={currentHotel} />
        </>
    );
};

export default HotelsLayout;
