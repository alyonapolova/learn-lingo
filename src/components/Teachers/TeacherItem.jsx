import { useDispatch } from 'react-redux';
import { showTrialLessonModal } from '../../redux/features/slice';
import { useState } from 'react';

export const TeacherItem = (teacher) => {
  const dispatch = useDispatch();
  const [readMore, setReadMore] = useState(false);

  console.log(teacher);

  const handleToggleReadMore = () => {
    setReadMore((prev) => !prev);
  };

  return (
    <li className="flex gap-12 bg-bg-teachers p-6 rounded-3xl">
      <div className="flex items-center justify-center rounded-full w-[120px] h-[120px]  border-4 border-[#FBE9BA]">
        {' '}
        <img
          src={teacher.avatar_url}
          alt={teacher.surname}
          className="rounded-full w-[96px] h-[96px]"
        />
      </div>

      <div className="w-[968px]">
        <div className="flex justify-between">
          <p className="text-custom-gray font-medium text-base">Languages</p>
          <div className="flex gap-8">
            <p>Lessons online</p>
            <p>Lessons done: {teacher.lessons_done}</p>
            <p>&#9733; Rating: {teacher.rating}</p>
            <p>Price / 1 hour: {teacher.price_per_hour}$</p>
            <button type="button">&#10084;</button>
          </div>
        </div>

        <h2>
          {teacher.name} {teacher.surname}
        </h2>
        <div className="flex flex-col gap-2 mt-8 mb-4">
          <p className="text-custom-gray font-medium text-base">
            Speaks:{' '}
            <span className="text-customColor">
              {teacher.languages.join(', ')}
            </span>
          </p>
          <p className="text-custom-gray font-medium text-base">
            Lesson Info:{' '}
            <span className="text-customColor">{teacher.lesson_info}</span>
          </p>
          <p className="text-custom-gray font-medium text-base">
            Conditions:{' '}
            <span className="text-customColor">
              {teacher.conditions.join(', ')}
            </span>
          </p>
        </div>

        <button
          className="text-customColor font-bold"
          type="button"
          onClick={handleToggleReadMore}
        >
          {readMore ? 'Read less' : 'Read more'}
        </button>

        {readMore && (
          <div>
            <p>{teacher.experience}</p>
            <ul className="flex flex-col gap-8 mt-8">
              {teacher.reviews.map((item) => (
                <li>
                  <p>{item.reviewer_name}</p>
                  <p>&#9733; {item.reviewer_rating}</p>
                  <p className="text-customColor font-medium mt-4">
                    {item.comment}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <ul className="flex gap-2">
          {teacher.levels.map((level, index) => (
            <li
              key={index}
              className="p-[8px] px-[12px] border-[1px] border-[#121417] rounded-[35px] font-medium text-[14px] text-customColor mt-8 hover:bg-[#F4C550] hover:border-transparent focus:bg-[#F4C550] focus:border-transparent"
            >
              {level}
            </li>
          ))}
        </ul>

        {readMore && (
          <button
            className="p-16-48 bg-custom-yellow rounded-xl text-customColor font-bold mt-8"
            type="button"
            onClick={() => {
              dispatch(showTrialLessonModal(teacher));
            }}
          >
            Book trial lesson
          </button>
        )}
      </div>
    </li>
  );
};
