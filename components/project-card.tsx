import { motion } from "framer-motion"

interface ProjectCardProps {
  id: string
  title: string
  tags?: string[]
  image: string
  state: "Expanded" | "Shrunk" | "None"
  onHover: (id: string) => void
  index?: number
  isLargeScreen: boolean
}

export default function ProjectCard({ id, title, tags, image, state, onHover, isLargeScreen }: ProjectCardProps) {
  const safeTags = Array.isArray(tags) ? tags : []

  const getWidth = () => {
    if (!isLargeScreen) return "100%"
    switch (state) {
      case "Expanded":
        return "calc(40% - 1rem)"
      case "Shrunk":
        return "calc(30% - 1rem)"
      default:
        return "calc(33.33% - 1rem)"
    }
  }

  return (
    <motion.div
      className="relative overflow-hidden bg-black h-64 w-full lg:w-[calc(33.33%)]"
      style={{ width: getWidth() }}
      onHoverStart={() => onHover(id)}
      onHoverEnd={() => onHover("")}
      animate={{ width: getWidth() }}
      transition={{ duration: 0.3 }}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <div className="relative h-full w-full group">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <motion.div
          className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        <motion.div
          className="absolute inset-0 flex flex-col justify-between p-6"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {safeTags.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ y: -20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {safeTags.map((tag, index) => (
                <span key={index} className="rounded bg-black/50 px-2 py-1 text-xs font-medium dark:text-white text-black">
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
          <h3 className="text-xl font-bold dark:text-white text-black">{title}</h3>
        </motion.div>
      </div>
    </motion.div>
  )
}

