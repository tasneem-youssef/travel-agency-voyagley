import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import LoveButton from "../LoveButton";
import { HotelsData } from "./hotelsLayout.jsx";

const HotelsTab = () => {
  return (
    <div className="TabHolder">
      <div className="Hotelstabs">
        {Object.values(HotelsData).map((hotel, i) => (
          <Card
            onClick={() => navigate(`/hotels/hotel${i + 1}`)}
            key={i}
            className="Card"
            variant="plain"
            sx={{ width: "18em", bgcolor: "initial", p: 0, borderRadius: "12px" }}
          >
            <Box sx={{ position: "relative" }}>
              <AspectRatio ratio="4/3">
                <figure>
                  <img
                    src={hotel.image}
                    loading="lazy"
                    alt={hotel.name}
                  />
                </figure>
              </AspectRatio>
              <CardCover
                className="gradient-cover"
                sx={{
                  "&:hover": {
                    opacity: 1,
                  },
                  opacity: 0,
                  transition: "0.1s ease-in",
                  background:
                    "linear-gradient(180deg,rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.5) 100%);",
                }}
              >
                <div>
                  <Box
                    sx={{
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      flexGrow: 1,
                      alignSelf: "flex-end",
                    }}
                  >
                    <Typography level="h2" sx={{ fontSize: "lg" }}>
                      <Link
                        overlay
                        underline="none"
                        sx={{
                          color: "#fff",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          display: "block",
                        }}
                      >
                        {hotel.name}
                      </Link>
                    </Typography>
                    <span style={{ color: "white" }}>{hotel.city}</span>
                    <LoveButton />
                  </Box>
                </div>
              </CardCover>
            </Box>
          </Card>
        ))}

      </div>

      <a className="pageLink" href="/travel-agency-voyagley/hotels">
        show more...
      </a>
    </div>
  );
};
export default HotelsTab;
