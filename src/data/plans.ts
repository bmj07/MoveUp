import  { Plan } from '../types';

export const plans: Plan[] = [
  {
    id: 1,
    name: 'Plano Básico',
    price: 197,
    billing: 'mês',
    description: 'Ideal para academias pequenas com até 100 alunos',
    features: [
      'Previsão de evasão de alunos',
      'Importação de dados do Excel/Google Sheets',
      'Dashboard básico',
      'Suporte por email',
      'Até 2 usuários'
    ]
  },
  {
    id: 2,
    name: 'Plano Intermediário',
    price: 297,
    billing: 'mês',
    description: 'Perfeito para academias de médio porte com até 300 alunos',
    recommended: true,
    features: [
      'Todas as funcionalidades do Plano Básico',
      'Automação de mensagens para alunos em risco',
      'Relatórios avançados',
      'Integração com WhatsApp',
      'Suporte prioritário',
      'Até 5 usuários'
    ]
  },
  {
    id: 3,
    name: 'Plano Premium',
    price: 497,
    billing: 'mês',
    description: 'Para redes de academias e grandes estabelecimentos',
    features: [
      'Todas as funcionalidades do Plano Intermediário',
      'API para integração com outros sistemas',
      'Análise comparativa entre unidades',
      'Consultoria personalizada',
      'Suporte 24/7',
      'Usuários ilimitados'
    ]
  }
];
 