"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Brush, Code } from "lucide-react";

export function HeroScrollDemo() {
  return (
    <div id="hero" className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div className="flex flex-col items-center justify-center mb-8">
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Kreative <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  Webdesign-Lösungen
                </span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Ich gestalte einzigartige digitale Erlebnisse, die dein Unternehmen zum Strahlen bringen.
              </p>
            </div>
          </>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 h-full">
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex items-center space-x-3">
              <Brush className="h-8 w-8 text-blue-500" />
              <h3 className="text-xl font-bold">Kreatives Design</h3>
            </div>
            <p className="text-muted-foreground">
              Einzigartige und ansprechende Designs, die deine Marke perfekt repräsentieren.
            </p>
            
            <div className="flex items-center space-x-3 mt-6">
              <Code className="h-8 w-8 text-purple-500" />
              <h3 className="text-xl font-bold">Moderne Technologien</h3>
            </div>
            <p className="text-muted-foreground">
              Entwicklung mit den neuesten Webtechnologien für optimale Performance und Benutzerfreundlichkeit.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              alt="Webdesign Workspace"
              className="rounded-lg object-cover h-full w-full shadow-lg"
            />
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}