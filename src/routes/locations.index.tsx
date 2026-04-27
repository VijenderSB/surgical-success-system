import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CITIES, type CityTier } from "@/data/cities";

const SITE_URL = "https://visiongrowth.lovable.app";

export const Route = createFileRoute("/locations/")({
  head: () => {
    const title = "Eyecare Marketing Agency Locations Across India | 40+ Cities";
    const description =
      "VisionGrowth serves eye hospitals & ophthalmologists across 40+ Indian metros, Tier 1 and Tier 2 cities — Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Kolkata, Pune and more. Find your city.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `${SITE_URL}/locations` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/locations` }],
    };
  },
  component: LocationsIndex,
});

function LocationsIndex() {
  const tiers: CityTier[] = ["Metro", "Tier 1", "Tier 2"];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-success">
          <MapPin className="h-3.5 w-3.5" /> Pan-India coverage
        </div>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Eyecare growth, in every Indian city that matters
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
          From Metro hubs to Tier 2 powerhouses — choose your city to see how we'd grow your practice locally.
        </p>

        {tiers.map((tier) => {
          const list = CITIES.filter((c) => c.tier === tier);
          return (
            <div key={tier} className="mt-14">
              <h2 className="text-2xl font-bold tracking-tight">
                {tier} <span className="text-muted-foreground">· {list.length} cities</span>
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {list.map((city) => (
                  <Link
                    key={city.slug}
                    to="/locations/$city"
                    params={{ city: city.slug }}
                    className="group"
                  >
                    <Card className="h-full border-border/60 bg-card p-5 transition hover:border-success/40 hover:shadow-soft">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xs uppercase tracking-wider text-muted-foreground">{city.state}</div>
                          <div className="mt-1 text-lg font-semibold">{city.name}</div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:text-success" />
                      </div>
                      <p className="mt-3 line-clamp-2 text-xs text-muted-foreground">{city.intro}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}
