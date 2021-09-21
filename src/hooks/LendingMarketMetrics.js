import { useState } from "react";
import axios from "axios";
import { usePoller } from "eth-hooks";

export default function useLendingMarketMetrics(pollTime) {
  const [metrics, setMetrics] = useState(0);

  const pollPrice = () => {
    async function getMetrics() {
      try {
        const response = await axios.get('https://api.defiscore.io/earn/opportunities');
        let temp = [response.data.data[0], response.data.data[16]];
        setMetrics(temp)
      } catch (error) {
        console.error(error);
      }

    }
    getMetrics();
  };
  usePoller(pollPrice, pollTime || 9777);

  return metrics;
}
