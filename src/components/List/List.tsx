import Listitem from '../List item/Listitem';

interface ListProps {
  list: {
    title: string;
    content: [];
  };
}

const List = ({ list }: ListProps) => {

  return (
    <div className="relative w-full">
      <h1 className="">{list?.title}</h1>
      <div className=' flex items-center gap-4 w-full'>
        {list.content.map((movieId) => (
          <Listitem movieId={movieId} key={movieId} />
        ))}
      </div>
    </div>
  );
};

export default List;