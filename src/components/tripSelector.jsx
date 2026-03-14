import {
  Button,
  FormLabel,
  Input,
  Option,
  Select,
} from "@mui/joy";
import "../index.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const TripSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="trip-selector">
      <div className="inputHolder">
        <FormLabel className="trip-selector-label">
          Select Your destination
        </FormLabel>
        <Select
          sx={{ color: "white" }}
          endDecorator={
            isOpen ? (
              <IoIosArrowUp style={{ color: "white" }} />
            ) : (
              <IoIosArrowDown style={{ color: "white" }} />
            )
          }
          onClick={toggleSelect}
          indicator={null}
          className="Inupt"
          placeholder="where to?"
        >
          <Option onClick={() => setIsOpen(false)} value="beach">
            Beach Getaway
          </Option>
          <Option onClick={() => setIsOpen(false)} value="mountain">
            Mountain Adventure
          </Option>
          <Option onClick={() => setIsOpen(false)} value="city">
            City Exploration
          </Option>
        </Select>
      </div>

      <div className="inputHolder">
        <FormLabel className="trip-selector-label">check-in date</FormLabel>
        <Input
          sx={{
            background: "transparent",
            border: "none",
            boxShadow: "none",
            color: "white",
            "&:focus-within::before": {
              boxShadow: "none",
            },
          }}
          type="date"
          className="Inupt"
          placeholder="check-out date"
        />
      </div>

      <div className="inputHolder">
        <FormLabel className="trip-selector-label">check-out date</FormLabel>
        <Input
          sx={{
            background: "transparent",
            border: "none",
            boxShadow: "none",
            color: "white",
            "&:focus-within::before": {
              boxShadow: "none",
            },
          }}
          type="date"
          className="Inupt"
          placeholder="check-out date"
        />
      </div>

      <div className="inputHolder">
        <FormLabel className="trip-selector-label">guests</FormLabel>
        <Input
          type="text"
          sx={{
            "&:focus-within::before": {
              boxShadow: "none",
            },
          }}
          className="Inupt"
          placeholder="number of guests"
        />
      </div>
      <Button id="search-btn">search</Button>
    </div>
  );
};
export default TripSelector;
