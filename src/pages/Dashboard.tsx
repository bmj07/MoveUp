import  { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  Activity, 
  Calendar, 
  User, 
  Clock, 
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { StatsCard } from '../components/ui/StatsCard';
import { studentsMock } from '../data/studentsMock';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState<'overview' | 'students' | 'predictions'>('overview');
  
  const statsCards = [
    {
      title: 'Total de Alunos',
      value: '287',
      icon: <Users size={20} />,
      trend: {
        value: 12,
        isPositive: true
      }
    },
    {
      title: 'Alunos em Risco',
      value: '38',
      icon: <AlertTriangle size={20} />,
      trend: {
        value: 5,
        isPositive: false
      }
    },
    {
      title: 'Taxa de Retenção',
      value: '76%',
      icon: <TrendingUp size={20} />,
      trend: {
        value: 8,
        isPositive: true
      }
    },
    {
      title: 'Frequência Média',
      value: '62%',
      icon: <Activity size={20} />,
      trend: {
        value: 3,
        isPositive: true
      }
    }
  ];
  
  const lineChartData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Novos Alunos',
        data: [25, 30, 28, 32, 36, 40],
        borderColor: '#056CF2',
        backgroundColor: 'rgba(5, 108, 242, 0.1)',
        tension: 0.4
      },
      {
        label: 'Cancelamentos',
        data: [15, 18, 14, 10, 12, 8],
        borderColor: '#FF5555',
        backgroundColor: 'rgba(255, 85, 85, 0.1)',
        tension: 0.4
      }
    ]
  };
  
  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'white'
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      }
    }
  };
  
  const barChartData = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Frequência diária',
        data: [65, 82, 78, 70, 83, 50, 32],
        backgroundColor: '#00F0FF',
      }
    ]
  };
  
  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'white'
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      }
    }
  };
  
  const doughnutChartData = {
    labels: ['Baixo Risco', 'Médio Risco', 'Alto Risco'],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: [
          '#4CAF50',
          '#FFC107',
          '#FF5252'
        ],
        borderWidth: 0
      }
    ]
  };
  
  const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: 'white'
        }
      }
    }
  };
  
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-400">Visualize e analise os dados da sua academia</p>
      </div>
      
      <div className="mb-8">
        <div className="bg-dark-light rounded-lg p-1 inline-flex mb-6">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${currentTab === 'overview' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setCurrentTab('overview')}
          >
            Visão Geral
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${currentTab === 'students' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setCurrentTab('students')}
          >
            Alunos
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${currentTab === 'predictions' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setCurrentTab('predictions')}
          >
            Previsões
          </button>
        </div>
      </div>
      
      {currentTab === 'overview' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsCards.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <StatsCard {...stat} />
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Alunos Novos vs. Cancelamentos</h3>
              <div className="h-80">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Frequência por Dia da Semana</h3>
              <div className="h-80">
                <Bar data={barChartData} options={barChartOptions} />
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="p-6 lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Distribuição de Risco</h3>
              <div className="h-64">
                <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
              </div>
            </Card>
            
            <Card className="p-6 lg:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Alunos em Alto Risco</h3>
                <button className="text-sm text-primary-neon hover:underline">
                  Ver todos
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 border-b border-dark-lighter">
                      <th className="pb-3 font-medium">Nome</th>
                      <th className="pb-3 font-medium">Idade</th>
                      <th className="pb-3 font-medium">Última Visita</th>
                      <th className="pb-3 font-medium">Frequência</th>
                      <th className="pb-3 font-medium">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentsMock.filter(s => s.riskLevel === 'high').map(student => (
                      <tr key={student.id} className="border-b border-dark-lighter hover:bg-dark-lighter">
                        <td className="py-3">{student.name}</td>
                        <td className="py-3">{student.age}</td>
                        <td className="py-3">{new Date(student.lastVisit).toLocaleDateString('pt-BR')}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${student.attendance < 40 ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                            {student.attendance}%
                          </span>
                        </td>
                        <td className="py-3">
                          <button className="text-primary-neon hover:underline">
                            Contatar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      )}
      
      {currentTab === 'students' && (
        <div>
          <Card className="p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h3 className="text-lg font-semibold mb-2 md:mb-0">Lista de Alunos</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar aluno..."
                    className="w-full px-4 py-2 rounded-lg bg-dark border border-dark-lighter focus:border-primary-neon focus:outline-none text-white pr-10"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                </div>
                <select className="px-4 py-2 rounded-lg bg-dark border border-dark-lighter focus:border-primary-neon focus:outline-none text-white">
                  <option value="all">Todos</option>
                  <option value="low">Baixo Risco</option>
                  <option value="medium">Médio Risco</option>
                  <option value="high">Alto Risco</option>
                </select>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-400 border-b border-dark-lighter">
                    <th className="pb-3 font-medium">Nome</th>
                    <th className="pb-3 font-medium">Idade</th>
                    <th className="pb-3 font-medium">Data de Matrícula</th>
                    <th className="pb-3 font-medium">Última Visita</th>
                    <th className="pb-3 font-medium">Frequência</th>
                    <th className="pb-3 font-medium">Nível de Risco</th>
                    <th className="pb-3 font-medium">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {studentsMock.map(student => (
                    <tr key={student.id} className="border-b border-dark-lighter hover:bg-dark-lighter">
                      <td className="py-3">{student.name}</td>
                      <td className="py-3">{student.age}</td>
                      <td className="py-3">{new Date(student.joinDate).toLocaleDateString('pt-BR')}</td>
                      <td className="py-3">{new Date(student.lastVisit).toLocaleDateString('pt-BR')}</td>
                      <td className="py-3">{student.attendance}%</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          student.riskLevel === 'low' 
                            ? 'bg-green-500/20 text-green-400' 
                            : student.riskLevel === 'medium'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-red-500/20 text-red-400'
                        }`}>
                          {student.riskLevel === 'low' 
                            ? 'Baixo' 
                            : student.riskLevel === 'medium'
                              ? 'Médio'
                              : 'Alto'
                          }
                        </span>
                      </td>
                      <td className="py-3">
                        <button className="text-primary-neon hover:underline mr-3">
                          Ver perfil
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <div className="text-sm text-gray-400">
                Mostrando 1-8 de 287 alunos
              </div>
              <div className="flex">
                <button className="px-3 py-1 rounded-l-md border border-dark-lighter bg-dark text-gray-400 hover:text-white">
                  Anterior
                </button>
                <button className="px-3 py-1 bg-primary text-white border border-primary">
                  1
                </button>
                <button className="px-3 py-1 border-t border-b border-dark-lighter bg-dark text-gray-400 hover:text-white">
                  2
                </button>
                <button className="px-3 py-1 border-t border-b border-dark-lighter bg-dark text-gray-400 hover:text-white">
                  3
                </button>
                <button className="px-3 py-1 rounded-r-md border border-dark-lighter bg-dark text-gray-400 hover:text-white">
                  Próximo
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}
      
      {currentTab === 'predictions' && (
        <div className="space-y-8">
          <Card className="p-6">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-primary-dark text-primary-neon">
                <Activity size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Análise Preditiva</h3>
                <p className="text-gray-400">Baseada em padrões de comportamento dos alunos</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-dark p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-sm font-medium text-gray-400">Probabilidade de Evasão</h4>
                  <span className="text-red-400">+8%</span>
                </div>
                <div className="flex items-end mb-2">
                  <span className="text-3xl font-bold">13.2%</span>
                  <span className="text-gray-400 ml-2 mb-1">dos alunos</span>
                </div>
                <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
                  <div className="h-full bg-red-500" style={{ width: '13.2%' }}></div>
                </div>
              </div>
              
              <div className="bg-dark p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-sm font-medium text-gray-400">Renovações Previstas</h4>
                  <span className="text-green-400">+12%</span>
                </div>
                <div className="flex items-end mb-2">
                  <span className="text-3xl font-bold">76%</span>
                  <span className="text-gray-400 ml-2 mb-1">dos planos</span>
                </div>
                <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: '76%' }}></div>
                </div>
              </div>
              
              <div className="bg-dark p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-sm font-medium text-gray-400">Novas Matrículas</h4>
                  <span className="text-green-400">+5%</span>
                </div>
                <div className="flex items-end mb-2">
                  <span className="text-3xl font-bold">42</span>
                  <span className="text-gray-400 ml-2 mb-1">estimativa</span>
                </div>
                <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-dark-lighter pt-6">
              <h4 className="text-lg font-semibold mb-4">Previsões Detalhadas</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-dark p-4 rounded-lg">
                  <h5 className="text-sm font-medium text-gray-400 mb-3">Alunos com Maior Risco</h5>
                  <div className="space-y-3">
                    {studentsMock
                      .filter(s => s.riskLevel === 'high')
                      .slice(0, 3)
                      .map(student => (
                        <div key={student.id} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary-dark flex items-center justify-center mr-3">
                              <User size={16} className="text-primary-neon" />
                            </div>
                            <div>
                              <p className="font-medium">{student.name}</p>
                              <div className="flex items-center text-xs text-gray-400">
                                <Clock size={12} className="mr-1" />
                                <span>Última visita: {new Date(student.lastVisit).toLocaleDateString('pt-BR')}</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span className="px-2 py-1 rounded-full text-xs bg-red-500/20 text-red-400">
                              {Math.round(90 - student.attendance)}% chance
                            </span>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
                
                <div className="bg-dark p-4 rounded-lg">
                  <h5 className="text-sm font-medium text-gray-400 mb-3">Fatores de Risco Identificados</h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                          <Calendar size={16} className="text-red-400" />
                        </div>
                        <span>Frequência abaixo de 40% no último mês</span>
                      </div>
                      <span className="text-red-400">+65%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                          <Calendar size={16} className="text-red-400" />
                        </div>
                        <span>Mais de 14 dias sem visitar a academia</span>
                      </div>
                      <span className="text-red-400">+48%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                          <Calendar size={16} className="text-red-400" />
                        </div>
                        <span>Reclamações nos últimos 30 dias</span>
                      </div>
                      <span className="text-red-400">+40%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Ações Recomendadas</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-dark border-l-4 border-primary-neon">
                <h4 className="font-medium mb-2">Campanha de Reengajamento</h4>
                <p className="text-gray-300 mb-3">Enviar mensagens personalizadas para alunos que não visitam a academia há mais de 7 dias.</p>
                <button className="text-primary-neon text-sm hover:underline">Implementar ação</button>
              </div>
              
              <div className="p-4 rounded-lg bg-dark border-l-4 border-yellow-500">
                <h4 className="font-medium mb-2">Oferta de Renovação Antecipada</h4>
                <p className="text-gray-300 mb-3">Oferecer desconto especial para renovação antecipada aos alunos com planos vencendo nos próximos 30 dias.</p>
                <button className="text-primary-neon text-sm hover:underline">Implementar ação</button>
              </div>
              
              <div className="p-4 rounded-lg bg-dark border-l-4 border-green-500">
                <h4 className="font-medium mb-2">Avaliação Física Gratuita</h4>
                <p className="text-gray-300 mb-3">Oferecer avaliação física gratuita para alunos que estão há mais de 3 meses sem atualizar seus objetivos.</p>
                <button className="text-primary-neon text-sm hover:underline">Implementar ação</button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
 