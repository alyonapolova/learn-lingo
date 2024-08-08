import { TeacherItem } from './TeacherItem';

export const TeachersList = (teachers) => {
  return (
    <ul className="flex flex-col gap-8">
      {Object.keys(teachers).length !== 0 ? (
        Object.values(teachers).map((teacher, index) => (
          <TeacherItem key={index} {...teacher} />
        ))
      ) : (
        <div>No teachers found.</div>
      )}
    </ul>
  );
};
