"use client"

import Image from "next/image";
import pic from "../../public/pic.jpg";
import {motion} from 'framer-motion';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaNoteSticky, FaOrcid} from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Card, CardContent } from "@/components/ui/card";

import ant from '../../public/sem3/specZi.png'
import la from '../../public/sem4/la.png'

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-xl px-4 py-20">
        {/*Header*/}

        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            flex flex-col items-center
            md:flex-row md:items-center md:justify-start
            gap-6 mb-12
          "
        >
          {/* Profile picture */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="w-28 h-28 rounded-full overflow-hidden shrink-0">
                <Image
                  src={pic}
                  alt="Picture taken at Marina Bay, Singapore."
                  className="cursor-pointer transition-all duration-300 hover:scale-110"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Picture taken at Marina Bay, Singapore.</p>
            </TooltipContent>
          </Tooltip>

          {/* Name header */}
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-4xl font-bold 
              bg-gradient-to-r from-indigo-500 via-cyan-600 to-teal-500
              bg-clip-text text-transparent
              text-center md:text-left
            "
          >
            Sayan Das
          </motion.h1>
        </motion.header>


        {/*Main section*/}
        <main className="space-y-10">
          <section className="space-y-5">
            {/*Buttons tray*/}

            <motion.div
              initial={{opacity: 0, x: 50}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="flex items-center gap-1.5"

            >
              <Button variant="link">
                <Link href="../../" className="bg-gradient-to-r from-cyan-500 via-blue-400 to-indigo-400 bg-clip-text text-transparent hover:text-cyan-200 transition-colors">
                  About
                </Link>
              </Button>

              <Button variant="link" className="underline text-cyan-500">
                <Link href="../../notes" className="bg-gradient-to-r from-cyan-500 via-blue-400 to-indigo-400 bg-clip-text text-transparent hover:text-cyan-200 transition-colors">
                  Notes
                </Link>
              </Button>

              <Button variant="link">
                <Link href="../../projects" className="bg-gradient-to-r from-cyan-500 via-blue-400 to-indigo-400 bg-clip-text text-transparent hover:text-cyan-200 transition-colors">
                  Projects
                </Link>
              </Button>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://orcid.org/0009-0007-1508-1746" className="text-teal-600 hover:text-cyan-200 transition-colors">
                    <FaOrcid className="w-6 h-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  ORCID Id.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://github.com/sayan1729" className="text-gray-500 hover:text-cyan-200 transition-colors">
                    <FaGithub className="w-6 h-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  GitHub.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://www.linkedin.com/in/sdas13/" className="text-cyan-600 hover:text-cyan-200 transition-colors">
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  LinkedIn.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>  
                <Link href="../../cv.pdf" className="text-amber-400 hover:text-cyan-200 transition-colors">
                  <FaNoteSticky className="w-6 h-6" />
                </Link>
                </TooltipTrigger>
                <TooltipContent>
                  Curriculum vitae.
                </TooltipContent>
              </Tooltip>
            </motion.div>

            {/*Notes section*/}
            <motion.div
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="space-y-3"

            >
              <h2 className="text-lg font-semibold bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600 bg-clip-text text-transparent">Notes</h2>
              <p className="text-gray-400 text-sm max-w-2xl">
                Below are some notes that I took over the course of my undergraduate studies.
              </p>
            </motion.div>
          </section>

          <motion.section
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="space-y-3"
          
          >

            <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">Semester 3</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

              <Card className="bg-zinc-900 border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image alt="40% adjusted returns." src={ant} className="rounded-lg mb-4"/>

                  <div className="flex items-center justify-between">

                    <div>
                      <h3 className="font-medium">Algebraic Number Theory</h3>
                      <p className="text-sm text-gray-400">
                         An NPTEL IISc course taught by Prof. Mahesh Kakde.
                      </p>
                    </div>

                    <Button variant="ghost" size="icon">
                      <Link href="../../sem3/ant.pdf">-&gt;</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
            </div>
              
            <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">Semester 4</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

              <Card className="bg-zinc-900 border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image alt="40% adjusted returns." src={la} className="rounded-lg mb-4"/>

                  <div className="flex items-center justify-between">

                    <div>
                      <h3 className="font-medium">Linear Algebra</h3>
                      <p className="text-sm text-gray-400">
                         A second course in linear algebra, following Axler&lsquo;s book.
                      </p>
                    </div>

                    <Button variant="ghost" size="icon">
                      <Link href="../../sem4/la.pdf">-&gt;</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
            </div>
          </motion.section>
          
        </main>
      </div>
    </div>
  );
}