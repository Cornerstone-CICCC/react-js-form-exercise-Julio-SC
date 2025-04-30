type Props = {
    fullname?: string
  }
  
  const Welcome = ({ fullname }: Props) => {
    return (
      <h1>{fullname ?? 'Guest'}</h1>
    )
  }
  
  export default Welcome
  