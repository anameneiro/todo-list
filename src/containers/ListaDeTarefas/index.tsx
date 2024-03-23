import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'estudar CSS',
    descricao: 'Ver aula 3',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'estudar HTML',
    descricao: 'Ver aula 3',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'estudar REACT',
    descricao: 'Ver aula 3',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'estudar VUE',
    descricao: 'Ver aula 3',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'estudar SASS',
    descricao: 'Ver aula 3',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
