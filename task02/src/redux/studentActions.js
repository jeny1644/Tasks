export const ADD_STUDENT = "ADD_STUDENT";
export const ADD_STUDENT_SUCCESS = "ADD_STUDENT_SUCCESS";
export const ADD_STUDENT_FAILURE = "ADD_STUDENT_FAILURE";
export const UPDATE_STUDENT = "UPDATE_STUDENT";
export const UPDATE_STUDENT_SUCCESS = "UPDATE_STUDENT_SUCCESS";
export const UPDATE_STUDENT_FAILURE = "UPDATE_STUDENT_FAILURE";

// Action creators for adding a student
export const createStudent = () => ({
  type: ADD_STUDENT,
});

export const createStudentPass = (student) => ({
  type: ADD_STUDENT_SUCCESS,
  payload: student,
});

export const createStudentFail = (error) => ({
  type: ADD_STUDENT_FAILURE,
  payload: error,
});

// Action creators for updating a student
export const updateStudent = () => ({
  type: UPDATE_STUDENT,
});

export const updateStudentPass = (student) => ({
  type: UPDATE_STUDENT_SUCCESS,
  payload: student,
});

export const updateStudentFail = (error) => ({
  type: UPDATE_STUDENT_FAILURE,
  payload: error,
});
