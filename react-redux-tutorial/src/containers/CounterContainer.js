import { useSelector } from 'react-redux';
import Counter from '../components/Counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  console.log(number);
  return <Counter number={number} />;
};

export default CounterContainer;
