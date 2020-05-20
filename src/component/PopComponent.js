import React, { useState, useEffect } from "react";
import {
  UncontrolledPopover,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import { baseUrl } from "../shared/BaseUrl.js";

const PopComponent = (props) => {
  const [popOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!popOpen);
  };

  useEffect(() => {});

  return (
    <div>
      <UncontrolledPopover
        trigger="click"
        placement="bottom"
        isOpen={false}
        toggle={toggle}
      >
        <PopoverHeader>
          ICCID (Integrated Circuit Card Identifier)
        </PopoverHeader>
        <PopoverBody>
          A SIM card contains its unique serial number (ICCID). ICCIDs are
          stored in the SIM cards and are also printed on the SIM card during a
          personalisation process.
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  );
};

export default PopComponent;
