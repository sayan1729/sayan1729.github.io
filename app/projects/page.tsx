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

import isiml24 from '../../public/isiml24/adjusted_returns.png'
import gtmk23 from '../../public/gmtk23/jump.png'
import numanal from '../../public/numanal/Methode_newton.png'

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

              <Button variant="link">
                <Link href="../notes" className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-400 bg-clip-text text-transparent hover:text-amber-200 transition-colors">
                  Notes
                </Link>
              </Button>

              <Button variant="link" className="underline text-amber-500">
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

            {/*Projects section*/}
            <motion.div
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="space-y-3"

            >
              <h2 className="text-lg font-semibold bg-gradient-to-r from-red-500 via-orange-400 to-red-600 bg-clip-text text-transparent">Projects</h2>
              <p className="text-red-300 text-sm max-w-2xl">
                Below are some of the projects that I&apos;ve worked on.
              </p>
            </motion.div>
          </section>

          <motion.section
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="space-y-3"
          
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Card className="bg-zinc-900 border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image alt="40% adjusted returns." src={isiml24} className="rounded-lg mb-4"/>

                  <div className="flex items-center justify-between">

                    <div>
                      <h3 className="font-medium text-red-500">ML Stock Trading</h3>
                      <p className="text-sm text-red-300">
                         Trained an ML model to execute optimal stock trades.
                      </p>
                    </div>

                    <Button variant="ghost" size="icon">
                      <Link href="https://github.com/sayan1729/ML-Optimal-Stock-Trading">-&gt;</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image alt="Anti-danmaku game." src={gtmk23} className="rounded-lg mb-4"/>

                  <div className="flex items-center justify-between">

                    <div>
                      <h3 className="font-medium text-red-500">Gestalt</h3>
                      <p className="text-sm text-red-300">
                         A 2D game made for the GMTK 2023 game jam in just 48 hours.
                      </p>
                    </div>

                    <Button variant="ghost" size="icon">
                      <Link href="https://carlmariamikage.itch.io/gestalt">-&gt;</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image alt="Numerical analysis algos in MATLBA." src={numanal} className="rounded-lg mb-4"/>

                  <div className="flex items-center justify-between">

                    <div>
                      <h3 className="font-medium text-red-500">Numerical Analysis</h3>
                      <p className="text-sm text-red-300">
                         Implemented some common numerical algorithms.
                      </p>
                    </div>

                    <Button variant="ghost" size="icon">
                      <Link href="https://github.com/sayan1729/Numerical-Analysis">-&gt;</Link>
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