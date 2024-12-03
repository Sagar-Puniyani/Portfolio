import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

const Certificates = () => {
  const certificates = [
    { title: 'AWS Certified Solutions Architect', link: '/certificates/aws-solutions-architect.pdf' },
    { title: 'Google Cloud Professional Data Engineer', link: '/certificates/google-cloud-data-engineer.pdf' },
    { title: 'TensorFlow Developer Certificate', link: '/certificates/tensorflow-developer.pdf' },
    { title: 'MongoDB Certified Developer', link: '/certificates/mongodb-developer.pdf' },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">
        Certifications
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-xl font-semibold mb-4">{cert.title}</h3>
            <Button variant="default" asChild>
              <a href={cert.link} download>
                Download Certificate
              </a>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Certificates

