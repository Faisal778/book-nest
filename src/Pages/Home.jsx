
import { Link, useRouteLoaderData } from 'react-router-dom';
import Nav from '../components/Nav';
import BookCard from '../components/BookCard';

const Home = ({books}) => {
    const firstBook = books[0];
    console.log(books);

    return (
        <section className=" dark:bg-gray-100 text-black dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className=" rounded-lg block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12  dark:bg-gray-50 border-2 border-gray-200">
			<img src= {firstBook.image} alt="" className="object-fit mx-auto h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline"></h3>
				<p>Books to freshen up</p>
                <p>your Bookshelf</p>
                <Link to = "/listedbooks"><button className = 'btn btn-secondary'>View The List</button></Link> 
			</div>
		</a>
        <p className='text-center text-3xl font-semibold'>Books</p>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			
        {
            books.map( book => (
                <BookCard key= {book.bookId} book = {book}></BookCard>
            ))
        }
		

		</div>
	</div>
</section>
    );
};

export default Home;