export function StatusText(status: { status: string }) {
  const style = 'text-regularCaption font-medium py-1 px-[6px] rounded-md'

  switch (status.status) {
    case 'Ativo':
      return (
        <span className={`bg-success200 text-success800 ${style}`}>
          {status.status}
        </span>
      )
    case 'Pendente':
      return (
        <span className={`bg-warning200 text-warning800 ${style}`}>
          {status.status}
        </span>
      )
    case 'Pausado':
      return (
        <span className={`bg-neutral100 text-neutral800 ${style}`}>
          {status.status}
        </span>
      )
    case 'Cancelado':
      return (
        <span className={`bg-error200 text-error800 ${style}`}>
          {status.status}
        </span>
      )
    case 'Rascunho':
      return (
        <span className={`bg-info200 text-info800 ${style}`}>
          {status.status}
        </span>
      )
    default:
      return (
        <span className={`bg-neutral100 text-neutral800 ${style}`}>
          {status.status}
        </span>
      )
  }
}
