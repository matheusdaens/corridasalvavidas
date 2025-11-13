import { NextResponse } from 'next/server'

// Mock data - banco de dados simulado
const dicas = [
  {
    id: 1,
    titulo: 'Aqueça antes de correr',
    descricao: 'Fazer um aquecimento adequado prepara seu corpo e reduz o risco de lesões.',
    conteudo: 'Dedique de 5 a 10 minutos para alongamentos dinâmicos e caminhada leve antes de começar sua corrida. Isso aumenta a temperatura corporal, melhora a circulação sanguínea e prepara músculos e articulações para o exercício.',
    categoria: 'Iniciante',
    duracao: '5-10 min'
  },
  {
    id: 2,
    titulo: 'Mantenha uma boa postura',
    descricao: 'A postura correta durante a corrida melhora performance e previne dores.',
    conteudo: 'Mantenha o tronco ereto, ombros relaxados, olhar para frente (não para baixo) e braços em ângulo de 90 graus. Uma boa postura economiza energia e distribui melhor o impacto pela estrutura corporal.',
    categoria: 'Todos os níveis',
    duracao: 'Durante toda corrida'
  },
  {
    id: 3,
    titulo: 'Hidrate-se adequadamente',
    descricao: 'A hidratação é essencial para o desempenho e recuperação.',
    conteudo: 'Beba água antes, durante (para corridas acima de 30min) e depois do treino. Em dias quentes ou treinos longos, considere repositores eletrolíticos. Uma boa regra é beber 500ml 2 horas antes de correr.',
    categoria: 'Todos os níveis',
    duracao: 'Constante'
  },
  {
    id: 4,
    titulo: 'Aumente a distância gradualmente',
    descricao: 'Progredir gradualmente evita sobrecarga e lesões.',
    conteudo: 'Siga a regra dos 10%: não aumente sua quilometragem semanal em mais de 10%. Isso dá tempo para seu corpo se adaptar ao estresse do treino. Para iniciantes, alterne corrida com caminhada.',
    categoria: 'Iniciante',
    duracao: 'Progressivo'
  },
  {
    id: 5,
    titulo: 'Invista em tênis adequado',
    descricao: 'O calçado correto protege suas articulações e melhora o desempenho.',
    conteudo: 'Procure uma loja especializada para análise de pisada. O tênis deve oferecer amortecimento adequado, suporte para seu tipo de pé e ter espaço suficiente para os dedos. Troque a cada 600-800km.',
    categoria: 'Todos os níveis',
    duracao: 'Permanente'
  },
  {
    id: 6,
    titulo: 'Respeite os dias de descanso',
    descricao: 'O descanso é parte fundamental do treino.',
    conteudo: 'Músculos crescem e se fortalecem durante o repouso, não durante o exercício. Iniciantes devem ter pelo menos 3 dias de descanso por semana. O overtraining pode levar a lesões e queda de performance.',
    categoria: 'Todos os níveis',
    duracao: '1-3 dias/semana'
  }
]

export async function GET() {
  // Simula delay de API real
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return NextResponse.json({
    success: true,
    data: dicas,
    total: dicas.length
  })
}
