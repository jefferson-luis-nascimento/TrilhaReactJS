interface RepostoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepostoryItemProps){
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar Repositório</a>
    </li>
  )
}