import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Brain, 
  TrendingUp, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  Star,
  ArrowRight,
  Clock,
  Calendar,
  MessageCircle,
  Target,
  Zap,
  Shield,
  Award,
  ChevronDown
} from 'lucide-react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const formUrl = 'https://form.respondi.app/wgzkiMEh'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    if (id === 'cta') {
      window.open(formUrl, '_blank')
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCtaClick = () => {
    window.open(formUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      {/* Header fixo */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-gradient-to-r from-purple-950 to-amber-600 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              PERSONNALITÉ
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('sistema')} className="text-slate-300 hover:text-amber-400 transition-colors">
                Sistema
              </button>
              <button onClick={() => scrollToSection('resultados')} className="text-slate-300 hover:text-amber-400 transition-colors">
                Resultados
              </button>
              <button onClick={() => scrollToSection('roadmap')} className="text-slate-300 hover:text-amber-400 transition-colors">
                Roadmap
              </button>
              <button onClick={() => scrollToSection('ferramentas')} className="text-slate-300 hover:text-amber-400 transition-colors">
                Ferramentas
              </button>
            </div>
            <Button 
              onClick={handleCtaClick}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold"
            >
              Garantir Vaga
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-amber-500/10 text-amber-400 border-amber-500/20 px-6 py-2 text-sm">
              Mentoria Exclusiva High Ticket Personnalité
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">MENTORIA HIGH TICKET</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                PERSONNALITÉ
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Transformação Digital Completa: Gestão Financeira, Marketing 5.0 e Vendas High-Ticket para Clínicas de Harmonização Facial de Luxo
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {[
                { icon: Calendar, label: 'Meses Intensivos', value: '6' },
                { icon: Target, label: 'Sessões Executivas', value: '12' },
                { icon: Clock, label: 'Resposta Máxima', value: '2h' },
                { icon: Zap, label: 'Disponibilidade', value: '24/7' }
              ].map((item, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all">
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-8 h-8 mx-auto mb-3 text-amber-400" />
                    <div className="text-3xl font-bold text-white mb-1">{item.value}</div>
                    <div className="text-sm text-slate-400">{item.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button 
              size="lg"
              onClick={handleCtaClick}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-amber-500/50 transition-all transform hover:scale-105"
            >
              TRANSFORMAR MINHA CLÍNICA AGORA
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <p className="text-slate-400 mt-6">
              Vagas limitadas • Método exclusivo do Dr. Bittencourt
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-amber-400" />
        </div>
      </section>

      {/* Sistema de Transformação 360° */}
      <section id="sistema" className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sistema de Transformação 360°
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Metodologia exclusiva que combina neurociência, inteligência artificial e marketing de nova geração para resultados extraordinários
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: 'Sistema SPIN de Vendas',
                metric: 'ROI 300%+',
                description: 'Método revolucionário de vendas high-ticket com técnicas avançadas de neuromarketing para maximizar conversões em harmonização facial.',
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                icon: Brain,
                title: 'Otimização Financeira IA',
                metric: 'Economia 40%+',
                description: 'Gestão financeira para redução inteligente de custos e maximização de lucros em clínicas estéticas.',
                gradient: 'from-blue-500 to-cyan-600'
              },
              {
                icon: Sparkles,
                title: 'Marketing Digital 5.0',
                metric: 'Leads 500%+',
                description: 'Estratégias de marketing de nova geração com automação avançada e segmentação hiper-precisa para público premium.',
                gradient: 'from-purple-500 to-pink-600'
              },
              {
                icon: Users,
                title: 'CRM Inteligente',
                metric: 'Retenção 85%+',
                description: 'Sistema de relacionamento com IA preditiva e jornada do cliente otimizada por machine learning para harmonização facial de luxo.',
                gradient: 'from-amber-500 to-orange-600'
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all hover:scale-105 group"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/20">
                    {item.metric}
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados Comprovados */}
      <section id="resultados" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-slate-300">
              Clínicas que já alcançaram resultados extraordinários
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                metric: '+400%',
                label: 'Faturamento',
                quote: 'Em 4 meses consegui quadriplicar o faturamento da clínica. O método é revolucionário!',
                author: 'Dra. Marina Costa',
                specialty: 'Harmonização Facial - SP',
                initial: 'M',
                color: 'from-green-500 to-emerald-600'
              },
              {
                metric: '+350%',
                label: 'ROI',
                quote: 'Nunca imaginei que seria possível ter resultados tão expressivos em tão pouco tempo.',
                author: 'Dr. Rafael Santos',
                specialty: 'Estética Avançada - RJ',
                initial: 'R',
                color: 'from-blue-500 to-cyan-600'
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-2xl font-bold`}>
                      {testimonial.initial}
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">{testimonial.metric}</div>
                      <div className="text-slate-400">{testimonial.label}</div>
                    </div>
                  </div>
                  <blockquote className="text-slate-300 text-lg mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-400">{testimonial.specialty}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap de Transformação */}
      <section id="roadmap" className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Roadmap de Transformação
            </h2>
            <p className="text-xl text-slate-300">
              6 meses estruturados para dominar o mercado de harmonização facial
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                phase: '1-2',
                title: 'Mês 1-2: Transformação Digital',
                items: [
                  'Auditoria financeira completa',
                  'Implementação de KPIs estratégicos 4.0',
                  'Script SPIN personalizado por neurociência',
                  'CRM inteligente com automação avançada'
                ],
                color: 'from-blue-500 to-cyan-600'
              },
              {
                phase: '3-4',
                title: 'Mês 3-4: Expansão Estratégica',
                items: [
                  'Fluxos WhatsApp com chatbots inteligentes',
                  'Calendário editorial viral otimizado',
                  'Campanha pagas com targeting avançado',
                  'Automação completa de marketing'
                ],
                color: 'from-purple-500 to-pink-600'
              },
              {
                phase: '5-6',
                title: 'Mês 5-6: Dominação de Mercado',
                items: [
                  'Dashboard executivo',
                  'Análise preditiva de ROI',
                  'Otimização tributária inteligente',
                  'Sistema de vendas'
                ],
                color: 'from-amber-500 to-orange-600'
              }
            ].map((phase, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-white text-xl font-bold`}>
                      {phase.phase}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
                      <ul className="space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-slate-300">
                            <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Arsenal Completo de Ferramentas */}
      <section id="ferramentas" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Arsenal Completo de Ferramentas
            </h2>
            <p className="text-xl text-slate-300">
              Tudo que você precisa para dominar o mercado premium
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Target, label: 'Script SPIN neuromarketing' },
              { icon: Brain, label: 'CRM com IA preditiva' },
              { icon: MessageCircle, label: 'Automação WhatsApp + chatbots' },
              { icon: Zap, label: 'Campanhas pagas otimizadas' },
              { icon: TrendingUp, label: 'Dashboard BI executivo' },
              { icon: Sparkles, label: 'Sistema redução custos IA' },
              { icon: Shield, label: 'Planejamento tributário' },
              { icon: Award, label: 'Suporte premium 24/7' }
            ].map((tool, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:bg-slate-900/70 transition-all"
              >
                <CardContent className="p-6 text-center">
                  <tool.icon className="w-8 h-8 mx-auto mb-3 text-amber-400" />
                  <div className="text-sm text-slate-300">{tool.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta" className="py-20 px-4 bg-gradient-to-t from-slate-950 to-purple-950/50">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Transforme sua Clínica em um Ícone de Luxo e Rentabilidade
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Esta é a sua chance de se juntar a uma elite de profissionais que estão redefinindo o futuro da harmonização facial. As vagas são extremamente limitadas para garantir um acompanhamento personalizado e resultados de alto impacto.
          </p>
          <Button 
            size="lg"
            onClick={handleCtaClick}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xl px-10 py-8 rounded-full shadow-lg hover:shadow-amber-500/50 transition-all transform hover:scale-105"
          >
            GARANTIR MINHA VAGA AGORA
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
          <p className="text-slate-400 mt-6">
            Próxima turma em breve. Garanta sua vaga.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Mentoria Personnalité | Dr. Bittencourt. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">Desenvolvido por Rafael Alves</p>
        </div>
      </footer>
    </div>
  )
}

export default App