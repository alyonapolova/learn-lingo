import { useEffect, useState } from 'react';
import { TeachersList } from '../components/Teachers/TeachersList';
import { fetchTeachers } from '../api/fetchData.js';

export const TeachersPage = () => {
  const [teachers, setTeachers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return <TeachersList {...teachers} />;
};
