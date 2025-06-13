
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to Dustin's AI Outreach Page</h1>
      <Card title="Smart Outreach" description="AI-enhanced cold email systems to maximize replies." />
      <Button onClick={() => alert('Booked!')}>Book a Call</Button>
    </main>
  );
}
