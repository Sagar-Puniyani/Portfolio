import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Certificate } from '@/Types/certificate';
import { Img } from 'react-image';

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

export function CertificateCard({ certificate, index }: CertificateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1"
    >
      <div className="relative h-full rounded-lg bg-gray-950/50 p-6 backdrop-blur-sm">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-6">
          <Img
            src={certificate.image}
            alt={certificate.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-100">{certificate.title}</h3>
            <p className="text-sm text-gray-400">{certificate.issuer} • {certificate.issueDate}</p>
          </div>

          <Button
            asChild
            className="w-full gap-2 bg-gradient-to-r from-teal-800 via-blue-600 to-blue-800 hover:from-blue-800 hover:via-teal-800 hover:to-teal-700 text-white"
          >
            <a href={certificate.downloadUrl} download>
              <Download className="h-4 w-4" />
              Download Certificate
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}