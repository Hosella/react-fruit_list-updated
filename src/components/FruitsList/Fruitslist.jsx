import { FruitsItem } from "../FruitsItem/FruitsItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './style.scss';

export const FruitsList = ({ fruits, deleteFruits }) => {
  return (
    <div>
      <TransitionGroup>
        {fruits.map(fruit => (
          <CSSTransition key={fruit.id} timeout={500} classNames='item'>
            <FruitsItem fruit={fruit} deleteFruits={deleteFruits} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
