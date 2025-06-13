import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarDays, Phone, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-6">
        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-center mb-2">Get More Leads Without Lifting a Finger</h1>
            <p className="text-center text-gray-600 mb-6">
              We help local businesses like yours book qualified appointments on autopilot using cold email + AI-enhanced targeting.
            </p>
            <div className="space-y-4">
              <div className="text-lg font-semibold">Schedule Your Free Strategy Call:</div>
              <iframe
                src="https://calendly.com/your-scheduling-link"
                width="100%"
                height="500"
                className="border-none rounded-xl"
                title="Book Appointment"
              />
            </div>
            <div className="mt-6 text-sm text-gray-500 text-center">
              Questions? <Mail className="inline w-4 h-4" /> team@youragency.com
            </div>
          </CardContent>
        </Card>
        <div className="text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Dustin Jones Outreach. All rights reserved.
        </div>
      </div>
    </div>
  );
}
