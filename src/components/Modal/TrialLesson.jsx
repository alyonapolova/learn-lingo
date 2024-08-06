import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeTrialLessonModal } from '../../redux/features/slice';
import { selectedTeacherSelector } from '../../redux/selectors/mainSelectors';

export const TrialLesson = () => {
  const dispatch = useDispatch();
  const selectedTeacher = useSelector(selectedTeacherSelector);
  const modalRef = useRef();

  const [reason, setReason] = useState('careerAndBusiness');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    setReason(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      reason,
      teacher: selectedTeacher,
    };
    console.log('Form Submitted:', data);

    dispatch(closeTrialLessonModal());
  };

  const closeModalBack = (e) => {
    if (modalRef.current === e.target) {
      dispatch(closeTrialLessonModal());
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModalBack}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="relative w-[600px] flex flex-col p-16 bg-white rounded-30px">
        <button
          onClick={() => {
            dispatch(closeTrialLessonModal());
          }}
          className="absolute top-7 right-7"
        >
          X
        </button>
        <h1 className="text-40px font-medium text-customColor mb-20px">
          Book trial lesson
        </h1>
        <p className="text-base text-customColor-80 mb-[20px]">
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
        <div className="flex items-center gap-3.5 mb-[20px]">
          <img
            alt={selectedTeacher?.surname}
            src={selectedTeacher?.avatar_url}
            className="rounded-full w-[44px] h-[44px]"
          />
          <div>
            <p className="text-[12px] text-custom-gray">Your teacher</p>
            <p>
              {selectedTeacher?.name} {selectedTeacher?.surname}
            </p>
          </div>
        </div>

        <h2 className="text-24px font-medium leading-[1.33] mb-[20px]">
          What is your main reason for learning English?
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-[17px] mb-10">
            <div className="flex gap-2">
              <input
                type="radio"
                id="career"
                name="reason"
                value="careerAndBusiness"
                checked={reason === 'careerAndBusiness'}
                onChange={handleRadioChange}
              />
              <label htmlFor="career">Career and business</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="kids"
                name="reason"
                value="lessonForKids"
                checked={reason === 'lessonForKids'}
                onChange={handleRadioChange}
              />
              <label htmlFor="kids">Lesson for kids</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="abroad"
                name="reason"
                value="livingAbroad"
                checked={reason === 'livingAbroad'}
                onChange={handleRadioChange}
              />
              <label htmlFor="abroad">Living abroad</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="examsAndCoursework"
                name="reason"
                value="examsAndCoursework"
                checked={reason === 'examsAndCoursework'}
                onChange={handleRadioChange}
              />
              <label htmlFor="examsAndCoursework">Exams and coursework</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="culture"
                name="reason"
                value="cultureTravelHobby"
                checked={reason === 'cultureTravelHobby'}
                onChange={handleRadioChange}
              />
              <label htmlFor="culture">Culture, travel or hobby</label>
            </div>
          </div>

          <div className="flex flex-col gap-[18px]">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-[472px] border-1 border-custom-dark-opacity p-input rounded-xl"
              placeholder="Full Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-[472px] border-1 border-custom-dark-opacity p-input rounded-xl"
              placeholder="Email"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-[472px] border-1 border-custom-dark-opacity p-input rounded-xl"
              placeholder="Phone number"
            />
          </div>
          <button
            className="p-bookBtn rounded-12px bg-custom-yellow text-customColor font-bold text-[18px] mt-10"
            type="submit"
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
};
