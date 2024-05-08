"use server";

export const dynamic = "force-dynamic";

async function call(meta: any) {
  return await fetch("https://tail-track.vercel.app/api/v1/analytics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "App-token": process.env.APP_TOKEN!,
    },
    body: JSON.stringify({ namespace: "portfolio-viper", meta }),
  });
}
async function track(meta: Record<string, string>, retry = 0) {
  try {
    if (!process.env.APP_TOKEN) return;
    if (process.env.NODE_ENV === "production") {
      const res = await call(meta);
      if (!res.ok) {
        if (retry < 3) setTimeout(() => track(meta, retry + 1), 1000);
      }
    } else {
      console.log("Calling Tail Track with: ", meta);
    }
  } catch (error) {
    if (retry < 3) setTimeout(() => track(meta, retry + 1), 1000);
  }
}

export default track;
