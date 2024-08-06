import { useEffect, useState } from 'react';
import { TeachersList } from '../components/Teachers/TeachersList';
import { fetchTeachers } from '../api/fetchData.js';
import { TrialLesson } from '../components/Modal/TrialLesson.jsx';
import { useSelector } from 'react-redux';
import { isShowTrialLessonModalSelector } from '../redux/selectors/mainSelectors.js';

export const TeachersPage = () => {
  const [teachers, setTeachers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const showModal = useSelector(isShowTrialLessonModalSelector);

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        const data = await fetchTeachers();
        setTeachers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadTeachers();
  }, []);

  return (
    <>
      <TeachersList {...teachers} />
      {showModal && <TrialLesson />}
    </>
  );
};
