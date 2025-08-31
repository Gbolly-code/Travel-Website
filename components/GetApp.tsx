'use client'

import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}



const GetApp = () => {

  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <motion.div className="get-app"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}>
        <motion.div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12"
        variants={containerVariants}>
          <motion.h2 className="bold-40 lg:bold-64 xl:max-w-[320px]"
          variants={itemVariants}>Get for free now!</motion.h2>
          <motion.p className="regular-16 text-gray-10"
          variants={itemVariants}>Available on iOS and Android</motion.p>
          <motion.div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row"
          variants={itemVariants}>
            <Button 
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </motion.div>
        </motion.div>

        <motion.div className="flex flex-1 items-center justify-end"
        variants={itemVariants}>
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GetApp