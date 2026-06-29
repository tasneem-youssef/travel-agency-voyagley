import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";

import Typography from "@mui/joy/Typography";
import { useNavigate } from 'react-router-dom'
import LoveButton from "../LoveButton";
import { TripsData } from "./TripsLayout.jsx"

const TripsTab = () => {
  const navigate = useNavigate()
  return (
    <div className="TabHolder">
      <div className="tripsTabs">
        {Object.values(TripsData).map((trip, i) => (
          <Card
            key={i}
            onClick={() => navigate(`/trips/trip${i + 1}`)}
            className="Card"
            variant="plain"
            sx={{ width: "18em", bgcolor: "initial", p: 0, borderRadius: "12px" }}
          >
            <Box
              sx={{ position: "relative" }}
            >
              <AspectRatio ratio="4/3">
                <figure>
                  <img src={trip.image} loading="lazy" alt={trip.title} />
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
                    "background: linear-gradient(180deg,rgba(0, 0, 0, 0.81) 20%, rgba(0, 0, 0, 1) 100%);",
                }}>
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
                    <Typography level="h2" sx={{
                      fontSize: "lg",
                      color: "#fff",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      display: "block",
                    }}>
                      {trip.title}
                    </Typography>
                    <span style={{ color: "white" }}>{trip.city}</span>
                    <LoveButton />
                  </Box>
                </div>

              </CardCover>
            </Box>

          </Card>

        ))}
      </div>
      <a className="pageLink" href="/travel-agency-voyagley/trips">show more...</a>
    </div>
  );
};
export default TripsTab;
