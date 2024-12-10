import { MovieType } from '@/types/movie';
import Listitem from '../List item/Listitem';
import { ListType } from '@/types/list';

const List = ({ list }: { list: ListType }) => {

  return (
    <div className="relative w-full">
      <h1 className="">{list?.title}</h1>
      <div className=' flex items-center gap-4 w-full'>
        {list.contentDetails!.map((movie: MovieType) => (
          <Listitem movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  );
};

export default List;