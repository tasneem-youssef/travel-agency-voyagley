import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import LoveButton from "./LoveButton";
import TheSavoy from "../images/The Savoy.webp";
import lemeurice from "../images/Le Meurice Hotel.jpg";
import AthenaHotel from "../images/Hotel Grande Bretagne.png";
import DoubleTree from "../images/Double tree.avif";
import RomeHotel from "../images/Hotel Hassler Roma.jpg";
import TurkeyHotel from "../images/turkey hotel.jfif";
const HotelsTab = () => {
  return (
    <div>
      <div className="Hotelstabs">
        <Card
          className="Card"
          variant="plain"
          sx={{ width: "18em", bgcolor: "initial", p: 0, borderRadius: "12px" }}
        >
          <Box sx={{ position: "relative" }}>
            <AspectRatio ratio="4/3">
              <figure>
                <img
                  src={TheSavoy}
                  loading="lazy"
                  alt="The Savoy hotel in london"
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
                      The Savoy
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
                <img src={lemeurice} loading="lazy" alt="Le Meurice hotel" />
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
                      Le Meurice
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
                  src={AthenaHotel}
                  loading="lazy"
                  alt="Hotel Grande Bretagne"
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
                      Hotel Grande Bretagne
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
                  src={DoubleTree}
                  loading="lazy"
                  alt="Double tree by hilton"
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
                      Double tree by hilton
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
                <img src={RomeHotel} loading="lazy" alt="Hotel Hassler Roma" />
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
                      Hotel Hassler Roma
                    </Link>
                  </Typography>
                  <span style={{ color: "white" }}>Rome</span>
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
                  src={TurkeyHotel}
                  loading="lazy"
                  alt="Çırağan Palace Kempinski"
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
                      Çırağan Palace Kempinski{" "}
                    </Link>
                  </Typography>
                  <span style={{ color: "white" }}>istanbul</span>
                  <LoveButton />
                </Box>
              </div>
            </CardCover>
          </Box>
        </Card>
      </div>
      <Link className="pageLink" href="/hotels">
        show more...
      </Link>
    </div>
  );
};
export default HotelsTab;
