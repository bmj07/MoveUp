import  { motion } from 'framer-motion';
import { Activity, CheckCircle, Users, BarChart, Cloud, Smartphone } from 'lucide-react';
import { Card } from '../ui/Card';

export const Features = () => {
  const features = [
    {
      icon: <Activity className="w-6 h-6 text-primary-neon" />,
      title: 'IA Preditiva',
      description: 'Algoritmos que preveem quais alunos têm maior propensão a cancelar a matrícula baseado em seu comportamento.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-neon" />,
      title: 'Fácil Integração',
      description: 'Compatível com planilhas do Excel ou Google Sheets. Importe seus dados sem complicações.'
    },
    {
      icon: <Users className="w-6 h-6 text-primary-neon" />,
      title: 'Fidelização Estratégica',
      description: 'Sugestões de ações personalizadas para cada perfil de aluno em risco de cancelamento.'
    },
    {
      icon: <BarChart className="w-6 h-6 text-primary-neon" />,
      title: 'Relatórios Detalhados',
      description: 'Visualize dados de frequência, perfil de alunos e tendências para tomar decisões informadas.'
    },
    {
      icon: <Cloud className="w-6 h-6 text-primary-neon" />,
      title: '100% Online',
      description: 'Acesse de qualquer lugar, sem necessidade de instalação ou infraestrutura física.'
    },
    {
      icon: <Smartphone className="w-6 h-6 text-primary-neon" />,
      title: 'Responsivo',
      description: 'Utilize em qualquer dispositivo - computador, tablet ou smartphone.'
    }
  ];

  return (
    <section className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Funcionalidades <span className="text-gradient">Inteligentes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300"
          >
            Nossa plataforma combina tecnologia avançada com simplicidade de uso para ajudar sua academia a crescer e manter seus alunos engajados.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="p-3 rounded-lg bg-primary-dark inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
 