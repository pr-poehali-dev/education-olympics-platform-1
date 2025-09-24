import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

// Данные о классах и предметах
const subjects = [
  { name: 'Математика', icon: 'Calculator', color: 'bg-blue-100 text-blue-800' },
  { name: 'Русский язык', icon: 'BookOpen', color: 'bg-green-100 text-green-800' },
  { name: 'Английский язык', icon: 'Globe', color: 'bg-purple-100 text-purple-800' },
  { name: 'Чтение', icon: 'Book', color: 'bg-orange-100 text-orange-800' },
  { name: 'ПДД', icon: 'Car', color: 'bg-red-100 text-red-800' },
  { name: 'Информатика', icon: 'Monitor', color: 'bg-cyan-100 text-cyan-800' },
  { name: 'Логика', icon: 'Brain', color: 'bg-pink-100 text-pink-800' },
  { name: 'Окружающий мир', icon: 'Leaf', color: 'bg-emerald-100 text-emerald-800' },
  { name: 'Метапредметная', icon: 'Target', color: 'bg-indigo-100 text-indigo-800' }
];

const grades = [
  { name: 'Дошкольная группа', value: 'preschool' },
  { name: '1 класс', value: 'grade1' },
  { name: '2 класс', value: 'grade2' },
  { name: '3 класс', value: 'grade3' },
  { name: '4 класс', value: 'grade4' }
];

// Пример данных олимпиады
const sampleQuiz = {
  title: 'Математика - 2 класс',
  questions: [
    {
      id: 1,
      question: 'Сколько будет 7 + 5?',
      options: ['11', '12', '13', '14'],
      correct: 1
    },
    {
      id: 2,
      question: 'Какое число больше: 23 или 32?',
      options: ['23', '32', 'Одинаковые', 'Не знаю'],
      correct: 1
    },
    {
      id: 3,
      question: 'Сколько углов у треугольника?',
      options: ['2', '3', '4', '5'],
      correct: 1
    }
  ]
};

const Index = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [quizState, setQuizState] = useState({
    active: false,
    currentQuestion: 0,
    answers: [] as number[],
    completed: false,
    score: 0
  });

  // Функция запуска квиза
  const startQuiz = (subjectName: string) => {
    setSelectedSubject(subjectName);
    setQuizState({
      active: true,
      currentQuestion: 0,
      answers: [],
      completed: false,
      score: 0
    });
    setCurrentView('quiz');
  };

  // Компонент главной страницы
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Trophy" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">За скобками</h1>
                <p className="text-sm text-gray-600">Образовательные олимпиады</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentView('home')}
                className="text-gray-700 hover:text-primary font-medium"
              >
                Главная
              </button>
              <button 
                onClick={() => setCurrentView('about')}
                className="text-gray-700 hover:text-primary font-medium"
              >
                О нас
              </button>
              <button 
                onClick={() => setCurrentView('faq')}
                className="text-gray-700 hover:text-primary font-medium"
              >
                FAQ
              </button>
              <button 
                onClick={() => setCurrentView('contact')}
                className="text-gray-700 hover:text-primary font-medium"
              >
                Контакты
              </button>
            </nav>
            <div className="flex space-x-2">
              <Button 
                variant="outline"
                onClick={() => setCurrentView('login')}
              >
                Войти
              </Button>
              <Button onClick={() => setCurrentView('register')}>
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Развивайте таланты с нашими олимпиадами
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Интерактивные олимпиады для дошкольников и учеников 1-4 классов 
            с автоматической выдачей сертификатов
          </p>
          <Button size="lg" onClick={() => setCurrentView('olympiads')}>
            Начать олимпиаду
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2,500+</div>
              <div className="text-gray-600">Участников</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">45</div>
              <div className="text-gray-600">Олимпиад</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">9</div>
              <div className="text-gray-600">Предметов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-gray-600">Довольных родителей</div>
            </div>
          </div>
        </div>
      </section>

      {/* Предметы */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Предметы олимпиад
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={subject.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg">{subject.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  // Компонент выбора олимпиады
  const OlympiadsPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => setCurrentView('home')}
            className="mr-4"
          >
            <Icon name="ArrowLeft" size={20} />
            Назад
          </Button>
          <h1 className="text-3xl font-bold">Выберите олимпиаду</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Выбор класса */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Класс</h3>
            <div className="space-y-2">
              {grades.map((grade) => (
                <Button
                  key={grade.value}
                  variant={selectedGrade === grade.value ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedGrade(grade.value)}
                >
                  {grade.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Список предметов */}
          <div className="lg:col-span-3">
            {selectedGrade && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subjects.map((subject, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon name={subject.icon} className="text-primary" size={24} />
                          <CardTitle className="text-lg">{subject.name}</CardTitle>
                        </div>
                        <Badge className={subject.color}>
                          {grades.find(g => g.value === selectedGrade)?.name}
                        </Badge>
                      </div>
                      <CardDescription>
                        Интерактивная олимпиада по предмету
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full"
                        onClick={() => startQuiz(subject.name)}
                      >
                        Начать тест
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            
            {!selectedGrade && (
              <div className="text-center py-16">
                <Icon name="GraduationCap" size={64} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Выберите класс
                </h3>
                <p className="text-gray-500">
                  Сначала выберите класс, чтобы увидеть доступные олимпиады
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  // Компонент квиза
  const QuizPage = () => {
    const currentQ = sampleQuiz.questions[quizState.currentQuestion];
    
    const handleAnswer = (answerIndex: number) => {
      const newAnswers = [...quizState.answers];
      newAnswers[quizState.currentQuestion] = answerIndex;
      
      if (quizState.currentQuestion < sampleQuiz.questions.length - 1) {
        setQuizState({
          ...quizState,
          answers: newAnswers,
          currentQuestion: quizState.currentQuestion + 1
        });
      } else {
        // Завершение квиза
        const finalScore = newAnswers.reduce((score, answer, index) => {
          return score + (answer === sampleQuiz.questions[index].correct ? 1 : 0);
        }, 0);
        
        setQuizState({
          ...quizState,
          answers: newAnswers,
          completed: true,
          score: finalScore
        });
      }
    };

    if (quizState.completed) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="Trophy" className="text-green-600" size={32} />
              </div>
              <CardTitle className="text-2xl">Поздравляем!</CardTitle>
              <CardDescription>
                Вы завершили олимпиаду по предмету "{selectedSubject}"
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  {quizState.score}/{sampleQuiz.questions.length}
                </div>
                <div className="text-gray-600">правильных ответов</div>
              </div>
              
              <Progress value={(quizState.score / sampleQuiz.questions.length) * 100} />
              
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Ваш результат: {Math.round((quizState.score / sampleQuiz.questions.length) * 100)}%
                </p>
                <Button className="w-full mb-2">
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать сертификат
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setCurrentView('home')}
                >
                  На главную
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">{sampleQuiz.title}</h1>
              <Badge variant="outline">
                {quizState.currentQuestion + 1} / {sampleQuiz.questions.length}
              </Badge>
            </div>
            
            <Progress 
              value={((quizState.currentQuestion + 1) / sampleQuiz.questions.length) * 100} 
              className="mb-8"
            />

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">
                  Вопрос {quizState.currentQuestion + 1}
                </CardTitle>
                <CardDescription className="text-lg">
                  {currentQ.question}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentQ.options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start p-4 h-auto text-left"
                      onClick={() => handleAnswer(index)}
                    >
                      <span className="font-semibold mr-3 text-primary">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  };

  // Рендер соответствующей страницы
  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage />;
      case 'olympiads':
        return <OlympiadsPage />;
      case 'quiz':
        return <QuizPage />;
      default:
        return <HomePage />;
    }
  };

  return <div className="App">{renderCurrentView()}</div>;
};

export default Index;