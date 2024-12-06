import { motion } from 'framer-motion';
import { certificates } from '@/app/User';
import { CertificateCard } from '@/components/CertificateCard';
export default function Certificates() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-8"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">
            Professional Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of professional certifications and achievements in cloud computing, data engineering, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}