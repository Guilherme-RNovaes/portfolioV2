import { TrafficConeIcon } from "lucide-react";
import React from "react";

export default function Production() {
  return (
    <div className="md:ml-64 xl:ml-68 flex flex-col items-center justify-center z-0 scroll-smooth">
      <div className="flex flex-col mt-[400px] items-center justify-center gap-6 text-blue-200">
        <TrafficConeIcon size={100} />
        <h1 className="text-2xl font-semibold">Ainda em produção...</h1>
      </div>
    </div>
  )
}
