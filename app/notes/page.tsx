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
import gal from '../../public/sem6/milne.jpg'

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
              bg-gradient-to-r from-red-500 via-orange-600 to-amber-500
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
                <Link href="../" className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-400 bg-clip-text text-transparent hover:text-amber-200 transition-colors">
                  About
                </Link>
              </Button>

              <Button variant="link" className="underline text-amber-500">
                <Link href="../notes" className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-400 bg-clip-text text-transparent hover:text-amber-200 transition-colors">
                  Notes
                </Link>
              </Button>

              <Button variant="link">
                <Link href="../projects" className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-400 bg-clip-text text-transparent hover:text-amber-200 transition-colors">
                  Projects
                </Link>
              </Button>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://orcid.org/0009-0007-1508-1746" className="text-teal-600 hover:text-amber-200 transition-colors">
                    <FaOrcid className="w-6 h-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  ORCID Id.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://github.com/sayan1729" className="text-gray-500 hover:text-amber-200 transition-colors">
                    <FaGithub className="w-6 h-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  GitHub.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="https://www.linkedin.com/in/sdas13/" className="text-cyan-600 hover:text-amber-200 transition-colors">
                    <FaLinkedin className="w-6 h-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  LinkedIn.
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>  
                <Link href="../cv.pdf" className="text-amber-400 hover:text-amber-200 transition-colors">
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
              <h2 className="text-lg font-semibold bg-gradient-to-r from-red-500 via-orange-400 to-red-600 bg-clip-text text-transparent">Notes</h2>
              <p className="text-red-300 text-sm max-w-2xl">
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

            <h3 className="text-lg font-semibold bg-gradient-to-r  from-red-500 via-orange-400 to-red-600 bg-clip-text text-transparent">Semester 3</h3>
            <p className="text-red-300 text-sm max-w-2xl">
              <Link href="../../sem3/ant.pdf" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">
                Algebraic Number Theory.
              </Link>
            </p>

            <h3 className="text-lg font-semibold bg-gradient-to-r  from-red-500 via-orange-400 to-red-600 bg-clip-text text-transparent">Semester 4</h3>
            <p className="text-red-300 text-sm max-w-2xl">
              <Link href="../../sem4/la.pdf" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">
                Linear Algebra.
              </Link>
            </p>

            <h3 className="text-lg font-semibold bg-gradient-to-r  from-red-500 via-orange-400 to-red-600 bg-clip-text text-transparent">Semester 6</h3>
            <p className="text-red-300 text-sm max-w-2xl">
              <Link href="../../sem6/galois.pdf" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">
                Field Theory and Canonical Forms of Matrices.
              </Link>
            </p>
                    
          </motion.section>
          
        </main>
      </div>
    </div>
  );
}