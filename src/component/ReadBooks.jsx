import PropTypes from 'prop-types';
import { LuMapPin } from "react-icons/lu";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";

const ReadBooks = ({ readBook }) => {

    const { bookName, image, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = readBook;

    return (
        <div className='w-full border-2 flex flex-col lg:flex-row  p-6 mt-6 rounded-2xl'>

            <div className='lg:w-1/4 mr-6'>
                <img className='h-56 ' src={image} alt="books image" />
            </div>

            <div className='w-full lg:w-3/4 mt-2 lg:mt-0'>
                <h2 className='font-bold text-2xl'>{bookName}</h2>
                <p className='font-medium mt-4'>By: {author} </p>
                
                <div className='flex flex-col lg:flex-row mt-5'>
                    <div>
                        <p className="mt-4 mb-4 mr-5">
                            <span className="font-bold">Tag</span>
                            {tags.map((tag, index) =>
                                <span key={index} className="badge ml-4 bg-[#23BE0A0D] opacity-95 text-[#23BE0A] mb-4 p-3"># {tag}</span>)}
                        </p>
                    </div>
                    <div>
                        <p className='flex mt-4'>
                            <span className='mt-1 mr-2'> <LuMapPin></LuMapPin> </span> Year of Publishing : {yearOfPublishing}
                        </p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row  border-b-2 pb-4 mt-5 text-[#13131399] opacity-60 '>
                    <p className='mr-5 flex'> <IoPeopleOutline className='mt-1 mr-1' /> Publisher: {publisher} </p>
                    <p className='flex'> <MdOutlineFindInPage className='mt-1 mr-1' /> Page {totalPages} </p>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row '>
                    <p className='text-[#328EFF] bg-[#328EFF26] bg-opacity-15 text-base mr-3 btn mt-4 rounded-full'> Category: {category} </p>

                    <p className='text-[#FFAC33] mt-4 rounded-full bg-[#FFAC3326] bg-opacity-15 text-base mr-3 btn'>Rating : {rating} </p>

                    <button className='btn mt-4 rounded-full bg-[#23BE0A] text-white text-base'>View Details</button>

                </div>

            </div>

        </div>
    )
}

export default ReadBooks

ReadBooks.propTypes = {
    readBook: PropTypes.object
};