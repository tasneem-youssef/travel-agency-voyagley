import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import LoveButton from "./LoveButton";
import Rome from "../images/rome.jpg";
import milan from "../images/milan.jpg";
import liverpool from "../images/liverpool.jpg";
import london from "../images/london.jpg";
import Athens from "../images/athens.jpg";
import paris from "../images/paris.jpg";
import TAJMAHAL from "../images/Taj Mahal.jpg";
import HagiaSophia from "../images/Hagia Sophia .webp"
const TripsTab = () => {
  return (
    <div>
      <div className="tripsTabs">
        <Card
          className="Card"
          variant="plain"
          sx={{ width: "18em", bgcolor: "initial", p: 0, borderRadius: "12px" }}
        >
          <Box sx={{ position: "relative" }}>
            <AspectRatio ratio="4/3">
              <figure>
                <img src={Rome} loading="lazy" alt="Terrazza del Pincio" />
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
                      Villa Borghese
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
          sx={{ width: "18rem", bgcolor: "initial", p: 0, borderRadius: "12px" }}
        >
          <Box sx={{ position: "relative" }}>
            <AspectRatio ratio="4/3">
              <figure>
                <img
                  src={Athens}
                  loading="lazy"
                  alt="Parthenon"
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
                      Parthenon
                    </Link>
                  </Typography>
                  <span style={{ color: "white" }}>Athens</span>{" "}
                  <LoveButton />
                </Box>
              </div>
            </CardCover>
          </Box>
        </Card>

        <Card
          className="Card"
          variant="plain"
          sx={{ width: "18rem", bgcolor: "initial", p: 0, borderRadius: "12px" }}
        >
          <Box sx={{ position: "relative" }}>
            <AspectRatio ratio="4/3">
              <figure>
                <img
                  src={london}
                  loading="lazy"
                  alt="Tower Bridge in London Over Water"
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
                      Tower Bridge
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
          sx={{ width: "18rem", bgcolor: "initial", p: 0, borderRadius: "12px" }}
        >
          <Box sx={{ position: "relative" }}>
            <AspectRatio ratio="4/3">
              <figure>
                <img src={milan} loading="lazy" alt="Milan Cathedral" />
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
                      Milan Cathedral
                    </Link>
                  </Typography>
                  <span style={{ color: "white" }}>Milan</span>
                  <IconButton
                    size="sm"
                    variant="solid"
                    color="neutral"
                    sx={{
                      bgcolor: "transparent",
                      "&:hover": { backgroundColor: "transparent" },
                    }}
                  >
                    <LoveButton />
                  </IconButton>
                </Box>
              </div>
            </CardCover>
          </Box>
        </Card>

        <Card
          className="Card"
          variant="plain"
          sx={{ width: "18rem", bgcolor: "initial", p: 0, borderRadius: "12px" }}
        >
          <Box sx={{ position: "relative" }}>
            <AspectRatio ratio="4/3">
              <figure>
                <img
                  src={TAJMAHAL}
                  loading="lazy"
                  alt="TAJ MAHAL"
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
                      Taj Mahal
                    </Link>
                  </Typography>
                  <span style={{ color: "white" }}>Agara , India</span>
                  <LoveButton />
                </Box>
              </div>
            </CardCover>
          </Box>
        </Card>

        <Card
          className="Card"
          variant="plain"
          sx={{ width: "18rem", bgcolor: "initial", p: 0, borderRadius: "12px" }}
        >
          <Box sx={{ position: "relative" }}>
            <AspectRatio ratio="4/3">
              <figure>
                <img
                  src={liverpool}
                  loading="lazy"
                  alt="Iconic Royal Liver Building in Liverpool"
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
                      Royal Liver
                    </Link>
                  </Typography>
                  <span style={{ color: "white" }}>Liverpool</span>
                  <LoveButton />
                </Box>
              </div>
            </CardCover>
          </Box>
        </Card>

        <Card
          className="Card"
          variant="plain"
          sx={{ width: "18rem", bgcolor: "initial", p: 0, borderRadius: "12px" }}
        >
          <Box sx={{ position: "relative" }}>
            <AspectRatio ratio="4/3">
              <figure>
                <img
                  src={paris}
                  loading="lazy"
                  alt="eiffel tower"
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
                      eiffel tower
                    </Link>
                  </Typography>
                  <span style={{ color: "white" }}>paris</span>
                  <LoveButton />
                </Box>
              </div>
            </CardCover>
          </Box>
        </Card>

        <Card
          className="Card"
          variant="plain"
          sx={{ width: "18rem", bgcolor: "initial", p: 0, borderRadius: "12px" }}
        >
          <Box sx={{ position: "relative" }}>
            <AspectRatio ratio="4/3">
              <figure>
                <img
                  src={HagiaSophia}
                  loading="lazy"
                  alt="Hagia Sophia "
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
                      Hagia Sophia
                    </Link>
                  </Typography>
                  <span style={{ color: "white" }}>Istanbul</span>
                  <LoveButton />
                </Box>
              </div>
            </CardCover>
          </Box>
        </Card>
      </div>
      <Link className="pageLink" href="/trips">show more...</Link>
    </div>
  );
};
export default TripsTab;
