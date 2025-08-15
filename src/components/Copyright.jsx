import { useState } from "react";
export default function Copyright() {
  const [year, setyear] = useState(new Date().getFullYear());
  return (
    <p className="text-center mt-6 text-sm text-gray-400">
      © {year} TheUnsaid. A safe space for honest thoughts.
    </p>
  );
}
