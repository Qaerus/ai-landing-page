import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-white text-white font-sans">
      <section className="text-center py-20 px-4 sm:px-8 lg:px-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
          Book More Sales Calls with <br /> AI-Powered Cold Email
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Built for outreach teams that value quality over volume.
        </p>
        <Button className="text-lg py-6 px-10">Schedule a Call</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 pb-20">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-black">Smart Cold Outreach</h3>
            <p className="text-gray-700">
              AI-personalized messages sent to decision makers in your niche.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-black">Live Inbox Testing</h3>
            <p className="text-gray-700">
              Pre-warmed domains and inbox rotation ensure your emails land.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-black">Conversion-Focused</h3>
            <p className="text-gray-700">
              Calendly links, offer framing, and smart follow-ups drive bookings.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center px-4 py-20 bg-white text-black">
        <blockquote className="text-xl md:text-2xl italic max-w-2xl mx-auto mb-6">
          "With NyneCom, we've launched 100+ campaigns and consistently filled our sales pipeline."
        </blockquote>
        <div className="flex justify-center items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="John Smith"
            className="w-12 h-12 rounded-full"
          />
          <div className="text-left">
            <p className="font-semibold">John Smith</p>
            <p className="text-sm text-gray-600">CEO of Acme Corp</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-black">Book a Strategy Call</h2>
        <div className="max-w-xl mx-auto">
          <iframe
            src="https://calendly.com/nynecom/outstrategy-call"
            width="100%"
            height="600"
            frameBorder="0"
            className="rounded-xl border border-gray-300 shadow-md"
            title="Schedule Call"
          ></iframe>
        </div>
      </section>

      <footer className="bg-white py-10 px-4 text-center">
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <img src="/logos/apollo.svg" alt="Apollo" className="h-10" />
          <img src="/logos/instantly.svg" alt="Instantly" className="h-10" />
          <img src="/logos/dropcontact.svg" alt="Dropcontact" className="h-10" />
        </div>
        <p className="mt-6 text-sm text-gray-600">© 2025 NyneCom. All rights reserved.</p>
      </footer>
    </div>
  );
}
