import { useDispatch } from 'react-redux';
import { showTrialLessonModal } from '../../redux/features/slice';

export const TeacherItem = (teacher) => {
  const dispatch = useDispatch();
  return (
    <li>
      <img
        src={teacher.avatar_url}
        alt={teacher.surname}
        className="rounded-full w-[96px] h-[96px]"
      />
      <h2>
        {teacher.name} {teacher.surname}
      </h2>
      <p>languages </p>
      <p>Lessons done: {teacher.lessons_done}</p>
      <p>speaks</p>
      <p>Lessons info:{teacher.lesson_info}</p>
      <p>conditions</p>
      <button
        className="p-16-48 bg-custom-yellow rounded-xl mt-[32px] text-customColor font-bold"
        type="button"
        onClick={() => {
          dispatch(showTrialLessonModal(teacher));
        }}
      >
        Book trial lesson
      </button>
    </li>
  );
};
