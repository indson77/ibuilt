
import React from "react";
import Stats from "./stats-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EyeIcon, Icon, icons, RocketIcon, UsersIcon } from "lucide-react";

const LiveBadge = () => {
    return (
        <Badge
            variant="outline"
            className="mb-6 rounded-full border-pink-300 bg-pink-100 px-4 py-3 text-pink-700"
        >
            <span className="relative flex h-2 w-2 ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>


            Join thousands of creators sharing their work
        </Badge>
    );
};

const statsData = [
    {
        icons: RocketIcon,
        value: "2.5k+",
        label: "Project shared" ,
        hasBorder :false
    },
    {
        icons: UsersIcon,
        value: "10k+",
        label: "Active creators" ,
        hasBorder : true
    },
    {
        icons: EyeIcon,
        value: "50k+",
        label: "Monthly visitors" ,
        hasBorder : false
    }

]

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-background via-background to-pink-100/60">
            <div className="wrapper">
                <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center">
                    <LiveBadge />

                    <h1 className="max-w-4xl text-3xl font-bold tracking-wide text-foreground sm:text-6xl lg:text-7xl">
                        Share What You've Built,
                        <span className="block text-pink-600">
                            Discover What's Launching
                        </span>
                    </h1>

                    <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                        A community platform for creators to showcase their apps, AI tools,
                        SaaS products, and creative projects. Authentic launches, real
                        builders, genuine feedback.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Button
                            size="lg"
                            className="bg-pink-600 px-7 py-3 text-white hover:bg-pink-700"
                        >
                            Share Your Project
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-pink-300 px-7 py-3 hover:bg-pink-50"
                        >
                            Explore Projects
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-2xl w-full mt-10 ">
                        {statsData.map((stat) => (
                            <Stats key={stat.label} {...stat} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

