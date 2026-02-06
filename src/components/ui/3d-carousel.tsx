"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
    AnimatePresence,
    motion,
    useAnimation,
    useMotionValue,
    useTransform,
} from "framer-motion"

const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        const matchMedia = window.matchMedia(query)
        setMatches(matchMedia.matches)

        const handleChange = () => setMatches(matchMedia.matches)
        matchMedia.addEventListener("change", handleChange)

        return () => matchMedia.removeEventListener("change", handleChange)
    }, [query])

    return matches
}

const duration = 0.15
const transition: any = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" }
const transitionOverlay: any = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(
    ({
        handleClick,
        controls,
        cards,
        isCarouselActive,
    }: {
        handleClick: (imgUrl: string, index: number) => void
        controls: any
        cards: string[]
        isCarouselActive: boolean
    }) => {
        const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
        const cylinderWidth = isScreenSizeSm ? 1200 : 2200
        const faceCount = cards.length
        const faceWidth = cylinderWidth / faceCount
        const radius = cylinderWidth / (2 * Math.PI)
        const rotation = useMotionValue(0)
        const transform = useTransform(
            rotation,
            (value) => `rotate3d(0, 1, 0, ${value}deg)`
        )

        return (
            <div
                className="flex h-full items-center justify-center"
                style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                }}
            >
                <motion.div
                    drag={isCarouselActive ? "x" : false}
                    className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
                    style={{
                        transform,
                        rotateY: rotation,
                        width: cylinderWidth,
                        transformStyle: "preserve-3d",
                    }}
                    onDrag={(_, info) =>
                        isCarouselActive &&
                        rotation.set(rotation.get() + info.offset.x * 0.05)
                    }
                    onDragEnd={(_, info) =>
                        isCarouselActive &&
                        controls.start({
                            rotateY: rotation.get() + info.velocity.x * 0.05,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                damping: 30,
                                mass: 0.1,
                            },
                        })
                    }
                    animate={controls}
                >
                    {cards.map((imgUrl, i) => (
                        <motion.div
                            key={`key-${imgUrl}-${i}`}
                            className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
                            style={{
                                width: `${faceWidth}px`,
                                transform: `rotateY(${i * (360 / faceCount)
                                    }deg) translateZ(${radius}px)`,
                            }}
                            onClick={() => handleClick(imgUrl, i)}
                        >
                            <motion.img
                                src={imgUrl}
                                alt={`Photo ${i}`}
                                layoutId={`img-${imgUrl}-${i}`}
                                className="pointer-events-none w-full rounded-xl object-cover aspect-[3/4]"
                                initial={{ filter: "blur(4px)" }}
                                layout="position"
                                animate={{ filter: "blur(0px)" }}
                                transition={transition}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        )
    }
)

export function ThreeDPhotoCarousel({ images }: { images: string[] }) {
    const [activeCard, setActiveCard] = useState<{ url: string; index: number } | null>(null)
    const [isCarouselActive, setIsCarouselActive] = useState(true)
    const controls = useAnimation()

    const cards = useMemo(() => images, [images])

    const handleClick = (imgUrl: string, index: number) => {
        setActiveCard({ url: imgUrl, index })
        setIsCarouselActive(false)
        controls.stop()
    }

    const handleClose = () => {
        setActiveCard(null)
        setIsCarouselActive(true)
    }

    return (
        <motion.div layout className="relative">
            <AnimatePresence mode="sync">
                {activeCard && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        layoutId={`img-container-${activeCard.url}-${activeCard.index}`}
                        layout="position"
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4 md:p-12 lg:p-24 backdrop-blur-md"
                        style={{ willChange: "opacity" }}
                        transition={transitionOverlay}
                    >
                        <motion.img
                            layoutId={`img-${activeCard.url}-${activeCard.index}`}
                            src={activeCard.url}
                            className="max-w-full max-h-full rounded-xl shadow-2xl"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{
                                delay: 0.2,
                                duration: 0.5,
                                ease: [0.25, 0.1, 0.25, 1],
                            } as any}
                            style={{
                                willChange: "transform",
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="relative h-[500px] md:h-[650px] w-full overflow-hidden">
                <Carousel
                    handleClick={handleClick}
                    controls={controls}
                    cards={cards}
                    isCarouselActive={isCarouselActive}
                />
            </div>
        </motion.div>
    )
}
