'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import rytr from '@/assets/rytr.png'
import ecommerce from '@/assets/ecommerce.png'
// import rytr from '@/assets/rytr.png'

const projects = [
  {
    title: 'Parking Lots Management and Booking System',
    description: 'A comprehensive healthcare management system with appointment scheduling, patient records, and telemedicine capabilities.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800',
    tags: ['Django', 'Stripe', 'PostgreSQL', 'Django-channels'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Rytr (Personal Note taking app with Task Planner)',
    description: 'A feature-rich Notion like note taking app with extra capabilities.',
    image: rytr,
    tags: ['React.Js', 'Go', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Django, PostgreSQL and TailwindCSS with inventory management and analytics.',
    image: ecommerce,
    tags: ['Python','Django', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Auction Platform',
    description: 'An Auction platform',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800',
    tags: ['React', 'Firebase', 'Socket.io', 'Redux'],
    demoUrl: '#',
    githubUrl: '#',
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-16 pb-16">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6 border-2 hover:border-violet-800 hover:text-violet-800 dark:hover:bg-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our portfolio of successful projects where we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={100}
                  width={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}