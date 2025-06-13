import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to Dustin's AI Outreach Page</h1>
      <Card>
        <h3 className="text-xl font-semibold mb-2">Smart Outreach</h3>
        <p className="text-gray-600">AI-enhanced cold email systems to maximize replies.</p>
      </Card>
      <Button className="mt-6">Book a Demo Call</Button>
    </main>
  );
}