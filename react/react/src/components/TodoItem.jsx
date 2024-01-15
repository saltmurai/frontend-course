/* eslint-disable react/prop-types */
function TodoItem({name}) {
  return (
    <div className="flex justify-start gap-4">
      <input type="checkbox" />
      <span>{name}</span>
    </div>
  );
}

export default TodoItem;
