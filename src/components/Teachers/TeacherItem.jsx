export const TeacherItem = (teacher) => {
  console.log(teacher);
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
    </li>
  );
};
