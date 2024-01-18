import './style.scss'

export const FruitsItem= ({ fruit, deleteFruits }) => {
  return (
    <div className='FruitsItem'>
      <span>{fruit.name}</span>
      <button onClick={() => {deleteFruits(fruit.id)}}>delete</button>
    </div>
  );
}