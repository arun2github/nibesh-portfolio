"use client";
import { serviceMethodology } from "@/data/portfolioData";
import { motion } from "framer-motion";

const ServiceMethodology = () => {
  return (
    <section id="methodology" className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Service <span className="text-indigo-600">Methodology</span>
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            A proven four-step framework for competitive exam success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceMethodology.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-indigo-200 hover:border-indigo-400 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                  {step.stepNumber}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
              </div>
              <p className="text-slate-700 mb-4">{step.description}</p>
              <ul className="space-y-2">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-indigo-600 mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceMethodology;
