import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import LoveButton from "../LoveButton";
import fourdayTour from "../../images/4-day tour.avif";
import disneyLand from "../../images/disnyLand.jpg";
import GreekTheater from "../../images/Ancient Greek Theater.avif";
import BuckinghamPalace from "../../images/Buckingham Palace.jpg";
import TajMahal from "../../images/Taj Mahal tour.avif";
import CookingClass from "../../images/cooking class.avif";
const ActivitesTab = () => {
  return (
    <div className="Activiestab">
      <Card
        className="Card"
        variant="plain"
        sx={{ width: "18em", bgcolor: "initial", p: 0, borderRadius: "12px" }}
      >
        <Box sx={{ position: "relative" }}>
          <AspectRatio ratio="4/3">
            <figure>
              <img
                src={fourdayTour}
                loading="lazy"
                alt="the ruins of the Library of Celsus"
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
                    4-Day Tour
                  </Link>
                </Typography>
                <span style={{ color: "white" }}>Istanbul</span>
                <LoveButton />
              </Box>
            </div>
          </CardCover>
        </Box>
      </Card>

      <Card
        className="Card"
        variant="plain"
        sx={{ width: "18em", bgcolor: "initial", p: 0, borderRadius: "12px" }}
      >
        <Box sx={{ position: "relative" }}>
          <AspectRatio ratio="4/3">
            <figure>
              <img src={disneyLand} loading="lazy" alt="disneyland paris" />
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
                    disneyland ticket
                  </Link>
                </Typography>
                <span style={{ color: "white" }}>Paris</span>
                <LoveButton />
              </Box>
            </div>
          </CardCover>
        </Box>
      </Card>

      <Card
        className="Card"
        variant="plain"
        sx={{ width: "18em", bgcolor: "initial", p: 0, borderRadius: "12px" }}
      >
        <Box sx={{ position: "relative" }}>
          <AspectRatio ratio="4/3">
            <figure>
              <img
                src={GreekTheater}
                loading="lazy"
                alt="Ancient Greek Theater"
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
                    Ancient Greek Theater Performance
                  </Link>
                </Typography>
                <span style={{ color: "white" }}>Athens</span>
                <LoveButton />
              </Box>
            </div>
          </CardCover>
        </Box>
      </Card>

      <Card
        className="Card"
        variant="plain"
        sx={{ width: "18em", bgcolor: "initial", p: 0, borderRadius: "12px" }}
      >
        <Box sx={{ position: "relative" }}>
          <AspectRatio ratio="4/3">
            <figure>
              <img
                src={BuckinghamPalace}
                loading="lazy"
                alt="Buckingham Palace"
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
                    Buckingham Palace
                  </Link>
                </Typography>
                <span style={{ color: "white" }}>London</span>
                <LoveButton />
              </Box>
            </div>
          </CardCover>
        </Box>
      </Card>

      <Card
        className="Card"
        variant="plain"
        sx={{ width: "18em", bgcolor: "initial", p: 0, borderRadius: "12px" }}
      >
        <Box sx={{ position: "relative" }}>
          <AspectRatio ratio="4/3">
            <figure>
              <img
                src={TajMahal}
                loading="lazy"
                alt="taj mahal"
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
                    taj mahal tour
                  </Link>
                </Typography>
                <span style={{ color: "white" }}>Agra</span>
                <LoveButton />
              </Box>
            </div>
          </CardCover>
        </Box>
      </Card>

      <Card
        className="Card"
        variant="plain"
        sx={{ width: "18em", bgcolor: "initial", p: 0, borderRadius: "12px" }}
      >
        <Box sx={{ position: "relative" }}>
          <AspectRatio ratio="4/3">
            <figure>
              <img
                src={CookingClass}
                loading="lazy"
                alt="Pasta and Tiramisu Cooking Class"
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
                    Pasta and Tiramisu Cooking Class
                  </Link>
                </Typography>
                <span style={{ color: "white" }}>Rome</span>
                <LoveButton />
              </Box>
            </div>
          </CardCover>
        </Box>
      </Card>
      <Link className="pageLink" href="/activities">show more...</Link>
    </div>
  );
};
export default ActivitesTab;
