export const useShared = () => {
  const num = useState('shared', () => 0)
  const increment = () => num.value++

  return { num, increment }
}