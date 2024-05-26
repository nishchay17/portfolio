"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import track from "@/lib/tail-track";

function Track() {
  const params = useSearchParams();
  useEffect(() => {
    track({ type: "visit-landing", ref: params.get("ref") ?? "" });
  }, []);
  return null;
}

export default Track;
