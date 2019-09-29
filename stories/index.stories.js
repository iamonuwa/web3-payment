import { storiesOf } from "@storybook/react";
import React from "react";
import Payment from "../lib/Payment.es";

storiesOf("Payment Component", module).add("Component with no props", () => <Payment />);
