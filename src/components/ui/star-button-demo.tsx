"use client";

import { StarButton } from "@/components/ui/star-button";
import { useState } from "react";
 
export default function StarButtonDemo() {
  // Simple lightColor toggle based on common themes if next-themes is not available or used here
  const [lightColor, setLightColor] = useState("#FAFAFA");
 
  return (
    <div className="flex items-center justify-center min-h-[10rem] bg-black">
      <StarButton lightColor={lightColor} className="rounded-3xl">
        Button
      </StarButton>
    </div>
  );
}
