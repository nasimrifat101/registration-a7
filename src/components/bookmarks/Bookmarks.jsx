import { list } from "postcss";

const Bookmarks = ({selectedCourse, totalCredits, totalPrice}) => {
    const remainingCredits = Math.max(20 - totalCredits, 0);
    return (
        <div className="bg-white h-fit p-5 m-4 rounded-xl space-y-3">
            <h1 className="text-md text-blue-400 font-bold">Credit Hour Remaining {remainingCredits} hr</h1>
            <hr className="border-b-2" />
            <h1 className="font-bold text-lg text-gray-600">Course Name:</h1>
            <ol className="text-gray-400 text-xs list-decimal px-3">
               {
                selectedCourse.map((course, idx)=>(<li key={idx}>{course}</li>))
               }
            </ol>
            <hr className="border-b-2" />
            <h2 className="text-md font-semibold text-gray-400">Total Creadit Hour: {totalCredits} hr</h2>
            <hr className="border-b-2" />
            <h2 className="text-md font-semibold text-gray-500">Total Price: {totalPrice} USD</h2>

        </div>
    );
};

export default Bookmarks;