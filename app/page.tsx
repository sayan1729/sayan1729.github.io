"use client"

import Image from "next/image";
import pic from "../public/pic.jpg";
import {motion} from 'framer-motion';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {FaGithub, FaLinkedin, FaNoteSticky, FaOrcid} from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Home() {
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
              <Button variant="link" className="underline text-amber-500">
                <Link href="../" className="bg-gradient-to-r from-red-500 via-orange-400 to-amber-400 bg-clip-text text-transparent hover:text-amber-200 transition-colors">
                  About
                </Link>
              </Button>

              <Button variant="link">
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

            {/*About Me section*/}

            <motion.div
              initial={{opacity: 0, x: -100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              className="space-y-3"

            >
              <h2 className="text-lg font-semibold bg-gradient-to-r from-red-500 via-orange-400 to-red-600 bg-clip-text text-transparent">About Me</h2>
              <p className="text-red-300 text-sm max-w-2xl">
                Interested in number theory, automorphic forms, L-functions, representation theory and arithmetic geometry. Currently a fourth year maths undergrad at <Link href="https://jadavpuruniversity.in/" className="text-red-500 hover:text-amber-200 hover:underline transition-colors"> Jadavpur University (JU)</Link>, I have been reading Jacobson&apos;s <Link href="https://store.doverpublications.com/collections/math-algebra/products/9780486471877" className="text-pink-500 italic hover:text-amber-200 hover:underline transition-colors">Basic Algebra 1 & 2</Link>, Rudin&apos;s <Link href="https://www.mheducation.co.in/real-and-complex-analysis-9789355326119-india" className="text-pink-500 italic hover:text-amber-200 hover:underline transition-colors">Real and Complex Analysis</Link>, and Hatcher&apos;s <Link href="https://pi.math.cornell.edu/~hatcher/AT/ATpage.html" className="text-pink-500 italic hover:text-amber-200 hover:underline transition-colors">Algebraic Topology</Link>. 
              </p>

              {/* <p className="text-gray-400 text-sm max-w-2xl"> 
              
                I was ranked <Link href="https://jadavpuruniversity.in/storage/2023/07/BSc_Maths.pdf" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">49</Link> in the BSc Maths entrance exam for JU in the Other Boards General category. Remarkably, up until the night before the exam I had been working on <Link href="https://carlmariamikage.itch.io/gestalt" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">my game submission</Link> for the 2023 GMTK Game Jam on <Link href="https://itch.io/jam/gmtk-2023" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">itch.io</Link> !

                From July to October 2024, I was a <Link href="../isiml24/cert.pdf" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">Data Science Intern</Link> at ISI Kolkata supervised by <Link href="https://snehalikalall.github.io/" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">Dr. Snehalika Lall</Link>. During that time, I developed a machine learning model for S&P500 stock trading that generated <Link href="../isiml24/report.pdf" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">~40% adjusted returns</Link>. Since September 2024, I have also been the Content Team Assistant Convenor for the JU Math Society where I have been de facto leading the Content Team by conducting meetings, setting weekly problems and helping organise the event Mathemagician at Srijan 2025, the annual tech-fest of JU.
                
                I was <Link href="https://algo.csa.iisc.ac.in/winterschool24/participants.html" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">one of only 3 students selected from JU</Link> for the 2024 Winter School on Theoretical CS at IISc Bangalore. From January to April 2025, I completed a postgraduate level NPTEL IISc course on Algebraic Number Theory taught by <Link href="https://en.wikipedia.org/wiki/Mahesh_Kakde" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">Prof. Mahesh Kakde</Link> where I scored <Link href="https://nptel.ac.in/noc/E_Certificate/NPTEL25MA08S34950005504641748" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">71%</Link> and was the <Link href="https://nptel.ac.in/courses/111108609" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">only topper per course statistics</Link>. 
              </p> */}

              <p className="text-red-300 text-sm max-w-2xl">In July 2025, I was a <Link href="../isiant25/cert.pdf" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">Summer Research Intern</Link> at the ISI Kolkata supervised by <Link href="https://sites.google.com/site/satadalganguly/" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">Prof. Satadal Ganguly</Link>, culminating in a report on <Link href="../isiant25/report.pdf" className="text-red-500 hover:text-amber-200 hover:underline transition-colors">Selberg&apos;s elementary proof of the Prime Number Theorem</Link>. I intend to undertake a Masters or PhD in pure mathematics by the Winter 2027 cycle, possibly in Germany, France or the UK.
              </p>
              {/* <p className="text-gray-400 text-sm max-w-2xl">In my free time I love to read Virginia Woolf, Marcel Proust, Leo Tolstoy and Franz Kafka. I also love swimming, especially in summer.</p> */}

              <p className="text-red-300 text-m max-w-2xl">
                &ldquo; If you do not tell the truth about yourself you cannot tell it about other people. &rdquo; - Virginia Woolf, <Link href="https://www.gutenberg.net.au/ebooks15/1500221h.html#ch18" className="text-pink-500 italic hover:text-amber-200 hover:underline transition-colors">The Leaning Tower</Link>.
              </p>
            </motion.div>
          </section>

          
        </main>
      </div>
    </div>
  );
}
