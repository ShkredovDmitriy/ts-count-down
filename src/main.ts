import "./style.css";
import "./countdown.scss";

import { setupCountdown } from "./countdown";

const countWrapper = document.getElementById("countWrapper");
const endTime = new Date().getTime() + 86400000 * 2;
// const endTime = new Date("Jan 8, 2025 00:00:01").getTime();
setupCountdown(countWrapper, endTime);
